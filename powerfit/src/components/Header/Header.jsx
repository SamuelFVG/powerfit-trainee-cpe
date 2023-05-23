import { HeaderG, BotoesHeader, LogoWrapperHeader } from "./Styles";
import { LogoGenerica } from "../../components";
import { LinkGenerico } from "../../components";
import { BotaoGenerico } from "../../components";
//import { useNavigate } from "react-router-dom";
//import { LinkGenerico } from "../../components";

export default function Header() {
  //const navigate = useNavigate();
  return (
    <div>
      <HeaderG>
        <LogoWrapperHeader>
          <LogoGenerica texto={"PowerFit"} backgroundColor={"#04040B"} />
        </LogoWrapperHeader>
        <BotoesHeader>
          <LinkGenerico
            texto={"Entrar"}
            rota={"/login"} /*onClick = {()=> }*/
          />
          <BotaoGenerico texto={"Cadastro"} />
        </BotoesHeader>
      </HeaderG>
    </div>
  );
}
