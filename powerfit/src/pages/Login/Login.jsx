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
import { LogoGenerica, BotaoGenerico } from "../../components";

export default function CadastroPage() {
  const [form, setForm] = React.useState({ email: "", senha: "" });
  const navigate = useNavigate();

  function atualizaForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const body = {
    email: form.email,
    senha: form.senha,
  };

  console.log(body);

  function goTo(page) {
    navigate(page);
  }

  return (
    <SingUpContainer>
      <CadastroContainer>
        {<LogoGenerica texto={"Login"} backgroundColor={"#0A0A16"} />}
        <form>
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
            <BotaoGenerico texto="Login" />
          </DivSubmitButton>
        </form>
        <Link to={"/cadastro"}>
          <PalavraLink>Não possui conta? Cadastre-se!</PalavraLink>
        </Link>
      </CadastroContainer>
    </SingUpContainer>
  );
}
