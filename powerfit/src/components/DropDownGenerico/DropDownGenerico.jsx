import { DropDownG } from "./Styles";
import { DivSelect } from "./Styles";
import { DivOption } from "./Styles";
import { DivDefault } from "./Styles";
import {CustomSelector} from "./Styles"


function DropDownGenerico(props) {return(
  <CustomSelector>
  <DivSelect 
    name={props.name}
    defaultValue={props.default} 
    required={props.required}
    form={props.form}
    onChange={props.onChange}
    >
    <DivDefault hidden invalid>{props.default}</DivDefault>
  {props.options.map((item, index) =>   {
    return(
        <DivOption key={index}value={item}>{item}</DivOption>      
    )
  ;}
)}
</DivSelect>
</CustomSelector>
);
};

export default DropDownGenerico;
