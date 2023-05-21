import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import falcao from "../../assets/falcao.jpg";
import raposa from "../../assets/raposa.jpg";
import tartaruga from "../../assets/tartaruga.jpg";
import tigre from "../../assets/tigre.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ImagemCarrossel, SwiperContainer } from "./Style";

const slides = [raposa, tartaruga];

function montaSlides() {
  let saidaSlides = [];
  for (let i = 0; i < slides.length; i++) {
    saidaSlides.push(
      <SwiperSlide key={i}>
        <ImagemCarrossel src={slides[i]} />
      </SwiperSlide>
    );
  }
  return saidaSlides;
}

export default function Carrossel() {
  return (
    <SwiperContainer>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        style={{
          "--swiper-navigation-color": "#F2F1FB",
          "--swiper-navigation-size": "2rem",

          "--swiper-pagination-color": "#DF5031",
          "--swiper-pagination-bullet-inactive-color": "#F2F1FB",
          "--swiper-pagination-bullet-inactive-opacity": 1,
          "--swiper-pagination-bullet-opacity": 1,
          "--swiper-pagination-bullet-horizontal-gap": "1rem",
          "--swiper-pagination-bullet-width": "0.7rem",
          "--swiper-pagination-bullet-height": "0.7rem",
        }}
      >
        {montaSlides()}
      </Swiper>
    </SwiperContainer>
  );
}
