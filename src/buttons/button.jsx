import React from "react";
import"./button.css"

function Button(props){
    const clickHandler=(key)=>{
    //  {props.btnPress(key)}
        console.log(key.value)
    }
 
    return(
     <button className={props.className} aria-label={props.label} onClick={()=>clickHandler(props)} id={props.id}>{props.value}</button>

 );
}
export default Button;