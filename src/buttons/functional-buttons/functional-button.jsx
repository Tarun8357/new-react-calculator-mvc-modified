
import Button from "../button";
import "./functional-button.css"

function FunctionButtons(props){
    
    return(
        
        <Button className={props.className} value={props.value} btnPress = {props.btnPress} id={props.id}/>
    );
}
export default FunctionButtons