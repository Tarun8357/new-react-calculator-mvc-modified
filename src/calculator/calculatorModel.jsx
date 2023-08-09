


    let functionalButtons = [{type:"FUNCTION",value:'AC'},{type:"FUNCTION",value:'DEL'},{type:"FUNCTION",value:'UNDO'},{type:"FUNCTION",value:'REDO'}];

    let operationalButtons = [{type:"OPERATOR",value:"ADD",sign:"+"},{type:"OPERATOR",value:"MULTIPLY",sign:"x"},{type:"OPERATOR",value:"SUBSTRACT",sign:"-"},{type:"OPERATOR",value:"DIVIDE",sign:"/"},{type:"OPERATOR",value:"PERCENT",sign:"%"},{type:"OPERATOR",value:"EQUALS",sign:"="}];

    let numericButtons = [{type:"NUMBER",value:'1'},{type:"NUMBER",value:'2'},{type:"NUMBER",value:'3'},{type:"NUMBER",value:'4'},{type:"NUMBER",value:'5'},{type:"NUMBER",value:'6'},{type:"NUMBER",value:'7'},{type:"NUMBER",value:'8'},{type:"NUMBER",value:'9'},{type:"NUMBER",value:'0'}];

    const CalculatorModel={
        functionalButtons,operationalButtons,numericButtons
    }


export default CalculatorModel;