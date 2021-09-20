var database;
var backgroundImg,game,form,player;
var gameState=0,playerCount=0;
function preload(){

  backgroundImg=loadImage("background.jpg");
}
function setup(){

  createCanvas(windowWidth,windowHeight);
  database = firebase.database()


  game= new Game();
  game.start();

}
function draw(){

  background(backgroundImg);

    
  drawSprites();
    
}