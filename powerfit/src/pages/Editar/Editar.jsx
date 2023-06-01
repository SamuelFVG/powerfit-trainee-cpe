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
import api from "../../services/api";

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
  const cargos = ["Cliente", "Personal Trainer", "Contador", "Atendente"];

const [nome,setNome] = useState("");
const [cargo,setCargo] = useState("");
const [atividade,setAtividade] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log({nome, cargo, atividade});

try{
  const res = await api.put("/usuarios/64743199f203c597f31295dc", {nome, cargo, atividade})
  console.log(res);
} catch(error){
  console.log(error.message);
}

}
  return (
    <>
      <HeaderLogado rota="/home" />
      <DivFakeBody>
        <EditContainer>

          <form onSubmit={handleSubmit} id="editar">
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
                  onChange={(e)    => setNome(e.target.value)}
                  required
                />
              </DivField>

              <DivField>
                <DivLabel>Cargo:</DivLabel>
                <DropDownGenerico
                  name="cargo"
                  required={true}
                  default="Selecione o cargo"
                  form="editar"
                  options={cargos}
                  onChange={(e) => setCargo(e.target.value)}
                />
              </DivField>

              <DivField>
                <DivLabel>Atividade:</DivLabel>
                <DropDownGenerico
                  name="atividade"
                  required
                  default="Selecione a atividade"
                  form="editar"
                  options={atividades}
                  onChange={(e) => setAtividade(e.target.value)}
                />
              </DivField>

              <DivFieldBotão>
                <BotaoGenerico type="submit" texto="Salvar" rota={"---"} />
              </DivFieldBotão>
            </EditorContainer>
          </form>
        </EditContainer>
      </DivFakeBody>
    </>
  );
}
