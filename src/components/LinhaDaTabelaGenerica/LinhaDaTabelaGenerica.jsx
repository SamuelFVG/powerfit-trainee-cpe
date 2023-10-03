import {
  LinhaDaTabelaG,
  Perfil,
  InformacoesPerfil,
  DoodleContainer,
  ItemDaTabela,
  Nome,
  Cargo,
  Doodle,
} from "./Styles";
import Perfil_doodle from "../../assets/Perfil_doodle.svg";

export default function LinhaDaTabelaGenerica({ dados }) {
  return (
    <LinhaDaTabelaG>
      <Perfil>
        {/* Container do doodle do perfil. Color = bg*/}
        <DoodleContainer color={dados.cor_doodle}>
          {/* Imagem do doodle do perfil */}
          <Doodle src={Perfil_doodle} />
        </DoodleContainer>
        <InformacoesPerfil>
          <Nome> {dados.nome} </Nome>
          <Cargo> {dados.cargo} </Cargo>
        </InformacoesPerfil>
      </Perfil>

      <ItemDaTabela>{dados.atividade}</ItemDaTabela>

      <ItemDaTabela>{dados.horas}</ItemDaTabela>
    </LinhaDaTabelaG>
  );
}

// nome: 'Nome genérico',
// cargo: 'Cargo genérico',
// cor_doodle: '#aaa',
// atividade: 'Atividade Genérica',
// horas: 1234
