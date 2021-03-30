let input = document.getElementById("inputNo");
let operators = ["+", "-", "*", "/", "."];
// Making the input function
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
// Making the all clear function
function clsAll() {
    input.value = 0;
}
// Making the last one clear function
function cls(){
    if(input.value.length === 1){
        return input.value = 0;
    }else{
        return input.value = input.value.slice(0, -1);
    }
}
function calculating(){
    input.value = eval(input.value);
}

// Night mode function
const nightModeSwitch = document.getElementById("nightMode");
// Checking if night mode is on or off by checking input checkbox
let nightMode = !nightModeSwitch.checked;
nightModeChange();
nightModeSwitch.addEventListener("change", nightModeChange);
function nightModeChange() {
    const bodyBackground = document.querySelector("body");
    const calculatorBackground = document.getElementById("buttons");
    const inputNo = document.getElementById("inputNo");
    const header = document.querySelector("h1");
    const buttons = document.querySelectorAll("button");
    if (nightMode) {
        // To day mode from night mode
        console.log(`To day mode from night mode ${nightMode}`);
        nightMode = false;
        bodyBackground.style.backgroundColor = "var(--body-background-day)";
        calculatorBackground.style.backgroundColor = "var(--calculator-background-day)";
        inputNo.style.backgroundColor = "var(--inputNo-backgroundColor-day)";
        inputNo.style.color = "var(--inputNo-textColor-day)";
        header.style.color = "var(--header-textColor-day)";
        buttons.forEach(button => {
            button.style.color = "var(--button-textColor-day)";
        });
    } else {
        // To night mode from day mode
        console.log(`To night mode from day mode ${nightMode}`);
        nightMode = true;
        bodyBackground.style.backgroundColor = "var(--body-background-night)";
        calculatorBackground.style.backgroundColor = "var(--calculator-background-night)";
        inputNo.style.backgroundColor = "var(--inputNo-backgroundColor-night)";
        inputNo.style.color = "var(--inputNo-textColor-night)";
        header.style.color = "var(--header-textColor-night)";
        buttons.forEach(button => {
            button.style.color = "var(--button-textColor-night)";
        });
    }
}