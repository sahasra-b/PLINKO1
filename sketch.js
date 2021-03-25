var ground1





function setup() {
  createCanvas(480, 800);
  createSprite(400, 200, 50, 50);

  ground1= new Ground (800,800, 480 )
  plinko1= new Plinko(800, 450, 50)
  plinko2= new Plinko(800, 500, 50)
  plinko3= new Plinko(800, 550, 50)
  plinko4= new Plinko(850, 450, 50)
  plinko5= new Plinko(850 , 50)
  plinko6= new Plinko(800, 450, 50)
  plinko7= new Plinko(800, 450, 50)
  plinko8= new Plinko(800, 450, 50)
  plinko9= new Plinko(800, 450, 50)
  plinko10= new Plinko(800, 450, 50)
}

function draw() {
  background(255,255,255);  


ground1.display();
plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
plinko7.display();
plinko8.display();
plinko9.display();
plinko10.display();
particle1.display();



  drawSprites();
}