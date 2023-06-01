import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import React from "react";
import {
  DropDownGenerico,
  LogoGenerica,
  BotaoGenerico,
  HeaderLogado,
} from "../../components";
import {
  EditContainer,
  EditorContainer,
  DivLabel,
  Entrada,
  DivField,
  DivFakeBody,
  DivFieldBotão,
} from "./Styles";

export default function Editar() {
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
  const cargo = ["Cliente", "Personal Trainer", "Contador", "Atendente"];

  const [formulario, setForm] = React.useState({ nome: ""});
  const navigate = useNavigate();
  function entradaDeDados(event) {
    setForm({ ...formulario, [event.target.name]: event.target.value });
  } 
  function salvar(event) {
    event.preventDefault();
  }

  const dados = { 
    nome: formulario.nome,
    cargo: formulario.cargo,
    atividade: formulario.atividade
   }

  console.log(dados);

  function goTo(page) {
    navigate(page);
  }

  return (
    <>
      <HeaderLogado rota="/home" />
      <DivFakeBody>
        <EditContainer>
          <form id="editar" onSubmit={salvar}>
            <EditorContainer>
              <LogoGenerica
                texto={"Editar"}
                backgroundColor={"#0A0A16"}
                rota="?"
              />

              <DivField>
                <DivLabel>Nome:</DivLabel>
                <Entrada
                  placeholder="Nome"
                  type="text"
                  name="nome"
                  value={formulario.nome}
                  onChange={(event) => entradaDeDados(event)}
                  required
                />
              </DivField>

              <DivField>
                <DivLabel>Cargo:</DivLabel>
                <DropDownGenerico
                  id="cargo01"
                  name="cargo"
                  required
                  default="Selecione o cargo"
                  form="editar"
                  options={cargo}
                  value={formulario.cargo}
                  onChange={(event) => entradaDeDados(event)}
                />
              </DivField>

              <DivField>
                <DivLabel>Atividade:</DivLabel>
                <DropDownGenerico
                  id="atividade01"
                  name="atividade"
                  required
                  default="Selecione a atividade"
                  form="editar"
                  options={atividades}
                  value={formulario.cargo}
                  onChange={(event) => entradaDeDados (event)}
                />
              </DivField>

              <DivFieldBotão>
                <BotaoGenerico texto="Salvar" rota={"---"} />
              </DivFieldBotão>
            </EditorContainer>
          </form>
        </EditContainer>
      </DivFakeBody>
    </>
  );
}
