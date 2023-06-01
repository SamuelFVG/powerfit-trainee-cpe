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

let usuariosLogados = [];

export default function Home() {
  const [sessoes, setSessoes] = useState([]);
  const [carregando, setCarregando] = useState(false);

  let usuarios = sessoes.map(function (usuario) {
    console.log(usuario);
    let randomColor = `rgb(${Math.floor(Math.random() * 256) + 70}, 
      ${Math.floor(Math.random() * 256) + 70}, 
      ${Math.floor(Math.random() * 256) + 70})`;

    const data = new Date();
    const dataCriacao = new Date(usuario.createdAt);

    let milliseconds = data - dataCriacao;
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    let hours = Math.floor(milliseconds / (1000 * 60 * 60));

    let resultadoTempo =
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");

    return {
      nome: usuario.id_usuario.nome,
      email: usuario.id_usuario.email,
      cargo: usuario.id_usuario.cargo,
      cor_doodle: usuario.id_usuario.cor_doodle,
      atividade: usuario.id_usuario.atividade,
      horas: resultadoTempo,
    };
  });

  const getSessoes = async () => {
    try {
      setCarregando(true);
      const res = await api.get("http://localhost:8000/sessoes");
      setSessoes(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setCarregando(false);
    }
  };

  // useEffect(() => {
  //   getSessoes();
  // }, []);
  useEffect(() => {
    getSessoes();
    console.log("GET");
    const interval = setInterval(() => {
      getSessoes();
      console.log("GET");
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (carregando) console.log("Carregando");

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
          {usuarios.map((usuario) => (
            <LinhaDaTabelaGenerica dados={usuario} key={usuario.nome} />
          ))}
        </Tabela>
      </DivGeral>
    </>
  );
}

// const horas = Math.floor((data - dataCriacao) / (1000 * 60 * 60));
// const resto = (data - dataCriacao) % (1000 * 60 * 60);
// const minutos = Math.floor(resto / (1000 * 60));
// //Math.floor((data - dataCriacao) / (1000 * 60)) - horas * 60;
// const segundos = Math.floor((minutos % (1000 * 60)) / 1000);
// //const resultadoTempo = horas + ":" + minutos + ":" + segundos;

// const pessoas = [
//   {
//     nome: "João Maciel",
//     cargo: "Atendente",
//     cor_doodle: "#70A1D7",
//     atividade: "Atendendo clientes",
//     horas: "12:07",
//   },
//   {
//     nome: "Rafael Pereira",
//     cargo: "Cliente",
//     cor_doodle: "#A1DE93",
//     atividade: "Cardio",
//     horas: "11:10",
//   },
//   {
//     nome: "Mariana Julia",
//     cargo: "Contadora",
//     cor_doodle: "#F7F48B",
//     atividade: "Impostos",
//     horas: "23:59",
//   },
//   {
//     nome: "Juliana Avarenga",
//     cargo: "Cliente",
//     cor_doodle: "#E0BBE4",
//     atividade: "Musculação",
//     horas: "12:07",
//   },
// ];
