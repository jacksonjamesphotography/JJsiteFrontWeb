"use client";

import { useEffect } from "react";
import { Film } from "@/lib/sanity/queries";

interface YoutubeVideosProps {
  films: Film[];
}

// Helper function to extract YouTube video ID from URL
function extractYouTubeVideoId(url: string): string | null {
  if (!url) return null;

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

// Helper function to extract start time from YouTube URL (if present)
function extractStartTime(url: string): number {
  const match = url.match(/[?&]t=(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function YoutubeVideos({ films }: YoutubeVideosProps) {
  // Preconnect to YouTube domains for faster loading
  useEffect(() => {
    const preconnectLinks = [
      { rel: "preconnect", href: "https://www.youtube.com" },
      { rel: "preconnect", href: "https://www.google.com" },
      { rel: "dns-prefetch", href: "https://www.youtube.com" },
      { rel: "dns-prefetch", href: "https://www.google.com" },
    ];

    preconnectLinks.forEach((link) => {
      const existingLink = document.querySelector(
        `link[rel="${link.rel}"][href="${link.href}"]`
      );
      if (!existingLink) {
        const linkElement = document.createElement("link");
        linkElement.rel = link.rel;
        linkElement.href = link.href;
        document.head.appendChild(linkElement);
      }
    });
  }, []);

  const getEmbedUrl = (videoId: string, startTime: number) => {
    // vq=high suggests high quality (720p/1080p if available)
    // YouTube will still auto-adjust based on connection, but will prefer higher quality
    return `https://www.youtube.com/embed/${videoId}?start=${startTime}&rel=0&modestbranding=1&autoplay=0&controls=1&showinfo=0&vq=hd1080`;
  };

  // Flatten films into videos array (one video per film, using first video if multiple exist)
  const videos = films
    .map((film) => {
      if (!film.videos || film.videos.length === 0) return null;

      const videoUrl = film.videos[0].url;
      const videoId = extractYouTubeVideoId(videoUrl);

      if (!videoId) return null;

      return {
        id: film._id,
        videoId,
        startTime: extractStartTime(videoUrl),
        coupleName: film.coupleName,
      };
    })
    .filter((video) => video !== null) as Array<{
    id: string;
    videoId: string;
    startTime: number;
    coupleName: string;
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
                <iframe
                  src={getEmbedUrl(video.videoId, video.startTime)}
                  title={video.coupleName}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading={index < 2 ? "eager" : "lazy"}
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
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
                  {video.coupleName}
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

export default YoutubeVideos;
