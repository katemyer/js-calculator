const exampleInput = {
    num1: 10,
    num2: 5,
    operation: 'tree',
}


let validOperators = ['+', '-', '*', '/', 'add', 'subtract', 'multiply', 'divide'];
let output = null;

//check if num1 or num2 or operation is null
if (exampleInput.num1 === null || exampleInput.num2 === null || exampleInput.operation === null) {
    console.log('Invalid input, input is null.');
} else if (isNaN(exampleInput.num1) || isNaN(exampleInput.num2)) {
    console.log('Invalid input, this is not a number.');
} else if (!validOperators.includes(exampleInput.operation)) {
    console.log('Invalid operation');
} else {
    if ((exampleInput.operation === 'add') || (exampleInput.operation === '+')) {
        // add num1 & num2
        output = exampleInput.num1 + exampleInput.num2;
    } else if ((exampleInput.operation === 'subtract') || (exampleInput.operation === '-')) {
        // subtract num1 - num2
        output = exampleInput.num1 - exampleInput.num2;
    } else if ((exampleInput.operation === 'multiply') || (exampleInput.operation === '*')) {
        // multiply num1 * num2
        output = exampleInput.num1 * exampleInput.num2;
    } else if ((exampleInput.operation === 'divide') || (exampleInput.operation === '/')) {
        // divide num1 / num2
        output = exampleInput.num1 / exampleInput.num2;
    }
    console.log(output);
}