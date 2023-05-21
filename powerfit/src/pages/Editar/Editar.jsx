import { Titulo } from "./Styles";
import React from "react";
import { DropDownGenerico } from "../../components";

const nomes = ["nome1", "nome2", "Nome3"];

export default function Editar() {
  return (
    <div>
      <Titulo>Editar</Titulo>
      <DropDownGenerico nome={nomes}/>
      </div>
  );
}
