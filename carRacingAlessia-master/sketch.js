var canvas, backgroundImage

var gameState = 0
var playerCount

var database

var form, player, game

var allPlayers;

var bgImg;

var trackImg;
var car1Img, car2Img, car1, car2;
var cars = [];

function preload(){

  bgImg = loadImage("assets/planodefundo.png");
  trackImg = loadImage("assets/PISTA.jpg");
  car1Img = loadImage("assets/car1.png");
  car2Img = loadImage("assets/car2.png");

}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight)
  database = firebase.database()

  game = new Game();
  game.getState();
  game.start();
}

function draw() {

  background(bgImg);

  if(playerCount === 2){

    game.update(1);

  }

  if(gameState === 1){

    game.play();

  }

}
