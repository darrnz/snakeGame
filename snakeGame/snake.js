import { getInputDirection } from "./input.js";

//12 traer de game.js
export const SNAKE_SPEED = 5;
//14 primer posicion snake
const snakeBody = [{ x: 10, y: 11 }];

//23 se declara variable newSegments, para ir agregando cuantas piezas al tocar la comida
let newSegments = 0;

//13 funciones draw y update snake eimportar a game.js
//como ejmplo consolelog('update snake') y (drawsnake) y cambiar velocidad
// esta funcion ayudara que las piezas de la serpiente se dibjen en la posicion de la pieza de adelante y desaparecer el ultimo pedazo
export function update() {
  console.log("update snake");

  //24 addSegments
  addSegments();

  //17.1 funcion inputDirection de input.js importar. HAcer una variable para igualarla en el resultado despues del loop -> borrar el ejemplo snakeBody y dejar solo un objet
  const inputDirection = getInputDirection();
  //16 loop para dibujar serpiente
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    console.log(snakeBody);
    snakeBody[i + 1] = { ...snakeBody[i] };
    console.log(snakeBody);
  }

  // el +=1 hardcodeado para el ejemplo.. se va a mover hacia abajo porque estan voletados los ejes
  console.log(snakeBody[0]);
  snakeBody[0].x += inputDirection.x; //0 se cambiaron al meter la varible inputDirection
  snakeBody[0].y += inputDirection.y; //1
}

export function draw(gameBoard) {
  //console.log('draw snake')
  //15 loop para dibujar serpiente
  // gameboard se declara en game.js
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    //16.1 original como en el comentario, se cambiaron porque los ejes estaban al revez, en el punto 16 la serpiete iba para abajo en lugar de la derecha
    // snakeElement.style.gridRowStart = segment.x;
    // snakeElement.style.gridColumnStart = segment.y;
    //
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

//23 declaracion de funciones expandSnake y onSnake e equalPositions, epxortar a food.js
export function expandSnake(amount) {
  newSegments += amount;
}

//ignoreHead= false se agrega en el punto 31
export function onSnake(position, { ignoreHead = false } = {}) {

  //cuerpo de funcion antes del 32
  //return snakeBody.some((segment) => {
  //  return equalPositions(segment, position);
  //});

  //cuerpo de funcion en punto 32 depues de declarar snakeIntersection
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position)
  })
}

// si esto es verdad onSanke regresa true
function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

//24 agregar segmentos al tocar food, agregar funcion en update-- si solo se deja esta funcion la serpiente al comer un solo food se extendera infinitamente, para eso se agrega el newSegments= 0
function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  //24.1
  newSegments = 0
};

//31
export function getSnakeHead() {
  return snakeBody[0];
};

//es importarte ignorar la cabeza o siempre perderá, agregar en funcion onSnake como argumento
export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}
