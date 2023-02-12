const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

//Buttons
const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');
const btnLeft = document.querySelector('#left');
const btnRigth = document.querySelector('#right');

let canvasSize;
let elementSize;

const playerPosition = {
  x: undefined,
  y: undefined
};

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);




function setCanvasSize() {

  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  elementSize = canvasSize / 10;

  startGame();

};

function startGame() {

  game.font = elementSize + 'px Verdana';
  game.textAlign = 'end';

  const map = maps[0];
  const mapsRows = map.trim().split('\n');
  const mapRowCols = mapsRows.map(row => row.trim().split(''));

  game.clearRect(0, 0, canvasSize, canvasSize);

  mapRowCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col];
      const postX = elementSize * (colIndex + 1);
      const postY = elementSize * (rowIndex + 1);

      if (col == 'O') {

        if (!playerPosition.x && !playerPosition.y) {
          playerPosition.x = postX;
          playerPosition.y = postY;
        }
      }

      game.fillText(emoji, postX, postY)

    });
  });


  movePlayer();

};

function movePlayer() {
  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
  console.log('moviste')
}

// Acciones al moverse

btnUp.addEventListener('click', moveUp);
btnDown.addEventListener('click', moveDown);
btnLeft.addEventListener('click', moveLeft);
btnRigth.addEventListener('click', moveRigth);

window.addEventListener('keydown', moveByKeys);

function moveByKeys(e) {

  switch (e.key) {
    case 'w':
      return moveUp()
      break;
    case 'a':
      return moveLeft()
      break;
    case 's':
      return moveDown()
      break;
    case 'd':
      return moveRigth()
      break;
  };

};

function moveUp() {

  if ((playerPosition.y - elementSize) < 0) {
    console.log('Out')
  } else {
    playerPosition.y -= elementSize;
    startGame();
  };

};

function moveDown() {

  if ((playerPosition.y + elementSize) > (canvasSize + 40)) {
    console.log('Out')
  } else {
    playerPosition.y += elementSize;
    startGame();
  };



};

function moveLeft() {

  if ((playerPosition.x - elementSize) < elementSize) {
    console.log('Out')
  } else {
    playerPosition.x -= elementSize;
    startGame();
  };

};

function moveRigth() {

  if ((playerPosition.x + elementSize) > (canvasSize + 40)) {
    console.log('Out')
  } else {
    playerPosition.x += elementSize;
    startGame();
  };


};