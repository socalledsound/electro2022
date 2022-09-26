# change

In this assignment, we're going to explore the god of CHANGE.   

![my snake game](https://res.cloudinary.com/chris-kubick/image/upload/v1664171723/Screen_Shot_2022-09-25_at_10.54.52_PM_wewriq.png)


We'll do it with this cute little snake game, which is a lot bit of a ripoff of games like [snake.io](https://snake.io/) and [slither.io](https://slither.io/).  

I really don't know which one was first, and there's probably a ton of other clones too.  It's a fun and simple game that's based on the original [snake game](https://www.mikusa.com/snake/snake.html) from way back.  Here's another [chill version](https://www.onemotion.com/snake-game/) that i just found.  Daniel Shiffman made a [video](https://thecodingtrain.com/CodingChallenges/115-snake-game-redux.html) on how to make it in p5 if you want to watch it, and there are a million million clones of it. 

[snake game in p5](https://editor.p5js.org/socalledsound/sketches/Rtk-3emZh)
[a nifty snake game in 3d, also in p5!]()

But we're going to do it more like slither.io or snake.io, and, in a few weeks, we're actually going to set our version up as a multiplayer online game that we can all play together from whereever we happen to be, like slither.io.

Today we're just going to work on some of the basic mechanics, particularly the mechanics of collision.  
When we're done here I want you to think about how you can incorporate these ideas into your own sketch.  
It can be a sketch that you build off of previous sketches that you've done, or an entirely new sketch, 
but I want you to submit to the gallery a sketch of a character who changes, because of something that
happens on screen. 

# 1. to start

I've made a little [starter sketch]() that blocks out some stuff that we've already talked about.  

It's basically a ball that you can move around with your mouse. There's also a scoreboard: 

```

            function drawScore(){
                fill(0)
                rect(0,0,width, scoreboardPadding)
                fill(255)
                textSize(40)
                text('score: ' + score, 30, 60)
            }

```



The mouse movement is kind of nifty, so let's take a quick look at that.  In the main sketch, I've got a call to
mouseMoved, which passes the mouse coordinates in to a method in the player called, appropriately enough, player.moveToMouse().
So every time the mouse moves this function will be called and we can update the Player position.

```

  
            function mouseMoved(){
                player.moveToMouse(mouseX, mouseY)
            }  

```


And if we look at that method, we can see that we take in the mouseX and mouseY, create a new vector from that point, then subtract the current player position from the mouse position to get a new vector.  We set the player's acceleration to be that vector, then limit it to a max of 0.1 and add it to the current velocity of the player and finally reset the player's acceleration to zero.  

```

            moveToMouse(mx, my){
                const mouse = createVector(mx, my)  
                this.acc = p5.Vector.sub(mouse,this.pos);
                // this.maxForce is 0.1 so it will limit the amount of acceleration we add here
                this.acc.setMag(this.maxForce)
                this.vel.add(this.acc)  
                this.acc.mult(0) 
            }

```

Aws we've done before, we update add the velocity to the player's position and apply friction in a seperate update function which gets called whether the mouse is being moved or not, which means that the Player will continue gliding after the mouse has stopped moving.  This somehow feels a little more natural and kinetic and fun.

```

    update(){
       
        this.vel.mult(friction)
        this.pos.add(this.vel)
    }

```

Also notice that there's a litle red eye which points in the direction that the character is moving.  This is mostly just some simple trigonometry  First we get a point on the circle, using sin, cos and the radius, like we did in the last assignment.  Then we rotate the eye to an angle described by the heading of the player, which is the direction of the vector described by the velocity.  Notice a few things in there.  First, the rotation is wrapped by push() and pop(), which means that the rotation won't continue being added to other elements of our game.  Also, the rotation is wrapped by two translations of the vector space of our sketch.  This is super important -- it makes the rotation happen around the center of our player.   Be sure to ask me about this if you don't quite get it but want to.

```

      pointOnCircle(pos, r){
        return {
            x: pos.x + Math.cos(0) * r,
            y: pos.y + Math.sin(0) * r,
        }
    }


    renderEye() {
        fill(this.eyeColor)
        const eyePos = this.pointOnCircle(this.pos, this.r)
        push()
            translate(this.pos.x, this.pos.y)
            //console.log(this.vel.heading())
            rotate(this.vel.heading())
            translate(-this.pos.x, -this.pos.y)
            ellipse(eyePos.x, eyePos.y, this.r/3)
        pop()
    }


```


# 2. Food

You can also find a Food class in this sketch.  We're not using it just yet and we're going to have to add some stuff to it, but the basics are there:


```

            class Food {
                constructor(x, y, size){
                    this.color = [220, 0 , 200]
                    this.position = createVector(x, y)
                    this.size = size
                    this.eaten = false
                }

                render(){
                    if(!this.eaten){
                        fill(this.color)
                        ellipse(this.position.x, this.position.y, this.size)
                    }

                }
            }

```

It's pretty simple, it just draws a pinkish circle at a given position and size, if it hasn't been eaten.

Now, let's go into our main sketch and add an array of foods.

I'll start with a global variable named foods, at the top of the sketch.  And also add another called numFoods and one more called foodSize.

```

            // global variables
            const friction = 0.99
            const scoreboardPadding = 100
            let score = 0
            let player
            // food
            let foods
            const numFoods = 60
            const foodSize = 10

```

Now, try not to peek, and see if you can create an array of Food objects using Array.from, and the foodSize, and numFoods variables.  Use a random location for the x and y coordinates of the Foods.  Then, use foods.forEach() to render each of those foods.  You got this.


***


If you tried doing that on your own and were able to do it, that is AWESOME.  If not, no worries.  Here we go:



```



```






# 3. Eating the Food

# 4. Growing a Tail

Now this last part is a little tricky.  When the Player eats some food, we want it to grow a tail.  Honestly, it took me the better part of a Sunday afternoon to figure out how to do it and make it work reasonably well, and it's still a little bit off.








<!-- 


Setting our animation to bounce off of an edge of our screen -- or the scoreboard -- is a type of collision detection.  And it's also an example -- albeit a very simple one -- of our character evolving, just a little bit.  In the case of an edge detection, we're checking to see if the character has collided with an edge of the screen, and if it has, then we alter the character's velocity.  Now, we're going to set up a slightly more complex collision, our character will collide with some food.  

But we have to make the food first.  And, we're going to make a fair ammount of food, which are all basically going to be the same.

This is a GREAT use case for a new class, named Food.  In a new file named Food.js, I'll make that Food.

Below is the code for some basic food.  To start with, I'll just use a circle to represent it, I can always change that later, but if I start with something simple, we can figure out the game mechanics in a pretty straightforward way.



 -->


<!-- 

So let's start by adding a scoreboard, to show those points.

I'll make a few new variables in the global scope at the top of sketch.js:


```

            let score = 0
            const scoreboardHeight = 100

```

And write a function called drawScoreboard: 


```


```

I also need to update my the bounceEdges of PlayerSprite.js so that the player bounces off of the bottom of the scoreboard:


```

                bounceEdges(){
                if(this.pos.x  < 0 - this.imgSize/2 || this.pos.x > width - this.imgSize/2){
                    this.vel.x *= -1
                }
                if(this.pos.y  <  scoreboardHeight - this.imgSize/2 || this.pos.y > height - this.imgSize/2){    
                    this.vel.y *= -1
                }
            }

```

[scoreboard code](https://editor.p5js.org/socalledsound/sketches/cVMvr6AT-)


# 2 more accurate bounceEdges: bounding box ( or circle ) 

And now I think it's probably a good idea to really dial in this bounceEdges function, because my sprite isn't quite bouncing at the right place.

![ball on scoreboard](https://res.cloudinary.com/chris-kubick/image/upload/v1664126880/Screen_Shot_2022-09-24_at_10.37.34_PM_dluxkz.png)

You can see that the math I've got is a little off.  My ball guy doesn't bounce until it's a little bit inside the scoreboard.  So let's use a very useful trick, which is to make a bounding box.  

I'll start by drawing a rectangle around the image. So we can where pos.x and pos.y are.  Then, I'll draw another one where we're currently checking for our edge collision, which imgSize/2.

```

    render(){
      fill(200)
      rect(this.pos.x, this.pos.y, this.imgSize, this.imgSize)
      fill(250)
      rect(this.pos.x + this.imgSize/2, this.pos.y + this.imgSize/2, this.imgSize/2, this.imgSize/2)
      image(this.imgs[floor(this.imgCount) % this.imgs.length],
             this.pos.x, this.pos.y, this.imgSize, this.imgSize)
     
    }

```

If you move the character around the screen, you can that it bounces where we're telling it to -- it's just not quite where the image is.

![bounding box 1](https://res.cloudinary.com/chris-kubick/image/upload/v1664126969/Screen_Shot_2022-09-25_at_10.29.07_AM_ikutgu.png)


So the key is to find a box that is closer to my actualy image.  Which in this case is more like this:

```

    render(){
      fill(200)
      rect(this.pos.x, this.pos.y, this.imgSize, this.imgSize)
           fill(250)
      rect(this.pos.x + this.imgSize/3, this.pos.y + this.imgSize/3, this.imgSize/3, this.imgSize/3)

      image(this.imgs[floor(this.imgCount) % this.imgs.length],
             this.pos.x, this.pos.y, this.imgSize, this.imgSize)
     
    }

```

![bounding box 2](https://res.cloudinary.com/chris-kubick/image/upload/v1664126969/Screen_Shot_2022-09-25_at_10.28.37_AM_fmpw8i.png)


So....I can update my bounceEdges method with this new knowledge, and it should work pretty well.  If you have a character in your animation that has different dimensions, you might need to play with this a bit to make it work.

```

    bounceEdges(){
    if(this.pos.x + this.imgSize/3  < 0  || this.pos.x + this.imgSize/3 * 2 > width  ){
        this.vel.x *= -1
    }
    if(this.pos.y + this.imgSize/3  <  scoreboardHeight || this.pos.y + this.imgSize/3 * 2 > height){    
        this.vel.y *= -1
    }
}

```

[better edge collision](https://editor.p5js.org/socalledsound/sketches/wfpNwzw3e) -->
