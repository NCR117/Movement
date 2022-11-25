var x, y, d, speed; //Establishing X and Y as variables - d for diameter

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    x = width/2;
    y = height/2;
    d = 200;
    speed = 5;

}

function draw() {
    background(220);

    // y++; //constantly adding a plus value to Y, moving it downward.

    speed = map(mouseY, 0, height, 5, 50);

y = y + speed;

if (y > height + d/2){ //if statement, if t
      y = 0 - d/2;
 }

    fill(255, 255, 255);
    ellipse(x, y, d);


}