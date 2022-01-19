//23 importar funciones onSnale y expandSnake
import { onSnake, expandSnake } from './snake.js';

//27 importar randomGridPosition
import { randomGridPosition } from './grid.js';

//20 crear funciones update y draw. Exportar e importar en game.js y la primer posicion de la comida al punto //25 este -> let food = {x: 10, y: 1}; cambia por -> let food = getRandomFoodPosistion();

let food = getRandomFoodPosistion();

//21 cuantos cuadritos crece la serpiente
const EXPANSION_RATE = 1;

export function update() {
  //declaracion para verificar si snake cruza con food
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    //nueva posicion de la comida una vez tocada por snake ej.food = { x: 20, y: 10 };
    food = getRandomFoodPosistion();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

//25 random food position
function getRandomFoodPosistion() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}