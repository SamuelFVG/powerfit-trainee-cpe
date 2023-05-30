import { Link, useNavigate } from "react-router-dom";
import React from "react";
import {
  SingUpContainer,
  InputForm,
  CadastroContainer,
  DivSubmitButton,
  PalavraLink,
  Texto,
} from "./Styles";
import { LogoGenerica, BotaoGenerico, Header } from "../../components";
import { BotaoG } from "../../components/BotaoGenerico/Styles";
import { useState } from "react";
import api from "../../services/api";
import useAuthStore from "../../stores/auth";

export default function CadastroPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  const setToken = useAuthStore((state) => state.setToken);
  const usuario = useAuthStore((state) => state.usuario);
  const token = useAuthStore((state) => state.token);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setCarregando(true);
      const res = await api.post("/login", { email, senha });
      const tokenBackend = res.data.token;
      setToken(tokenBackend);
      console.log(token, usuario);
    } catch (error) {
      console.log(error.message);
    } finally {
      //Pagina de carregamento
      setCarregando(false);
    }
  };

  //Usada para pagina de carregamento
  //TODO: TROCAR POR UMA BIBLIOTECA DE SPINNER
  if (carregando)
    return (
      <SingUpContainer>
        <h1>Carregando...</h1>
      </SingUpContainer>
    );

  return (
    <>
      <Header rota="/" />
      <SingUpContainer>
        <CadastroContainer>
          {
            <LogoGenerica
              texto={"Login"}
              backgroundColor={"#0A0A16"}
              rota="?"
            />
          }
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

            <Texto>Senha:</Texto>
            <InputForm
              placeholder="********"
              type="password"
              name="senha"
              id="senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            ></InputForm>

            <DivSubmitButton>
              {/* <BotaoGenerico texto="Login" type="submit" /> */}
              <BotaoG type="submit">Login</BotaoG>
            </DivSubmitButton>
          </form>

          <Link to={"/cadastro"}>
            <PalavraLink>Não possui conta? Cadastre-se!</PalavraLink>
          </Link>
        </CadastroContainer>
      </SingUpContainer>
    </>
  );
}

{
  /* <form>
  <Texto>Email:</Texto>
  <InputForm
    placeholder="exemplo@*****.com"
    type="email"
    name="email"
    value={form.email}
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

  <DivSubmitButton>
    <BotaoGenerico texto="Login" type="submit" />
  </DivSubmitButton>
</form>; */
}

// const [form, setForm] = React.useState({ email: "", senha: "" });
// const navigate = useNavigate();
// function atualizaForm(event) {
//   setForm({ ...form, [event.target.name]: event.target.value });
// }

// const body = {
//   email: form.email,
//   senha: form.senha,
// };
// console.log(body);
// function goTo(page) {
//   navigate(page);
// }
