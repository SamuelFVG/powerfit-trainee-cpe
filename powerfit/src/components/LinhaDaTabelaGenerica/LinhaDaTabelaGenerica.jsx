import {
  LinhaDaTabelaG,
  Perfil,
  InformacoesPerfil,
  Doodle,
  DivGenericoTabela,
  DivGenericoPerfil,
  DivGenericoPerfilMenor,
} from "./Styles";

export default function LinhaDaTabelaGenerica({ dados }) {
  return (
    <>
      <LinhaDaTabelaG>
        <Perfil>
          <Doodle color={dados.cor_doodle}></Doodle>
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
