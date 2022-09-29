# change

In this assignment, we're going to explore the god of CHANGE.   

![my snake game](https://res.cloudinary.com/chris-kubick/image/upload/v1664171723/Screen_Shot_2022-09-25_at_10.54.52_PM_wewriq.png)


We'll do it with this cute little [snake game](https://editor.p5js.org/socalledsound/sketches/pU0hI6j1i), which is a lot bit of a ripoff of games like [snake.io](https://snake.io/) and [slither.io](https://slither.io/).  

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

I've made a little [starter sketch](https://editor.p5js.org/socalledsound/sketches/uytzSu7kX) that blocks out some stuff that we've already talked about.  

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


### 2. Food

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


If you tried doing that on your own and were able to do it, that is AWESOME.  If not, no worries.  Let's start by making the foods array:


```

        foods = Array.from({length: numFoods}, () => {
        return new Food(random(foodSize, width  - foodSize), scoreboardPadding + random(foodSize, height - scoreboardPadding- foodSize) , foodSize)
        })


```

It probably doesn't need to be that complicated, but I wanted to make sure that the food wasn't right on the edge of the screen, and obviously wanted to make sure that it wasn't on the scoreboard.

Next, render it:

```

        foods.forEach(food => {
        food.render()
        })

```

And that's it!  We have some food.  Now, let's eat.



### 3. Eating the Food

To eat the food, we need to check for a collision.  Fortunately, both our chracter and the food are circles, and circle/circle collisions are the easiest ones.  They're also kind of sort of the most useful, because we can use them in a lot of cases that aren't quite circles, like for instance, in that asteroids game from last time -- even though the shapes involved aren't circles, that game just uses a circle with the same radius as the asteroid to detect collisions -- not perfect but, still, good enough to be playable.  


![bounding circles](https://res.cloudinary.com/chris-kubick/image/upload/v1664322501/Screen_Shot_2022-09-27_at_4.47.56_PM_azwltx.png)

[asteroids with bounding circles](https://editor.p5js.org/socalledsound/sketches/7WsndMRlZ-)

If we really wanted to nail the collisions, we could of course do it, but the collision formula would look something like [this](https://www.jeffreythompson.org/collision-detection/poly-poly.php) -- a couple of hundred lines.  



Whereas, to do circle/circle collision is really very straightforward.  We just have to check the distance between the circles and see if it's less than the length of the combined radii.


![circle collision image](https://res.cloudinary.com/chris-kubick/image/upload/v1664322759/Screen_Shot_2022-09-27_at_4.52.28_PM_efbawu.png)

[circle collisions](https://editor.p5js.org/socalledsound/sketches/A0LTXpa9Y)

[circle circle collisions moving](https://editor.p5js.org/socalledsound/sketches/nhI2uDnRC)

So, we can add a method to our Food class, in Food.js, that takes in the player, checks the distance between the player and each food item, and then checks if that distance is less than the radius of the player's circle plus the radius of this piece of food.  If the distance between them is less, guess what?  They're colliding.  


```

                checkCollision(player){
                // if this nugget hasn't been eaten
                    if(!this.eaten){
                    // get the distance between it and the player
                    const d = this.pos.dist(player.pos)
                    // if that distance is less than the combined radii
                        if(d < (player.r + this.size)){
                            // do some stuff
                            this.eaten = true
                            //player.grow()
                            score++
                        }
                    }
                }



```

If they're colliding, we'll set the food to an 'eaten' state, grow the player (we'll get to that next, for now we'll just leave it commented out), and add one to the player's score.

Notice -- we're already using 'this.eaten' in the render method of our Food class, so, if the food has been eaten, it won't show up on the screen.

Now we just have to call this checkCollision each food item in the draw loop:

```

                foods.forEach(food => {
                    food.checkCollision(player)
                    food.render()
                })


```

Now, check it out and see if it works -- you should be able to eat food, see it disappear and see your score grow.


But, we're interested in real growth, not just imaginary points.  Let's make this Player grow, adding a tail segment each time the player consumes some food.  This is actually the neat part!  It's a little bit tricky, but not too much.  

Can you imagine how we might accomplish it?  Give it a shot!!!  But don't spend too long on it.  Honestly, it took me a few hours to make it work reasonably well, and it's still a little bit off.  So, if you can't figure it out right away, don't worry.


### 4. Adding a Tail

You may have noticed that there's one more class definition in the starter sketch -- a TailSegment.  It's pretty simple:


```

            class TailSegment {
            constructor(pos, r){
                this.col = [120, 200, 90]
                this.pos = pos
                this.r = r
            }
            
            render(){
                fill(this.col)
                ellipse(this.pos.x, this.pos.y, this.r * 2)
            }

            }


```


We're going to add an array of these to our Player.  In Player.js, in the constructor definition, let's add a tail :

```

            class Player {
                constructor(){
                    this.playerColor = [120, 200, 90]
                    this.growColor = [220, 0, 0]
                    this.eyeColor = [220,0,0]
                    this.pos = createVector(width/2, height/2)
                    this.vel = createVector(0,0);
                    this.acc = createVector(0,0)
                    // this.friction = 0.99
                    this.maxForce = 0.1
                    this.maxVel = 2.0
                    this.r = 20 
                    // this is the tail
                    this.tail = Array.from({length: 6}, (e, i) => {
                        const loc = createVector(
                            this.pos.x - this.r * (i + 1), 
                            this.pos.y 
                            )
                        return new TailSegment(loc, this.r)
                    })
                

                }

```

It might look slightly gnarly, but it's not really anything you haven't done before.

We're just making an array of 6 TailSegments, and offsetting each one to the left at a distance of the radius of the playuer, so, half the size of the player.  


Now in player.render(), let's draw that tail on the screen : 

```

            render(){

                // draw the player
                fill(this.playerColor)
                ellipse(this.pos.x, this.pos.y, this.r * 2)
                //draw the eye
                this.renderEye()
                // draw the tail
                this.tail.forEach(segment => {
                    segment.render()
                })
            }


```

If you check it out, you should see a tail!  


![snake with tail](https://res.cloudinary.com/chris-kubick/image/upload/v1664327517/Screen_Shot_2022-09-27_at_6.11.48_PM_znx9nq.png)


Just -- if you move the player, the tail doesn't move.  Let's fix that.

Let's add some stuff to the player.update() method.  First, let's make a copy of the player's position before it moves.  This way we can check to see if the player is moving; if it isn't moving, we don't have to move the tail.

```

    update(){
       
        this.acc.mult(0)
        this.vel.mult(friction)
        // make a copy of the player position before we add velocity.
        this.oldPos = this.pos.copy()
        this.pos.add(this.vel)


```

Next, we have to get the distance between those two points, and if that distance is greater than some small amount -- I used 1 but 0.5 or even 0.1 probably would work too -- then we'll move the tail. 


```

    update(){
       
        this.acc.mult(0)
        this.vel.mult(friction)
        // make a copy of the player position before we add velocity.
        this.oldPos = this.pos.copy()
        this.pos.add(this.vel)
        const d1 = this.pos.dist(this.oldPos)
        if(d1 > 1){
                // move the tail in here
            }

```

To move the tail, we're basically going to swap a whole bunch of positions.  

I'm going to set a key of closest on the one at the end.  It'll make it red, so we can see it clearly -- and also because I like the way it looks

We'll get the distance between that one and the new head position and if it's greater than some arbitray amount -- I chose r/4 but you can play with this.  I played around with these values for a while, I decided I like it better when it's tight together weird looking but you can tweak it as you like.  


```

            if(d1 > 1){
                    // let's find the newclosest tail segment
                    this.closest = this.tail.length - 1
                    this.tail[this.closest].col=this.growColor
                    const d2 = this.tail[this.closest].pos.dist(this.oldPos) 
                        if((d2 > this.r/2 )){
                        // if the closest segment is too far away, update the positions    
                        this.tail[this.closest].pos = this.oldPos
                        for(let i = 0; i < this.tail.length - 1; i++){
                            this.tail[i].pos = this.tail[i+1].pos
                        }

                    }
                    } 

```

If the closest segment is far enough away, update it's position to be the old head position, and then update all of the other items in the tail to be the position of the one immediately closest to them.

So now we've got this red dot near the front of our snake, which actually marks the end of our array called tail, right?  The next step is to add more segments, which we'll do in a method called player.grow().

[tail](https://editor.p5js.org/socalledsound/sketches/6ReWoLBvF)

### 5. Growing the Tail

Growing the tail is actually not that hard.  We have a TailSegment class, so when we want to grow, we just push a new TailSegment to our tail.

```

            grow(){
                    this.tail.push(new TailSegment())        
            }

```

And I want to admit something here: I actually wasted a bit of time trying to figure out where the new tail segment should be positioned.  I came up with something that works reasonably well, which basically takes the direction of the current velocity and projects backward in time, by mutliplying it by a negative value.

```

    grow(){
      let behind = this.vel.copy()
      behind.mult(-15).setMag(20) 
      let initPos
      if(this.tail.length > 0){
         initPos = this.tail[this.tail.length-1].pos.copy()
      } else {
        initPos = this.pos.copy()
      }
       initPos.add(behind)
        //const initPos = createVector(-100, -100)
      this.tail.push(new TailSegment(initPos,this.r/1.5))
    }

```

But then I realized -- this is totally unnecessary and pretty inaccurate and it's better to just let the previous tail segment tell the new one where it needs to go!  We can litterly start the new segment anywhere we want, and that's a lot shorter and easier.  So let's start it offscreen, at -100, -100, and let the update function put it into place.  Notice, I made the new segments a little bit smaller, which I think has a cool effect.

```

        grow(){

            const initPos = createVector(-100, -100)
            this.tail.push(new TailSegment(initPos,this.r/1.5))
        }

```
And that's pretty much it!  To make the snake grow, we just have to go into Food.js and call player.grow() when a piece of food gets eaten, in the checkCollision method of Food, so we need to uncomment that line.

```
(Food.js)

                checkCollision(player){
                    // if this nugget hasn't been eaten
                    if(!this.eaten){
                    // get the distance between it and the player
                    const d = this.pos.dist(player.pos)
                    // if that distance is less than the combined radii
                        if(d < (player.r + this.size)){
                            // do some stuff
                            this.eaten = true
                            player.grow()
                            score++
                        }
                    }
                }


```

[finished code](https://editor.p5js.org/socalledsound/sketches/6ReWoLBvF)



### 6. build your own snake


So now you've mastered circle/circle collisions and did some other cool stuff too.  I hope it's working for you!  

What I want you to do now is, design your own render method for this snake.  Different colors, sizes, even shapes.  Each segment could be a different rainbow color -- the whole snake could be diamond shaped -- the snake could have six or twelve eyes, really it's up to you.  And when we make our connected game, we'll try and bring in all of these different snakes!!

To do this, you'll focus on the render methods of the Player class and the TailSegment class.  Feel free to also make a better Food!  Have fun and upload your work to the gallery.



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
