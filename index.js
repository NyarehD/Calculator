let input = document.getElementById("inputNo");
let operators = ["+", "-", "*", "/", "."];
// Making the input function
function addINput(num) {
    if(input.value[0] == 0){
        return input.value = num;
    }else if(input.value[0] == 0 && operators.includes(num)){
        return input.value = 0;
    }else if(operators.includes(num) && operators.includes(input.value[input.value.length-1])){
        return input.value = `${input.value.substring(0, input.value.length-1)}${num}`;
    }else{
        return input.value += num;
    }
}
// Making the all clear function
function clsAll() {
    input.value = 0;
}
// Making the last one clear funtion
function cls(){
    if(input.value.length == 1){
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
    if(nightMode){
        // To daymode from nightmode
        console.log(`To daymode from nightmode ${nightMode}`);
        nightMode = false;
        bodyBackground.style.backgroundColor = "#ffd60a";
        calculatorBackground.style.backgroundColor = "#fac720";
        inputNo.style.backgroundColor = "rgb(255, 255, 255)";
        header.style.color = "rgb(49, 49, 49)";
    }else{
        // To nightmode from daymode
        console.log(`To nightmode from daymode ${nightMode}`);
        nightMode = true;
        bodyBackground.style.backgroundColor = "rgb(31, 31, 31)";
        calculatorBackground.style.backgroundColor = "#3d3d3bbd";
        
        header.style.color = "goldenrod";
    }
})