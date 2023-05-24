import { BotaoG } from "./Styles";

export default function BotaoGenerico({ texto }) {
  return (
    <BotaoG onClick={() => window.location.assign("/cadastro")}>{texto}</BotaoG>
  );
}
