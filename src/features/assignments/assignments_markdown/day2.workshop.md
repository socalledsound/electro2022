# grid

For today's assignment I want you to make a collection of something using loops!

You might want to use the nested for loops that we talked about today in class.

As a reminder, a for loop in javascript looks like this:

<div class='workshop-code'>

```c
    let numLoops = 9
    for(let i = 0; i < numLoops; i++){
        // do something 'numLoops' of times here
    }
```
</div>
We can use the integer named 'i' in our loops, it will have a value of 0 in our first loop and then increment each time the loop runs.

We can make a row of rectangles like this:

<div class='workshop-code'>

```c
    for(let i = 0; i < 10; i++){
        // do something 10 times here
        fill(random(0,255), random(0,255), random(0,255))
        rect(i * 40, 0, 40, 40)
    }
```
</div>

We can nest that loop inside another loop to create 10 rows :

<div class='workshop-code'>

```c
for(let y = 0; y < 10; y++){
    for(let x = 0; x < 10; x++){
        // do something 10 times here
        fill(random(0,255), random(0,255), random(0,255))
        rect(x * 40, y * 40, 40, 40)
    }
```
</div>

And we can add some constant variables to our sketch to make it easily configurable.

Here's some code that makes a grid of colors:

<div class='workshop-code'>

```c
const canvasWidth = 400
const canvasHeight = 400
const numColumns = 100
const numRows = 100
const boxWidth = canvasWidth/numColumns
const boxHeight = canvasHeight/numRows


function setup() {
createCanvas(canvasWidth, canvasHeight);
background(220);


for(let y = 0; y < numRows; y++){
    for(let x = 0; x < numColumns; x++){
        // do something numRows * numColumns times here
        fill(random(0,255), random(0,255), random(0,255))
        rect(x * boxWidth, y * boxHeight, boxWidth, boxHeight)
    }
}
}
```
</div>

And here's some code that plots out an array of circle data: 

<div class='workshop-code'>

```c
const circles = [
  {
    x: 100,
    y: 200,
    size: 300,
    col: [220,0,0],
  },
  {
    x: 500,
    y: 400,
    size: 480,
    col: [0,220,0],
  },
  {
    x: 300,
    y: 200,
    size: 120,
    col: [0,0, 220],
  }
]


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  // we can do it this way
  // for(let i = 0; i < circles.length; i++){
  //   fill(circles[i].col)
  //   ellipse(circles[i].x, circles[i].y, circles[i].size)
  // }
  
  // or we can use a function to clean things up a little
  for(let i = 0; i < circles.length; i++){
    createCircle(circles[i])
  }
  
  
}


function createCircle({x, y, size, col}){
  fill(col)
  ellipse(x, y, size)
}



```


</div>

And here's the ice cream code with gloops from class!

<div class='workshop-code'>

```c

// first I'll organize all of the data for my sketch
const reddish = '#ee786e'
const yellowish = '#ececa1';
const pinkish = 'pink';
const coneColor = 'brown';
const scoopSize = 200;
const cone = {
  a: {x: 300, y: 580},
  b: {x: 200, y: 350},
  c: {x: 400, y: 350},
  col: coneColor,
};
const scoop1 = {
  x: 300,
  y: 300,
  col: reddish,
  gloopAngles: [40, 60, 80, 90, 115, 140],
}
const scoop2 = {
  x: 285,
  y: 200,
  col: yellowish,
  gloopAngles: [30, 40, 50, 90, 115, 120, 140],
}
//315, 100, pinkish
const scoop3 = {
  x: 315,
  y: 100,
  col: pinkish,
  gloopAngles: [70, 80, 105, 115, 140],
}

function setup() {
  //the default angle mode for p5 is radians, which is annoying
  angleMode(DEGREES);
  createCanvas(600, 600);
    noStroke();
    background('#efccff');
  // make the cone
   createCone(cone)
  // reddish scoop
  createScoop(scoop1)
  // yellow scoop
  createScoop(scoop2)
  // pink scooop
  createScoop(scoop3)
}

function createCone({a, b, c, col}){
    fill(col)
    triangle(a.x, a.y, b.x, b.y, c.x, c.y)
}


function createScoop({x, y, col, gloopAngles}){
  fill(col)
  ellipse(x, y, scoopSize)
  for(let i = 0; i < gloopAngles.length; i++){
    createGloop(x, y, scoopSize, col, gloopAngles[i], i)
  }
  
}

function createGloop(x, y, scoopSize, col, angle, i){
  // x + r * cos(angle)
  const gloopX = x + scoopSize/2 * cos(angle)
// y + r * sin(angle)
   const gloopY = y + scoopSize/2 * sin(angle)
   fill(col)
  
   ellipse(gloopX, gloopY, random(30,70), random(30,70))
  // fill(255)  
  // text(angle, gloopX, gloopY)
  
  }




```
</div>