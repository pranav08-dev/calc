// Select elements
const resultScreen = document.getElementById("result");
const buttons = document.querySelectorAll("#calculator-buttons button");

// Variables to store current input and calculation state
let currentInput = "";
let operator = null;
let previousInput = "";

// Function to update the screen
function updateScreen(value) {
    console.log("Updating screen with value:", value); // Debugging
    resultScreen.value = value; // Update the input field with the value
}

// Function to handle button clicks
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonName = button.getAttribute("name");
        console.log("Button clicked:", buttonName); // Debugging

        if (buttonName === "clear") {
            // Clear the screen and reset variables
            currentInput = "";
            previousInput = "";
            operator = null;
            updateScreen("");
        } else if (buttonName === "equals") {
            // Perform calculation
            if (operator && previousInput !== "" && currentInput !== "") {
                const result = calculate(Number(previousInput), Number(currentInput), operator);
                updateScreen(result);
                previousInput = result;
                currentInput = "";
                operator = null;
            }
        } else if (["add", "subtract", "multiply", "divide"].includes(buttonName)) {
            // Set the operator and store the current input
            if (currentInput !== "") {
                operator = buttonName;
                previousInput = currentInput;
                currentInput = "";
            }
        } else {
            // Handle numbers and decimal
            currentInput += button.textContent;
            updateScreen(currentInput);
        }
    });
});

// Function to perform calculations
function calculate(a, b, operator) {
    switch (operator) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return b !== 0 ? a / b : "Error"; // Prevent division by zero
        default:
            return 0;
    }
}
