let total=0;
let current='';
let operator="+";
let operatorPressed=false;
let situation=false;

function getOperator(ele){
    let opp=ele.innerText;
    if(operatorPressed){
        if(situation){
            return;
        }
        if((opp=="×" || opp=="÷") && (operator=="×" || operator=="÷")){
            return;
        }
        if(opp=="−" && (operator=="×" || operator=="÷")){
            document.getElementById("output").innerText=opp;
            situation=true;
            return;
        }else{
            current='';
        }
    }
    performOperation(opp);
    printOperator();
}

function getDigit(ele){
    let digit=ele.innerText;
    if(operatorPressed){
       current='';
    }
    current+=digit;
    operatorPressed=false;
    printCurrent();
}

function performOperation(opp){
    operatorPressed=true;
    let num=Number(current);
    if(situation){
        num=-num;
        situation=false;
    }
    switch(operator){
        case "+": total+=num;break;
        case "−": total-=num;break;
        case "×": total*=num;break;
        case "÷": total/=num;break;
    }

    switch(opp){
        case "+":operator="+";break;
        case "−":operator="−";break;
        case "×":operator="×";break;
        case "÷":operator="÷";break;
    }
}

function otherPress(ele){
    let other=ele.innerText;
    switch(other){
       case "AC":current="";total=0;printTotal();break;
       case "←":if(!operatorPressed){
          current=current.slice(0,current.length-1);printCurrent();
          }
          break;
       case "=":performOperation("+");printTotal();current='';break;
    }
}

function printCurrent(){
    document.getElementById("output").innerText=Number(current);
}

function printTotal(){
    document.getElementById("output").innerText=total;
}

function printOperator(){
    document.getElementById("output").innerText=operator;
}