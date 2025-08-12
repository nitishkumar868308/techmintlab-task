import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "PropertyFinder",
      subtitle: "VR Real Estate Platform",
      imageUrl: "https://techmintlab.com/assets/images/portfolio-03.jpg",
      hoverBgUrl: "https://techmintlab.com/assets/images/hover-bg.png",
      link: "#",
    },
    {
      id: 2,
      title: "PropertyFinder",
      subtitle: "VR Real Estate Platform",
      imageUrl: "https://techmintlab.com/assets/images/portfolio-04.jpg",
      hoverBgUrl: "https://techmintlab.com/assets/images/hover-bg.png",
      link: "#",
    },
    {
      id: 3,
      title: "PropertyFinder",
      subtitle: "VR Real Estate Platform",
      imageUrl: "https://techmintlab.com/assets/images/portfolio-02.jpg",
      hoverBgUrl: "https://techmintlab.com/assets/images/hover-bg.png",
      link: "#",
    },
    {
      id: 4,
      title: "PropertyFinder",
      subtitle: "VR Real Estate Platform",
      imageUrl: "https://techmintlab.com/assets/images/portfolio-01.jpg",
      hoverBgUrl: "https://techmintlab.com/assets/images/hover-bg.png",
      link: "#",
    },
  ];

  return (
    <main
      className="min-h-screen text-gray-700 px-6 md:px-12 lg:px-24 py-16 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://techmintlab.com/assets/images/portfolio-left-dec.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
        Portfolio
      </h1>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="max-w-7xl mx-auto"
      >
        {projects.map(({ id, title, subtitle, imageUrl, hoverBgUrl, link }) => (
          <SwiperSlide key={id}>
            <div
              className="relative group rounded-lg overflow-hidden cursor-pointer shadow-lg"
              style={{ minHeight: "300px" }}
            >
              {/* Default Image */}
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div
                className="absolute top-1/2 left-1/2 w-40 h-40 flex flex-col justify-center items-center text-center px-4
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2"
                style={{
                  backgroundImage: `url(${hoverBgUrl})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              >
                <a
                  href={link}
                  className="text-white text-xl font-semibold hover:underline mb-2"
                >
                  {title}
                </a>
                <span className="text-white text-sm">{subtitle}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
