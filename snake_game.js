const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// load images

const ground = new Image();
ground.src =
  "https://s3.amazonaws.com/mk-website-media/wp-content/uploads/2018/10/19000949/Wallpaper-Kemra-ArtificialTurf-1-855x1024.jpg";

const foodImg = new Image();
foodImg.src =
  "https://cdn.iconscout.com/icon/premium/png-256-thumb/rat-75-1115916.png";

let snake = [];

snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

// create the food

let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
};

// create the score var

let score = 0;

//control the snake

let d;

document.addEventListener("keydown", direction);

function direction(event) {
  let key = event.keyCode;
  if (key == 37 && d != "RIGHT") {
    d = "LEFT";
  } else if (key == 38 && d != "DOWN") {
    d = "UP";
  } else if (key == 39 && d != "LEFT") {
    d = "RIGHT";
  } else if (key == 40 && d != "UP") {
    d = "DOWN";
  }
}
// cheack collision function
function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
  return false;
}

// draw everything to the canvas

function draw() {
  ctx.drawImage(ground, 0, 0, 700, 700);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 6;
  ctx.strokeRect(box, 3 * box, 544, 480);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? "black" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.drawImage(foodImg, food.x, food.y, box, box);

  // old head position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // which direction
  if (d == "LEFT") snakeX -= box;
  if (d == "UP") snakeY -= box;
  if (d == "RIGHT") snakeX += box;
  if (d == "DOWN") snakeY += box;

  // if the snake eats the food
  if (snakeX == food.x && snakeY == food.y) {
    score++;
    
    let maxScore =  Math.max(score);
    localStorage.setItem('maxScore', maxScore )
    
    console.log(maxScore)

    food = {
      x: Math.floor(Math.random() * 17 + 1) * box,
      y: Math.floor(Math.random() * 15 + 3) * box,
    };
    // we don't remove the tail
  } else {
    // remove the tail
    snake.pop();
  }

  // add new Head

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  // game over

  if (
    snakeX < box ||
    snakeX > 17 * box ||
    snakeY < 3 * box ||
    snakeY > 17 * box ||
    collision(newHead, snake)
  ) {
    clearInterval(game);
  }

  snake.unshift(newHead);

  // write the score
  let MaxScore = localStorage.getItem('maxScore');
  ctx.fillStyle = "white";
  ctx.font = "40px Changa one";
  ctx.fillText("Score: " + score, box, 1.7 * box);
  ctx.fillText("Best Score: "+MaxScore, 10.5*box, 1.7 * box);
}

// call draw function every 100 ms

let game = setInterval(draw, 100);
