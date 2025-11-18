"use client";

import { useEffect } from "react";
import { YOUTUBE_VIDEOS } from "@/lib/constants";

function YoutubeVideos() {
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
    return `https://www.youtube.com/embed/${videoId}?start=${startTime}&rel=0&modestbranding=1&autoplay=0&controls=1&showinfo=0`;
  };

  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#ede6e0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {YOUTUBE_VIDEOS.map((video, index) => {
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
