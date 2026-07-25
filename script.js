const display = document.getElementById("display");

let expression = "";

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        if (value === "AC") {
            expression = "";
            display.value = "";
        }

        else if (value === "DEL") {
            expression = expression.slice(0, -1);
            display.value = expression;
        }

        else if (value === "=") {

            try {

                expression = expression
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/−/g, "-");

                expression = eval(expression).toString();

                display.value = expression;

            }

            catch {

                display.value = "Error";
                expression = "";

            }

        }

        else {

            expression += value;
            display.value = expression;

        }

    });

});