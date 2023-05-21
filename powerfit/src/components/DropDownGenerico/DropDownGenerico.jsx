import { DropDownG } from "./Styles";
import { DivSelect } from "./Styles";
import { DivOption } from "./Styles";
import { DivDefault } from "./Styles";

function DropDownGenerico(props) {return(
  
  <DivSelect defaultValue={props.default} required>
    <DivDefault hidden invalid id="default" value={props.default}>{props.default}</DivDefault>
  {props.options.map((item, index) =>   {
    return(
        <DivOption key={index}value={item}>{item}</DivOption>
    )
  ;}
)}
</DivSelect>
);
};

export default DropDownGenerico;
