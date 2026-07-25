const display = document.getElementById("display");

let expression = "";

function updateDisplay() {
    display.value = expression;
}

function calculate() {
    try {
        let result = expression
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-")
            .replace(/%/g, "/100");

        expression = eval(result).toString();
        updateDisplay();
    } catch {
        display.value = "Error";
        expression = "";
    }
}

function handleInput(value) {

    if (value === "AC") {
        expression = "";
        updateDisplay();
        return;
    }

    if (value === "DEL") {
        expression = expression.slice(0, -1);
        updateDisplay();
        return;
    }

    if (value === "=") {
        calculate();
        return;
    }

    expression += value;
    updateDisplay();
}

// --------------------
// Mouse Input
// --------------------

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", () => {

        handleInput(button.innerText);

    });

});

// --------------------
// Keyboard Input
// --------------------

document.addEventListener("keydown", (event) => {

    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        handleInput(key);
        return;
    }

    // Decimal
    if (key === ".") {
        handleInput(".");
        return;
    }

    // Operators
    if (key === "+") {
        handleInput("+");
        return;
    }

    if (key === "-") {
        handleInput("−");
        return;
    }

    if (key === "*") {
        handleInput("×");
        return;
    }

    if (key === "/") {
        event.preventDefault();
        handleInput("÷");
        return;
    }

    // Enter
    if (key === "Enter") {
        event.preventDefault();
        handleInput("=");
        return;
    }

    // Backspace
    if (key === "Backspace") {
        handleInput("DEL");
        return;
    }

    // Escape
    if (key === "Escape") {
        handleInput("AC");
        return;
    }

    // Percentage
    if (key === "%") {
        handleInput("%");
        return;
    }

});