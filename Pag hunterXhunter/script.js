var mostra = document.querySelector('#btn');

mostra.addEventListener('click', ()=>{

    var md = document.querySelector('.modal')

    md.style.opacity = '1';
    md.style.visibility =  'visible';
})

var esconder = document.querySelector('#btn2')

esconder.addEventListener('click',()=>{
    
    var md = document.querySelector('.modal')

    md.style.opacity = '0';
    md.style.visibility =  'hidden';
})