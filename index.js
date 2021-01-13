let input = document.getElementById("inputNo").value;
// Making the input function
function addINput(num) {
    document.getElementById("inputNo").value += num;
}
// Making the all clear function
function clsAll() {
    document.getElementById("inputNo").value = "";
}
// Making the last one clear funtion
function cls(){
    document.getElementById("inputNo").value = document.getElementById("inputNo").value.slice(0, -1);
}
function calculating(){
    document.getElementById("inputNo").value = eval( document.getElementById("inputNo").value);
}