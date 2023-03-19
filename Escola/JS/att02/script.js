const potencia = document.getElementById("potencia");
const somar = document.getElementById("somar");

somar.addEventListener('click', ()=>{

  var potencias = potencia.value;
  potencias = potencias.split(',');
  var contDePotencias = potencias.length;
  var i = 0

  function calculador(num) {
    nummerosCaracteres = num.length;
    var potencia = (num.substr(nummerosCaracteres - 1));
    var base =  (num.substr(0,nummerosCaracteres -1));
    return base ** potencia;
    

  };

  for(i = 0; i <contDePotencias; i++){
    var numeros = potencias[i]

    console.log(calculador(numeros));

  };

  

  
})