import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ImagemCarrossel, SwiperContainer } from "./Style";

import Slide_1 from "../../assets/Slide_1.svg";
import Slide_2 from "../../assets/Slide_2.svg";
import Slide_3 from "../../assets/Slide_3.svg";
const slides = [Slide_1, Slide_2, Slide_3];

export default function Carrossel() {
  return (
    <SwiperContainer>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        //faz rodar infinito
        loop
        autoplay={{ delay: 5000 }}
        //decidi criar os estilos aqui mexendo nas custom properties ao invés de criar um css pro carrossel
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
        {/* Defina cada imagem como swiperslide e coloque seu index como chave (sem a chave, dá erro) */}
        {slides.map((slide) => (
          <SwiperSlide key={slides.indexOf(slide)}>
            <ImagemCarrossel src={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
}
