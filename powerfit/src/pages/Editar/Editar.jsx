import { Link, useNavigate } from "react-router-dom";
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
  DivFieldConfirma,
  PalavraLink,
} from "./Styles";
import { SingUpContainer } from "../Cadastro/Styles.js";
import api from "../../services/api";
import { useState } from "react";
import { BotaoG } from "../../components/BotaoGenerico/Styles";
import useAuthStore from "../../stores/auth";

export default function Editar() {
  const usuario = useAuthStore((state) => state.usuario);
  const updateUsuario = useAuthStore((state) => state.setUsuario);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const [nome, setNome] = useState(usuario.nome);
  const [cargo, setCargo] = useState(usuario.cargo);
  const [atividade, setAtividade] = useState(usuario.atividade);
  const [carregando, setCarregando] = useState(false);

  const [confirma, setConfirma] = useState(false);
  const logout = () => {
    clearAuth();
    window.location.assign("/");
  };

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

  const deletarConta = async (e) => {
    try {
      setCarregando(true);
      const res = await api.delete("/usuarios/" + usuario._id);
      logout();
      window.location.assign("/");
    } catch (error) {
      alert(error);
    } finally {
      //Pagina de carregamento
      setCarregando(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setCarregando(true);
      const res = await api.put("/usuarios/" + usuario._id, {
        nome,
        cargo,
        atividade,
      });
      usuario.nome = res.data.nome;
      if (!res.data.cargo == "") usuario.cargo = res.data.cargo;
      if (!res.data.atividade == "") usuario.atividade = res.data.atividade;
      updateUsuario(usuario);

      window.location.assign("/home");
    } catch (error) {
      alert(error);
    } finally {
      //Pagina de carregamento
      setCarregando(false);
    }
  };

  if (carregando)
    return (
      <SingUpContainer>
        <h1>Carregando...</h1>
      </SingUpContainer>
    );
  if (confirma)
    return (
      <>
        <HeaderLogado rota="/home" />
        <DivFakeBody>
          <EditContainer>
            <form>
              <EditorContainer>
                <LogoGenerica
                  texto={"Tem Certeza?"}
                  backgroundColor={"#0A0A16"}
                  rota="?"
                />
                <DivFieldConfirma>
                  <BotaoG onClick={() => deletarConta()} type="buttom">
                    Sim
                  </BotaoG>
                  <BotaoG onClick={() => setConfirma(false)} type="buttom">
                    Não
                  </BotaoG>
                </DivFieldConfirma>
              </EditorContainer>
            </form>
          </EditContainer>
        </DivFakeBody>
      </>
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
                  placeholder={usuario.nome}
                  defaultValue={usuario.nome}
                  type="text"
                  name="nome"
                  id="nome"
                  onChange={(e) => setNome(e.target.value)}
                />
              </DivField>
              <DivField>
                <DivLabel>Cargo:</DivLabel>
                <DropDownGenerico
                  default={usuario.cargo}
                  onChange={(e) => setCargo(e.target.value)}
                  options={cargos}
                />
              </DivField>
              <DivField>
                <DivLabel>Atividade:</DivLabel>
                <DropDownGenerico
                  default={usuario.atividade?usuario.atividade:"Selecione a atividade"}
                  onChange={(e) => setAtividade(e.target.value)}
                  options={atividades}
                />
              </DivField>
              <DivFieldBotão>
                <BotaoG type="submit">Salvar</BotaoG>
              </DivFieldBotão>
              <Link onClick={() => setConfirma(true)}>
                <PalavraLink>Deletar conta</PalavraLink>
              </Link>
            </EditorContainer>
          </form>
        </EditContainer>
      </DivFakeBody>
    </>
  );
}
