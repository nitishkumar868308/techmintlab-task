// import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Services from "./Services";

const slides = [
  {
    title: "Welcome to",
    highlight: "TechMintLab",
    desc: "We help you build amazing digital products with our expert team.",
    btn1: "Get Started",
    btn2: "Contact Us",
  },
  {
    title: "Grow with",
    highlight: "Innovation",
    desc: "Empowering your business with modern technology solutions.",
    btn1: "Our Services",
    btn2: "Learn More",
  },
  {
    title: "Your Success,",
    highlight: "Our Mission",
    desc: "Partner with us to achieve excellence in the digital era.",
    btn1: "Join Now",
    btn2: "Read More",
  },
];

export default function HeroBanner() {
  //   const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Side - Swiper Text */}
          <div
            className="relative h-full bg-no-repeat bg-left bg-contain flex items-center"
            style={{
              backgroundImage:
                "url('https://techmintlab.com/assets/images/baner-dec-left.png')",
            }}
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full p-6"
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="max-w-md space-y-4 ml-10">
                    <h4 className="text-lg font-semibold text-gray-700">
                      {slide.title}
                    </h4>
                    <h1 className="text-5xl font-bold">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                        {slide.highlight}
                      </span>
                    </h1>
                    <p className="text-lg text-gray-600">{slide.desc}</p>
                    <div className="flex gap-4 mt-4">
                      <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
                        {slide.btn1}
                      </button>
                      <button className="border border-purple-600 text-purple-600 px-5 py-2 rounded-full hover:bg-purple-600 hover:text-white transition">
                        {slide.btn2}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Slide number indicator */}
            {/* <div className="absolute bottom-1 left-1/6 -translate-x-1/2 text-black text-xl font-semibold drop-shadow-lg">
            {activeIndex + 1} / {slides.length}
          </div> */}
          </div>

          {/* Right Side - Static Image */}
          <div className="flex justify-center items-center p-6">
            <img
              src="https://techmintlab.com/assets/images/banner-right-image.png"
              alt="Banner"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      <Services />
    </>
  );
}
