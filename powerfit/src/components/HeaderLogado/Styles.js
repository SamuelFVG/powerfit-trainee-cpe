import styled from "styled-components";

export const HeaderLogadoG = styled.div`
  background-color: #04040b;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 7rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    padding: 1rem;
  }
`;

export const LogoWrapperHeaderLogado = styled.div`
  margin-left: 3rem;
  display: flex;

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
`;

export const BotoesHeaderLogado = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-right: 3rem;

  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
    margin-right: 1rem;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 300px) {
    flex-direction: column;
  }
`;

export const HeaderLogadoImagem = styled.img`
  height: 7rem;
  width: 7rem;
`;

export const LinkWrapperHeaderLogado = styled.div`
  height: 7rem;
  width: 7rem;
  display: flex;
  align-items: center;

  @media (max-width: 400px) {
    width: 4rem;
  }
`;
