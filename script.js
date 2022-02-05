// Variables

const numbers = document.querySelectorAll(".data-number");
const operations = document.querySelectorAll(".data-operation");
const acButton = document.querySelector(".btn-ac");
const delButton = document.querySelector(`.btn-del`);
const evalButton = document.querySelector(`.btn-eval`);
const plusButton = document.querySelector(`.btn-plus`);
const dotButton = document.querySelector(`.btn-dot`);
let input = document.querySelector(".input");

// Helper Functions

const renderInput = function(number) {
    if (input.textContent === "" || input.textContent === "0") {
        input.textContent = number;
    } else {
        input.textContent += number;
    }
};

// Delete Button

delButton.addEventListener("click", function() {
    let output = input.textContent.slice(0, -1);
    if (output.length >= 1) {
        input.textContent = output;
    } else {
        input.textContent = 0;
    }
});

// Reset Button

acButton.addEventListener("click", function() {
    document.querySelector(".input").textContent = 0;
});

// Evaluate Button
evalButton.addEventListener("click", function() {
    let output = eval(input.textContent);
    document.querySelector(".input").textContent = output;
});

// Rendering Numbers 0-9

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        const dataNumber = numbers[i].textContent;
        renderInput(dataNumber);
    });
}

// Dot Button

dotButton.addEventListener("click", function() {
    if (input.textContent[input.textContent.length - 1] === ".") {
        return;
    } else if (!input.textContent.includes("+") &&
        !input.textContent.includes("-") &&
        !input.textContent.includes("*") &&
        !input.textContent.includes("/") &&
        input.textContent.includes(".")
    ) {
        return;
    } else if (
        input.textContent[input.textContent.length - 1] === "+" ||
        input.textContent[input.textContent.length - 1] === "-" ||
        input.textContent[input.textContent.length - 1] === "*" ||
        input.textContent[input.textContent.length - 1] === "/"
    ) {
        input.textContent += "0" + dotButton.textContent;
    } else {
        input.textContent += dotButton.textContent;
    }
});

// Rendering Math Operations

for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", function() {
        const dataNumber = operations[i].textContent;
        if (
            input.textContent[input.textContent.length - 1] === "+" ||
            input.textContent[input.textContent.length - 1] === "-" ||
            input.textContent[input.textContent.length - 1] === "*" ||
            input.textContent[input.textContent.length - 1] === "/" ||
            input.textContent === "0"
        ) {
            return;
        } else if (
            input.textContent.includes("+") ||
            input.textContent.includes("-") ||
            input.textContent.includes("*") ||
            input.textContent.includes("/")
        ) {
            input.textContent = eval(input.textContent) + operations[i].textContent;
        } else renderInput(dataNumber);
    });
}