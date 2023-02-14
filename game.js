const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

//Buttons
const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');
const btnLeft = document.querySelector('#left');
const btnRigth = document.querySelector('#right');

let canvasSize;
let elementSize;
let level = 0;
let lives = 3;

const playerPosition = {
  x: undefined,
  y: undefined
};

const cookiePosition = {
  x: undefined,
  y: undefined
};

let bombsPosition = [];


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

  const map = maps[level];

  if (!map) {
    alert('Ganaste el Juego! 😸');
    return;
  };


  const mapsRows = map.trim().split('\n');
  const mapRowCols = mapsRows.map(row => row.trim().split(''));

  game.clearRect(0, 0, canvasSize, canvasSize);

  bombsPosition = [];

  mapRowCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col];
      const postX = elementSize * (colIndex + 1);
      const postY = elementSize * (rowIndex + 1);

      if (col == 'O') {

        if (!playerPosition.x && !playerPosition.y) {
          playerPosition.x = postX;
          playerPosition.y = postY;
        };


      } else if (col == 'I') {
        cookiePosition.x = postX;
        cookiePosition.y = postY;
      } else if (col == 'X') {
        bombsPosition.push({
          x: postX,
          y: postY
        });
      };

      game.fillText(emoji, postX, postY)

    });
  });


  movePlayer();

};

function movePlayer() {

  // Validacion cookie
  const cookieCollisionX = Math.round(playerPosition.x) == Math.round(cookiePosition.x);
  const cookieCollisionY = Math.round(playerPosition.y) == Math.round(cookiePosition.y);
  const cookieCollision = cookieCollisionX && cookieCollisionY;

  if (cookieCollision) {
    levelWin();
  };

  // Validacion Bombs
  const bombsCollision = bombsPosition.find(bomb => {
    const bombCollisionX = Math.round(bomb.x) == Math.round(playerPosition.x);
    const bombCollisionY = Math.round(bomb.y) == Math.round(playerPosition.y);

    return bombCollisionX && bombCollisionY;
  });

  if (bombsCollision) {
    liveLost();
  };

  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)

};

function liveLost() {

  lives--;

  if (lives <= 0) {
    alert('Perdiste todas las vidas! 🙀');
    level = 0;
    lives = 3;
  }

  playerPosition.x = undefined;
  playerPosition.y = undefined;
  startGame();
}


function levelWin() {
  level++;
  startGame()
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