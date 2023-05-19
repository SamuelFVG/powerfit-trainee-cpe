import { HeaderG } from "./Styles";
import { LogoWrapperHeader } from "./Styles";
import { LogoGenerica } from "../../components";

export default function Header() {
  return (
    <HeaderG>
      <LogoWrapperHeader>
        <LogoGenerica texto={"PowerFit"} backgroundColor={"#04040B"} />
      </LogoWrapperHeader>
    </HeaderG>
  );
}
