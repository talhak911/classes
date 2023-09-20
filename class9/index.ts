import inquirer from "inquirer";

try{
async function checkGrade() {
    
let percentage =await inquirer.prompt([{
    type:'number',
    name:'Grade',
    message:'enter your percentage',
    validate: (input)=>{
        
            if (input >100 || input<0)
{throw new Error("Write number between 0 - 100")}
else {return true}    
    }
    
}])


if (percentage.Grade >= 80 )
{
    console.log("You got A grade");
    
}

else if (percentage.Grade >= 70 && percentage.Grade<80)
{
    console.log("You got B grade");
    
}
else if (percentage.Grade >= 60 && percentage.Grade<70)
{
    console.log("You got C grade");
    
}
else if (percentage.Grade >= 50 && percentage.Grade<60)
{
    console.log("You got C grade");
    
}
else if (percentage.Grade < 50 )
{
    console.log("You are fail. F grade");
    
}
}

checkGrade()
}

catch(error){
console.log("error is ",error);

}
finally{
    console.log("Finally block");
    
}


// switch(grade)
// {
// case ''
// }