import styled from "styled-components";

//div padrão usado em várias coisas na tabela. É só um div centralizado por meio de flex
export const DivGenerico = styled.div`
  flex-grow: inherit;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinhaDaTabelaG = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  //centraliza-se os componentes e, dentro de cada um deles, define-se que a largura é de 30%.
  //Assim, eles ficam espaçados igualmente, independente da quantidade de conteúdo dentro de cada um

  //ao mudar o tamanho da linha, muda-se o tamanho do doodle (ver mais abaixo)
  @media (max-width: 700px) {
    height: 35px;
  }
  @media (max-width: 290px) {
    height: 30px;
  }
`;

export const Perfil = styled.div`
  width: 33%; //width de 33% que vai ser usado em todos os itens
  gap: 3%;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    //a separação entre o doodle e o texto some se a distância for muito pequena
    gap: 0;
  }
`;

export const DoodleContainer = styled.div`
  //define a cor de fundo por meio da cor do objeto
  background-color: ${(props) => props.color};
  border-radius: 100%;
  border: 3px solid black;
  //esse código faz com que o tamanho do container do doodle seja proporcional à altura da linha
  height: 100%;
  aspect-ratio: 1 / 1;
`;

export const Doodle = styled.img`
  height: inherit;
  width: inherit;
`;

//container com informações do perfil
export const InformacoesPerfil = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemDaTabela = styled(DivGenerico)`
  width: 33%;
  text-align: center;
`;

export const Nome = styled(DivGenerico)`
  height: 50%;
  width: 100px;
  text-align: center;
  line-height: 99%;
  @media (max-width: 500px) {
    width: 50px;
  }
`;

export const Cargo = styled(Nome)`
  font-size: 0.8rem;
  margin-top: 0.3rem;
`;
