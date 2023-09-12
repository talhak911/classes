import inquirer from "inquirer";
async function start() {
    const val = await inquirer.prompt([
        {
            type: 'number',
            name: 'num12',
            message: 'Write the first number'
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Write the second number'
        },
        {
            type: 'list',
            name: 'operation',
            message: 'which operation do yo want to perform',
            choices: ['+', '-', '*', '/']
        }
    ]);
    let result;
    const { num12, num2, operation } = val;
    switch (operation) {
        case '+':
            result = num12 + num2;
            break;
        case '-':
            result = num12 - num2;
            break;
        case '*':
            result = num12 * num2;
            break;
        case '/':
            if (num2 == 0) {
                console.log("Cannot divide by zero");
            }
            else {
                result = val.num12 / val.num2;
            }
            break;
    }
    if (num2 != 0) {
        console.log("your answer is " + result);
    }
}
start();
