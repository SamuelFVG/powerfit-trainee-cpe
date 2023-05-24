import { useNavigate } from "react-router-dom";
import React from "react";
import {
  DropDownGenerico,
  LogoGenerica,
  BotaoGenerico,
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

  const [formulario, setForm] = React.useState({ nome: "" });
  const navigate = useNavigate();
  function entradaDeDados(event) {
    setForm({ ...formulario, [event.target.name]: event.target.value });
  }

  function salvar(event) {
    event.preventDefault();
  }

  const dados = { nome: formulario.nome };

  console.log(dados);

  function goTo(page) {
    navigate(page);
  }

  return (
    <DivFakeBody>
      <EditContainer>
        <form onSubmit={salvar}>
          <EditorContainer>
            <LogoGenerica texto={"Editar"} backgroundColor={"#0A0A16"} />

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
                required
                default="Selecione o cargo"
                options={cargo}
              />
            </DivField>

            <DivField>
              <DivLabel>Atividade:</DivLabel>
              <DropDownGenerico
                required
                default="Selecione a atividade"
                options={atividades}
              />
            </DivField>

            <DivFieldBotão>
              <BotaoGenerico texto="Salvar" rota={"---"} />
            </DivFieldBotão>
          </EditorContainer>
        </form>
      </EditContainer>
    </DivFakeBody>
  );
}
