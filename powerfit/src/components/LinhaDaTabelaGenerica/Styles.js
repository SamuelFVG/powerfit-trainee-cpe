import styled from "styled-components";

export const LinhaDaTabelaG = styled.div`
  /* border: solid 1px green ; */
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Perfil = styled.div`
  width: 33%;
  gap: 3%;

  display: flex;
  justify-content: center;
`;

export const InformacoesPerfil = styled.div`
  //flex-grow: 1;
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
`;

export const DivGenericoPerfil = styled(DivGenerico)`
  height: 50%;
  width: 100px;
  text-align: center;
`;

export const DivGenericoPerfilMenor = styled(DivGenericoPerfil)`
  font-size: 0.8rem;
`;

export const Doodle = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
`;
