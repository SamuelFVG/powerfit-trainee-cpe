import styled from "styled-components";

export const ContentInicio = styled.div`
  margin-top: 10%;
  display: flex;
  margin-bottom: 14%;
  //align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const TituloInicio = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
`;

export const SubTituloInicio = styled.div`
  font-size: 2.8rem;
  font-weight: normal;
`;

export const TextoInicio = styled.div`
  padding-top: 4%;
  font-size: 2rem;
`;

export const CaixaTextoInicio = styled.div`
  width: 44%;
  margin-left: 11%;

  @media (max-width: 900px) {
    gap: inherit;
    margin-left: 0;
    width: 60%;
  }
  @media (max-width: 400px) {
    gap: inherit;
    margin-left: 0;
    width: 90%;
  }
`;

export const CaixaImagemInicio = styled.div`
  margin-left: 9%;
  margin-right: 11%;
`;

export const ImagemApresentacao = styled.img`
  width: 22rem;
  height: 27.65rem;
`;
