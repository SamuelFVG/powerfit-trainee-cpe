import {
  TituloInicio,
  SubTituloInicio,
  TextoInicio,
  CaixaTextoInicio,
  CaixaImagemInicio,
  ContentInicio,
  ImagemApresentacao,
} from "./Styles";

import { Header } from "../../components";

import ImagemInicio from "../../assets/Imagem_home_sem_login_1.svg";

export default function Inicio() {
  return (
    <div>
      <Header rota="/" />
      <ContentInicio>
        <CaixaTextoInicio>
          <TituloInicio>Mais que uma academia</TituloInicio>
          <SubTituloInicio>Um estilo de vida </SubTituloInicio>
          <TextoInicio>
            Venha para a PowerFit e alcançe os resultados que você tanto deseja
          </TextoInicio>
        </CaixaTextoInicio>
        <CaixaImagemInicio>
          <ImagemApresentacao src={ImagemInicio} />
        </CaixaImagemInicio>
      </ContentInicio>
      {/* <Footer /> */}
    </div>
  );
}
