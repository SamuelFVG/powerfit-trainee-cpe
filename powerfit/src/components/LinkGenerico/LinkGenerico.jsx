
import { LinkG } from "./Styles";


export default function LinkGenerico({texto}, {click}) {
  return <LinkG onClick={click/*.onClick*/}>{texto}</LinkG>;
}
