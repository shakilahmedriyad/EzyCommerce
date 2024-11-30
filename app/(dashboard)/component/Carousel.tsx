"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Image
        src={"/shoe1.jpg"}
        alt="shoe 1"
        width={1920}
        height={1080}
        className="w-full max-h-[35rem] rounded-lg object-cover"
      />
      <Image
        src={"/shoe2.jpg"}
        alt="shoe 1"
        width={1920}
        height={1080}
        className="w-full max-h-[35rem] object-cover rounded-lg"
      />
    </Slider>
  );
}
