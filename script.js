const balls = document.getElementsByClassName('ball');
const textoCor = document.getElementById('rgb-color');
const cores = [];
const textoResposta = document.getElementById('answer');
const botaoReiniciar = document.getElementById('reset-game');
const gab = document.getElementsByClassName('gabarito');
//commentary
//elementos : tudo o que está entre tags, tipo 'div', 'p'
//console.log(balls);
//rgb: 0 - 255
function numeroAleatorio(mul){
    const numero =Math.floor(Math.random()*mul); //retorna num aleatorio entre 0 e 255
    return numero;    
};

function corAleatoria(){
    const rgb = `rgb(${numeroAleatorio(256)}, ${numeroAleatorio(256)}, ${numeroAleatorio(256)})`;//transforma em texto!
    return rgb;
}

function cliqueNaBola(event){
    const corSelecionada = event.target.style.backgroundColor;
    if(corSelecionada===textoCor.textContent){
        textoResposta.textContent = 'Acertou!';
    }
    else{
        textoResposta.textContent = 'Errou! tente novamente';
    }
}

for(let bola=0;bola<balls.length;bola+=1){
    const cor = corAleatoria();
    balls[bola].style.backgroundColor = cor;
    cores[bola] = cor;
    balls[bola].addEventListener('click', cliqueNaBola);
};

function addCorAleatoria(){
    textoCor.textContent = cores[numeroAleatorio(6)]
};

function preencheGab(){
    var aux = textoCor.textContent;
    var a = aux.split("(")[1].split(")")[0];
    a = a.split(",");
    gab[0].style.backgroundColor = "rgb("+a[0]+",0,0)";
    gab[1].style.backgroundColor = "rgb(0,"+a[1]+",0)";
    gab[2].style.backgroundColor = "rgb(0,0,"+a[2]+")";
};

addCorAleatoria();
preencheGab();


function reiniciaJogo(){
    window.location.reload();
}

botaoReiniciar.addEventListener('click',reiniciaJogo);

console.log(textoCor);
