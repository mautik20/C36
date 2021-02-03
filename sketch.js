var game,gameState=0,playerCount,database,form,player


function setup(){
  database = firebase.database();
  createCanvas(400,400);

  game=new Game();
  game.getState()
  game.start();

}

function draw(){
    
}
