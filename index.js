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