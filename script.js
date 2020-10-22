function calculate(num) {
  document.getElementById("inputNo").value = document.getElementById("inputNo").value + num;
}
function calculatingInput() {
  document.getElementById("inputNo").value = eval(document.getElementById("inputNo").value);
}