document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display input');
    const resultDisplay = document.createElement('div');
    resultDisplay.className = 'result';
    display.parentNode.appendChild(resultDisplay);
    const buttons = document.querySelectorAll('input[type="button"]');
    let currentInput = '';
    let expression = '';
    let operator = '';
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            handleInput(this.value);
        });
    });

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (isFinite(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            handleInput(key);
        } else if (key === 'Enter') {
            handleInput('=');
        } else if (key === 'Backspace') {
            handleInput('del');
        } else if (key === 'Escape') {
            handleInput('AC');
        }
    });

    function handleInput(value) {
        if (isFinite(value) || value === '.') {
            currentInput += value;
            expression += value;
            display.value = expression;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            } else {
                firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
                resultDisplay.textContent = firstOperand;
            }
            operator = value;
            currentInput = '';
            expression += ' ' + operator + ' ';
            display.value = expression;
        } else if (value === '=') {
            if (firstOperand !== null && operator !== '') {
                const finalResult = calculate(firstOperand, parseFloat(currentInput), operator);
                display.value = finalResult;
                resultDisplay.textContent = '';
                firstOperand = null;
                operator = '';
                currentInput = '';
                expression = '';
            }
        } else if (value === 'AC') {
            display.value = '';
            resultDisplay.textContent = '';
            currentInput = '';
            firstOperand = null;
            operator = '';
            expression = '';
        } else if (value === 'del') {
            currentInput = currentInput.slice(0, -1);
            expression = expression.slice(0, -1);
            display.value = expression;
        }
    }

    function calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    }
});
