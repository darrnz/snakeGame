// 17 declara variable y funcion input direction, llevar input directio a snake.js
let inputDirection = { x: 0, y: 0 };

//19 variable para registrar ultimo movimiento. En el switch se agregan los if para verificar cual fue el ultimo mov
let lastInputDirection = { x: 0, y: 0 };

//18 funcion para mover snake--> con las primeras instrucciones se pondra mover arrba y abajo pero hay que limitarlo para que se mueva como la serpiente
window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp': 
    if (lastInputDirection.y !== 0) break; //19
    inputDirection = { x: 0, y: -1 };
      break;
    case 'ArrowDown': 
    if (lastInputDirection.y !== 0) break; //19
    inputDirection = { x: 0, y: 1 };
      break;
    case 'ArrowRight': 
    if (lastInputDirection.x !== 0) break; //19
    inputDirection = { x: 1, y: 0 };
      break;
    case 'ArrowLeft': 
    if (lastInputDirection.x !== 0) break; //19
    inputDirection = { x: -1, y: 0 };
      break;
    
  }
})

export function getInputDirection() {
  //19 liimitacion de movimiento 
  lastInputDirection = inputDirection
  return inputDirection
}