
function setup() {
  createCanvas(800,400);
}


function draw() {
  background(255,255,255);  
  var hr = hour();
  var mn = minute();
  var sc = second();
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0, 60, 0, 360);
  hrAngle = map(hr,0,23, 0, 360 );
  angleMode(DEGREES);
  push();
  translate(200,200);
  rotate(scAngle)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  translate(200,200);
  rotate(mnAngle)
  stroke(150,75,0);
  strokeWeight(7);
  line(0,0,100,30);
  pop();
  push();
  translate(200,200);
  rotate(hrAngle)
  stroke(200,50,20);
  strokeWeight(7);
  line(0,0,200,20);
  pop();
  arc(80, 80, 130, 130, 0,hr);
  arc(80, 100 , 130 , 30 , mn);
  arc(80, 100 , 130 , 30 , hr);
  drawSprites()


}