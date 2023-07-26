function increase(){
    counter = document.getElementById('counter').value
    document.getElementById('counter').value = eval(counter +'+'+ 1)
}
function decrease(){
    counter = document.getElementById('counter').value
    document.getElementById('counter').value = eval(counter +'-'+ 1)
}
function reset(){
    counter = document.getElementById('counter').value
    document.getElementById('counter').value = 0
}