let display = document.getElementById("calculator_display_data");
let keys = document.getElementsByClassName("calculator_button");
let calculator = document.getElementById("calculator");

const calculate = (n1, operator, n2) => {
  let result = "";

  if (operator == "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator == "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }
  return result;
};

let keysArray = Array.from(keys);

keysArray.forEach((key) => {
  key.addEventListener("click", (e) => {
    //     console.log(e.target.textContent);

    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.value;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (
        displayedNum === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.value = keyContent;
      }
      {
        display.value = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = "number";
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key");

      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue && operator && previousKeyType !== "operator") {
        const calcValue = calculate(firstValue, operator, secondValue);
        display.value = calcValue;

        // update calculated value as firstValue
        calculator.dataset.firstValue = displayedNum;
      } else {
        calculator.dataset.firstValue = displayedNum;
      }

      key.class.add("is-depressed");
      // add custom attributes
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    if (action === "clear") {
      console.log("clear key");

      if (key.textContent === "AC") {
        calculate.dataset.firstValue = "";
        calculate.dataset.modValue = "";
        calculate.dataset.operator = "";
        calculate.dataset.previousKeyType = "";
      } else {
        key.textContent = "AC";
      }
      display.value = 0;
      calculator.dataset.previousKeyType = "clear";
    }

    if (action !== "clear") {
      const clearButton = calculator.querySelector("[data-action=clear]");
      clearButton.textContent = "CE";
    }

    if (action === "calculate") {
      console.log("equal key");
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue) {
        if (previousKeyType == "calculate") {
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }
        display.value = calculate(firstValue, operator, secondValue);
      }
      // set modvalue attribute
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = calculate;
    }
  });
});
