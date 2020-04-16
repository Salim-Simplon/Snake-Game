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
