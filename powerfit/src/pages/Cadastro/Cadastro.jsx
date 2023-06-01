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
} from "./Styles";
import api from "../../services/api";
import { useState } from "react";
import { BotaoG } from "../../components/BotaoGenerico/Styles";

export default function CadastroPage() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [cargo, setCargo] = useState();
  const [confirmarsenha, setConfirmarSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  
  const cargos = ["Cliente", "Personal Trainer", "Contador", "Atendente"];

  const handleSubmit = async (e) => {
    e.preventDefault();

  if (senha!== confirmarsenha) {
        return alert("Senhas diferentes!");
      }

  try {
    setCarregando(true);
    await api.post("/usuarios", { email, nome, senha, cargo});
    
    
    window.location.assign("/login");
    
  } catch (error) {
    alert(error);
  } finally {
    //Pagina de carregamento
    setCarregando(false);
  }
}

if (carregando)
return (
  <SingUpContainer>
    <h1>Carregando...</h1>
  </SingUpContainer>
);

  return (
    <>
      <Header rota="/" />
      {/* <EspacamentoHeaderCadastro /> */}
      <SingUpContainer>
        <CadastroContainer>
          <LogoGenerica
            texto={"Cadastro"}
            backgroundColor={"#0A0A16"}
            rota="?"
          />
          <form onSubmit={handleSubmit}>
            <Texto>Email:</Texto>
            <InputForm
              placeholder="exemplo@*****.com"
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            ></InputForm>
            <Texto>Nome de Usuário:</Texto>
            <InputForm
              placeholder="Nome de Usuário"
              type="text"
              name="nome"
              id="nome"
              onChange={(e) => setNome(e.target.value)}
              required
            ></InputForm>
            <Texto>Senha:</Texto>
            <InputForm
              placeholder="********"
              type="password"
              name="senha"
              id="senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            ></InputForm>
            <Texto>Confirme sua senha:</Texto>
            <InputForm
              placeholder="********"
              type="password"
              name="confirmarsenha"
              id="confirmarsenha"
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            ></InputForm>
            <Texto>Cargo:</Texto>
            <Menu>
            <DropDownGenerico
              required
              default="Selecione a atividade"
              onChange={(e) => setCargo(e.target.value)}
              options={cargos}
            ></DropDownGenerico>
            </Menu>
            <DivSubmitButton>
             <BotaoG type="submit">Cadastrar</BotaoG>
            </DivSubmitButton>
          </form>
          <Link to={"/login"}>
            <PalavraLink>Já tem uma conta? Entre agora!</PalavraLink>
          </Link>
        </CadastroContainer>
      </SingUpContainer>
    </>
  );
}


// const [form, setForm] = React.useState({
  //   nome: "",
  //   email: "",
  //   senha: "",
  //   x: "",
  //   cargo: "",
  // });
  // const navigate = useNavigate();
  

  // function atualizaForm(event) {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // }

  // function efetuarCadastro(event) {
  //   event.preventDefault();

  //   if (form.senha !== form.confirmaSenha) {
  //     return alert("Senhas diferentes!");
  //   }
  // }

  // const body = {
  //   email: form.email,
  //   nome: form.nome,
  //   senha: form.senha,
  //   cargo: form.cargo,
  // };

  // console.log(body);

  // function goTo(page) {
  //   navigate(page);
  // }