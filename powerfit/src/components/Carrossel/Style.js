import styled from "styled-components";

export const ImagemCarrossel = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const SwiperContainer = styled.div`
  width: 60%;

  @media (max-width: 500px) {
    width: 90%;
  }
`;
