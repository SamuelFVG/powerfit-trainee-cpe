import { useNavigate } from "react-router-dom";
import React from "react";
import { DropDownGenerico } from "../../components";
import Logo from "../../assets/Logo.png";
import { LogoEditar,EditContainer, EditorContainer,DivLabel,Entrada,BotãoSalvar,DivField} from "./Styles";

export default function Editar() {

  const atividades = ["Cardio", "Musculação", "Acompanhamento de clientes (manhã)", "Recepção de clientes (manhã)",  "Pagamento de impostos (manhã)", "Acompanhamento de clientes (tarde)", "Recepção de clientes (tarde)",  "Pagamento de impostos (tarde)", "Acompanhamento de clientes (noite)", "Recepção de clientes (noite)",  "Pagamento de impostos (noite)"];
  const cargo = ["Cliente", "Personal Trainer", "Contador", "Atendente"];

  const [formulario, setForm] = React.useState({nome: ""})
  const navigate = useNavigate();
  function entradaDeDados(event){
    setForm({...formulario, [event.target.name]: event.target.value})
  }

  const dados = {nome: formulario.nome};

  console.log(dados);

  function goTo(page) {
    navigate(page)
 }

  return (
    <EditContainer>
      <EditorContainer>
      {<LogoEditar>
                  <img src={Logo} ></img>
                  <h2>Editar</h2>
              </LogoEditar>}

      <DivField>
      <DivLabel>Nome</DivLabel>
        <Entrada
        placeholder = "Nome"
        type="text"
        name="nome"
        value={formulario.nome}
        onChange={(event) => entradaDeDados(event)}
        required    
        />
      </DivField>
      <DivField>
      <DivLabel>Cargo</DivLabel>
      <DropDownGenerico style default="Selecione o cargo" options={cargo}/>
      </DivField>
      <DivField>
      <DivLabel>Atividade</DivLabel>
      <DropDownGenerico default="Selecione a atividade" options={atividades}/>
      </DivField>
      <BotãoSalvar type="submit">Salvar</BotãoSalvar>
      </EditorContainer>
      </EditContainer>
  );
}
