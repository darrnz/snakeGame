//12 iportar snake speed -> 13 importar updateSnake y drawSnake (agrear a funciones respectivas) 
import { 
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,

  //32 en snke importar las funciones 
  getSnakeHead,
  snakeIntersection
} from './snake.js';

//33 importar outsideGrid
import { outsideGrid } from './grid.js'

//20 importar draw y update de food y agregar a las funciones respectivas
import { update as updateFood, draw as drawFood } from './food.js';

//5
let lastRenderTime = 0;

//29 declarar primer estado de gameOver en false 
let gameOver = false;

//16 declarar gameboard y mandarlo por la funcion drawsnake
const gameBoard = document.getElementById('game-board');

//8 -> 12 llevarse esta variable a snake.js e importar aqui
//const SNAKE_SPEED = 5

//1
function main(currentTime) {

  //29.1 revision si gameover 
  
    // borrar despues del paso 33 y probar la alert con las funciones outsideGrid y snakeIntersection
    //if (gameOver) {
    //return alert('GAME OVER');
    //}

    //34. Reset the game
    if (gameOver) {
      if(confirm('You lost. Press ok to restart'))  {
        window.location = '/'
      }
      return;
    }

  //2 se usa para decirle cuando puedo tener el siguiente frame
  window.requestAnimationFrame(main);
  //7 en segundos
  const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
  //8.1
  if (secondsSinceLastRender < 1 /SNAKE_SPEED) return
  //6 tiempo desde el ultimo render
  lastRenderTime = currentTime;
  //3 tiempo en milisegundos
 // console.log('Render ', currentTime);

  //9 funciones para renderizar elementos en videojuegos
  update() //logica del jeugo
  draw() //dibujo
}

//4 para inciar el primer render
window.requestAnimationFrame(main);

//10 crear funcion update

function update() {
  updateSnake();
  updateFood();

  //28 funcion que revisa si perdemos
  checkDeath();
}

//11 crear funcion draw
function draw() {
  //17 borrar piezas anteriores
  gameBoard.innerHTML = ''
  //15.1 agregar gameBoard para mandarlo a la funcion en snake.js
  drawSnake(gameBoard);
  drawFood(gameBoard)
}

//28 funcion checkDeath con las funciones para revisar si sale del tablero (en grid.js -> outsideGrid) o choca con su cuerpo (en snake.js -> snakeIntersection)
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

