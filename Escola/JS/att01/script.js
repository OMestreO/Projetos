const input = document.getElementById('input');
const sent = document.getElementById('sent');

sent.addEventListener('click', ()=>{
  var dados = input.value;
  var contagemDosDados = dados.length;
  var i = 0;
  var x = 0;

  for(i = 0; i <contagemDosDados; i++){
    if(dados[i].toUpperCase() == "V"){
      x++;
    }
  }
  if(x == 1 || x == 2){
    alert("Aluno passou para o GRUPO 3")
  }
  if(x == 3 || x == 4){
    alert("Aluno passou para o GRUPO 2")
  }
  if(x == 5 || x == 6){
    alert("Aluno passou para o GRUPO 1")
  }
  if(x < 1){
    alert("O aluno não se classificou")
  }
  if(x > 7){
    alert("Dado invalido")
  }

  console.log(dados)
  console.log(contagemDosDados)
})