var cursor = document.getElementById('cursor');

document.addEventListener("mousemove", (e) =>{
    var x = e.clientX;
    var y = e.clientY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    cursor.style.display = "block";

});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
})

const btn = document.getElementById('btn');
const mostra = document.getElementById('back-cube');
const btn2 = document.getElementById('fecha-modal');

btn.addEventListener('click', () => {
  mostra.style.opacity = "1";
  mostra.style.visibility = "visible";
  
  btn2.style.opacity = "1";
  btn2.style.visibility = "visible";
})

btn2.addEventListener('click', () => {
  mostra.style.opacity = "0";
  mostra.style.visibility = "hidden";
  
  btn2.style.opacity = "1";
  btn2.style.visibility = "hidden";
})