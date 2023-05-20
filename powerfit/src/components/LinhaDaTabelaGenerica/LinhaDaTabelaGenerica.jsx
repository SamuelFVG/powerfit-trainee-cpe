import {
  LinhaDaTabelaG,
  Perfil,
  InformacoesPerfil,
  Doodle,
  DivGenericoTabela,
  DivGenericoPerfil,
  DivGenericoPerfilMenor,
  PerfilDoodle,
} from "./Styles";
import Perfil_doodle from "../../assets/Perfil_doodle.svg";

export default function LinhaDaTabelaGenerica({ dados }) {
  return (
    <>
      <LinhaDaTabelaG>
        <Perfil>
          <Doodle color={dados.cor_doodle}>
            <PerfilDoodle
              src={Perfil_doodle}
              width={1000}
              height={outerHeight}
            />
          </Doodle>
          <InformacoesPerfil>
            <DivGenericoPerfil> {dados.nome} </DivGenericoPerfil>
            <DivGenericoPerfilMenor> {dados.cargo} </DivGenericoPerfilMenor>
          </InformacoesPerfil>
        </Perfil>

        <DivGenericoTabela>{dados.atividade}</DivGenericoTabela>

        <DivGenericoTabela>{dados.horas}</DivGenericoTabela>
      </LinhaDaTabelaG>
    </>
  );
}

// nome: 'Nome genérico',
// cargo: 'Cargo genérico',
// cor_doodle: '#aaa',
// atividade: 'Atividade Genérica',
// horas: 1234
