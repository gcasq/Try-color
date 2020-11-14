const balls = document.getElementsByClassName('ball');
//commentary
//elementos : tudo o que está entre tags, tipo 'div', 'p'
//console.log(balls);
//rgb: 0 - 255
function numeroAleatorio(){
    const numero =Math.floor(Math.random()*256); //retorna num aleatorio entre 0 e 255
    return numero;    
};

function corAleatoria(){
    const rgb = `rgb(${numeroAleatorio()}, ${numeroAleatorio()}, ${numeroAleatorio()})`;//transforma em texto!
    return rgb;
}

for(let bola=0;bola<balls.length;bola++){
    balls[bola].style.backgroundColor = corAleatoria();
};

console.log(corAleatoria());