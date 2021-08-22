# augmented

Today we'll explore a nifty little library called [Aframe](https://aframe.io/).  And I'll show you two different ways to use it, one with p5 and one without.  But let's first take a look at what it is.

![aframe image](https://res.cloudinary.com/chris-kubick/image/upload/v1604951647/side-effects/aframe-img_ryttar.jpg)

The image above is the browser output from the html code below:

```
<html>
  <head>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -3.084" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>

```

It looks a lot like html, but actually it's a little different.

It's sort of a weird way of writing javascript code in an html document.  

Notice, first, that the aframe library is javascript, we include it with a script tag.

Once it's loaded, we can use these aframe tags that are called entities.   'a-scene' is kind of like a 'div' that we can put other entities in, like a-box, a-sphere or  a-sky.  

This is a model for writing code that we've actually already been using, albeit in a slightly different form.  It's called an [entity component system](https://en.wikipedia.org/wiki/Entity_component_system), and you can read a bit about how aframe implements it [here](https://aframe.io/docs/1.0.0/introduction/entity-component-system.html).  The short version is, aframe is a kind of a wrapper for three.js, which we've talked about before.  


# adding a photo world

So, if you want to use aframe, the simplest way is to write html code like the code above.  You can do this in an online editor but I recommend using vs code, because then you have access to the nifty explorer that we'll take a look at in a minute.  Start by grabbing the [starter sketch](https://github.com/socalledsound/basic-aframe) which also has a few image assets.  Open it in live server.  You should see an image like this:

![aframe living room](https://res.cloudinary.com/chris-kubick/image/upload/v1604951648/side-effects/lr-aframe_miwcct.jpg)

Which is a lot like the one we were looking at before obviously, but it's in my living room!  And the plane that the basic entities are sitting on is made out of 'brick' now.

This is because I'm loading a few assets into my sketch:

```
      <a-assets id="VRAssets">
        <img src="img/marina-photosphere-4k.jpg" id="marina" />
        <img src="img/living-room-pano.jpg" id="living-room" />
        <img src="img/snow.jpg" id="snow" />
        <img src="img/brick.jpg" id="brick" />
      </a-assets> 

```

Each asset has an id, which I can feed in to my entities as an image source:

```
<a-plane position="0 0 -4" rotation="-90 0 0" width="50" height="50" src="#brick" repeat="100 100"></a-plane>
<a-sky id="theSky" src="#living-room" color="rgb(255,255,255)"></a-sky>
```

As you can see, I have this entity called a-sky, that I pass in the id of my living room photo as src.  And that's it!  Easy, right?

![panorama living room](https://res.cloudinary.com/chris-kubick/image/upload/v1604699891/side-effects/PXL_20201106_212636980.PANO_jxzumh.jpg)


The photo image is one I took using the panorama feature on my phone, I can also make photosphere images, maybe you can too?  I don't know much about iphones any more, mines an android phone.  Any of you apple users out there, let us know what you can figure out for iphones!  You can also download these images from sites like [unsplash](https://unsplash.com/s/photos/panorama).


# the explorer

Before we leave this sketch, type ctrl+alt+i to open up the explorer, which is super friendly and useful.  You can select an entity on the left and then modify it's details on the right.  For instance, a-sphere.  Select it now on the right.  Play with it's position using the arrows and then on the left, scale it up in size and change the color.  Then go all the way to the top left and click the little page icon to copy the underlying html code into a buffer.  Go to your vs code document and past that sphere in under your other sphere.  You should see another sphere on your page!  Nice, right? 



# using p5 and aframe together

To extend aframe's capabilities, we can use a javascript library like three.js, which is how they go about it in the aframe docs.  I like three.js and highly reccommend learning it if you're interested in this stuff.  But, we've been learning p5, so I'm going to show you some ways to use p5 with aframe!  Because it's easy, it's fun and it's what we know.


![p5 lava lamps](https://res.cloudinary.com/chris-kubick/image/upload/v1605154420/side-effects/aframe-lava_yh4yo4.jpg)

# create element method


All right, let's tackle this first method -- which is not my preferred method -- in the online p5 editor in this [sketch](https://editor.p5js.org/socalledsound/sketches/hwpG3IOWN).  Make sure you're looking at the html:

```
<!DOCTYPE html>
<html lang="en">

<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.min.js"></script>
  <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
  <link rel="stylesheet" type="text/css" href="style.css">
  <meta charset="utf-8" />

</head>

<body>
  <a-scene id="scene" background="color: #ec9192">
    <a-camera position="0 1 0">
    </a-camera>

    <a-light type="ambient" color="#A8A8A8" light=""></a-light>
    <a-light type="directional" color="#FFF" intensity="0.45" position="4 2 1" light=""></a-light>
    <a-circle position="0 0 -4" rotation="-90 0 0" radius="15" color="#b5bd89" shadow></a-circle>
  </a-scene>
  <script src="sketch.js"></script>
</body>

</html>
```
Which looks a lot like th other aframe example we were looking at, right?  We have a scene, which contains a camera, a few lights, and a circle.  So where are these bubbles in the sky coming from?  Well, p5, of course!  Let's take a look at the sketch.js that is referenced in this html file.

```
function setup() {
  noCanvas();
  console.log('p5');

  const bubbles = createElement('a-entity').parent('scene').attribute('position', '0 5 0');
  for (let i = 0; i < 50; i++) {
    const x = 15;
    const y = 4;
    createElement('a-sphere').parent(bubbles)
      .attribute('position', `${Math.random() * x - x / 2} ${Math.random() * y - y / 2} ${Math.random() * x - x / 2}`)
      .attribute('radius', Math.random() * 1 + .1)
      .attribute('color', '#dfbe99')
      .attribute('opacity', 0.5);
  }

  const houses = createElement('a-entity').parent('scene').attribute('position', '0 0 0');
  for (let i = 0; i < 6; i++) {
    const X = 10;
    const x = Math.random() * X - X / 2;
    const z = Math.random() * X - X / 2;

    const house = createElement('a-entity').parent(houses)
      .attribute('position', `${x} 0 ${z}`);

    createElement('a-cone').parent(house)
      .attribute('position', '0 0 0')
      .attribute('radius-bottom', .85)
      .attribute('radius-top', .1)
      .attribute('height', 2)
      .attribute('color', '#db5375')
      .attribute('shadow');

  }
}

```

And now we can see how it's done: we use createElement() and pass in the name of the entity that we want to create and then use straightforward dom manipulation to change the attributes of those elements.  If you're coming from a web development background, this is actually probably pretty familiar and maybe a great way to work.  But.....

# aframep5.js

But, I think there's a better alternative.  It's a little library called aframep5.js and there is literally nothing about it anywhere on the internet, I just stumbled upon it via google.  As far as I can tell it was made by an adjunct lecturer like me, at NYU, for a class.  I reached out to him but he hasn't responded so I'm guessing his email is not working either.  I think it's ok if we use it, though!  After all, it's built on p5 which is very much open source, so....

Anyway, it's very small, easy to wrap your brain around and I think pretty useful for integrating aframe and p5.  Checkout this [sketch](https://github.com/socalledsound/snow-room), which is simlar to the previous sketch, except now there's a winter wonderland in my living room!  

I do want to say -- I didn't write this code, I got it from a github repo by someone named [Leo Ouyang](https://leoouyang.com/let-it-snow), who I have never met or heard of.  But it seemed like a good place to start for an intro tutorial to this stuff.  He also has a game called [house designer](https://leoouyang.com/house-designer), I'm guessing he was a student in NYU's ITP program, where Daniel Shiffman and Lauren McCarty (creator of p5) teach.  when he made these things.  And, I wanted to share those links because they seem -- particularly the house designer game -- like they should be pretty achievable for people in this class, and a nice website like the ones he put together could be a nice thing to walk away from this class with!

# using aframep5

Let's unpack this a bit and see if we can figure out what's going on.

First off, in index.html you can see that we load a bunch of assets in to an a-scene with id of VRScene:

```
	    <a-scene id="VRScene">
				<a-assets id="VRAssets">
					<img src="images/brick.jpg" id="brick" />
					<img src="images/stone.jpg" id="stone" />
					<img src="images/snow.jpg" id="snow" />
					<img src="images/sky.jpg" id="sky" />
					<img src="images/livingRoom-pano.jpg" id="lr" />
					<img src="images/marina-photosphere-1k.jpg" id="marina1" />
					<img src="images/marina-photosphere-4k.jpg" id="marina2" />
					<img src="images/marina-pano4k.jpg" id="marina3" />
					<a-asset id="model" src="images/model.dae"></a-asset>
				</a-assets>

				<a-sky id="theSky"  color="rgb(255,255,255)"></a-sky>

	    </a-scene>
```

And, in our sketch, in the setup function:

```
function setup() {
	noCanvas();
	world = new World('VRScene');
	makeGround();
	makeTrees();

}

```

We call noCanvas() -- we're letting aframe handle the canvas, so we won't make one in p5 -- and create a new World, passing in the id of our a-scene entity.  Make sense?

Then call two functions, one to make the ground plane and one to make the trees.  We'll come back to those in a bit.

In the draw loop:

```

function draw() {
  //move the user
	move();
	
	//add a src for the sky
	let sky = select('#theSky');
	sky.attribute('src', livingRoom);
	
	
	//create a new flake
	var temp = new Flake(0, 0, -5, world);
	flakes.push(temp);
	
	//draw all flakes
	for (var i = 0; i < flakes.length; i++) {
		let result = flakes[i].move();
		if (result == "gone") {
			flakes.splice(i, 1);
			i -= 1;
		}
	}
}
```
I first call a function that will take mouse input to move the user, then add a src property for the sky, passing in a variable that I assigned above:

```
let livingRoom = '#lr';
```
which has the idea of the img tag that has the living room panorama attached to it.

Then, I draw a bunch of snowflakes, in a loop.  Maybe this looks familiar, we have an array of flakes and we make a new one every time through the draw loop, then call the move method of the class Flake on each flake; if it returns the value "gone" then we eliminate it from the array of flakes.  

Let's take a look at that Flake class now:

```

class Flake{
    constructor(x,y,z, world) {
        this.x = x;
        this.y= y;
        this.z = z;
        this.xOffset = random(1000);
        this.zOffset = random(2000, 3000);
        this.myFlake = new Sphere({
            x:random(-25, 25), y:10, z:random(-25, 25),
            radius:0.05,
            red:255, green:255, blue:255
        });

        world.add(this.myFlake);
    }
	move() {
		let yMovement = -0.03;
		let xMovement = map(noise(this.xOffset), 0, 1, -0.05, 0.05);
		let zMovement = map(noise(this.zOffset), 0, 1, -0.05, 0.05);
		
		this.xOffset += 0.01;
		this.yOffset += 0.01;
		
		this.myFlake.nudge(xMovement, yMovement, zMovement);
		
		let flakeY = this.myFlake.getY();
		
		if (flakeY < -1) {
			world.remove(this.myFlake);
			return "gone";
		}
		
		else {
			return "ok";
		}
	}
}

```

In the constructor, we make a new Sphere, passing in the randomly generated coordinates of each flake.  This Sphere class is part of the aframp5 library, and it's a wrapper around the aframe entity.  We pass it some values, and it makes that aframe entity and handles the dom manipulation for that entity that we were using in the previous example.  Then, we just have to add that Flake to our World, which is like adding it to the scene.

In move, we update the position for the flake and then check to see if the yPosition is below the ground or not.  

And that's pretty much it!  There are a few other elements to this scene which I've commented out for now.  See if you can get them to show up -- you should find a snowman in there.  

# aframep5

Before I leave you to your assignment, Let's take a look under the hood of the aframep5 library.  I mentioned that there aren't any docs at all for it.  Fortunately, it's pretty simple to understand if you look at it.  It's basically a series of construtor functions that construct entities for aframe.  There are functions for other geometric primitives and for loading models and handling other manipulations in aframe.  If you look at Sphere (line 175), you can see that it takes in a value called 'opts', which is the object I passed in above.  You can look through that function, you can get a sense of what options it will respond to.  You can also look at the [a-sphere]() documentation to get a sense of what options aframe has, and try those values in uyour  data object.  And, if this seems too weird or difficult for you, no worries!  I like it, but just plain old aframe without the p5 works fine, too.


# assignment!

For your assignment, take a panoramic photo or download one from an online resource, like [unsplash](https://unsplash.com/s/photos/panorama) and add it to an aframe scene, along with whatever fun you can think up; add some geometric primitives or make your own entities if you feel up to it!





<!-- http://vrspace.jmvisualcreativity.es/ -->






<!-- load image with callbacks

https://nycdoe-cs4all.github.io/units/3/lessons/lesson_3.1


https://aframe.io/docs/1.0.0/guides/building-a-basic-scene.html -->