import { LogoG } from "./Styles";
import { LogoText } from "./Styles";

import Logo from "../../assets/Logo.png";

export default function LogoGenerica({ texto }) {
  return (
    <LogoG>
      <img src={Logo} />
      <LogoText>{texto}</LogoText>
    </LogoG>
  );
}
