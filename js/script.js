let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // Tamanhos dos pixels
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 +1) * box
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

function drawfood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

// Adiciona o evento de movimento do jogo
document.addEventListener('keydown', update);

function update (event){
    if(event.KeyCode == 37 && direction != "right") direction = "left";
    if(event.KeyCode == 38 && direction != "down") direction = "up";
    if(event.KeyCode == 39 && direction != "left") direction = "right";
    if(event.KeyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){

    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Final do Jogo :(');
        }
    }
    criarBG();
    criarCobrinha();
    drawfood();

    let snakeX = snake[0].x; // Posição inicial X
    let snakeY = snake[0].y; // Posição inicial Y

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }

    snake.pop(); // Retira o ultimo elemento do array snake[]

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); // Iniciar o jogo a cada milissegundos
