import { LinhaDaTabelaG } from "./Styles";
import { Perfil } from "./Styles";
import { Doodle } from "./Styles";
import { InformacoesPerfil } from "./Styles";
import { DivGenerico } from "./Styles";

export default function LinhaDaTabelaGenerica({ dados }) {
  return (
    <>
      <LinhaDaTabelaG>
        <Perfil>
          <Doodle />
          <InformacoesPerfil>
            <DivGenerico> {dados.nome} </DivGenerico>
            <DivGenerico> {dados.cargo} </DivGenerico>
          </InformacoesPerfil>
        </Perfil>

        
        <DivGenerico>{dados.atividade}</DivGenerico>
        
        <DivGenerico>{dados.horas}</DivGenerico> 
      </LinhaDaTabelaG>
    </>
  );
}

// nome: 'Nome genérico',
// cargo: 'Cargo genérico',
// cor_doodle: '#aaa',
// atividade: 'Atividade Genérica',
// horas: 1234
