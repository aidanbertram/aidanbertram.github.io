const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); //html grid
const gridSize = 40;
const rows = 10;
const cols = 10;

function startGame() {
  snake = [{x: 0, y: 200}];
  food = {x: 240, y: 200};
  dx = 40;
  dy = 0;
  gameOver = false;
  placeFood();
  gameLoop();
}

function drawSnakePart(snakePart){
ctx.fillStyle = 'green';
ctx.fillRect(snakePart.x, snakePart.y, gridSize, gridSize);
}

function drawSnake() { 
  snake.forEach(drawSnakePart);
}

function drawFood() { 
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function moveSnake() {
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head); //add element to front
  if (snake[0].x === food.x && snake[0].y === food.y) {
    placeFood(); 
  } else {
    snake.pop(); //remove 1 tail
  }
}

function checkCollision() {
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true; //collided
    }
  }
  //wall collision
  return snake[0].x < 0 || snake[0].x >= gridSize * cols || snake[0].y < 0 || snake[0].y >= gridSize * rows;
}

function placeFood() {
  food = {
    x: Math.floor(Math.random() * cols) * gridSize,
    y: Math.floor(Math.random() * rows) * gridSize
  };
}

function gameLoop() {
  if (gameOver) {
    ctx.font = 'bold 31px Courier';
    ctx.fillStyle = 'white';
    ctx.fillText('Volume Set to '+ (snake.length - 1)+'%', 50, 200);
    return;//stop
  }

  document.getElementById('score').textContent = 'Volume: ' + (snake.length - 1) + '%';

  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    moveSnake();
    drawSnake();
    gameOver = checkCollision();
    gameLoop();
  }, 120);
}

document.addEventListener('keydown', function(e) {
  //controls
  if (e.key === 'ArrowLeft' && dx === 0) {
    dx = -gridSize;
    dy = 0;
  } else if (e.key === 'ArrowRight' && dx === 0) {
    dx = gridSize;
    dy = 0;
  } else if (e.key === 'ArrowUp' && dy === 0) {
    dy = -gridSize;
    dx = 0;
  } else if (e.key === 'ArrowDown' && dy === 0) {
    dy = gridSize;
    dx = 0;
  }
});

placeFood();//plece food then start
gameLoop();