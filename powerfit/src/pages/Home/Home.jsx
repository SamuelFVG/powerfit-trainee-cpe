import { Tabela, TopoTabela, TituloTabela, DivGeral, Inputs } from "./Styles";

import {
  BotaoGenerico,
  LinhaDaTabelaGenerica,
  Carrossel,
  DropDownGenerico,
  HeaderLogado,
} from "../../components";
import { useEffect, useState } from "react";
import api from "../../services/api";
//vetor de objetos que vai ser puxado do back
const pessoas = [
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
//atividades para o dropdown
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

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(false);
  console.log(usuarios);
  const getUsuarios = async () => {
    try {
      setCarregando(true);
      const res = await api.get("http://localhost:8000/usuarios");
      setUsuarios(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  //if (carregando) console.log("Carregando");

  return (
    <>
      <HeaderLogado rota={"/home"} />

      <DivGeral>
        <Carrossel />
        <Inputs>
          <DropDownGenerico
            default="Selecione a atividade"
            options={atividades}
          />
          <BotaoGenerico texto="Entrar" rota={"?"} />
        </Inputs>

        <Tabela>
          <TopoTabela>
            <TituloTabela>Perfil</TituloTabela>
            <TituloTabela>Atividade</TituloTabela>
            <TituloTabela>Tempo</TituloTabela>
          </TopoTabela>
          {/*Esse bloco printa cada uma das linhas por meio do map */}
          {pessoas.map((pessoa) => (
            <LinhaDaTabelaGenerica dados={pessoa} key={pessoa.nome} />
          ))}
        </Tabela>
      </DivGeral>
    </>
  );
}
