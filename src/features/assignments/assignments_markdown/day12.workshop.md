# landscapes


In this assignment, we're going to learn how to extend the game of our world beyond the boundaries of the screen.  We'll also give our Snake the chance to die, just a little bit, which is always fun.

### 1. Magic

In this [bouncing ball sketch](https://editor.p5js.org/socalledsound/sketches/5uaSJy5g1), you can see that the camera follows the ball when it starts to move off the canvas.

And in this maze game, [astray](https://games.wwwtyro.net/astray-2/index.html), we only get to see a small piece of the maze at any point in time.  

Compare that to this [simple maze game](https://editor.p5js.org/socalledsound/sketches/S0saQ1QzL) that I made in p5, mostly from following a [series of videos](https://www.youtube.com/watch?v=HyK_Q5rrcr4) by Daniel Shiffman.  In the game I made, you can see the whole maze.  The maze in my maze game is more complicated than the ones in the early levels of Astray, but it's easier to complete -- and less mysterious and fun -- because you can see the whole thing, and plan out your victory.

This use of a frame to limit the field of view -- and the existence of a world outside of that frame -- is, I think, a really effective way to get your player into that Magic Circle that we talked about previously.  We're going to set that up in our snake game.  But first, I want to notice a few changes that I made in the code since last time.

### 2. Levels

Another thing you notice right away, is that Astray has multiple levels.  This is pretty common in games, and it's often a pretty nice way to extend the game world in a relatively infinite way, but also give a Player a sense of accomplishment.  Each level can be slightly different than previous levels, and, if you're playing Mario, you get a chance to almost rescue the princess.  But of course, ultimate success remains elusive...(just like in real life!).

Now here's the same maze game fom above, but [with levels](https://editor.p5js.org/socalledsound/sketches/jdVjH2TxH).  It's looks pretty much the same in the editor, as you can see below:

![two mazes side by side](https://res.cloudinary.com/chris-kubick/image/upload/v1664645027/Screen_Shot_2022-10-01_at_10.23.30_AM_mohp8w.png)

But, if you play it and win, you move on to a new level.

In order to do this, I added a two new classes: a Game class, and a Level class. This leads to a little bit of work, rearranging everything, but it also creates a lot more flexibility in the project.  And, as you can see below, it also kind of makes things more organized.  The size of my main sketch has been cut in half, and in general it's a little bit easier to follow, I think.


![two code editors](https://res.cloudinary.com/chris-kubick/image/upload/v1664645381/Screen_Shot_2022-10-01_at_10.29.27_AM_dkptmv.png)


This makes it easy to add a start screen, or all kinds of other stuff.

In my Game class, I keep track of the player, and which level we're currently on, and then in each Level, and then in the Level class I keep track of the details for that level, including the maze itself.

[check it out](https://editor.p5js.org/socalledsound/sketches/jdVjH2TxH)



### 3. snakey Game class
[snakey game with Game class](https://res.cloudinary.com/chris-kubick/image/upload/v1664646268/Screen_Shot_2022-10-01_at_10.44.08_AM_ohc9yo.png)


I've gone ahead and done something similar for our snake game.  I added a Game class.  We won't have levels, but the extra layer of abstraction will be essential if we want to add more players, and in general, I think it helps a lot when we want to add things like a start screen -- WHICH WE DO.  We'll do that very soon, but first, let's take a look at the changes that I've made. 

As you can see up above, the sketch.js file is now very clean.  We just make a new game in setup and then if there is a game, we update and render it in the draw loop.  Inside the game class, we handle making the player, making the food, and then we update and render each of those individually.  It's all pretty much the same as it was before, functionally, but I think it's nice to organize things this way.

```

class Game {
  constructor(){
    //this.players = []
    this.player = null
    this.foods = []
    // global variables
    this.friction = 0.99
    this.score = 0
    this.numFoods = 600
    this.foodSize = 12
  }
  
  init(){
        this.player = new Player()
    this.foods = Array.from({length: this.numFoods}, () => {
      // a nifty shorthand for if/then
      const type = random(100) > 80 ? 2 : 1 
      return new Food(random(-mapSize + 100, mapSize  - 100), random(-mapSize + 100, mapSize  - 100), this.foodSize, type)
    })
  }
  
  render(){
    this.player.render()
    this.foods.forEach(food => {
      food.render()  
    })
  }
  
  update(){
    this.foods.forEach(food => {
      food.checkCollision(this.player)
      food.animate() 
    })
    
    this.player.update()
    
  }
}


```



### 4. start screen

Now, let's add a start screen, like the one you can see below.

![start screen](https://res.cloudinary.com/chris-kubick/image/upload/v1664646512/Screen_Shot_2022-09-30_at_5.10.28_PM_mo7szb.png)

I'll start by making a global variable named startButton:

```

const screenSize = 600
const mapSize = 2400
let game
let startButton

```


Now, I'll add a function to make a start button called, appropriately enough, makeStartButton.  It's just going to do the things that make a button, and then return that button.

```

function makeStartButton(){
  const button = createButton('start')
  button.position(300, 300)
  button.style('padding', '2rem')
  button.style('border-radius', '0.9rem')
  button.style('font-size', '2rem')
  button.mousePressed(startGame)
  return button
}

```

Notice that I've also got a function named startGame that is going to run when the button is pressed:

```
  button.mousePressed(startGame)

```

So let's also add that function.

```
// this function runs when the start button is pressed
function startGame(){
  game = new Game()
  game.init()
  startButton.hide()
  loop()
}


```

Here, make the new Game, initialize it, hide the start button, and set the draw loop to loop()


Do you see how we've set up the pieces we need for a little process that will start the game?  Now, let's show that button, when there isn't a game yet.  IN setup, we'll make the start button and set the draw loop to not loop:


```

function setup(){
    createCanvas(600, 600)
    angleMode(RADIANS)
    startButton = makeStartButton()
    noLoop()
    
}


```

And in draw, we'll show that start button and our game title if there isn't a game -- if there is a game, we'll update it and render it.


```

function draw(){
  
  // if there is a game and it is not over, update and draw it
    if(game && !game.over){
      
          background(200)
          game.update()
          game.render()
      
    } else { 
      // or, draw the start screen
      background(200)
      textSize(60)
      fill([220, 0, 220])
      noStroke()
      text('snakey', 100, 200)
      startButton.show()
      
    }
}

```

Here's the full code.

[snakey with start button](https://editor.p5js.org/socalledsound/sketches/w2PDNwf4z)


### 4. the translation matrix

Ok, that was pretty easy.  Now let's tackle something a little more complicated.  I talked about it in class -- the transformation matrix.  It's a really neat and powerful aspect of p5, but it's also a little bit tricky.

By now, you've probably gotten used to the idea that we can draw something on the screen at a position that we can measure as (x, y), where is x is how much over from the left and y is how much down from the top.

We can almost imagine the sketch as being like a piece of paper that we're drawing on.

But what if we could slide the actual piece of paper around?????!!???  

That's basically what we do with the transformation matrix.  We can scale, rotate and move the origin coordinates, so that the numbers that we give are offset by the amount that we've moved the piece of paper.  

That's how I make the frame follow the ball in the [bouncing balls sketch](https://editor.p5js.org/socalledsound/sketches/5uaSJy5g1) up above.  And it's also how I make the entire game slide constantly to the left in this [modulator game]() that I made.

Here's a super simple [example](https://editor.p5js.org/socalledsound/sketches/FSBy1OGff).

I draw a circle at a give position, but you can notice that even though that position is fixed, when I run the sketch, the circle moves to the left.  That's because I'm translating the entire sketch in the draw loop:

```

            let scrollVal = 0

            function setup() {
            createCanvas(400, 400);
            }

            function draw() {
            background(220);
            translate(scrollVal, 0)
            fill('red')
            ellipse(300, 300, 100)
            scrollVal--
            }

```

Here's another [slightly more complicated example](https://editor.p5js.org/socalledsound/sketches/-FCpkdk0E) that's more like a game, but it's the same idea, scroll the landscape to the left by translating the x coordinates in a negative direction.  (If you click the mouse, the little ball moves forward).


Now, a few important things.

First of all, the transformations in any given draw loop are cumulative.  Meaning, if you call translate, and then call it again, your second translation will begin where the first one ended.  

UNLESS -- you use push() before your transformatino and pop() after it.

### 5 push and pop
 
 Here's a [sketch](https://editor.p5js.org/socalledsound/sketches/IXlShn90R) with a few objects in it.  Notice that the green square is at 0,0.  I want to use translate to put it at 150, 150.  So, I'll add that:
 
```

        translate(150, 150)
      fill('green')
      noStroke()
      rect(0, 0, 100, 100)


```

But, now, EVERYTHING is moved ever.
 
 However, I can translate only the square by using [push and pop](https://editor.p5js.org/socalledsound/sketches/4vj5PLYHj).


 ```

  push()
  translate(150, 150)
      fill('green')
      noStroke()
      rect(0, 0, 100, 100)
   pop()


 ```



### 6 rotating around the center of an object

Now let's try a rotation.  I'm sticking with that same sketch and putting a rotation in before the yellow square.  What I want is for it to rotate, like any decent square should.  SO I'll call rotate, just before the yellow square, pass in the value theta, and then increment that value just a little bit in the draw loop.

```

            rotate(theta)
            fill('yellow')
            rect(175, 175, 50, 50)
            theta+=0.01

```

But if you try to run [that](https://editor.p5js.org/socalledsound/sketches/SB8NGVNsL), you see that the square sure enough does rotate -- BUT IT ROTATES AROUND 0,0.  It looks kind of cool but it's not what I wanted.  I see this a LOT in student sketches.

To make the square rotate correctly, we need to translate the origin.  And then, translate the matrix back before we actually draw the thing we want to draw. We can wrap the whole thing in push and pop (althjough in this case it doesn't matter too much because it's at the end of the draw loop).

```

            push()
                // translating by the position plus half the size
                translate(175 + 25, 175 + 25)
                rotate(theta)
                // shorthand for 175 + 25 lol
                translate(-200, -200)
                fill('yellow')
                rect(175, 175, 50, 50)
                theta+=0.01
            pop()


```





### 7. scrolling our landscape

With that background, I think we're ready to expand our minds beyond our previous snakey horizons.  The first thing we need is a new variable named mapSize, which will be the total size of our game.  I'll start it at 2400 but we'll probably want a bigger map at some point.  That is distinct from our screenSize, which is the size of our canvas, which is 600.  And we'll add one more variable called scroll.  So our new global variables are:

```

            const screenSize = 600
            const mapSize = 2400
            let game
            let startButton
            let scroll

```

Now, remember, our player is at 300, 300.  What we want, is to move the transformation matrix when the player moves, so the player stays in the middle of the screen.  So, we'll set this now scroll variable in the draw loop to be a copy of our player position vector, minus (300, 300), and then translate everything over by that scroll value. 

```

      const snakePos = game.player.pos.copy()
      scroll = snakePos.sub(300, 300) 
      translate(-scroll.x, -scroll.y) 

```

Now, we just need to modify our player.mouseMove function a little bit so that mouseX and mouseY also 'move'.

```

    moveToMouse(mx, my, scroll){
      const mouse = createVector(mx, my) 
      mouse.add(scroll)
      this.acc = p5.Vector.sub(mouse,this.pos);
      this.acc.setMag(this.maxForce)
      this.vel.add(this.acc)
       this.acc.mult(0)
    }


```

Now, we can add a scaling function, that will move the camera out as the player's snake gets longer.  We just need to remember to scale from the middle of the screen:

```

    // no bueno
      // scale(1 - (game.player.tail.length/1000))
      
      // bueno : translate center, scale, translate center back
      translate(screenSize/2, screenSize/2)
      scale(1 - (game.player.tail.length/1000))
      // zoom way out
      //scale(0.2)
      translate(-screenSize/2, -screenSize/2)

```

And here I'm just scaling out by an ammount that gets 'bigger' (the scale value gets smaller) as the tail of the player gets longer.


I should also note that, when I rewrote the game with the Game class, I changed the Food positions, so that now they are spread out over the entire map:

```

    this.foods = Array.from({length: this.numFoods}, () => {
      // a nifty shorthand for if/then
      const type = random(100) > 80 ? 2 : 1 
      return new Food(random(-mapSize/2 + 100, mapSize/2  - 100), random(-mapSize/2 + 100, mapSize/2  - 100), this.foodSize, type)
    })


```

Now, let's add one more thing, a rectangle around the edge of the map.

I'm going to just write it in the game.render() method:


```

    fill(this.bgCol)
    stroke(this.wallCol)
    strokeWeight(this.wallWidth)
    rect(-mapSize/2 + 50, -mapSize/2 + 50, mapSize - 100, mapSize - 100)


```


And of course you have to make sure that the Game class has those properties:

```
    this.wallWidth = 20
    this.bgCol = 43
    this.wallCol = [240, 20, 20, 200]


```

And, just like that we have a bigger landscape for our game.  Now we just have to update our Player, so that it can't go off the edge of our map.

As a matter of fact, let's just go ahead and KILL OUR PLAYER if they go off the edge of our map.


### 8. dying


It's actually surprisingly easy to kill a player.  It's basically just, 'whoops' sorry, my bad.  You're dead.

We need a this.dead property on our Player, which we initialize to false.  I'm also going to add a this.alpha value, and initialize it to 255.  We'll use this to make the player turn to bones.

In Player.js :

```

            class Player {
                constructor(){
                    
                    this.playerColor = [120, 200, 90]
                    this.growColor = [220, 0, 0]
                        // etc
                    this.dead = false
                    this.alpha = 255
                }


```

Now in player.update() we'll check to see if the player is dead, because if it is, we don't need to move it any more.  We'll also write an else, so if the player IS dead, then we'll decrease the this.alpha value, and also decrease the alpha value of all of the segments of the tail.


```

      update(){
       
        if(!this.dead){
            // all of the moving the player and tail code inside here

        } else {
        this.alpha -= 5
        this.tail.forEach(segment => {
            segment.alpha -= 5
          })
          //console.log(this.alpha)
        }



```

And then in render, we'll do a nifty thing.  We'll spread in the player.color values, and then add the this.alpha value.  Most of the time, alpha will be 255, but after the player dies, it will rapidly go down to zero.

```
    render(){
        
        // draw the tail
        this.tail.forEach(segment => {
            segment.render()
          })
      
        // draw the player
        stroke(140)
        strokeWeight(1)
        fill([...this.playerColor, this.alpha])
        ellipse(this.pos.x, this.pos.y, this.r * 2)
      
        //draw the eye
        this.renderEye()   

    }
  
```

And of course we need to update the TailSegment.render() method in similar fashion

In TailSegment.js:

```
class TailSegment {
  constructor(pos, r){
    this.alpha = 255
    this.col = [120, 200, 90]
    this.pos = pos
    this.r = r
  }
  
  render(){
    fill([...this.col, this.alpha])
    stroke(140)
    strokeWeight(1)
    ellipse(this.pos.x, this.pos.y, this.r * 2)
  }

}


```


Now, one more important thing: we need to set the player to this.dead = true when the player runs into one of the red walls at the edge of the screen.
The wall on the left is at -mapSize/2 plus a little bit and the one at the right is at mapSize/2 minus a little bit.  Same with top and bottom.  So we can update our checkWalls function like so:


```


    checkWalls(){
        if(this.pos.x < -mapSize/2 + 50 + game.wallWidth * 1.5 || 
           this.pos.x > mapSize/2 - 50 - game.wallWidth * 1.5 || 
           this.pos.y < -mapSize/2 + 50 + game.wallWidth * 1.5 || 
           this.pos.y > mapSize/2 - 50 - game.wallWidth * 1.5){
             this.dead = true
          setTimeout(game.end, 100)
        }
    }


```


And now we need to add that game.end method to our game class.  But first, at the top of Game.js inside the constructor, I'm going to add a this.over and set it to false.   I'm also going to add a this.drawWhoops property, set to false, so we can..... draw whoops! duh.


```

  constructor(){
    // the other game properties here
    this.over = false
    this.drawWhoops = false
    
  }
  


```

Now, I'll write that game.end() method in our Game class.  If we're at the end of the game I'll set drawWHoops to true, and two seconds later will set this.over to true.  Notice that I'm writing this as an arrow function, which is something that we've seen before.  Arrow functions are AWESOME in this instance because they maintain the 'this' that they refer to even as they get passed around back and forth to other scopes.  If that doesn't make sense to you and you're interested, chat with me about it.  If you don't really care, just know -- arrow functions are awesome, and we need one here.


```

  end = () => {
    // draw whoops text and then back to start screen
    this.drawWhoops = true
    setTimeout(() => { this.over = true}, 2000)  
  }


```


Now in the game.render method, I need to drawWhoops over the top of the screen if it's relevant.  So at the bottom that method:

```


  render(){
    
    //... the rest of the game.render method is here
    if(this.drawWhoops){
      
      textSize(90)
      text('WHOOPS', this.player.pos.x - 200, this.player.pos.y)
    }
  }



```

And finally, just check to make sure that we stop drawing the game in the main draw loop if the game is over

function draw(){
  
  // if there is a game and it is not over, update and draw it
    if(game && !game.over){
            // drawin the game in here
      
    } else { 
        // drawing the start screen in here.
    }
}


And here's the [finished code](https://editor.p5js.org/socalledsound/sketches/evy_GaDiQ)!

That was a lot!  But this is starting to feel almost like a real game now.  Next time, we'll add autonomous players to this snake game, and we'll be done.


### 9.

Ok, now it's your turn.  Take the things that you learned here and apply them to your own game.  Exand your field of play!  Make your player DIE.  but... dont' forget to have fun.  It's all part of the process.

Submit your game as it currently stands (YOU SHOULD BE WORKING ON IT BY NOW) to the gallery!