# edit this some more

<!--
# the third D

So, we know that the 2d canvas is pixel-based, and we've seen how to draw on that canvas using coordinates and colors.

But I'm here to tell you: there's another context. Amen, brothers and sisters. And it's called 'WEBGL'. There's a lot of to talk about

The WEBGL canvas is a little more complicated than the 2d canvas, but the results can be pretty fun! So let's dive in and get started. You can open up this [basic sketch](https://editor.p5js.org/socalledsound/sketches/px9HYA5rm) in the online editor and follow along. Go ahead and start it now. I'd like to point out a few crucial things before we start coding.

# triangles

First off look at the spheres. See how they're composed of triangles? Every shape in WEBGL is composed of triangles. This may not seem super important -- we usually don't see the triangles, we cover them up with a material of some sort -- but I just wanted to mention it here at the start. This is done because it makes computation easier. Daniel Shiffman has a great series of videos inrtroducing the key concepts of [webGL](https://thecodingtrain.com/Tutorials/18-webgl/18.1-introduction-to-webgl.html), or if you really want to get deep, I recommend something like this [book](https://github.com/chocopuff2020/javascript-ebooks-1/blob/master/%5BLearning%20Three.js%20The%20JavaScript%203D%20Library%20for%20WebGL%20Kindle%20Edition%20by%20Jos%20Dirksen%20-%202013%5D.pdf), that can get you started in three.js. For the purposes of this intro, I want you to take a look at this map of the various elements that go into creating a 3d scene:

![webgl scene](https://res.cloudinary.com/chris-kubick/image/upload/v1604259824/side-effects/1_Bkk14XZa94WTue7F7DrhCA_ufij0c.png)

We'll work through the various elements of a web gl scene that are listed on this page over the next few days and hopefully this will be enough to get you started.

# the camera

One of the really crucial aspects to defining a 3d scene is, where are we looking at it from? In code, we need to conceptualize this. We call it the [camera](https://p5js.org/reference/#/p5/camera). When you set up a WEBGL sketch in p5, it creates a default camera for you, which is nice, it saves a step. The camera is the frame through which we are viewing our sketch. You can move that camera around if you want to, or you can just leave it fixed, where it is. (You can also make more than one camera and see the scene from multiple perspectives, but we'll leave that alone for now!)

# defining the canvas

To set up a WEBGL canvas, we pass a third argument in when we set up our canvas:

```
 createCanvas(400, 400, WEBGL);

```

Once we've done that, a lot changes.

First of all, (0,0), which used to be in the top left corner, is now in the center of the canvas.

Second, we now no longer use 2d primitives like ellipse() and rect() to draw shapes, now we use sphere() and box().

Third, we really need to learn about something called the transformation matrix, because that is how we will position things in 3d space.

Look at the reference page for the [sphere](https://p5js.org/reference/#/p5/sphere).

```
sphere(100);

```

Notice how it takes only one parameter, which is size?

So, how do we position it?

We use a function called translate, which takes an x, y and z value.

Like this:

```
 translate(-100, 50, 0);

```

Now this is a bit tricky, conceptually, what's happening here.

What we're doing when we call translate ( or any other of the other tranformations listed on the p5.reference page, like rotate or scale ) is we're everything in the display window over by the translate amount.

Now, let's say we want to make three spheres at three different locations. You'd think we could just make the three spheres and then call translate twice before each of the second, giving different coordinates each time.

```
  sphere(50);
  translate(-100, 50, 0);
  sphere(50);
  translate(100, -50, 0);
  sphere(50);

```

What do you think the above code will do? Go ahead and run it and see for [yourself](https://editor.p5js.org/socalledsound/sketches/e_ozejYlx).

Huh. There's only two spheres.

What's happening here?

Well, we draw one sphere at (0, 0, 0) and then we translate over and draw another and then we translate again, the other direction. But the reference point for the second translate is not (0,0,0), it's (-100, 50, 0), which has become the new 'center'. So the third sphere is at the same reference center as the first sphere.

If we want this to behave as expected, we need to enclose our translations in push()/pop(). Like [so](https://editor.p5js.org/socalledsound/sketches/o4gRPv2Iw):

```
  sphere(50);

  push()
    translate(-100, 50, 0);
    sphere(50);
  pop()

  push()
    translate(100, -50, 0);
    sphere(50);
  pop()

```

You can think of push() as saving the current matrix settings and pop() as restoring those previous

settings. You always use them together for this purpose and you'll probably be using them a lot if you're working in 3d.

# models

These 3d primitives that are available to us in p5 are of course just the tip of the iceberg. We can use these triangles that I mentioned above to create literally any shape that we want to. This pretty hard to do in plain code, you'll want to use a 3d modeling software to make these. [Maya](https://www.autodesk.com/products/maya/overview?support=ADVANCED&plc=MAYA&term=1-YEAR&quantity=1) is one option, but I prefer [Blender](https://www.blender.org/features/) because it's free and open source, available for all platforms, and does everything Maya does and maybe even a little more. It's also scriptable with Python.

Learning to use Blender is pretty challenging but it's also very rewarding!

It also takes a while and, honestly...we really don't have a while right now.

But if you're interested, I love the youtube tutorials of [the blender foundation](https://www.youtube.com/channel/UCSMOQeBJ2RAnuFungnQOxLg), [sardi pax](https://www.youtube.com/channel/UCWUNJX8nRfmnA1QaP4B0I_Q), [borncg](https://www.youtube.com/channel/UCdioEctcBLd2nw2aQkl8msw), and the [blender guru](https://www.youtube.com/channel/UCOKHwx1VCdgnxwbjyb9Iu1g).

FWIW you can also scan objects from RL using a [raspberry pi and a realsense camera](https://hackaday.com/2020/03/31/handheld-3d-scanning-using-raspberry-pi-4-and-intel-realsense-camera/),and maybe we'll take a stab at that later in the course!

But for now, I'm going to just head over to [clara.io](https://clara.io/library) and download a free model. You'll probably have more success if you search for and find a 'low-poly' model, which means, a low polygon count. A lot of the more refined models are just too many vertices for a browser to handle.

The best format for p5 is .obj.

Here's a [sketch](https://editor.p5js.org/socalledsound/sketches/4TtAlFgQv) that has this kind of model loaded in, it's a pretty bad cat that I downloaded from the internet.

There's something going on here, which is quite common. It's upside down, too big, and rotated in the wrong direction.

Can you fix it?

The answer is at the very bottom of this page. Take a few moments and see if you can find the right combinatino of push(), pop(), translate(), rotateX() and rotateY() to make it visible.

# SoundBoxes

Ok so let's do something that builds on what we've already learned i previous classes : create a generative landscape that responds to the fft analysis of a sound file as it plays.

I'm guessing this has been a lot already, so I'll just give you the [sketch](https://editor.p5js.org/socalledsound/sketches/STHJQaBF4), with comments, and see if you can figure it out. If you have questions be sure and let me know!

One thing I will mention is, this is sort of a combination of the last two classes, with a bit extra from today. I'm using webGL, to draw a grid of cubes. So I start witha a 2 dimensional array (should I make this a cube? a three dimensional array?????):

```
let boxes = make2DArray(numRows, numColumns);

...

//the helper function which returns a 2d array
function make2DArray(rows, cols){
  let arr = new Array(rows);
  for(let i = 0; i < arr.length; i++){
      arr[i] = new Array(cols)
  }
  return arr
}

```

Then in setup, I fill that array full of SoundBox class instances:

```
  //fill 2d array with boxes
  for(let i = 0; i < numRows; i++){
    for(let j = 0; j < numColumns; j++){
    boxes[i][j] = new SoundBox( i * boxSize, j * boxSize, 0, boxSize)
    }
  }
}
```

And then in the draw loop I update each box with fft data, as we did the other day with our ellipses, and finally display the boxes.

And that's prety much it! Take a look and see if it makes sense. And if you want to, uncomment the appropriate lines to make an image appear on the boxes!

# assignment

And that's a wrap for today.

Oh, yeah, here's the cat model rotated correctly: [sketch](https://editor.p5js.org/socalledsound/sketches/yWFxTir8t)

For your assignment I want you to create or download an obj model, display it on a web page in the correct orientation and scale, and screenshot if for the gallery, also including a live link to your code! Have a great day and see you Thursday when we will dip our toes into materials, which we can add onto our models to make them look a lot more interesting. -->
