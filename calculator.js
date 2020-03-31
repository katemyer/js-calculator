function addNumbers(aNum1, aNum2) {
    return aNum1 + aNum2;
}

const exampleInput = {
    num1: 10,
    num2: 0,
    operation: '/',
}

let validOperators = ['+', '-', '*', '/', 'add', 'subtract', 'multiply', 'divide'];
let output = null;

//check if num1 or num2 or operation is null
if (exampleInput.num1 === null || exampleInput.num2 === null || exampleInput.operation === null) {
    console.log('Invalid input, input is null.');
    return;
}

if (isNaN(exampleInput.num1) || isNaN(exampleInput.num2)) {
    console.log('Invalid input, this is not a number.');
    return;
}

if (!validOperators.includes(exampleInput.operation)) {
    console.log('Invalid operation');
    return;
}

// passed main checks
// going to try to do an operation
if ((exampleInput.operation === 'add') || (exampleInput.operation === '+')) {
    output = addNumbers(exampleInput.num1, exampleInput.num2);
} else if ((exampleInput.operation === 'subtract') || (exampleInput.operation === '-')) {
    output = exampleInput.num1 - exampleInput.num2;
} else if ((exampleInput.operation === 'multiply') || (exampleInput.operation === '*')) {
    output = exampleInput.num1 * exampleInput.num2;
} else if ((exampleInput.operation === 'divide') || (exampleInput.operation === '/')) {
    if (exampleInput.num2 === 0) {
        return console.log('Unable to divide by 0.')
    } else {
        output = exampleInput.num1 / exampleInput.num2;
    }
}
console.log(output);