import {
  HeaderLogadoG,
  BotoesHeaderLogado,
  LogoWrapperHeaderLogado,
  HeaderLogadoImagem,
  LinkWrapperHeaderLogado,
} from "./Styles";
import { LogoGenerica } from "../../components";
import { LinkGenerico } from "../../components";
//import { BotaoGenerico } from "../../components";

import Icone_sair from "../../assets/Icone_sair.svg";
import useAuthStore from "../../stores/auth";
import { useNavigate } from "react-router-dom";

export default function HeaderLogado({ rota }) {

  const usuario = useAuthStore((state) => state.usuario);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate();

  const logout = () => {
    clearAuth();
    navigate("/")
  }
  //const navigate = useNavigate();
  return (
    <div>
      <HeaderLogadoG>
        <LogoWrapperHeaderLogado>
          <LogoGenerica
            texto={"PowerFit"}
            backgroundColor={"#04040B"}
            rota={rota}
          />
        </LogoWrapperHeaderLogado>
        <BotoesHeaderLogado>
          <LinkWrapperHeaderLogado>
            <LinkGenerico
              texto={"Editar perfil"}
              rota={"/editar"} /*onClick = {()=> }*/
            />
          </LinkWrapperHeaderLogado>

          <HeaderLogadoImagem
            src={Icone_sair}
            onClick={logout}  
          />
        </BotoesHeaderLogado>
      </HeaderLogadoG>
    </div>
  );
}
