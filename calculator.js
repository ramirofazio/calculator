window.onload = function () {
    const screenText = document.getElementsByClassName("screenText");
    const input = document.getElementsByClassName("input");
    let leftNumbers;
    let rightNumbers;
    let operator;
    let result;

    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("click", function (e) {
            if (e.target.value === "=") {
                rightNumbers = screenText[0].innerHTML.slice(leftNumbers.length + 1, screenText[0].innerHTML.length);
                if (operator === "+") {
                    console.log(leftNumbers, "", rightNumbers)
                    result = parseInt(leftNumbers) + parseInt(rightNumbers);
                    console.log(result)
                }
                if (operator === "-") {
                    result = parseInt(leftNumbers) - parseInt(rightNumbers);
                    console.log(result)
                }
                if (operator === "/") {
                    result = parseInt(leftNumbers) / parseInt(rightNumbers);
                    console.log(result)
                }
                if (operator === "*") {
                    result = parseInt(leftNumbers) * parseInt(rightNumbers);
                    console.log(result)
                }
                if (operator === "%") {
                    result = parseInt(leftNumbers) % parseInt(rightNumbers);
                    console.log(result)
                }
                screenText[0].innerHTML = result;
            } else {

                if (e.target.value === "+") {
                    leftNumbers = screenText[0].innerHTML;
                    operator = "+";
                }
                if (e.target.value === "-") {
                    leftNumbers = screenText[0].innerHTML;
                    operator = "-";
                }
                if (e.target.value === "/") {
                    leftNumbers = screenText[0].innerHTML;
                    operator = "/";
                }
                if (e.target.value === "*") {
                    leftNumbers = screenText[0].innerHTML;
                    operator = "*";
                }
                if (e.target.value === "%") {
                    leftNumbers = screenText[0].innerHTML;
                    operator = "%";
                }
                if (e.target.value === "Retr" || e.target.value === "C") {
                    if (e.target.value === "Retr") {
                        screenText[0].innerHTML = "0";
                    } else if (screenText[0].innerHTML.length === 1) {
                        screenText[0].innerHTML = "0";
                    } else {
                        screenText[0].innerHTML = screenText[0].innerHTML.slice(0, -1);
                    }
                } else {
                    if (screenText[0].innerHTML !== "0") {
                        screenText[0].innerHTML += e.target.value;
                    } else {
                        screenText[0].innerHTML = e.target.value;
                    }
                }
            }

        }
        );
    };
};