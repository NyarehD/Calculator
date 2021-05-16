let input = document.querySelector(".inputNo");
let operators = ["+", "-", "*", "/", "."];

/**
 * Adding the number into input
 * @param {String} num input number in string form
 * @returns the input string into display
 */
function addInput(num) {
    if (input.value[0] === '0') {
        console.log("run");
        return input.value = num;
    } else if (input.value[0] === '0' && operators.includes(num)) {
        return input.value = 0;
    } else if (operators.includes(num) && operators.includes(input.value[input.value.length - 1])) {
        return input.value = `${input.value.substring(0, input.value.length - 1)}${num}`;
    } else {
        return input.value += num;
    }
}
/**
 * Setting the input to 0
 */
function clsAll() {
    input.value = 0;
}
/**
 * Cut the last number of input number
 * @returns input number in which the last one is cut or 0 when it has no more to be cut
 */
function cls() {
    if (input.value.length === 1) {
        return input.value = 0;
    } else {
        return input.value = input.value.slice(0, -1);
    }
}
/**
 * Calculating the input number
 */
function calculating() {
    input.value = eval(input.value);
}

// Night mode function
const nightModeSwitch = document.getElementById("nightMode");
/**
 * Checking if night mode is on or off by checking input checkbox
 */
let nightMode = nightModeSwitch.checked;
nightModeSwitch.addEventListener("change", nightModeChange);
/**
 * toggling the night mode
 */
function nightModeChange() {
    const bodyBackground = document.querySelector(".botty");
    const calculatorBackground = document.querySelector(".buttons");
    const inputNo = document.querySelector(".inputNo");
    const header = document.querySelector("h1");
    const butts = document.querySelectorAll(".butt");
    bodyBackground.classList.toggle("body-dark");
    calculatorBackground.classList.toggle("buttons-dark");
    inputNo.classList.toggle("inputNo-dark");
    header.classList.toggle("h1-dark");
    console.log("Changed");
}