import { Link,useNavigate } from "react-router-dom"
import React from "react"
import { SingUpContainer,LogoCadastro,InputForm,CadastroContainer,SubmitButton, PalavraLink} from "./Styles"



export default function CadastroPage() {

  const [form, setForm] = React.useState({nome: "", email: "", senha: "", x: "", cargo: ""})
  const navigate = useNavigate();


  function atualizaForm(event){
     setForm({...form, [event.target.name]: event.target.value})
   }

 function efetuarCadastro(event){
    event.preventDefault();

     if(form.senha !== form.confirmaSenha) {
       return alert("senhas diferentes!")
     }
    }

   const body = {
         email: form.email,
         nome: form.nome,
         senha: form.senha,
         cargo: form.cargo
     }


    console.log(body);



  function goTo(page) {
   navigate(page)
}


  return (
    <SingUpContainer>
          <CadastroContainer>
            <LogoCadastro>
                  {/* <img src={LogoCadastroIMG}></img> */}
                  <h2>Cadastro</h2>
              </LogoCadastro>
          <form onSubmit={efetuarCadastro}>
            <InputForm
                placeholder="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => atualizaForm(event)}
                required    
            ></InputForm>
            <InputForm
                placeholder="Nome"
                type="text"
                name="nome"
                value={form.nome}
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
            <InputForm
                placeholder="Confirme a senha"
                type="password"
                name="confirmaSenha"
                value={form.confirmaSenha}
                onChange={(event) => atualizaForm(event)}
                required    
            ></InputForm>
            <InputForm
                placeholder="Selecione o cargo"
                type="text"
                name="cargo"
                value={form.cargo}
                onChange={(event) => atualizaForm(event)}
                required   
            ></InputForm>
            <SubmitButton type="submit">Cadastrar</SubmitButton>
          </form>
          <Link to={"/login"}>
            <PalavraLink>Já tem uma conta? Entre agora!</PalavraLink>
          </Link>
          </CadastroContainer>
      </SingUpContainer>
  )
}