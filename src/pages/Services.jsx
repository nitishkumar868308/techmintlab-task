import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description:
      "Smart solutions powered by TensorFlow, PyTorch for predictive analytics",
    icon: "https://techmintlab.com/assets/images/service-icon-03.png",
  },
  {
    id: 2,
    title: "Blockchain Development",
    description:
      "Secure decentralized applications using Ethereum, Hyperledger, and Solidity",
    icon: "https://techmintlab.com/assets/images/service-icon-04.png",
  },
  {
    id: 3,
    title: "IoT Solutions",
    description:
      "Connected device solutions with Raspberry Pi, Arduino, and custom firmware",
    icon: "https://techmintlab.com/assets/images/service-icon-01.png",
  },
  {
    id: 4,
    title: "Digital Transformation",
    description:
      "End-to-end modernization of your business processes and systems",
    icon: "https://techmintlab.com/assets/images/service-icon-02.png",
  },
  {
    id: 5,
    title: "Quality Assurance & Testing",
    description:
      "Comprehensive testing services to ensure bug-free, high-performance software",
    icon: "https://techmintlab.com/assets/images/service-icon-03.png",
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description:
      "24/7 technical support and regular updates for your digital products",
    icon: "https://techmintlab.com/assets/images/service-icon-04.png",
  },
  {
    id: 7,
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps built with Flutter, React Native, Swift",
    icon: "https://techmintlab.com/assets/images/service-icon-01.png",
  },
  {
    id: 8,
    title: "Responsive Web Development",
    description:
      "Modern websites with React, Angular, Vue.js that adapt seamlessly across all devices",
    icon: "https://techmintlab.com/assets/images/service-icon-02.png",
  },
  {
    id: 9,
    title: "Enterprise Software Solutions",
    description:
      "Custom desktop applications built with Electron, .NET, Java for your business needs",
    icon: "https://techmintlab.com/assets/images/service-icon-03.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-visible" // overflow-visible to show pagination outside
      style={{
        backgroundImage:
          "url('https://techmintlab.com/assets/images/services-left-dec.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left top",
        backgroundSize: "auto",
      }}
    >
      <div className="absolute right-0 top-0 hidden lg:block pointer-events-none select-none z-0">
        <img
          src="https://techmintlab.com/assets/images/services-right-dec.png"
          alt="Right Decoration"
          className="h-[600px] object-contain"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            We <em className="italic font-normal">Deliver</em> Premium IT
            Solutions With{" "}
            <span className="text-indigo-600">Cutting-edge Technology</span>
          </h2>
          <span className="text-indigo-600 uppercase tracking-widest font-semibold mt-4 inline-block">
            Our Expertise
          </span>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true} // Enable navigation arrows
          pagination={{ clickable: true }} // Enable dots below
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="relative z-20 pb-12" // padding bottom for dots space
        >
          {services.map(({ id, title, description, icon }) => (
            <SwiperSlide key={id}>
              <div className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-center text-center hover:shadow-indigo-400 transition-shadow duration-300 min-h-[320px] max-w-[350px] mx-auto">
                {/* max-w-[350px] to increase card width */}
                <div className="mb-6 w-24 h-24">
                  <img
                    src={icon}
                    alt={title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {title}
                </h4>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
