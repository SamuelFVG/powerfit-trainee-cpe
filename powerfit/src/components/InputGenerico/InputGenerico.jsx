import Link from 'react-dom';
import React from 'react';
import { Fundo, Caixa } from "./Styles";

function App() {
  
  function atividade(event){
    event.preventDefault();

}
  return (
  <Fundo>
        <Caixa>
        <form onSubmit={atividade}>
            <input 
                placeholder="Inserir Atividade"
                type="text"
                name="atividade1"
                required
            ></input>
            <input 
                placeholder="Inserir Atividade"
                type="text"
                name="atividade2"
                required
            ></input>
        </form>

        </Caixa>

    </Fundo>
  )
}

export default App
