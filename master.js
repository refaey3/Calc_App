let themeContainer = document.querySelector(".theme-cont");
let ball = document.querySelector(".ball");
let couterBall = 1;
let buttoms = document.querySelectorAll("button");
let output = document.querySelector(".output");
let number = document.querySelector(".number");

themeContainer.addEventListener("click", () => {
  if (couterBall == 1) {
    ball.style.left = `29px`;
    couterBall++;
  } else if (couterBall == 2) {
    ball.style.left = `59px`;
    couterBall++;
  } else if (couterBall == 3) {
    ball.style.left = `1px`;
    couterBall = 1;
  }
});

let currentInput = "";
let lastCharOp = false;

buttoms.forEach((buttom) => {
  buttom.addEventListener("click", function (e) {
    const value = e.target.textContent;
    if (e.target.classList.contains("shp-buutom")) {
      if (e.target.classList.contains("operation") && currentInput === "") {
        return;
      } else {
        // Firt Chek to the dot
        if (currentInput.includes(".") && value == ".") {
          //1.2  +  2.5
          if (/[+\-*/]/.test(currentInput)) {
            let count = (currentInput.match(/\./g) || []).length;
            if (count == 1) {
              currentInput += value;
            } else {
              return;
            }
          }
        } else if (/[+\-*/]/.test(value)) {
          if (currentInput !== "" && !/[+\-*/]$/.test(currentInput)) {
            try {
              let result = eval(currentInput); 
              currentInput = result.toString(); 
              currentInput += value; 
              lastCharOp = true;
            } catch (error) {
              number.innerHTML = "Error";
              currentInput = "";
              lastCharOp = false;
              return;
            }
          } else if (!lastCharOp && currentInput === "") {
            currentInput += value;
          } else if (
            lastCharOp &&
            currentInput !== "" &&
            /[+\-*/]$/.test(currentInput)
          ) {
            // 9+9
            currentInput = currentInput.slice(0, -1) + value;
          }
        } else {
          currentInput += value;
        }
      }
    }

    number.innerHTML = currentInput;
  });
});
// Handel Renove and reset
document.querySelector(".del").addEventListener("click", function () {
  currentInput = currentInput.slice(0, -1);
  number.innerHTML = currentInput || "0";
  lastCharOp = /[+\-*/]$/.test(currentInput);
});
document.querySelector(".rest").addEventListener("click", () => {
  currentInput = "";
  number.innerHTML = "0";
  lastCharOp = false;
});

// Handel equal
document.querySelector(".equal").addEventListener("click", () => {
  try {
    if (currentInput !== "" && !/[+\-*/]$/.test(currentInput)) {
      let result = eval(currentInput);
      currentInput = result.toString();
      number.innerHTML = currentInput;
      lastCharOp = false;
    }
  } catch (error) {
    number.innerHTML = "Error";
    currentInput = "";
    lastCharOp = false;
  }
});
