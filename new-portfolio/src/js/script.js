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

const btnCube = document.getElementById('btn-cube');
const cube = document.getElementById('back-cube');

const btnAbout = document.getElementById('btn-about');
const about = document.getElementById('about');

const btnPortfolio = document.getElementById('btn-portfolio');
const portfolio = document.getElementById('portfolio');
const acces = document.getElementById('acces');

const btnContato = document.getElementById('btn-contato');
const contato = document.getElementById('contato');

var Clicks = {
  ClickCube : 0,
  ClickAbout : 0,
  ClickPortfolio : 0,
  ClickContato : 0,
  ClickAcces : 0


}

var sumir = (countClick , x) =>{

  if(countClick === 0){

    x.style.opacity = "0";
    x.style.visibility = "hidden";
    
    }
}

btnCube.addEventListener('click', () => {

  cube.style.opacity = "1";
  cube.style.visibility = "visible";
  
  Clicks.ClickCube =Clicks.ClickCube + 1;

  countClick = Clicks.ClickCube % 2;

  about.style.opacity = "0";
  about.style.visibility = "hidden";

  portfolio.style.opacity = "0";
  portfolio.style.visibility = "hidden";

  acces.style.opacity = "0";
  acces.style.visibility = "hidden";
  
  Clicks.ClickAbout = 0
  Clicks.ClickPortfolio = 0
  Clicks.ClickContato = 0
  Clicks.ClickAcces = 0

  sumir(countClick, cube)

  }
)


btnAbout.addEventListener('click',() =>{
    
 about.style.opacity = "1";
 about.style.visibility = "visible";

 Clicks.ClickAbout = Clicks.ClickAbout + 1;

  countClick = Clicks.ClickAbout % 2;

  cube.style.opacity = "0";
  cube.style.visibility = "hidden";

  portfolio.style.opacity = "0";
  portfolio.style.visibility = "hidden";

  acces.style.opacity = "0";
  acces.style.visibility = "hidden";

  Clicks.ClickCube = 0
  Clicks.ClickPortfolio = 0
  Clicks.ClickContato = 0
  Clicks.ClickAcces = 0

  sumir(countClick, about)

  }
)

btnPortfolio.addEventListener('click',() =>{
  portfolio.style.opacity = "1";
  portfolio.style.visibility = "visible";

  acces.style.opacity = "1";
  acces.style.visibility = "visible";

  Clicks.ClickPortfolio = Clicks.ClickPortfolio + 1;
  countClick = Clicks.ClickPortfolio % 2;
  
  Clicks.ClickAcces = Clicks.ClickAcces + 1;
  countClick2 = Clicks.ClickAcces % 2;

  cube.style.opacity = "0";
  cube.style.visibility = "hidden";

  about.style.opacity = "0";
  about.style.visibility = "hidden";

  Clicks.ClickCube = 0
  Clicks.ClickAbout = 0
  Clicks.ClickContato = 0

  sumir(countClick, portfolio)
  sumir(countClick2, acces)

  }

)