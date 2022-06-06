function add (a,b){
    document.getElementsByClassName('displayedNumber')[0].textContent=parseInt(a)+parseInt(b);
    document.getElementsByClassName('operandNumber')[0].textContent='';
    document.getElementsByClassName('secondNumber')[0].textContent ='';
}

function subtract (a,b){
    document.getElementsByClassName('displayedNumber')[0].textContent=parseInt(a)-parseInt(b);
    document.getElementsByClassName('operandNumber')[0].textContent='';
    document.getElementsByClassName('secondNumber')[0].textContent ='';
}

function multiply (a,b){
    document.getElementsByClassName('displayedNumber')[0].textContent=parseInt(a)*parseInt(b);
    document.getElementsByClassName('operandNumber')[0].textContent='';
    document.getElementsByClassName('secondNumber')[0].textContent ='';
}

function divide (a,b){
    document.getElementsByClassName('displayedNumber')[0].textContent=parseInt(a)/parseInt(b);
    document.getElementsByClassName('operandNumber')[0].textContent='';
    document.getElementsByClassName('secondNumber')[0].textContent = '';
}

function appendToTheScreen(a,b){
 if(isOperand(b)){
    document.getElementsByClassName('operandNumber')[0].textContent=b;
 } else{
    document.getElementsByClassName('displayedNumber')[0].textContent=a.concat(b);
 }
}

function isOperand(b){
    if(b=='+' || b=='-' || b=='x' ||  b=='X' || b=='/'){
        return true;
    } else {
        return false;
    }
}

function readEquation(number){
   let a= document.getElementsByClassName('displayedNumber')[0].textContent;
   let b,c;
   if(isOperand(number)){
     b= number;
   } else{
     b= number;
     c= document.getElementsByClassName('operandNumber')[0].textContent;
   }
   let secondNumber= document.getElementsByClassName('secondNumber')[0].textContent;
   let proceed=true;
   if (!!secondNumber){
     proceed=false;
     secondNumber=secondNumber+number;
     document.getElementsByClassName('secondNumber')[0].textContent=secondNumber;

    if(secondNumber.endsWith('=')){
        proceed=true;
        b=secondNumber;
     }
   }
   else if(isOperand(c)) {
    document.getElementsByClassName('secondNumber')[0].textContent = number; 
    proceed=false;
   }
   if(proceed){
    switch(c){
        case '+' : add(a,b);
                break;
        case '-' : subtract(a,b);
                break;
        case 'X':  multiply(a,b);
                break;
        case '/':  divide(a,b);
                break;
        default :  appendToTheScreen(a,b);
    }
    }
}

