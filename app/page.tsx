"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "/images/lam.jpg",
    "/images/lam2.jpg",
    "/images/lam4.jpg",
    "/images/lam5.jpg",
  ];
  return (
    <div className="text-center mt-5">
      <h1 className="text-[50px]">LÂM EM </h1>
      <div className="flex justify-center mt-5">
        <div className="w-[500px]">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1} // Hiển thị 1 slide tại 1 thời điểm
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            className="w-[100%]"
          >
            {images.map((images, i) => (
              <SwiperSlide key={i}>
                <Image width={500} height={3000} src={images} alt={`Slide 1`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
