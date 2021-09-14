let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // Tamanhos dos pixels
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = "lightgreen"; // Cor do Context
    context.fillRect(0, 0, 16 * box, 16 * box); // Desenha o quadro do Jogo
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();