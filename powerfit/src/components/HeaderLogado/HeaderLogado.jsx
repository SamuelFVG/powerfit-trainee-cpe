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

export default function HeaderLogado() {
  //const navigate = useNavigate();
  return (
    <div>
      <HeaderLogadoG>
        <LogoWrapperHeaderLogado>
          <LogoGenerica texto={"PowerFit "} backgroundColor={"#04040B"} />
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
            onClick={() => window.location.assign("/")}
          />
        </BotoesHeaderLogado>
      </HeaderLogadoG>
    </div>
  );
}
