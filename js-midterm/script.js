const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); //html grid
const gridSize = 40;
const rows = 12;
const cols = 12;

function startGame() {
  score = Math.floor(Math.random() * 101);
  snake = [{x: 0, y: 200}];
  placeFood();
  placeantiFood();
  placedoneFood();
  dx = 40;
  dy = 0;
  gameOver = false;
  placeFood();
  gameLoop();
}
document.querySelector('.game-button').addEventListener('click', function() {
  var info = document.getElementById('colorDescription');

    info.style.display = 'block';

});


function drawSnakePart(snakePart){
ctx.fillStyle = 'green';
ctx.fillRect(snakePart.x, snakePart.y, gridSize, gridSize);
}

function drawSnake() { 
  snake.forEach(drawSnakePart);
}

function drawFood() { 
  ctx.fillStyle = 'blue';
  ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function drawantiFood() { 
  ctx.fillStyle = 'red';
  ctx.fillRect(antifood.x, antifood.y, gridSize, gridSize);
}

function drawdoneFood() { 
  ctx.fillStyle = 'yellow';
  ctx.fillRect(donefood.x, donefood.y, gridSize, gridSize);
}

function moveSnake() {
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head); //add element to front
  if (snake[0].x === food.x && snake[0].y === food.y) {
    score = score+1;
    placeFood(); 
  } else if (snake[0].x === antifood.x && snake[0].y === antifood.y) {
      placeantiFood();
    score = score-1;
  }else if (snake[0].x === donefood.x && snake[0].y === donefood.y) {
    placedoneFood();
    score = Math.floor(Math.random() * 101)
  }
  else {
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

function placeantiFood() {
  antifood = {
    x: Math.floor(Math.random() * cols) * gridSize,
    y: Math.floor(Math.random() * rows) * gridSize
  };
}

function placedoneFood() {
  donefood = {
    x: Math.floor(Math.random() * cols) * gridSize,
    y: Math.floor(Math.random() * rows) * gridSize
  };
}

function gameLoop() {
  if (gameOver) {
    ctx.font = 'bold 31px Courier';
    ctx.fillStyle = 'white';
    ctx.fillText('Volume Set to '+ (score)+'%', 50, 200);
    return;//stop
  }

  document.getElementById('score').textContent = 'Volume: ' + (score) + '%';

  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawantiFood();
    drawdoneFood();
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

placeFood();
placedoneFood();
placeantiFood();//plece foods then start
gameLoop();