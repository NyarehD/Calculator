let input = document.getElementById("inputNo");
let operators = ["+", "-", "*", "/", "."];
// Making the input function
function addINput(num) {
    if (input.value[0] === 0) {
        return input.value = num;
    } else if (input.value[0] === 0 && operators.includes(num)) {
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
let nightMode = false;
nightModeSwitch.addEventListener("change", ()=>{
    const bodyBackground = document.querySelector("body");
    const calculatorBackground = document.getElementById("buttons");
    const inputNo = document.getElementById("inputNo");
    const header = document.querySelector("h1");
    const buttons = document.querySelectorAll("button");
    if(nightMode) {
        // To day mode from night mode
        console.log(`To day mode from night mode ${nightMode}`);
        nightMode = false;
        bodyBackground.style.backgroundColor = "#ffd60a";
        calculatorBackground.style.backgroundColor = "#ffde71";
        inputNo.style.backgroundColor = "rgb(255, 255, 255)";
        inputNo.style.color = "rgb(44, 42, 42)";
        header.style.color = "rgb(49, 49, 49)";
        buttons.forEach(button => {
            button.style.color = "rgb(39, 39, 39)";
        });
    }else{
        // To night mode from day mode
        console.log(`To night mode from day mode ${nightMode}`);
        nightMode = true;
        bodyBackground.style.backgroundColor = "rgb(31, 31, 31)";
        calculatorBackground.style.backgroundColor = "#3d3d3bbd";
        inputNo.style.backgroundColor = "rgb(66, 66, 66)";
        inputNo.style.color = "goldenrod";
        header.style.color = "goldenrod";
        buttons.forEach(button => {
            button.style.color = "goldenrod";
        });
        
    }
})