let display = document.getElementById('display');
function clearDisplay() {
    display.value = '';
}

function deleteLas() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function calculate() {
    try {
        display.value = eval(display.value);
    }catch {
        display.value = 'Error';
    }
}

function calculateSqrt() {
    display.value = 
    Math.sqrt(parseFloat(display.value));
}

function calculateSin() {
    display.value = 
    Math.sin(parseFloat(display.value) * Math.PI /180).toFixed(2); 
}

function calculateCos() {
    display.value = 
    Math.cos(parseFloat(display.value) * Math.PI /180).toFixed(2);
}

function calculateTan() {
    display.value = 
    Math.tan(parseFloat(display.value) * Math.PI /180).toFixed(2);
}

function calculateLog() {
    display.value = 
    Math.log10(parseFloat(display.value)).toFixed(2);
}