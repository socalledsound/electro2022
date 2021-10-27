# pixels and camera input

Last class we learned how to draw a line across the page, as we respond to incoming audio data.

Today, we're going to learn how to draw a grid, as we respond to incoming camera data. In other words, draw a pixelated image (and aren't all images pixelated, to one degree or another???) on the canvas. And lots of other cool things as well.

# camera input

Let's start with some camera input. Just like we needed to ask for access to the microphone, we need to ask to use the camera. I'm going to go ahead and write some global variables that we'll use in a bit, and then in setup let's make a canvas and also call createCapture, storing the capture -- which which capture a new frame at the frame rate specified -- in a global variable. We can optionally show or hide the capture, which is actually it's own DOM element, a video tag.

I've put the variables in a [starter sketch](https://editor.p5js.org/socalledsound/sketches/F4L_AYA_O) in the online editor for you.

```
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const GRID_SIZE = 100;
const NUMROWS = CANVAS_HEIGHT/GRID_SIZE;
const NUMCOLUMNS = CANVAS_WIDTH/GRID_SIZE;
var myCapture;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT); // we need some space...
  frameRate(25); // set framerate
  myCapture = createCapture(VIDEO);
  myCapture.size(CANVAS_WIDTH, CANVAS_HEIGHT);
  // myCapture.hide();
}

```

So, I mentioned that createCapture makes it's own DOM element, right? So, it's being drawn under the canvas. 'myCapture' is not currently being shown, it's just some image data. We can draw that in our draw loop:

```
 function draw(){
 image(myCapture, 0, 0, 800, 800);
 }
```

Now, an interesting thing we can do with images which we haven't done too much of, is grab just a portion of the image. Like, for instance a single pixel. If I say

```
myCapture.get(0,0)

```

It will return a color value for the top left pixel. If we wanted to, we could actually grab every pixel and redraw the screen. But it would probably be really, really slow. Instead, let's use this idea to pixelate our image. Delete everything in the draw loop and write a nested for loop in there instead:

```

  for(let i = 0; i < NUMROWS; i++){
    for(let j = 0; j < NUMCOLUMNS; j++){
        let pixcell = myCapture.get(i * GRID_SIZE, j * GRID_SIZE);
        console.log(pixcell);
        fill(pixcell);
        rect(i * GRID_SIZE, j * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    }
  }

```

So, this is why I wrote those constants at the top. I'm using them to make a grid of pixels. It's much lower resolution than the original image, so it looks 'pixelated'. Our grid is 8 x 8, because our canvas is 800 x 800 and each tile is 100 x 100. Make sense? So, for each tile, we grab a color value from the imageCapture and then we draw it into a rectangle on the screen.

If you got lost along the way, here's the finished [pixelate video code](https://editor.p5js.org/socalledsound/sketches/MHpS_is5i) in action.

# video particles

Ok let's take that idea a little farther, and write a class for each pixel cell. We'll call it a particle, and update it each time through the draw loop. We can move it, change size, or even compare it's value to it's neighbors values if we want to.

We use that same idea of the nested for loops to draw each particle.

I think the [code](https://editor.p5js.org/socalledsound/sketches/f3mHA8cO2) is pretty well commented, I hope that the comments make sense.

One big difference between this code and the previous example is that, here, I'm using something called the pixel array, which exists for every p5.Image.

Pixel data for every image is stored as an array, where the color values for each pixel are stored sequentially, like this

```
pixels = [redValue, greenValue, blueValue, alphaValue, redValue, greenValue, ..etc];

```

So, in place of image.get(x, y), I can look that data up in the pixel array.

First, I call

```
video.loadPixels;

```

in the draw loop, which gives me access to the pixels frome the camera.

Then, Ihave a function called getColorFromPixels(), which uses a formula to pull the correct color values out of that array.

The basic formula is

```

let index = (y * imageWidth + x) * 4;

```

Because what we're doing is mapping an array onto a grid, and each value is actually four values that we want to be on the grid at one location, because we are storing in sequential order, four color values for each pixel, a red, a green, a blue, and an alpha.

So, for instance, we want to get the colors at (3, 0).

0 \* the image width would be zero, and then we add x, so we have three and then we multiply by four to get 12 that's our index.

That is the location in the pixel array where we should find the red value for the location (3,0).  
We add 1 to get the green, we add 2 to get the blue and 3 to get the alpha. Like so:

```
//a helper function to get color from the pixel array
function getColorFromPixels(i, j){
  let index = ((j * particleSize * video.width) + i * particleSize)  * 4;
  let r = video.pixels[index];
  let g = video.pixels[index + 1];
  let b = video.pixels[index + 2];
  let newColor = [r,g,b];
  return newColor
}

```

Now, I'm also multiplying by particleSize, because I want to pixelate this image, right? So I jump an extra distance in the pixel array.

I hope that kinda makes sense but if it doesn't come back later and look at it again, or ask me a question.

Using the pixel array speeds things up quite a bit, I left the image.get in there if you want to compare performance. But... it's still a little slow! If you download that sketch and run it it should run a little bit better than it does in the online editor, but we're still getting close to the limits in terms of performance.

Which is why I usually steer people away from video and p5. For video processing, really what you want to do is get into [open frameworks](https://openframeworks.cc/), and learn C++. But that's a whole other class. Or two.

Another thing we can do is use shaders, which is sort of like using C++. We'll try our hand at that in a few weeks!

# other pixel operations

One way to improve our performance is to switch from live video to still images and do some pixel operations. That's not really the subject for today, but I'd like to give you some code to peruse at your leisure:

[ASDF sort aka that glitch effect](https://editor.p5js.org/socalledsound/sketches/yapFC24FG)

[rippling pixels](https://editor.p5js.org/socalledsound/sketches/jP5xjo7F1)

[edge detection](https://editor.p5js.org/socalledsound/sketches/MrysOMgrc)

Take a look, add your own images, play around and ask questions. Oh and Daniel Shiffman mostly has a video for anything you want to do ; ), check out his videos on images and pixels.

# face filter

Ok, so with that quick introduction to the camera and pixels out of the way, let's get today's business, which is, analyzing the camera image and drawing on top of it. We're going to use a library called [clmtracker](https://github.com/auduno/clmtrackr). It's not a part of p5 or its libraries, but we can use it with p5.

I've put together a [starter](https://github.com/socalledsound/clmtrackr-mask) sketch at github with the necessary files.

I want you to work your way through a few videos that I've put together on this library as an experiment, it should be pretty straightforward, you're just going to substitute your own image for the one that's there.

[intro](https://youtu.be/h5Gt-LL8VGY)
[download repo](https://youtu.be/b4oqkqVedms)
[change image](https://youtu.be/T2E0YdYzjhc)
[upload using git](https://youtu.be/6L6oZLe1T1U)

And that's it!

For the assignment I want you to use the clmtrackr library and create your own face filter, and then push your code to github and make it live using gh pages. You can get deeply into this or you can just make an image and use that as the material that the model places on your face. Watch the videos, ask questions, I think it'll make sense but if it doesn't, be sure to let me know!

Ok that's it for today! See if you can make your own 'face filter' and submit it in the gallery!

And if you're feeling really ambitious, see if you can implement some of the other effects available via clmtrackr in your own p5 sketch! Face deform is kind of cool. We'll also return to a lot of these ideas -- in a very new light -- when we get down to using shaders.
