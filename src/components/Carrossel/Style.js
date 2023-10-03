import styled from "styled-components";

export const ImagemCarrossel = styled.img`
  width: 100%; //a imagem será tão grande quanto o carrossel. Sua altura muda automaticamente
  border-radius: 10px;
`;

export const SwiperContainer = styled.div`
  width: 60%;

  @media (max-width: 500px) {
    width: 90%;
  }
`;
