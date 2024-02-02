const botaoPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const nomeCapitulo = document.getElementById("capitulo");
const numeroCapitulos = 10;
let estaTocando = 0;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');

}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar(){
    if(estaTocando === 0){
        tocarFaixa();
        estaTocando = 1;
    }
    else{
        pausarFaixa();
        estaTocando = 0;
    }
} 

function trocarNomeFaixa(){
    nomeCapitulo.innerText = "Capítulo " + capituloAtual;
}

function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    }else{
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    estaTocando = 1;
    trocarNomeFaixa();
}

function voltarFaixa(){
    if(capituloAtual === numeroCapitulos || capituloAtual <= 1){
        capituloAtual = 1;
    }else{
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    estaTocando = 1;
    trocarNomeFaixa();
}


botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
