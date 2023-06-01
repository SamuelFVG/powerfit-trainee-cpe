import { useNavigate } from "react-router-dom";
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
import { useState } from "react";
import { BotaoG } from "../../components/BotaoGenerico/Styles";

export default function Editar() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState();
  const [atividade, setAtividade] = useState();
  const [carregando, setCarregando] = useState(false);
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setCarregando(true);
      await api.put("/usuarios", { nome, cargo, atividade});
  
      window.location.assign("/home");
  
    } catch (error) {
    alert(error);
    } finally {
    //Pagina de carregamento
    setCarregando(false);
    }
}

  if (carregando)
  return (
  <DivFakeBody>
    <h1>Carregando...</h1>
  </DivFakeBody>
  );
  return (
    <>
      <HeaderLogado rota="/home" />
      <DivFakeBody>
        <EditContainer>
          <form onSubmit={handleSubmit}>
            <EditorContainer>
              <LogoGenerica
                texto={"Editar"}
                backgroundColor={"#0A0A16"}
                rota="?"
              />
              <DivField>
                <DivLabel>Nome de Usuário:</DivLabel>
                <Entrada
                  placeholder="Nome de Usuário"
                  type="text"
                  name="nome"
                  id="nome"
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </DivField>
              <DivField>
                <DivLabel>Cargo:</DivLabel>
                <DropDownGenerico
                  required
                  default="Selecione o cargo"
                  onChange={(e) => setCargo(e.target.value)}
                  options={cargos}
                />
              </DivField>
              <DivField>
                <DivLabel>Atividade:</DivLabel>
                <DropDownGenerico
                  required
                  default="Selecione a atividade"
                  onChange={(e) => setAtividade(e.target.value)}
                  options={atividades}
                />
                </DivField>
                <DivFieldBotão>
                <BotaoG type="submit">Salvar</BotaoG>
              </DivFieldBotão>
            </EditorContainer>
          </form>
        </EditContainer>
      </DivFakeBody>
    </>
  );
}


// const [formulario, setForm] = React.useState({ nome: "" });
// const navigate = useNavigate();
// function entradaDeDados(event) {
//   setForm({ ...formulario, [event.target.name]: event.target.value });
// }

// function salvar(event) {
//   event.preventDefault();
// }

// const dados = { nome: formulario.nome };

// console.log(dados);

// function goTo(page) {
//   navigate(page);
// }
