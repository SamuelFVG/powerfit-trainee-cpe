import { Titulo, Tabela, TopoTabela, DivGenericoTitulo } from "./Styles";

import {
  BotaoGenerico,
  InputGenerico,
  LinkGenerico,
  Header,
  LinhaDaTabelaGenerica,
} from "../../components";

let pessoas = [
  {
    nome: "João Maciel",
    cargo: "Atendente",
    cor_doodle: "#70A1D7",
    atividade: "Atendendo clientes",
    horas: "12:07",
  },
  {
    nome: "Rafael Pereira",
    cargo: "Cliente",
    cor_doodle: "#A1DE93",
    atividade: "Cardio",
    horas: "11:10",
  },
  {
    nome: "Mariana Julia",
    cargo: "Contadora",
    cor_doodle: "#F7F48B",
    atividade: "Impostos",
    horas: "23:59",
  },
  {
    nome: "Juliana Avarenga",
    cargo: "Cliente",
    cor_doodle: "#E0BBE4",
    atividade: "Musculação",
    horas: "12:07",
  },
];

export default function Home() {
  return (
    <div>
      <Tabela>
        <TopoTabela>
          <DivGenericoTitulo>Perfil</DivGenericoTitulo>
          <DivGenericoTitulo>Atividade</DivGenericoTitulo>
          <DivGenericoTitulo>Tempo</DivGenericoTitulo>
        </TopoTabela>

        <LinhaDaTabelaGenerica dados={pessoas[0]} />
        <LinhaDaTabelaGenerica dados={pessoas[1]} />
        <LinhaDaTabelaGenerica dados={pessoas[2]} />
        <LinhaDaTabelaGenerica dados={pessoas[3]} />
      </Tabela>
      <BotaoGenerico texto="Aperte Aqui" />
    </div>
  );
}

{
  /* <Header/>
<Titulo>Home</Titulo>
<BotaoGenerico/>
<LinkGenerico/> 
<InputGenerico/> */
}
