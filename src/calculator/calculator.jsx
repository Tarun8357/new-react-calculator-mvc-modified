
import FunctionButtons from "../buttons/functional-buttons/functional-button";
import NumericButtons from "../buttons/numeric-buttons/numeric-button";
import OperationButtons from "../buttons/operational-buttons/operational-button";
import Display from "../display/display";
import CalculatorModel from "./calculatorModel";
import { useState } from "react";
import "./calculator.css"

function Calculator(){

    //Objects and Hooks

    let [initValue, setValue]=useState('0');
    const [containerStack, setConatainerStack]=useState([]);
    let numberBtns = CalculatorModel.numericButtons;
    let functionBtns = CalculatorModel.functionalButtons;
    let operationalBtns = CalculatorModel.operationalButtons;

    //Creating Buttons

    const numBtnList = numberBtns.map((btn,index) => {return <NumericButtons  className="numericalButtons"  key={index} btnPress={()=>numbtnClickHandler(btn)} id={"numBtns"+index} label={"numButton"+index} value={btn.value}></NumericButtons>});
    const fnBtnList = functionBtns.map((btn,index) => {return <FunctionButtons className="functionalbuttons" key={index} btnPress={()=>functionBtnClickHandler(btn)} id={"funBtns"+index} value={btn.value}></FunctionButtons>});
    const operationBtnList = operationalBtns.map((btn,index) => {return <OperationButtons className="operationalButtons"  key={index} btnPress={()=>opBtnClickHandler(btn)} id={"opBtns"+index} value={btn.sign}></OperationButtons>});

    const addExpStack = (obj) => {
        setConatainerStack(prev=>([...prev,{type:obj.type,value:obj.value}]));
      }

    // Function Buttons operation method 

    const functionBtnClickHandler = (fnValue) =>{
        if(fnValue.value=='AC'){
            console.log("AC called");
          setValue("");
        }
        else if (fnValue.value=='DEL'){
          setValue(initValue.substring(0,initValue.length-1))
        }
       
      }

    // Number Buttons operation method   

    const numbtnClickHandler = (numValue) => {
        setValue(initValue+numValue.value);
        if(initValue=='0'){
          initValue+=numValue.value;
          addExpStack(numValue);
        } else if (containerStack[containerStack.length-1].type==="NUMBER"){
           const val =  containerStack[containerStack.length-1].value + numValue.value ;
           containerStack.pop();
           addExpStack({type:"NUMBER",value:val});
        }else{
        
          addExpStack({type:"NUMBER",value:numValue.value});
       
        }
    
    }

    // Operation Buttons operation method 

    const opBtnClickHandler=(opValue)=>{
        setValue(opValue.sign);
       if (opValue.value=="EQUALS"){ 
        console.log("Your result is printed")
        //   if(access==true){
        //     // eval(containerStack);
        //       axios.post(apiUrl,JSON.stringify(containerStack),axiosConfig)
        //       .then( (res)=>{console.log(res.data)
        //       setValue(res.data)})
        //       .catch((err)=>{console.error(err)})
        //   }else{
        //     alert(" you are not authorized")
        //   }  
       }else if(containerStack[containerStack.length-1].type=="OPERATOR") {
        containerStack.pop();
        addExpStack({type:"OPERATOR",value:opValue.value});
      }
      else{
        addExpStack({type:"OPERATOR",value:opValue.value});
      }
      }  
    

    return(
      
    <>
    <div className="calculatorContainer">
    <div className="displayContainer"><Display  name={initValue} /></div>
    <div className="btnContainer">
    {fnBtnList}  
    {numBtnList}
    {operationBtnList}
    </div>
    </div>
    </>
    );



}
export default Calculator;