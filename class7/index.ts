import inquirer from "inquirer"
async function start()
{
const calculator=await inquirer.prompt([
    {
    type:'number',
    name:'num1',
    message: 'Write the first number'

},
    {
        type:'number',
        name:'num2',
        message:'Write the second number'
        
    },
    {
        type: 'list',
        name: 'operation',
        message: 'which operation do yo want to perform',
        choices:['+','-','*','/']
    }
])
let result;
const { num1, num2, operation } = calculator
switch(operation){
    case '+':result=num1+num2;
    break;
    case '-':result=num1-num2;
    break;
    case '*':result=num1*num2;
    break;
    case '/':
    if(num2==0){console.log("Cannot divide by zero")}
    else {result=calculator.num1/calculator.num2}
    break;
    }    
    
    
if (num2!=0){
console.log("your answer is "+result);
}
}
start();


