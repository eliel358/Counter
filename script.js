function increase(){
    input = document.getElementById("counter").value
    document.getElementById("counter").value = eval(input + "+" + 1)
}
function decrease(){
    input = document.getElementById("counter").value
    document.getElementById("counter").value = eval(input + "-" + 1)
}
function reset(){
    document.getElementById("counter").value = 0
}