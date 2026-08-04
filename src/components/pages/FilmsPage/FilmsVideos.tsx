import { Film } from "@/lib/sanity/queries";

interface FilmsVideosProps {
  films: Film[];
}

/**
 * Convert Dropbox share links into direct streamable URLs.
 * - dl=0 / dl=1 → raw=1
 * - dropbox.com → dl.dropboxusercontent.com when needed
 */
function toDirectVideoUrl(url: string): string {
  if (!url) return url;

  try {
    const parsed = new URL(url);

    if (
      parsed.hostname.includes("dropbox.com") ||
      parsed.hostname.includes("dropboxusercontent.com")
    ) {
      // Prefer raw=1 for inline video playback in <video>
      parsed.searchParams.delete("dl");
      parsed.searchParams.set("raw", "1");

      // Some share links work more reliably on the content host
      if (parsed.hostname === "www.dropbox.com") {
        parsed.hostname = "dl.dropboxusercontent.com";
      }

      return parsed.toString();
    }
  } catch {
    // If URL parsing fails, return as-is
  }

  return url;
}

function FilmsVideos({ films }: FilmsVideosProps) {
  const videos = films
    .map((film) => {
      if (!film.videoUrl) return null;

      return {
        id: film._id,
        videoUrl: toDirectVideoUrl(film.videoUrl),
        title: film.title,
      };
    })
    .filter((video) => video !== null) as Array<{
    id: string;
    videoUrl: string;
    title: string;
  }>;

  if (videos.length === 0) {
    return (
      <section
        className="w-full py-12 sm:py-16 md:py-20 lg:py-24"
        style={{ backgroundColor: "#ede6e0" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-gray-600"
            style={{ fontFamily: "var(--font-family-body)" }}
          >
            No videos available.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#ede6e0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {videos.map((video, index) => {
          const isEven = index % 2 === 0;
          const isVideoLeft = isEven;

          return (
            <div
              key={video.id}
              className={`flex flex-col ${
                isVideoLeft ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 xl:gap-20 items-center mb-16 sm:mb-20 md:mb-24 last:mb-0`}
            >
              {/* Video Player */}
              <div className="w-full lg:w-[55%] xl:w-[60%] aspect-video">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-full"
                  style={{ border: "none" }}
                  title={video.title}
                >
                  <source src={video.videoUrl} type="video/mp4" />
                </video>
              </div>

              {/* Couple Name */}
              <div
                className={`w-full lg:w-[45%] xl:w-[40%] flex flex-col items-center ${
                  isVideoLeft ? "lg:items-start" : "lg:items-end"
                }`}
              >
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-center mb-4 ${
                    isVideoLeft ? "lg:text-left" : "lg:text-right"
                  }`}
                  style={{
                    fontFamily: "var(--font-family-display)",
                    color: "#2E2E2E",
                  }}
                >
                  {video.title}
                </h2>
                {/* Horizontal Bar */}
                <div
                  className="w-24 h-[1px]"
                  style={{ backgroundColor: "#2E2E2E" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FilmsVideos;
