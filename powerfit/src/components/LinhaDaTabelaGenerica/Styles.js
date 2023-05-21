import styled from "styled-components";

export const PerfilDoodle = styled.img`
  height: inherit;
  width: inherit;
`;

export const LinhaDaTabelaG = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    height: 35px;
  }
`;

export const Perfil = styled.div`
  width: 33%;
  gap: 3%;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    gap: 0;
  }
`;

export const InformacoesPerfil = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivGenerico = styled.div`
  flex-grow: inherit;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivGenericoTabela = styled(DivGenerico)`
  width: 33%;
  text-align: center;
`;

export const DivGenericoPerfil = styled(DivGenerico)`
  height: 50%;
  width: 100px;
  text-align: center;
  @media (max-width: 500px) {
    width: 50px;
  }
`;

export const DivGenericoPerfilMenor = styled(DivGenericoPerfil)`
  font-size: 0.8rem;
  margin-top: 0.3rem;
`;

export const Doodle = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 100%;
  border: 3px solid black;
  height: 100%;
  aspect-ratio: 1 / 1;

  @media (max-width: 350px) {
    height: 25px;
    margin-left: -2%;
  }
`;
