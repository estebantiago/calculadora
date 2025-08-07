var num1 = document.getElementById('number1')
var num2 = document.querySelector('input#number2')
var res = document.querySelector('div#res')

function somar() {

    var n1 = Number(num1.value)
    var n2 = Number(num2.value)

    res.innerHTML = `Resultado: ${n1 + n2}`

}
function subtrair() {
    
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    res.innerHTML = `Resultado: ${n1 - n2}`
}
function dividir() {
   
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    res.innerHTML = `Resultado: ${n1 / n2}`
}
function multiplicar() {
    
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    res.innerHTML = `Resultado: ${n1 * n2}`
}

function limpar() {
   
    res.innerHTML = ''
    num1.value = ''
    num2.value = ''

}
