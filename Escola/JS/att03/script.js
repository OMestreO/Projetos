const num1 = document.getElementById("primeiroNumero");
const num2 = document.getElementById("segundoNumero");
const botao = document.getElementById("botao");
var calc = document.getElementById("calculo");


botao.addEventListener("click", ()=>{
  let c = num1.value *2 -num2.value

  console.log(c)

  calc.innerHTML = `A media e mediana é = ${c}`
})