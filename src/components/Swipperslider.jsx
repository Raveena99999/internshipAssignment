import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import running from "../assets/running.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Raveena from "./Raveena";
export default function Swipperslider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        direction={"horizontal"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Raveena />
        </SwiperSlide>
        <SwiperSlide>
          <Raveena />
        </SwiperSlide>
        <SwiperSlide>
          <Raveena />
        </SwiperSlide>
        <SwiperSlide>
          <Raveena />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
