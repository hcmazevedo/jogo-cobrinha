let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // Tamanhos dos pixels
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

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

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x; // Posição inicial X
    let snakeY = snake[0].y; // Posição inicial Y

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop(); // Retira o ultimo elemento do array snake[]

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); // Iniciar o jogo a cada milissegundos
