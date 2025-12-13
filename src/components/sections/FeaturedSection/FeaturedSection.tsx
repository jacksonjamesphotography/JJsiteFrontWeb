import Image from "next/image";

function FeaturedSection() {
  const magazineLogos = [
    "/images/FeaturedImages/mag1.png",
    "/images/FeaturedImages/mag2.png",
    "/images/FeaturedImages/mag3.png",
    "/images/FeaturedImages/mag4.png",
    "/images/FeaturedImages/mag5.png",
    "/images/FeaturedImages/mag6.png",
  ];

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#ede6e0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20 lg:gap-24 xl:gap-28">
          {magazineLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo}
                alt={`Magazine ${index + 1}`}
                width={85}
                height={65}
                quality={85}
                loading="lazy"
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
