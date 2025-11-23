"use client";

import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Masonry from "react-masonry-css";
import { Story } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity.image";
import { Download } from "lucide-react";

interface StoryGalleryProps {
  story: Story;
}

function StoryGallery({ story }: StoryGalleryProps) {
  // Format couple name for display
  const formatCoupleName = (coupleName: string): string => {
    let formatted = coupleName.replace(/and([A-Z])/g, " & $1");
    formatted = formatted
      .replace(/&/g, " & ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/\(wedding\)/gi, "")
      .trim();
    return formatted;
  };

  const displayName = formatCoupleName(story.coupleName);
  const galleryImages = story.gallery || [];

  return (
    <div
      className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24"
      style={{ backgroundColor: "#ede6e0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Couple Name Heading */}
        <div className="flex flex-col items-center pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
          <h1
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal"
            style={{
              fontFamily: "var(--font-family-heading)",
              color: "#2E2E2E",
            }}
          >
            {displayName}
          </h1>

          {/* Horizontal Bar - Only as wide as the heading */}
          <div
            className="h-px mt-6 sm:mt-8"
            style={{
              backgroundColor: "#2E2E2E",
              opacity: 0.2,
              width: "60%",
              maxWidth: "400px",
            }}
          />
        </div>

        {/* Gallery Images - Masonry Layout */}
        {galleryImages.length > 0 && (
          <PhotoProvider
            toolbarRender={({ images, index }) => {
              const currentImageSrc = images[index]?.src || "";

              const handleDownload = async (e: React.MouseEvent) => {
                e.stopPropagation();
                if (currentImageSrc) {
                  try {
                    // Fetch the image as a blob
                    const response = await fetch(currentImageSrc);
                    const blob = await response.blob();

                    // Create object URL from blob
                    const blobUrl = window.URL.createObjectURL(blob);

                    // Create download link
                    const link = document.createElement("a");
                    link.href = blobUrl;
                    link.download = `${displayName}-image-${index + 1}-${Date.now()}.jpg`;
                    document.body.appendChild(link);
                    link.click();

                    // Cleanup
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(blobUrl);
                  } catch (error) {
                    console.error("Download failed:", error);
                    // Fallback: open in new tab
                    window.open(currentImageSrc, "_blank");
                  }
                }
              };

              return (
                <div className="absolute top-1 right-10 z-50">
                  {/* Download Button - positioned next to default close button */}
                  <button
                    onClick={handleDownload}
                    className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-colors duration-200 flex items-center justify-center"
                    aria-label="Download image"
                  >
                    <Download size={20} />
                  </button>
                </div>
              );
            }}
          >
            <Masonry
              breakpointCols={{
                default: 3,
                1400: 3,
                1024: 3,
                768: 2,
                640: 2,
              }}
              className="flex -ml-2 sm:-ml-2.5 md:-ml-3 w-auto"
              columnClassName="pl-2 sm:pl-2.5 md:pl-3 bg-clip-padding"
              style={{ width: "100%" }}
            >
              {galleryImages.map((image, index) => {
                // Gallery thumbnails: optimized for masonry layout - larger size
                const imageUrl = urlFor(image).width(1000).quality(85).url();
                // Full-size modal: high quality when opened
                const fullSizeUrl = urlFor(image).width(2400).quality(90).url();

                return (
                  <PhotoView key={index} src={fullSizeUrl}>
                    <div className="relative w-full cursor-pointer group overflow-hidden mb-2 sm:mb-2.5 md:mb-3 break-inside-avoid">
                      <Image
                        src={imageUrl}
                        alt={`${displayName} - Image ${index + 1}`}
                        width={1000}
                        height={1500}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                        quality={85}
                        style={{
                          height: "auto",
                          width: "100%",
                          display: "block",
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none rounded-sm" />
                    </div>
                  </PhotoView>
                );
              })}
            </Masonry>
          </PhotoProvider>
        )}

        {galleryImages.length === 0 && (
          <p
            className="text-center text-gray-600"
            style={{ fontFamily: "var(--font-family-body)" }}
          >
            No gallery images available.
          </p>
        )}
      </div>
    </div>
  );
}

export default StoryGallery;
