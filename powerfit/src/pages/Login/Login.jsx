import { Link,useNavigate } from "react-router-dom"
import React from "react"
import Logo from "../../assets/Logo.png";
import { SingUpContainer,LogoCadastro,InputForm,CadastroContainer,SubmitButton, PalavraLink} from "./Styles"



export default function CadastroPage() {

  const [form, setForm] = React.useState({ email: "", senha: "",})
  const navigate = useNavigate();


  function atualizaForm(event){
     setForm({...form, [event.target.name]: event.target.value})
   }

//  function efetuarCadastro(event){
//     event.preventDefault();

//      if(form.senha !== form.confirmaSenha) {
//        return alert("senhas diferentes!")
//      }
//     }

   const body = {
         email: form.email,
         senha: form.senha,
     }


    console.log(body);



  function goTo(page) {
   navigate(page)
}


  return (
    <SingUpContainer>
          <CadastroContainer>
            {<LogoCadastro>
                  <img src={Logo} ></img>
                  <h2>Login</h2>
              </LogoCadastro>}
          <form>
            <InputForm
                placeholder="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => atualizaForm(event)}
                required    
            ></InputForm>
            <InputForm
                placeholder="Senha"
                type="password"
                name="senha"
                value={form.senha}
                onChange={(event) => atualizaForm(event)}
                required    
            ></InputForm>
            <SubmitButton type="submit">Login</SubmitButton>
          </form>
          <Link to={"/cadastro"}>
            <PalavraLink>Não possui conta? Cadastre-se!</PalavraLink>
          </Link>
          </CadastroContainer>
      </SingUpContainer>
  )
}