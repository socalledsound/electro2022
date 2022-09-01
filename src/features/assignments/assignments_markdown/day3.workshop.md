# can haz meme

make a meme!

use p5!

first, you'll need to upload an image, either to the p5 online editor, or to cloudinary.  

next, you'll need to load it in to your sketch using the preload function

<div class='workshop-code'>

```c
// variables to store the image and font
// these variables need to be initialized in the global scope -- outside of the preload function
let img, myFont
// we use preload to load things before the sketch runs
function preload(){
  
  // we can load images from a web resource like cloudinary
  // img = loadImage('https://res.cloudinary.com/dmvojy4eq/image/upload/v1599589869/IMG_0316_mh51q8.jpg')  
  
  // or we can load them from a local directory
  img = loadImage('handshake.jpg')
  // same with fonts
  myFont = loadFont('Anton-Regular.ttf')
}

```
</div>

to display an image use the image function and pass in the image that you loaded into the img variable, along with coordinates and desired size.

<div class='workshop-code'>

```c

  image(img, 0, 0, 600, 600)

```
</div>

Here's the complete meme sketch from class:

<div class='workshop-code'>

```c

// variables to store the image and font
// these variables need to be initialized in the global scope -- outside of the preload function
let img, myFont

const line1 = 'IN MEMORY OF'
const line2 = 'THE HANDSHAKE'

// we use preload to load things before the sketch runs
function preload(){
  
  // we can load images from a web resource like cloudinary
  // img = loadImage('https://res.cloudinary.com/dmvojy4eq/image/upload/v1599589869/IMG_0316_mh51q8.jpg')  
  
  // or we can load them from a local directory
  img = loadImage('handshake.jpg')
  // same with fonts
  myFont = loadFont('Anton-Regular.ttf')
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  image(img, 0, 0, 600, 600)
  fill(255)
  textFont(myFont)
  textSize(60)
  text(line1, 20, 100)
  text(line2, 200, 550)
}

```
</div>


Make your own and upload it to the gallery!!!!!!