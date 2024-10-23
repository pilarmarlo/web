/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/
let intervalId = window.setInterval(function () {
    //console.log("Clock isn't working yet!");
}, 10000);

function stopClock() { 
    clearInterval(intervalId);
}
/*****************************************/

window.onload = function () { 
   const miReloj = document.getElementById('clock');
   console.log(miReloj);
   console.dir(miReloj);
   miReloj.innerText= "hola, hola";

   const headers = document.getElementsByTagName('div');
   console.dir(headers);
}

function randInt(min,max){
    return Math.floor(Math.random()*(max - min + 1)+ min)
}

function changeEmojiColor(elem){
    const r = randInt(0,225);
    const g = randInt(0,255);
    const b = randInt(0,255);
    elem.style.fill = 'rgb(' + r + ',' + g + ',' + b + ')';
}

function hover(elem){
    elem.style.fill = '#B2D2FF';
}

function rest(elem){
    elem.style.fill ='white';
}

function noche(elem){
    const foto = document.getElementsByTagName("main");
    foto[0].style.backgroundImage = "url('../assets/img/noche-fria.jpg')";

    const cabecera = document.getElementsByTagName("header");
    cabecera[0].style.backgroundColor = 'black';

    const pie = document.getElementsByTagName("footer");
    pie[0].style.backgroundColor = 'black';

    const textos = document.getElementsByTagName("h1");
    textos[0].style.color = 'white';

    const textofooter = document.getElementsByTagName("h2")
    textofooter[0].style.color = 'white'; 

    const reloj = document.getElementById("clock");
    reloj.style.color = 'white'; 

    const sol = document.getElementsByTagName("svg.bi.bi-moon-stars-fill");
    sol.innerhtml = 
}

