let operand1, operand2, opt;

function inputOperand(num) {
    if (opt) {
        operand2 = num;
    } else {
        operand1 = num;
    }
}

function inputOperator(operator) {
    opt = operator;
}

function clear() {
    operand1 = "";
    operand2 = "";
    opt = undefined;
}

function calculate() {
    let result;
    switch (opt) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
    }
    alert(`${operand1} ${opt} ${operand2} = ${result}`);
    // clear();
}