import { Titulo } from "./Styles";
import React from "react";
import { DropDownGenerico } from "../../components";

const nomes = ["Andre", "Bruno", "Carlos "];

export default function Editar() {
  return (
    <div>
      <Titulo>Editar</Titulo>
      <DropDownGenerico default="selecione um nome" nome={nomes}/>
      </div>
  );
}
