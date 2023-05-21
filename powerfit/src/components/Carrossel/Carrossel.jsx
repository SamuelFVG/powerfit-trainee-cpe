import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import falcao from "../../assets/falcao.jpg";
import raposa from "../../assets/raposa.jpg";
import tartaruga from "../../assets/tartaruga.jpg";
import tigre from "../../assets/tigre.jpg";

import "./Style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [falcao, raposa, tartaruga, tigre];

function montaSlides() {
  let saidaSlides = [];
  for (let i = 0; i < slides.length; i++) {
    saidaSlides.push(
      <SwiperSlide key={i}>
        <img className="imagemCarrossel" src={slides[i]} />
      </SwiperSlide>
    );
  }
  return saidaSlides;
}

export default function Carrossel() {
  return (
    <div className="swiperContainer">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        style={{
          "--swiper-navigation-color": "#F2F1FB",
          "--swiper-pagination-color": "#DF5031",
        }}
      >
        {montaSlides()}
      </Swiper>
    </div>
  );
}
