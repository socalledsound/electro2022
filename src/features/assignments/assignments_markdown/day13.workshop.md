# enemies


![autonomous snakes](https://res.cloudinary.com/chris-kubick/image/upload/v1664582410/Screen_Shot_2022-09-30_at_4.58.28_PM_wqtsev.png)

In this assignment, we're going to make some enemies.  I mean, snake enemies.  I mean, enemies for our snake game.  These are going to be Autonomous Players; they'll move around on their own and semi kind of sort of chase our main player.  How much or how little they chase our Player is going to be pretty key to our game, because we want it to be challenging enough but not impossible.  So we'll have to develop some interesting behaviors for these Autonomous Players and I think it'll be a fun little dive into a very limited form of AI.  

NOW I WANT TO STRESS -- this is a bit advanced/complicated, and if you would prefer to just work on your game and not think about this stuff, then that's fine.  The submission for this assignment will be the current state of your own midterm game. 

But, these tecniques are also super useful and could make your game much better!  So, without further ado, let's get started.

### 1. AutonomousPlayer

The first thing we need is a new class of character, called an AutonomousPlayer.  I've saved you the trouble of writing/importing this, so we can focus on the behavioprs that we want to write, but I do want to mention a few nifty tricks here.

First off, notice the keyword 'extends'.  This basically means, that this AutonomousPlayer has all of the code that our Player class has.  BUT, if I rewrite or 'overwrite' those methods or properties, then the ones that I write here will be the ones tha the code prioritizes.

``


### 2. avoidWalls




[wandering boids](https://editor.p5js.org/socalledsound/sketches/naiEO_W9g)
[snakey boids](https://editor.p5js.org/socalledsound/sketches/aU2h8E-Ul)



![asnakey boids](https://res.cloudinary.com/chris-kubick/image/upload/v1664582417/Screen_Shot_2022-09-30_at_4.39.00_PM_qndju1.png)