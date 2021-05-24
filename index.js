let input = document.querySelector(".inputNo");
let operators = ["+", "-", "*", "/", "."];

/**
 * Adding the number into input
 * @param {String} num input number in string form
 */
function addInput(num) {
  if (input.value[0] === "0") {
    return input.value = num;
  } else if (input.value[0] === "0" && operators.includes(num)) {
    return input.value = 0;
  } else if (
    operators.includes(num) &&
    operators.includes(input.value[input.value.length - 1])
  ) {
    return input.value = `${input.value.substring(0, input.value.length - 1)}${num}`;
  } else {
    return input.value += num;
  }
}
/**
 * Setting the input to 0
 */
function clsAll() {
    input.value = "0";
}

/**
 * Cut the last number of input number
 */
function cls() {
  if (input.value.length === 1) {
    input.value = 0;
  } else {
    input.value = input.value.slice(0, -1);
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
 * Checking if night mode is on or off by checking nightMode toggle(checkbox)
 */
let nightMode = nightModeSwitch.checked;

/**
 * Function for toggling the dark theme
 */
function nightModeChange() {
  $(".botty").toggleClass("body-dark");
  $(".buttons").toggleClass("buttons-dark");
  $(".inputNo").toggleClass("inputNo-dark");
  $("h1").toggleClass("h1-dark");
}

/**
 * To toggle the dark theme
 */
$("#nightMode").click(() => {
  nightModeChange();
});

/**
 * To fix the issue where the switch is on dark but mode is in day mode after refreshing the page
 */
window.addEventListener("load", () => {
  if (nightMode) {
    nightModeChange();
  }
});
$(".buttons").click((event) => {
    addInput(checkingInput(event));
});

function checkingInput(event) {
    if (event.target.innerHTML === 'AC' || event.target.innerHTML === "C") {
      return "";
    } else if (
      !operators.includes(event.target.innerHTML) &&
      !event.target.value
    ) {
      return event.target.innerHTML;
    } else if (operators.includes(event.target.value)) {
      console.log(event.target.value);
      return event.target.value;
    }
}
