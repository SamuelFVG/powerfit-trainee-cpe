import {
  Tabela,
  TopoTabela,
  DivTituloTabelaHome,
  DivGeralHome,
  DivInputsHome,
} from "./Styles";

import {
  BotaoGenerico,
  InputGenerico,
  LinhaDaTabelaGenerica,
  Carrossel,
  DropDownGenerico,
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

const atividades = [
  "Cardio",
  "Musculação",
  "Acompanhamento de clientes (manhã)",
  "Recepção de clientes (manhã)",
  "Pagamento de impostos (manhã)",
  "Acompanhamento de clientes (tarde)",
  "Recepção de clientes (tarde)",
  "Pagamento de impostos (tarde)",
  "Acompanhamento de clientes (noite)",
  "Recepção de clientes (noite)",
  "Pagamento de impostos (noite)",
];

function printaTabela() {
  return (
    <Tabela>
      <TopoTabela>
        <DivTituloTabelaHome>Perfil</DivTituloTabelaHome>
        <DivTituloTabelaHome>Atividade</DivTituloTabelaHome>
        <DivTituloTabelaHome>Tempo</DivTituloTabelaHome>
      </TopoTabela>

      {pessoas.map((pessoa) => (
        <LinhaDaTabelaGenerica dados={pessoa} key={pessoa.nome} />
      ))}
    </Tabela>
  );
}

export default function Home() {
  return (
    <DivGeralHome>
      <Carrossel />
      <DivInputsHome>
        <DropDownGenerico
          default="Selecione a atividade"
          options={atividades}
        />
        <BotaoGenerico texto="Aperte Aqui" />
      </DivInputsHome>

      {printaTabela()}
    </DivGeralHome>
  );
}
