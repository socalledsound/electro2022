# vectors and sprites

We're going to use vectors in this assignment!  We talked about them in class.


[p5 vector for position](https://editor.p5js.org/socalledsound/sketches/VG0KPVY8u)


[movement with vectors](https://editor.p5js.org/socalledsound/sketches/mkRp7gGn2)

Adn we're going to use a sprite sheet, that has multiple images on it.  I made it with [pixilart.com](pixilart.com).

![sprite sheet](https://res.cloudinary.com/chris-kubick/image/upload/v1663804225/snakeSprite_djpguo.png)

The main thing to notice about a sprite sheet is that it's actually multiple images in one.  Sometimes a sprite sheet has dozens of images on it, like this one for super mario :

![mario sprites](https://res.cloudinary.com/chris-kubick/image/upload/v1663813540/characters_lbo6un.gif)

So, when we import those images, we're going to use them just a little bit differently, which I'll show you here.

<!-- I'm going to use my sprite sheet in this example, but you can use an image or sequence of images if you prefer. -->

I'm going to make this [sketch](https://editor.p5js.org/socalledsound/sketches/xiQSxbeds), with you, step by step.  


### step1: importing the image

The first thing I need to do is make sure that my image is available, so I need to copy it into the folder that has my sketch in it, or upload it to the online p5 editor.  I made you a little starter sketch that has the image already uploaded and the image already loaded in to a sketch.  You can make a copy of it with File/Duplicate in the online editor, and then you can save it to your own account.

[starter sketch](https://editor.p5js.org/socalledsound/sketches/XD7_9-Yu8)


You should be able to push the play button and see the image in the canvas.  It should look like this:

![screenshot](https://res.cloudinary.com/chris-kubick/image/upload/v1663813973/Screen_Shot_2022-09-21_at_7.32.39_PM_gu2gor.png)




### 2. getting slices of the image.


![sprite sheet](https://res.cloudinary.com/chris-kubick/image/upload/v1663804225/snakeSprite_djpguo.png)

Since this is a sprite sheet, we're not goinig to display the whole image, ever -- instead, we're going to display individual slices of it.
Each of my original images was 100 x 100 pixels, and there are five of them.  So I'll start by adding an empty array name imgs, a variable for the number of images, and one for the original img size.  In the setup function, which will have access to the image I just loaded,
I'll run a for loop.  Inside the for loop, I'll get five slices from the original image, and store each of them in my array called imgs:


```
      let img
      let imgs = []
      // my sprite has 5 images
      let numImgs = 5
      // each original frame is 100 x 100
      let origImgSize = 100

      function preload(){
          img = loadImage('snakeSprite.png')
      }

      function setup(){
          createCanvas(600, 600)
        
          for(let i = 0; i < numImgs; i++){
              imgs[i] = img.get(i * origImgSize, 0, origImgSize, origImgSize)
          }

        
      }

```

Now I've got an array of images, each of which is a 100 x 100 image taken from the original image.  You can read more about Image.get() here:
[Image.get()](https://p5js.org/reference/#/p5/get)


# 3. position the image with a p5.Vector

Ok, now that we've got an array of images, let's display them as an animation.  That means that we'll need a counter variable in our draw loop to select successive images, and a variable that will contain the size that we want the image to be rendered at.



```
      ...
      let imgSize = 300
      // this variable will let us change between the five images
      let imgCount = 0
      ...

```


We'll also need a variable for position, which I'll call pos for short.

```

...
      let pos
...

```

pos is going to be a p5.Vector, so I'll need to initialize it in the setup function.  We talked about vectors in class --  a vector stores values for both x and y values (and can also store a third value for z, if we're working in 3D).  I can initialize a new vector in my pos variable by calling createVector() and passing in the values for x and y that I want.  I want the center of my image to be at the center of the screen so I'll initialize the x to be at width/2 minus half of the image and y to be at height/2 minus half of the image, like so:

```

      function setup(){
          createCanvas(600, 600)
          frameRate(15)
        
          for(let i = 0; i < numImgs; i++){
              imgs[i] = img.get(i * origImgSize, 0, origImgSize, origImgSize)
          }
        
          pos = createVector(width/2 - imgSize/2, height/2 - imgSize/2)

        
      }


```

Now, I can write a render function to draw the image.

```

      function render(pos){
          image(imgs[imgCount],
                  pos.x, pos.y,imgSize, imgSize)
                  
      }


```

In my draw loop, I can call this render method.  At this point, your complete code should look like the code below, and you should see the first image of your sprite sheet.  The complete code should look like this:


```

      let img
      let imgs = []
      // my sprite has 5 images
      let numImgs = 5
      // each original frame is 100 x 100
      let origImgSize = 100
      // I'm going to scale it up a bit
      let imgSize = 300
      // this variable will let us change between the five images
      let imgCount = 0
      // global variable for position,
      let pos

      function preload(){
          img = loadImage('snakeSprite.png')

      }

      function setup(){
          createCanvas(600, 600)
          frameRate(15)
        
          for(let i = 0; i < numImgs; i++){
              imgs[i] = img.get(i * origImgSize, 0, origImgSize, origImgSize)
          }
        
          pos = createVector(width/2 - imgSize/2, height/2 - imgSize/2)
        
      }

      function draw(){
          background(255)
          render() 
        

      }


      function render(){
          image(imgs[imgCount],
                  pos.x, pos.y,imgSize, imgSize)
                  
      }


```




#  4. looping through the images


Right now, we're only showing a single image.  We're showing the first item in the imgs array, because imgCount is set to 0 and it doesn't change.  BUt if we change it each time, we should get a different image each time through the draw loop.  Of course...our imgCount variable will very quickly exceed the length of the array of images, so we need to use the modulo to keep it in range.  Remember -- modulo is a special symbol that we learned about earlier this semester.  If we write after a number of variable, it will divide that number by a number that follows it and give us the remainder.  So, 7 % 5 is...2.  We can use it to limit imgCount to the length of our imgs array in our render function like this:


```

      function render(){
          image(imgs[imgCount % imgs.length],
                  pos.x, pos.y,imgSize, imgSize)         
      }

```


Now in our draw loop, we'll just increment imgCount, and you should see an animation.


```


      function draw(){
          background(255)
          render() 
          imgCount++

      }


```


One little tweak you can add, if that animation seems a little fast, is to increment by a smaller amount.  You can also increment by a random amount to add a little variation.  

```

    imgCount+= random(0.5)

```


But remember, the array index needs to be an integer, a whole number.  If we add floor() in our image selection code, it will round our number down:

```

      function render(){
          image(imgs[floor(imgCount) % imgs.length],
                  pos.x, pos.y,imgSize, imgSize)
                  
      }


```

My complete code at this point is here:

[animation code](https://editor.p5js.org/socalledsound/sketches/ZTMJqH5Tk)


#  5. moving our animation with vectors

Now, let's make our animation move, with vectors.  We need two more vectors to do this: one for velocity and the other for acceleration.  I'll add those global variables, and also a constant which I'll call friction:

```

      // global variable for position, velocity, acceleration
      let pos, vel, acc
      const friction = 0.99

```

And initialize them in setup, right underneath where I initialized pos:

```
...
        pos = createVector(width/2 - imgSize/2, height/2 - imgSize/2)
        vel = createVector(0, 0)
        acc = createVector(0, 0)
...

```


Now, I'll make a function that generates a random movement each time the draw loop runs.  


```

      function randomMove(){
            acc.add(random(-1,1),random(-1, 1))
            vel.add(acc)
            vel.mult(friction)
            pos.add(vel)
            acc.mult(0)
      }


```

Now, if you call this function in the draw loop....


```


      function draw(){
          background(255)
          render() 
          randomMove()
          imgCount+= random(0.5)

      }


```

.. you should see your animation start moving around the screen! 

[code at this stage](https://editor.p5js.org/socalledsound/sketches/4EK2pT10b)


#  6. keeping it on the screen

But of course we have a problem.  Our super nice thing pretty quickly moves off the screen!  Let's fix that.  We'll just check it's position each time through the draw loop, and if it's off the screen to the top or bottom, we'll reverse the velocity.y value so it goes the other way.  And, if it's off the left or right, we'll reverse the velocity.x.


```

function bounceEdges(){
      if(pos.x  <  0 - imgSize/2 || pos.x > width - imgSize/2){
        vel.x *= -1
    }
    if(pos.y  <  0 -imgSize/2 || pos.y > height - imgSize/2){    
        vel.y *= -1
    }
}

```

Notice that, unlike the example in class, which was an ellipse, the pos.x and pos.y are the top left corner of the image, so we have to compensate a little to make the bounce happen at the edge of the screen.  You might need to tweak this with your own image -- mine isn't quite right like this.  We'll talk more about this in the next assignment when we deal with collisions.


[code at this stage](https://editor.p5js.org/socalledsound/sketches/4EK2pT10b)


#  7. multiple animations

So this is pretty cool.  But you know what they say, more is more.  What if we want to have two animations???  All we need to do is add some more variables for another position, velocity and acceleration, and then tweak our functions just a bit, so that they take in each of those values and modify each of those values.

Check it out:

[multiplying](https://editor.p5js.org/socalledsound/sketches/xiQSxbeds)


#  8. a class for all this stuff

And of course, even better than this, is....to make a class, that we can use hundreds of times!  


[SnakeySprite class](https://editor.p5js.org/socalledsound/sketches/0FFFlg-U6)


[understanding classes](https://editor.p5js.org/socalledsound/sketches/GrtXchNgh)

Remember, a class is a function that creates objects.  So, we're going to write a class constructor that will make an object that has keys for all of the data that we need.  Let's write it so we can assign a random position and size to each of our little guys.

As you can see in my example, I put it in a seperate file called PlayerSprite.js that I then imported in my index.html file, as I've shown you.  You can also write right on your sketch.js, but I think it makes the code harder to deal with.

You can see, we also are taking in the images and setting an image counter.

```

      class PlayerSprite {
        constructor(imgs, x, y, size){
          this.imgs = imgs
          this.imgCount = 0
          this.imgSize = size
          this.pos = createVector(x, y)
          this.vel = createVector(0,0)
          this.acc = createVector(0,0)
          this.friction = 0.99
        }
      }


```

Next, we can bring over the functions.  We can basically just copy and paste, except that we need to use the 'this' keyword when we want to use the variables that we assigned as properties of our class.

So, for instance, our render method looks like this:

```

          render(){
            image(this.imgs[floor(this.imgCount) % this.imgs.length],
                  this.pos.x, this.pos.y, this.imgSize, this.imgSize)             
          }

```

I'll basically just copy and paste our other functions in as methods, updating them so they use the this keyword, and adding a method to move the character by a specific value.  I'll also add an update method, so that the position always gets updated if there's a velocity, which will allow our character to coast around the screen a bit...and also update the image count in there.

```

class PlayerSprite {
    constructor(imgs, x, y, size){
        this.imgs = imgs
        this.imgCount = 0
        this.imgSize = size
        this.pos = createVector(x, y)
        this.vel = createVector(0,0)  
        this.acc = createVector(0,0)
        this.friction = 0.99

    }

    bounceEdges(){
    if(this.pos.x  < 0 - this.imgSize/2 || this.pos.x > width - this.imgSize/2){
        this.vel.x *= -1
    }
    if(this.pos.y  <  0 - this.imgSize/2 || this.pos.y > height - this.imgSize/2){    
        this.vel.y *= -1
    }
}

    move(x, y){
        console.log('moving: ', x, y)
        this.acc.add(x, y)
        this.vel.add(this.acc)
        this.acc.mult(0)
    }
  
    randomMove(){
      this.acc.add(random(-0.5,0.5), random(-0.5,0.5))
      this.vel.add(this.acc)
      this.acc.mult(0)
      
  }

    render(){
      //ellipse(this.pos.x, this.pos.y, this.imgSize/2)
      image(this.imgs[floor(this.imgCount) % this.imgs.length],
             this.pos.x, this.pos.y, this.imgSize, this.imgSize)
     
    }
  
    update(){
        this.vel.mult(this.friction)
        this.pos.add(this.vel)
       this.imgCount+= random(0.5)
    }



}


```

Now, we just have to create a global variable named player at the top of our sketch:

```

      // a variable for our sprite guy 
      let player

```


make a new Player in our setup function:

```

        player = new PlayerSprite(imgs, width/2 - 100, height/2 - 100, 200)

```

and then call each of our new methods in the draw loop:

```

      function draw(){
          background(255)
          //player.randomMove()
          player.bounceEdges()
          player.update()
          player.render()
      }

```


Here's the final product, a little character you can move around:

[finished sketch](https://editor.p5js.org/socalledsound/sketches/9iL0ckfbJ)


Notice that I commented out the randomMove.  At the bottom of the sketch, I added some keyboard input to move the player instead.  You can bring back the randomMove if you want your animation to move randomly.

See if you can make an array of PlayerSprites, as I did in [this sketch](https://editor.p5js.org/socalledsound/sketches/0FFFlg-U6)!


Now see if you can replace my image sprite with your own image sprite that you've made at [pixilart.com](pixilart.com), as we talked about in class. 

If you want to make it easier to use your own sprite sheet with the code from this tutorial you might want to make each image of your sprite be 100x100, as I've done -- or just note the size that you chose and set your originImgSize to that size!  And if you have more images than the five that I have, you'll obviously want to modify your numImgs variable to reflect that.

Another thing you can do, is try to bring over the code to control your character using keyboard input, from today's in-class example.

Ok??!  Ok.  Have fun and upload what you make for us all to enjoy!





<!-- I'm going to do this and all of the assignments for this unit using vs code, as I explained in class today, and I'm going to upload it to github at the end, but you can do it in the online editor if you're more comfortable there.

[download vs code](https://code.visualstudio.com/download)


[download p5 starter](https://github.com/socalledsound/p5-starter)

There are a few videos on today's syllabus page about getting started with vs code and also getting started with github but, again, be sure to ask if you need help!! -->


<!-- After I do this, the file structure inside of vs code looks like this:

![file directory](https://res.cloudinary.com/chris-kubick/image/upload/v1663804857/snakey-files_v9uklr.png)


Now, in sketch.js I'm going to import that image into my sketch. I'll start with a global variable for named img, and then in the preload function, I'll set that equal to the return value of a call to the loadImage function, and pass in a path to my image, just like we've done before. -->

<!-- ![preload](https://res.cloudinary.com/chris-kubick/image/upload/v1663805200/preload_hifnfe.png) -->


<!-- 
If you're using vs code, you'll need the live server extension.
Click the 4 boxes in the left hand tab to get to the extensions, and search for 'live server', then click install.

![extensions](https://res.cloudinary.com/chris-kubick/image/upload/v1663814168/Screen_Shot_2022-09-21_at_7.34.01_PM_f5fonj.png)


Once live server is installed, you can ctrl click on your index.html file and select 'open with live server' to see your sketch in the browser. -->
<!-- 

```

      let img

      function preload(){
        img = loadImage('snakeSprite.png')
      }

      function setup() {
        // put setup code here
      }

      function draw() {
        // put drawing code here
      }

```


Now, before we get to the matter of loading the individual images on the sprite sheet, let's take a look at that image.

I'll add createCanvas() to setup and background() to draw and then show the image, like this:

```

      let img

      function preload(){
        img = loadImage('snakeSprite.png')

      }

      function setup() {
        createCanvas(600, 600)
      }

      function draw() {
        background(0)

        // I'm using this size because my sprite sheet is 500 x 100 pixels in size
        // this way we can see the whole thing
        image(img, 0, 0, 500, 100)
        
      }


``` -->
