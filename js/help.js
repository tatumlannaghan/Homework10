var headX = 150;
var headY = 130;
var headDirection = 1;

var bodyX = 100;
var bodyY = 150;
var bodyDirection = 2;

var noseX = 140;
var noseY = 150;
var noseDirection = 4;

var smileX = 100
var smileY = 169
var smileDirection = 3;

var eyeX = 115
var eyeY = 130
var eyeDirection =2;

var size = 10;
var count = 0;
var sizeDirection = 1;
function setup()
{
    createCanvas(300,500);
//random movement  
    movement = Math.floor(Math.random() * 10);
}

function draw()
{

//background
        background(220);
//body
    fill(30, 14, 135);
    rect(100,bodyY,100,170);
    if(bodyY <= 0 || bodyY >= 450 )
    {
        movement *= -1;
    }
    bodyY += movement;
//head
    fill(44, 58, 132);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 250 || headX <= 66)
    {
        headDirection *= -1;
    }
//name text
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *= -1;
        count = 0;
    }
    text("Tatum Lannaghan",190,350 );
//nose
    fill(100, 100, 40);
    square(noseX,noseY,5);
    noseX+=noseDirection;
    if(noseX >= 300 || noseX <= 0)
    {
        noseDirection *= -1;
    }
//smile
    fill(255,255,255)
    rect(100,smileY,100,5);
    smileY += smileDirection;
    if(smileY <= 0 || smileY >= 450 )
    {
        smileDirection *= -1;
    }  
//eye1
    fill(255,255,255)
    circle(eyeX,eyeY,25);
    eyeY += eyeDirection;
    if(eyeY <= 0 || eyeY >= 345 )
    {
        eyeDirection *= -1;
    }  
    eyeX+=eyeDirection;
    if(eyeX >= 300 || eyeX <= 0)
    {
        eyeDirection *= -1;
    }
//hat
fill(145,0,0)
triangle(65, 100, 235, 100, 150, 35);
//eye2
    fill(255,255,255)
    circle(165,130,25);
//pupils
    point(115, 130);
    point(165, 130);
//hair
    line(75, 100, 75, 300);
    line(225,100, 225, 300)
//self portrait text
    text('Self Portrait!', 10, 30);
}