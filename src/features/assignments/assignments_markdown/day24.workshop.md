# edit this some more

# material

Today I want to talk about materials and textures, ie making a model look interesting. But first, let's look again at all of the things that go into making a 3d scene:

![webgl scene](https://res.cloudinary.com/chris-kubick/image/upload/v1604259824/side-effects/1_Bkk14XZa94WTue7F7DrhCA_ufij0c.png).

As you can see, there are actually two discrete elements that go into making a 'mesh' appear on the scene, a geometry and a material.

One way to represent these is in a low level language called 'shader language'. When peopple talk about 'shaders', this is what they're talking about, code written in this language, which usually runs a lot faster than a higher level language like javascript. Shaders are actually two seperate sets of code -- a vertex shader and a fragment shader, which loosely correspond to these two aspects of a mesh, the geometry and the material. We'll return to these shaders in a bit and have some real fun.

But we can also manipulate these things in our higher level language, javascript. Last class we looked at how to draw basic shapes, or import more complex models in .obj format.

Today we're going to add material, and texture to them, and also look at how to add lights to a scene, which of course will affect the way our objects look! How a material responds to a texture is a huge part of how we understand the material of that object.

I don't know if you saw the recent news from outer space, that of an asteroid named [Psyche](https://observer.com/2020/10/nasa-discover-asteroid-pysche-metal-10-quadrillion/) which they think is mostly made of iron and nickel. How do they know it's made mostly of metal? They shone light on it! Kind of neat.

# materials

We'll get to lights in a bit but first let's look at [materials](). The 'basic' material is just color; we can use fill() and pass it color values and they will be applied to the mesh.
We can also use something called the 'normal' material to get a rainbow color, which is color derived from the direction in which each polygon that composes our mesh is pointing. Let;'s add that to our [cat](https://editor.p5js.org/socalledsound/sketches/AhBNTJ83H):

```
    rotateY(theta);
    normalMaterial();
    model(cat);

```

In that sketch you can hopefully see that it sort of looks like there's a light shining on the cat; as the polygons rotate, the material is getting updated with the new positions of the polygons.

# a little light

But, there isn't any light shining on the cat, not yet anyway. We can add those lights, though.

There are several kinds of [lights](https://p5js.org/reference/#group-Lights,%20Camera) we can add, but let's start with a single [point](https://p5js.org/reference/#/p5/pointLight) light, because it makes for a pretty dramatic lighting. We have to specify a color for the light -- in RGB -- and a location -- x,y,z. To reflect that light, we'll add a specularMaterial() to our cat mesh, which takes a color value, which will be the colors that it reflects.

```
pointLight(190,80,210, 400, 400, 800);
...
 specularMaterial(220, 0, 220);


```

We can add more [lights](https://editor.p5js.org/socalledsound/sketches/yIDHWiw1Q), too, for isntance, a blue directional light that points towards the mouse position:

```
    let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(0, 0, 250, -dirX, -dirY, -1);

```

There are so many possibilities, and I can tell you from personal experience, you can literally spend years just playing with the various options. You can also do all of these things in Blender! With more control. It's pretty fun...but it takes a long time to get things 'right'!

# image textures

A lot of the time, what we want is to add an image texture to an object, to give it a photorealistic (or photounrealistic!) look.

As you can imagine, lining the image up with the right vertices can get kind of tricky.

But let's start with a simple example. We'll put some clouds on a [sphere](https://editor.p5js.org/socalledsound/sketches/RcoAEua3s). Or we can put those clouds on our [cat](https://editor.p5js.org/socalledsound/sketches/dan9XWo2o). In either case, all we have to do is load an image into the sketch and then call texture(), passing in the image:

```
  texture(img);
  sphere(100);

```

But, keep in mind that while the loader will try to line up the image with the model, it often gets kind of confused. The clouds look great on a sphere but on the cat, you can see there are some distortions.

Take a look at a [fox](https://editor.p5js.org/socalledsound/sketches/AUCKofeMG) that I downloaded from clara.io, which came with an image material.

It looks kind of cool but it's also a mess. What this shows, is, adding images to simple forms is easy but adding them to more complex shapes is harder. Or, getting them to show up in the right spot is tricky. Honestly, I don't know what happened here, I think it may be a bug in p5? Because this image was made explicitly for this model. But let's play with it a bit and see if we can get it to show up correctly, it'll show some interesting things about images in 3d at the very least.

First off I want to mention something called creatGraphics(), which is a function I can use that essentially renders a p5 sketch as an image. Take a look at the another version of the [fox](https://editor.p5js.org/socalledsound/sketches/kagZlO0jf). It looks the same, but now I'm loading the image through a new graphics variable.

```
//global variable
let graphics;
...
//graphics instance in setup
graphics = createGraphics(200, 200);
graphics.background(220,20,220);
graphics.image(img, 0, 0, img.width, img.height);

...
//apply graphics as texture in draw
texture(graphics);

```

Now, what's cool about this is, we can do whatever we want in this graphics instance. It's sort of like an extra canvas. I'm going to add a grid of 255 x 255 ellipses, colored so we can get a better sense of how our image is being drawn to our geometry. [new sketch](https://editor.p5js.org/socalledsound/sketches/ZD2Xorhfh)

```
  for(let i = 0; i < 255; i++ ){
    for(let j = 0; j < 255; j++){
        graphics.noStroke();
        graphics.fill(i, 150, j);
        graphics.ellipse(i, j, 1);
    }

  }

```

So, we get a bunch of ellipses, and the spot where it's most greenish (0, 150, 0) is where we start, right? So that should be the leg. And we can see it is kind of in chunks, like in the [image](https://editor.p5js.org/socalledsound/sketches/35RYjqpiG). So what if I try to grab the ears and put them where I think they should go? The ears are roughly where it's blue, which means, they are where x is near zero and y is near 255. So maybe it's upside down, like the model was? I can define a function to flip it and we can see.

```
//in setup we pass the graphics instance in
 rotate_and_draw_image(graphics, 0, 0, 150, 150, 360*0.75 );
....
//the function, which is not in setup
function rotate_and_draw_image(graphics, img_x, img_y, img_width, img_height, img_angle){
   graphics.imageMode(CENTER);
   graphics.translate(img_x+img_width/2, img_y+img_width/2);
   graphics.rotate(PI/180 * img_angle);
   graphics.image(img, 0, 0, img_width, img_height);
   graphics.rotate(-PI / 180 * img_angle);
   graphics.translate(-(img_x+img_width/2), -(img_y+img_width/2));
   graphics.imageMode(CORNER);
}

```

And...that didn't [work](https://editor.p5js.org/socalledsound/sketches/GitWAEJJ4). Honestly, this will happen when you';re working with other peopl's models. It's hard and you gotta know when to give up. But, since I we now have this nifty createGraphics thing to use, I'm going to give my fox some random ellipses and call it a [day]() on that so we can look at shaders a little bit.

# shaders

All right, this is going to be kind of hard, I'm warning you. Particularly since we haven't learned a single thing about [shader language](https://learnopengl.com/Getting-started/Shaders) which is a C family language. If you want to learn a lot about shaders, there is a seriously great online [book](https://thebookofshaders.com/00/). If you spend some time, you'll quickly find that it isn't that hard, conceptually, it's just the learning of a new syntax that is challenging.

There's also a great [guide](https://itp-xstory.github.io/p5js-shaders/#/) to using shaders specifically in p5.

And if you want to learn more about p5 and shaders, there is [this](https://github.com/aferriss/p5jsShaderExamples) excellent series of well commented examples. I'm going to mostly use code from there.

First off, here's a [basic example](https://p5js.org/examples/3d-basic-shader.html).

And here's something like that example in a [sketch](https://editor.p5js.org/socalledsound/sketches/glgCxy0Lg) so you can see the code.

As you can see, every shader is actually two bits of code, which we load in using loadShader. One is called a vertex shader and the other a fragment shader. We apply the shader to geometry on the screen. So, for each vertex of the rect in my scene, I am calling the vertex shader and the fragment shader. Generally, we don't do a ton with the vertex shaders when we're applying color, we mostly work in the fragment shader, which deals with color. Let's take a look at that code, in 'basic.frag':

```
precision mediump float;

// this is the same variable we declared in the vertex shader
// we need to declare it here too!
varying vec2 vTexCoord;

void main() {

  // copy the vTexCoord
  // vTexCoord is a value that goes from 0.0 - 1.0 depending on the pixels location
  // we can use it to access every pixel on the screen
  vec2 coord = vTexCoord;

  // x values for red, y values for green, both for blue
  gl_FragColor = vec4(coord.x, coord.y, (coord.x+coord.y), 1.0 );
}

```

Right off, you can see, that like java and c and unlike javascript, variables are \*typed. So we have a 'varying vec2;' named cTexCoord and a 'vec2' named coord. Do you remember vectors? Here they are again! Notice how coord has an x and a y value? Here we're basically mapping a color value named gl_FragColor (a variable of type vec4) onto the x and y coordinates that we are getting from the vertex shader.

Try getting rid of the rect and replacing it with a box or a sphere or a torus. You'll see that now, the shader is running on the new geometry, which it is getting from the scene.

# applying a shader to camera input

Ok here's one we diod the other day, without shaders. We'll take camera input and [pixelate](https://editor.p5js.org/socalledsound/sketches/-wnTyH5Dz) it. I think it's very well commented, let me know if you have questions. In the frag shader, we can pixelate with by remapping the size of the chunk of the image that we are grabbing:

// to pixelate an image we need to alter our uvs so that instead of being a smooth gradient it steps from one color to the next
// in order to do this we will use the floor function
// floor will round a float down to the nearest int, so 4.98 would become 4.0, and -37.2 would become -37.0
// first the uv's are multipled times a tiles variable
float tiles = 20.0;
uv = uv \* tiles;

// second the uvs are rounded down to the nearest int
uv = floor(uv);

// lastly we divide by tiles again so that uvs is between 0.0 - 1.0
uv = uv / tiles;

# fly's eye

Ok, here's one that I like from the ferriss examples: a [fly's eye mosaic](https://editor.p5js.org/socalledsound/sketches/kVWQKkuNt). It builds off of some of the things we've done in class, in an interesting way. It may take a minute to load on your machine. Or it may not. (You may also have to reload it!)

Read through the comments and see if you can make sense of it! If not, put it down for now and come back to it with a fresh mind, and just keep looking at it until it starts to make sense, maybe it takes tie, maybe you have to code more and learn more before it clicks, but looking again and again at code you don't understand, comparing it to other code that you do undersand, is imho a great way to learn to code!

Can you can find a way to have less tiles in the grid shown on the sphere. I'll give you a clue: tt's in effect.frag, on line 12. And it's called squares. Ok, that was a pretty big hint. Now follow that value through the code and see if you can modify other aspects of the code, lime, 'amt'.

One of the things I want to point out is, how to take these ferriss examples and port them to your own code. You just need to grab the code from his repo. This one came from [4-20-mosaic](https://github.com/aferriss/p5jsShaderExamples/tree/gh-pages/4_image-effects/4-20_mosaic). Play with other examples, feedback is a another cool one.

# applying a shader as a texture

Ok, so how do we apply this to a model? I'm going to start with applying a gradient to a [sphere](https://editor.p5js.org/socalledsound/sketches/8XlSP85TX).

As you can see, the process is pretty similar to the createGraphics approach we used above. But in this case, instead of drawing an image in the graphics, we'll draw a shader onto a rectangle and then map THAT onto the sphere:

```
//make our gradient in setup
   gradient = createGraphics(400, 400, WEBGL);
   gradient.noStroke();
   gradient.push();
   gradient.translate(-200, -200, 0);
  //  gradient.image(img, 0 , 0, 400, 400);
   gradient.shader(myShader);
   gradient.rect(0,0,width, height);
   gradient.pop();


   ....

   //and in draw:
texture(gradient);
 sphere(125);
```

And if you look at the code above and comment out or delete the sphere, you'll see that same gradient applied to our foxy friend from before! Just like before, the vertexes are a mess, so it looks more like random colors than a gradient, but there's no easy way to get around that. we'd have to redo the .obj model and keep the vertexes contigiuous.

Instead, why don't we do something more radical and apply the [fly mosaic](https://editor.p5js.org/socalledsound/sketches/rD7vvfHUX) shader to it instead! This sketch should show a sphere, but you can simply comment out the sphere and uncomment out the fox to show the fox if you want to. I will say, this sketch doesn't seem to work with my crappy desktop camera but works fine on my laptop, so ymmv as they say. But if you are able to get it to load, notice -- this code runs really fast! There's a lot going on here computationally, more than the other day with the pixel blobs I made, but it runs quite snappily in the browser. This is the real beauty of shaders, even though they are kinda hard.

# changing shaders with sound

Ok one last thing I promised in this whirlwind tour. And that's to use sounds to change a shader. It actually will be pretty instructive I think, if you've got a bit more bandwidth. I'm going to use a set of examples that are available [here](https://tympanus.net/codrops/2020/02/24/audio-based-image-distortion-effects-with-webgl/), My favorite is maybe this [one](https://tympanus.net/Development/AudioBasedImageDistortion/index6.html). I'm going to show you how to use the code to drive your own image distortions and pull out a few salient details.

They did a really nice job I think, taking the examples and using them as the basis of a well-deigned demo site. I sure hope Yannis Yannakopoulos, who seems to have put it together, got some work out of it! Take a look at it in their examples, it should mostly make sense to you.

But I've dissembled all that and just grabbed the stuff we need to make a sketch in p5, so we can focus on what matters to us right now. Here's the [sketch](https://editor.p5js.org/socalledsound/sketches/k5Ib2t5Qa).

I want to mention a couple of interesting things.

First off, this is just like the shaders we used above.

First we load a vertex shader and a fragment shader:

```
 demo6Shader   = loadShader('base.vert', 'd6.frag')

```

then make a new fft and also pull the shader into the sketch, in setup:

```
        fft = new p5.FFT()
        shader(demo6Shader)

```

I've said this a few times in this class: semicolons at the end are optional in javascript. Some people don't like to include them. This person doesn't use them. They also keep their code SUPER tidy, which is helpful.

Now there's one more thing they're doing in setup, which we haven't talked about yet but which is important if you want to modify your shader as your sketch runs:

```
        demo6Shader.setUniform('u_resolution', [img.width, img.height])
        demo6Shader.setUniform('u_texture', img)
        demo6Shader.setUniform('u_tResolution', [img.width, img.height])

```

This is also happening in the draw loop:

```
      demo6Shader.setUniform('u_time', frameCount / 20)
      demo6Shader.setUniform('u_bass', mapBass)
      demo6Shader.setUniform('u_tremble', mapTremble)
      demo6Shader.setUniform('u_mid', mapMid)

```

If you're watching closely, I bet you figured out, this is how we pass the values from our sound into our shader, we call our shader and on that shader there's a method called setUniform, into which we pass a 'uniform' (a uniform is a specific data type in shader language) name and then the value that we want to pass in to it.

At the top of our fragment shader, you can see there's a list of uniforms (and also one 'varying'):

```
varying vec2 vTexCoord;
uniform vec2 u_resolution;
uniform sampler2D u_texture;
uniform float u_time;
uniform vec2 u_tResolution;
uniform float u_bass;
uniform float u_tremble;
uniform float u_mid;
```

You can see that these names correspond to the values that we are passing in.

Farther down, you can see the sine function that makes this ripple effect!

```
 float wave   = sin(uv.y * u_bass + u_time) * u_mid;
  vec2 d = vec2(wave);
  vec4 image   = texture2D(u_texture, uv + d);

```

This page has already gotten far too long and this topic is super deep. I just want to give you a few crumbs here to start your journey. Hopefully you'll feel like you can poke around on your own, armed with this knowledge. Maybe at some point you'll have a chance to look over the materials that I linked above and perhaps even by the time you're ready to launch into this I'll have a spicy series of youtube videos that you can follow, it's definitely on my list of things that I'd like to do, there seems to be a slight need for those materials!

But I do want to mention one more thing before I go. Look how they're getting three specific frequencies from the sound, bass, treble and mid:

```
      fft.analyze()

      const bass    = fft.getEnergy("bass")
      const treble  = fft.getEnergy("treble")
      const mid     = fft.getEnergy("mid")
```

Pretty nice. I bet you could use that if you feel like it!

Ok that's it for now!

Add some texture to your model from last class or make another model and apply a texture or a shader to it. Or, play with sounds and shaders. Post your researches to the gallery! Next class, we tackly this thing called augmented reality!

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
