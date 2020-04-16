const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// load images

const ground = new Image();
ground.src =
  "https://www.greengrasswater.com/wp-content/uploads/2017/06/coloration-gazon-1.jpg";

const foodImg = new Image();
foodImg.src =
  "https://cdn2.iconfinder.com/data/icons/mammals-ii/300/10-512.png";

let snake = [];

snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

// create the food

let food = {
  x : Math.floor(Math.random()*17+1) * box,
  y : Math.floor(Math.random()*15+3) * box
}

// create the score var

let score = 0;

//control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
  let key = event.keyCode;
  if( key == 37 && d != "RIGHT"){
      
      d = "LEFT";
  }else if(key == 38 && d != "DOWN"){
      d = "UP";
     
  }else if(key == 39 && d != "LEFT"){
      d = "RIGHT";
     
  }else if(key == 40 && d != "UP"){
      d = "DOWN";
     
  }
}
