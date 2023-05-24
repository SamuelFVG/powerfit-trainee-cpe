import { Link, useNavigate } from "react-router-dom";
import React from "react";
import {
  DropDownGenerico,
  LogoGenerica,
  BotaoGenerico,
  Header,
} from "../../components";
import {
  SingUpContainer,
  InputForm,
  CadastroContainer,
  DivSubmitButton,
  PalavraLink,
  Menu,
  Texto,
  EspacamentoHeaderCadastro,
} from "./Styles";

export default function CadastroPage() {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    x: "",
    cargo: "",
  });
  const navigate = useNavigate();
  const cargo = ["Cliente", "Personal Trainer", "Contador", "Atendente"];

  function atualizaForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function efetuarCadastro(event) {
    event.preventDefault();

    if (form.senha !== form.confirmaSenha) {
      return alert("Senhas diferentes!");
    }
  }

  const body = {
    email: form.email,
    nome: form.nome,
    senha: form.senha,
  };

  console.log(body);

  function goTo(page) {
    navigate(page);
  }

  return (
    <div>
      <Header />
      <EspacamentoHeaderCadastro />
      <SingUpContainer>
        <CadastroContainer>
          <LogoGenerica texto={"Cadastro"} backgroundColor={"#0A0A16"} />
          <form onSubmit={efetuarCadastro}>
            <Texto>Email:</Texto>
            <InputForm
              placeholder="exemplo@*****.com"
              type="email"
              name="email"
              value={form.email}
              onChange={(event) => atualizaForm(event)}
              required
            ></InputForm>
            <Texto>Nome de Usuário:</Texto>
            <InputForm
              placeholder="Nome de Usuário"
              type="text"
              name="nome"
              value={form.nome}
              onChange={(event) => atualizaForm(event)}
              required
            ></InputForm>
            <Texto>Senha:</Texto>
            <InputForm
              placeholder="********"
              type="password"
              name="senha"
              value={form.senha}
              onChange={(event) => atualizaForm(event)}
              required
            ></InputForm>
            <Texto>Confirme sua senha:</Texto>
            <InputForm
              placeholder="********"
              type="password"
              name="confirmaSenha"
              value={form.confirmaSenha}
              onChange={(event) => atualizaForm(event)}
              required
            ></InputForm>
            <Texto>Cargo:</Texto>
            <Menu>
              <DropDownGenerico default="Selecione o cargo" options={cargo} />
            </Menu>
            <DivSubmitButton>
              <BotaoGenerico texto="Cadastrar" rota={"---"} />
            </DivSubmitButton>
          </form>
          <Link to={"/login"}>
            <PalavraLink>Já tem uma conta? Entre agora!</PalavraLink>
          </Link>
        </CadastroContainer>
      </SingUpContainer>
    </div>
  );
}
