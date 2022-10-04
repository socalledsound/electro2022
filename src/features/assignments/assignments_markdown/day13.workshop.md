# enemies


![autonomous snakes](https://res.cloudinary.com/chris-kubick/image/upload/v1664582410/Screen_Shot_2022-09-30_at_4.58.28_PM_wqtsev.png)

In this assignment, we're going to make some enemies.  I mean, snake enemies.  I mean, enemies for our snake game.  These are going to be Autonomous Players; they'll move around on their own and semi kind of sort of chase our main player.  How much or how little they chase our Player is going to be pretty key to our game, because we want it to be challenging enough but not impossible.  So we'll have to develop some interesting behaviors for these Autonomous Players and I think it'll be a fun little dive into a very limited form of AI.  

NOW I WANT TO STRESS -- this is a bit advanced/complicated, and if you would prefer to just work on your game and not think about this stuff, then that's fine.  The submission for this assignment will be the current state of your own midterm game. 

But, these tecniques are also super useful and could make your game much better!  So, without further ado, let's get started.

### 1. AutonomousPlayer

The first thing we need is a new class of character, called an AutonomousPlayer.  I've saved you the trouble of writing/importing this, so we can focus on the behavioprs that we want to write, but I do want to mention a few nifty tricks here.

First off, notice the keyword 'extends'.  This basically means, that this AutonomousPlayer has all of the code that our Player class has.  BUT, if I rewrite or 'overwrite' those methods or properties, then the ones that I write here will be the ones tha the code prioritizes.

```

class AutonomousPlayer extends Player{

}


```

You can see the full code [here](https://editor.p5js.org/socalledsound/sketches/eSIXuN3_g)

It's very similar to a player, except that it's a different color and instead of moving with the mouse, it moves randomly:

```
  randomMove(){
           //console.log('moving')
        const randomVec = createVector(random(-1,1), random(-1,1))
        this.acc.add(randomVec)
        this.vel.add(this.acc)
        this.acc.mult(0)
  }

```

And instead of dying when it runs into a wall, it just never goes there:

```


  avoidWalls(){
        if(this.pos.x < -mapSize/2 + 150  || 
           this.pos.x > mapSize/2 - 150 ){
           this.vel.x *= -1
           } else if(this.pos.y < -mapSize/2 + 150 || 
           this.pos.y > mapSize/2 - 150 ){
             this.vel.y *= -1
        }
  }
  

```


In my Game class, I make a bunch of these when the game starts:

```

            this.otherPlayers = Array.from({length: 10}, () => {
            return new AutonomousPlayer()
            })


```

And then I have to remember to update them in game.update()

(in Game.js)
```
    update(){
            // update player and food here

            this.otherPlayers.forEach(op => {
            op.randomMove()
            op.avoidWalls()
            op.update()
            })
        }
```

Notice how I call update() on each autonomous player -- BUT AUTONOMOUS PLAYER DOESN'T HAVE AN UPDATE METHOD.  It uses the one that it inherited from Player!

nifty.

### 2. collisions  

Ok now we need to check for collisions.  It's just more circle/circle collisions, so it's a lot like the food.  We just need to check and see if the player's head is colliding with any of these autonomous players.

in Player.js we'll add a new method that takes in an autonomous player as 'op'

```

            checkOtherPlayerCollision(op){
            // check if colliding with another player
            const d = this.pos.dist(op.pos)
            if(d < this.r + op.r){
                this.dead = true
                setTimeout(game.end, 100)
            }
            
            op.tail.forEach(seg => {
                const tailD = this.pos.dist(seg.pos)
                if(tailD < this.r + seg.r){
                    this.dead = true
                    setTimeout(game.end, 100)
                }
            })
            }

```

And then in Game.js, in that update method, where we just were, we'll call this for each autonomous player:

```

            update(){
            
                this.foods.forEach(food => {
                food.checkCollision(this.player)
                food.animate() 
                })
                
                this.otherPlayers.forEach(op => {
                this.player.checkOtherPlayerCollision(op)
                op.randomMove()
                op.avoidWalls()
                op.update()
                })
                
                this.player.checkWalls()  
                this.player.update()
                
            }

```

Now, we have to also check to see if the autonomous player has collided with our player, meaning if they're head hit our player's body.  In that case, the enemy dies, which, let's face it, is always kind of satisfying.  So in that update method of Game let's add one more line, and call op.checkPlayerCollision(), passing in this.player:


```

  update(){
   
 // update food
    
    this.otherPlayers.forEach(op => {
      this.player.checkOtherPlayerCollision(op)
       op.checkPlayerCollision(this.player)
      op.randomMove()
      op.avoidWalls()
      op.update()
    })
    
// update player
    
  }


```

And, finally, write a new version of that checkCollision function, in our autonomous player:

```


        checkPlayerCollision(op){
      // check if colliding with another player
      const d = this.pos.dist(op.pos)
      if(d < this.r * 1.15 + op.r){
        setTimeout(this.setDead, 100)
        this.dead = true
        // setTimeout(game.end, 100)
      }
      
      op.tail.forEach(seg => {
        const tailD = this.pos.dist(seg.pos)
        if(tailD < this.r * 1.15 + seg.r){
           setTimeout(this.setDead, 100) 
          // this.dead = true
            // setTimeout(game.end, 100)
        }
      })
    }


```


And then we need that setDead method: 


```

  setDead = () => {
    this.dead = true
   if(game.otherPlayers.length < game.numAliens){
      game.otherPlayers.push(new AutonomousPlayer())
   }
  }


```

Whjich just sets the autonomous player to be dead.  Since it inherited it's render method from Player and it uses the same TailSegment class, it should die just the same as any other Player.

### 3. autonomous agents

Ok, with that out of the way, we can focus on making these snakes move in a slightly more interesting way that just randomly moving around the screen.

I mentioned in class that there are a number of neat vehicle behaviors that Craig Reynold's outlined in a paper a long time ago, that a lot of people have used, and which Daniel Shiffman wrote a [chapter](https://natureofcode.com/book/chapter-6-autonomous-agents/) in an amazing [book](https://natureofcode.com/book/) and also made some nice [videos](https://www.youtube.com/watch?v=P_xJMH8VvAE&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=38) about.

These behaviors are actually pretty simple but they lead to some really interesting results. 

You can see several of these behaviors in a [wandering boids](https://editor.p5js.org/socalledsound/sketches/naiEO_W9g) sketch that I showed in class, and also see them in snakey form in this 
[snakey boids](https://editor.p5js.org/socalledsound/sketches/aU2h8E-Ul) sketch.



![snakey boids](https://res.cloudinary.com/chris-kubick/image/upload/v1664582417/Screen_Shot_2022-09-30_at_4.39.00_PM_qndju1.png)


I'm not going to add all of these behaviors to the snakey autonomous agent -- I'm just going to give it the ability to pursue our player, and I'm also going to make it distracted enough from time to time that it DOESN'T pursue our player character, because that feels like a slightly more playable game to me.



### 4. wander behavior

Let's start by making a slightly modified random move behavior.  It's called 'wandering' and I sure like to do it.  It basically means that you constrain the limit of the random move, so it's not too too far away from the original direction you were moving.  It looks like this in our Autonomous Player

```

 wander(){
        // this first value will affect how far away from the original direction we can wander
        let displaceRange = 1.0
       this.wanderTheta += random(-displaceRange, displaceRange)
       let wanderRadius = 100

       // same as :  this.pos.add(this.vel.mult(100))
        let ahead = this.vel.copy().setMag(100)
        ahead.add(this.pos)

        //this.vel.mult(random(0.5, 1.5))
        //let theta = this.vel.heading()
        let theta = this.wanderTheta + this.vel.heading()
        let wanderX = ahead.x + cos(theta) * wanderRadius/2
        let wanderY = ahead.y + sin(theta) * wanderRadius/2
        let wanderPoint = createVector(wanderX, wanderY)
        let steering = wanderPoint.sub(this.pos)
        this.acc.add(steering.setMag(this.maxForce))
         this.vel.add(this.acc)
        this.acc.mult(0)
  }


```

So BASICALLY -- what we do is make a circle out ahead of our snake, and allow it to wander at some value that is within the radius of that circle.  And then everything else is more or less what we were doing with our randomMOve method.  Now, let's look at how we'll make the evil blue snake move towards our player snake.


### 5. pursue behavior


To pursue the player, we first need to know where the player is, or where we think it's going.  We can find that by looking at the player's current position and then adding a vector with the same heading as the current velcity, but just a lot bigger in magnitude.  THen, we subtract the enemy snakes current position from this target to get a new heading for our snake.  And that's pretty much it:

     pursue(player){
       // make a copy of the player's position
        let targetPos = player.pos.copy()
        // look ahead of the player
        // ie where the player is going
        let prediction = player.vel.copy().mult(20)
        targetPos.add(prediction)
        
        // create a force in the direction of the player
        let f = p5.Vector.sub(targetPos, this.pos)
        f.setMag(this.maxSpeed)
        f.sub(this.vel)
        f.limit(this.maxForce)
       
       //  create the movement
        this.acc.add(f)
        this.vel.add(this.acc)
       this.acc.mult(0)
         
    }

### 6. mixing the two behaviors

BUT, as I said before, this is an enemy that is very very difficult to avoid.  So what we need to do is, mix this pursue behavior, with the wander behavior.  We'll do that in the Game.update() method.   You can see the full code [here](https://editor.p5js.org/socalledsound/sketches/FFRrW8a5N)   If you go to Game.js, inside it's update method, you should find this conditional statement.

```
      if(random(100) > 80){
        op.pursue(this.player)
      } else {
        op.wander()
      } 

```

SO, if the random number is bigger than 80, the op will pursue the player.  otherwise, it will wander away.  To me, this seems like a prety good mix; it makes the game somewhat challenging but also leaves some space for our player to get on with eating food and doing whatever snakes want to do.



### 7. get working!

Ok, so that was a quick overview, but I also left you the resources to help you go farther, if/when you want to.

Now get to work on your midterm projects!  Try to create some autonomous behavior for some baddies!  And don't be afraid to ask for help.

Push your latest game up to the gallery.




[nature of code book chapter 6](https://natureofcode.com/book/chapter-6-autonomous-agents/)
[videos](https://www.youtube.com/watch?v=P_xJMH8VvAE&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=38)