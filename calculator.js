// This line "loads" the prompt package and puts it into a variable we can use called prompt
// Lines like this (that use require()) typically go on the top of the file
const prompt = require('prompt');

//putting this fx here, outside of the fx below so that it can be used in the future..thinking of scope
function addNumbers(aNum1, aNum2) {
    return aNum1 + aNum2;
}

const calculateUserInput = function(error, promptInput) {
    console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);
    // console.log(promptInput)
    // console.log(promptInput.num1)

    //do the calculation
    const exampleInput = {
        num1: Number(promptInput.num1), // converts string to number
        num2: Number(promptInput.num2),
        operation: promptInput.operation,
    }

    let validOperators = ['+', '-', '*', '/', 'add', 'subtract', 'multiply', 'divide'];
    let output = null;

    //check if num1 or num2 or operation is null
    if (exampleInput.num1 === null || exampleInput.num2 === null || exampleInput.operation === null) {
        console.log('Invalid input, input is null.');
        return;
    }
    // need to check if it's string bc of type coercion makes it a number
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

    // Questions to ask and answer:
    // What is promptInput? Object that contains data from the user. 
    // What data type? What does it hold? What does it represent? Hash also known as Object in JS. It holds keys: num1, num2, and operation with it's coordinted values entered by the user. It represents the key:value pairs.
    // How do we read values from it? What syntax? Using the dot chain method, for example: promptInput.num1
    // How can we use it? To build the const exampleInput
    // Can we call our existing functions now, inside of this function? Yes, on line 43.
}

//start the prompt
prompt.start();

//collect two numbers (num1 and num2) and an operation
//then call the function `calculator` with the user input
prompt.get(['num1', 'num2', 'operation'], calculateUserInput);