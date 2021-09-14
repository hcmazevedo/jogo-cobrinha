let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // Tamanhos dos pixels

function criarBG(){
    context.fillStyle = "lightgreen"; // Cor do Context
    context.fillRect(0, 0, 16 * box, 16 * box); // Desenha o quadro do Jogo
}

criarBG();