var gameState = 0;
var playerCount,dataBase,form,player,game;

function setup(){
    canvas = createCanvas(400,400);
    dataBase = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}
function draw(){
}