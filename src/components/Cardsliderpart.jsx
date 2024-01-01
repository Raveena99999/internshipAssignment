import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import React from "react";
import { Flex } from "@chakra-ui/react";
import Cardslider from "./Cardslider";
const Cardsliderpart = () => {
  return (
    <Flex width="85%" m="auto" mt="3rem">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Cardslider />
        </SwiperSlide>
        <SwiperSlide>
          <Cardslider />
        </SwiperSlide>
        <SwiperSlide>
          <Cardslider />
        </SwiperSlide>
        <SwiperSlide>
          <Cardslider />
        </SwiperSlide>
        <SwiperSlide>
          <Cardslider />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};
export default Cardsliderpart;
