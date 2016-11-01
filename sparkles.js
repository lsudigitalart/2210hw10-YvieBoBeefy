var pa = [];
var bubbles;
var fish;

function preload(){

  bubbles = loadImage("assets/bubble.png");
  fish = loadImage("assets/fishleft.png");

}

function setup(){
createCanvas(640, 480);
  noCursor();
}

function draw(){
  background(33, 144, 178);

imageMode(CENTER);

  for (var i = 0; i < pa.length; i++){
    pa[i].display();
    pa[i].move();
  }

  image(fish, mouseX, mouseY, 200, 200);

}

function mouseMoved(){
  pa[pa.length] = new Particle(mouseX, mouseY, random(10, 100));
}

function Particle(tempX, tempY, particleSize){
  this.posX = tempX;
  this.posY = tempY;
  this.particleSize = particleSize

  this.vx = random(-2, 2);
  this.vy = random(-5, 5);
  var gravity = .001;

  this.move = function(){
    this.posX += this.vx;
    this.posY += this.vy;
    this.vy += gravity;


  };

  this.display = function(){

    image(bubbles, this.posX, this.posY, this.particleSize, this.particleSize);

  };
}
