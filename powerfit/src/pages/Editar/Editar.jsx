import React from "react";
import { DropDownGenerico } from "../../components";
import Logo from "../../assets/Logo.png";
import { LogoEditar,EditContainer, EditorContainer,DivLabel,Entrada,BotãoSalvar} from "./Styles";

export default function Editar() {

  const atividades = ["Cardio", "Musculação", "Acompanhamento de clientes (manhã)", "Recepção de clientes (manhã)",  "Pagamento de impostos (manhã)", "Acompanhamento de clientes (tarde)", "Recepção de clientes (tarde)",  "Pagamento de impostos (tarde)", "Acompanhamento de clientes (noite)", "Recepção de clientes (noite)",  "Pagamento de impostos (noite)"];

  const cargo = ["Cliente", "Personal Trainer", "Contador", "Atendente"];

  const [EntradaD, setForm] = React.useState({nome: ""});

  const dados = {nome: EntradaD.Name};

  console.log(dados);

  function entradaDeDados(event){
     setForm({...EntradaD, [event.target.name]: event.target.value})
   }


  return (
    <EditContainer>
      <EditorContainer>
      {<LogoEditar>
                  <img src={Logo} ></img>
                  <h2>Editar</h2>
              </LogoEditar>}
      <DivLabel>Nome</DivLabel>
        <Entrada
        placeholder = "Nome"
        type="text"
        Name="nome"
        value={EntradaD.nome}
        onChange={(event) => entradaDeDdados(event)}
        required    
        />
      <DivLabel>Cargo</DivLabel>
      <DropDownGenerico default="selecione o cargo" options={cargo}/>
      <DivLabel>Atividade</DivLabel>
      <DropDownGenerico default="selecione a atividade" options={atividades}/>
      <BotãoSalvar>Salvar</BotãoSalvar>
      </EditorContainer>
      </EditContainer>
  );
}
