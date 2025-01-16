        let trailingResult = 0;
        let workingOperation = "";
        let operationOptions = ['divide', 'multiply', 'subtract', 'add'];

      function updateDisplay(input){
        let display = document.getElementById("display");
        let secondaryDisplay = document.getElementById("secondaryDisplay");
        
        if(display.innerHTML === "0" && operationOptions.indexOf(input) === -1){
            if (input === "decimal"){
            display.innerHTML = '0.'; 
            }else if(input === "negative"){
                if(display.innerHTML.startsWith("-")){
                    display.innerHTML = display.innerHTML.slice(1);
                } else{
                display.innerHTML = "-" + display.innerHTML;
                } 

            }else{
                display.innerHTML = input;
            }
        } else if(operationOptions.indexOf(input) >= 0 ){
            if(trailingResult === display.innerHTML){
            //first operation
            workingOperation = input;

            
            } else if(workingOperation === ""){
            workingOperation = input; 
            trailingResult = display.innerHTML;
            secondaryDisplay.innerHTML = trailingResult;
            display.innerHTML = 0;
            }else{
                //set operation
                console.log(display.innerHTML, "dealing with set operation");
                trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);
                secondaryDisplay.innerHTML = trailingResult;
                display.innerHTML = 0;
                workingOperation = input;
                
            }

        } else if (input === "equals"){
            
            display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);    
            trailingResult =0;
            workingOperation = "";
            secondaryDisplay.innerHTML = trailingResult;
        }else if (input === "decimal"){
            console.log('decimal clicked');
            if(display.innerHTML.indexOf(".") ===-1){
                display.innerHTML += "."; 
            }
        }else if (input === "negative"){
            console.log("negative value selected");
            if(display.innerHTML.startsWith("-")){
                display.innerHTML = display.innerHTML.slice(1);
            }else{
            display.innerHTML = "-" + display.innerHTML;
            } 
            
        }else{
            display.innerHTML += input;
        }
        console.log(trailingResult, "<= trailingResult", display.innerHTML, "<= display.innerHTML", workingOperation, "<= workingOperation");
      }  

      function clearDisplay(){
        let display = document.getElementById("display");
        let secondaryDisplay = document.getElementById("secondaryDisplay");
        display.innerHTML = 0;
        trailingResult = 0;
        secondaryDisplay.innerHTML = trailingResult;
      }

    function calculate(firstNum, secondNum, operation){
        let result;
        firstNum = parseFloat(firstNum);
        secondNum = parseFloat(secondNum);
        switch(operation){
            case "add":
                console.log("add calculated");
                result = firstNum + secondNum;
                break;
            case "subtract":
            console.log("subtract calculated");
                result = firstNum - secondNum;
                break;
            case "multiply":
            console.log("multiply calculated")
                result = firstNum * secondNum;
            break;
            case "divide":
            console.log("divide calculated")
                result = firstNum / secondNum;
                break;
                
            default:
                console.log("caluc switch statement missed something");

        }
        return result;

}