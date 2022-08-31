# game on!

For today's assignment submission, please share your game up to this point! Hopefully you've got a character and some interactions happening!

And in today's videos, I'm going to keep going with my Mario game and introduce, first, some bad guys, and then talk demonstrate detecting collisions.

Keep working over the weekend! Don't be afraid to reach out if you need some help. See you next week.

<!--
# enemy mine

"Today we'll look at some foolproof ways to make enemies. Fun, right? "

Today we talked about this concept of an enemy. Or, as I've said in the project description, foils. Which is to say, things that push back against our sense of self.

What we're really talking about is an 'other', or, another. We're talking about people and experiences that change us.

I'm inclined to follow people like Octavia Butler in viewing the 'other' as an opportunity to learn, grow, change and adapt.

And perhaps the biggest enemy is just, time. As in, we never have enough of it, unless we have too much of it.

In that super stupid landscape game that we looked at in the landscape excercise, as in many games (and in university courses, and jobs, and life itself!), we have a certain amount of time to do something and if we don't succeed in doing the thing in the right amount of time, then the game is over.

We often times want to show that time on the screen. So let's talk first about that.

Here's a little [sketch](https://editor.p5js.org/socalledsound/sketches/z7pFgr9AC) that does that, and only that. It counts down the time and shows it on the screen. It's a version of the code that runs the countdown timer in the landscape game. I could definitely do this with fewer variables, but I think more variables makes it maybe easier to see exactly what's going on?

In setup I use a function called millis(), which gets the current time in milliseconds

```
 timeStarted = millis();

```

Then, in the draw loop, I can get the current time and calculate elapsed and remaining time from that:

```

  //get the current time
  currentTime = millis();
  timeElapsed = currentTime - timeStarted;
  timeLeft = timeToCompleteLevel - timeElapsed

```

If the time is running out, let the player know:

```
  //if less than 5 seconds, change text color to red
  if(timeLeft < 5000){
    fill(255, 0, 0);
  } else {
    fill(0)
  }

```

And if time runs out, get rid of the timer and draw a game over screen. Otherwise, keep drawing the time left on the screen:

```
  if(timeLeft <= 0){
    background(0);
    fill(255);
    text('game over', 200, 200);

  } else {
      //convert the output of millis to a nicer format, check the console
  console.log(timeLeft);
  timeLeft = millisToMinutesAndSeconds(timeLeft)
  console.log(timeLeft);
  text(timeLeft, 200, 200)
  }
```

You can see I also use a helper function that converts the time to a more readable format.

```
//just a helper function to help show the time remaining in a nice format
function millisToMinutesAndSeconds(millis) {
const minutes = Math.floor(millis / 60000);
console.log(millis);
const seconds = ((millis % 60000) / 1000).toFixed(0);
return (seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
}
```

This is actually some code that someone else wrote. First we divide millis by 60000, which is the number of milliseconds in an hour. Then we use the modulo from last class to get what's left after we get the hours. Make sense? And we divide that by 1000, rounding it off so we throw away any extra milliseconds.

The last line is maybe the most confusing. It's a super nice syntax for writing a conditional statement that is much shorter and clearer in some cases. It basically says

```
if(seconds == 60){
    //add one to minutes and return a string that displays the number of minutes and :00
} else {
    //return the number of minutes and
    if(seconds < 10){
        //return zero and then the number of seconds
        else{
            // return the number of seconds
        }
    }
}

```

It's called a ternary expression and it's kind of confusing at first, but once you get it, you find yourself using it ALL THE TIME.

But the great part also, is, you don't really have to understand what's going on here to use a function like that! You can just use it. Feed in millis, get back minutes:seconds.

# collision

Ok, so time is one part of the socalled enemy in this game, which, really, is more like desire than a traditional enemy, right? Now, this game is super boring, mostly because there isn't much to figure out. It's like a super simple puzzle.

But it does have another element that is common to many games, that I want to explore in a little more detail right now, which is collision detection.

Now first of all, I'm going to say that what we discuss here will be giving short time to a pretty complext topic. My first example was just sort of generally colluding, and in future examples we'll use the p5.play library. But you can get much more precise if you check individual points or vertices against each other, and that's generally how 'real' collision detection works. The math can get a little hairy, but it's kind of neat. If you want to take a look at what that looks like, here's an [example](https://editor.p5js.org/socalledsound/sketches/X_slFU6DU) that checks a collision between a pentagon and a complex polygon and [here](https://editor.p5js.org/socalledsound/sketches/3wNZL0zts) is one for a line/point collision. I ported both from an excellent online book called [collision detection](http://www.jeffreythompson.org/collision-detection/table_of_contents.php). The online examples are in processing, but porting the ideas to p5 is pretty straightforward as we've discussed before, and mostly has to do with changing the variables so that they aren't typed. More challenging is understanding the math involved, particularly if you're not already familiar with vectors and trigonometry. Again, as so often, I recommend Daniel Shiffman's really amazing [nature of code](https://natureofcode.com/book/chapter-1-vectors/) if you want to get deeper with this stuff! Chapter 1 dives right into vectors, and he presents the material in a really approachable way.

# back to the landscape game

Let's look again at the [code](https://editor.p5js.org/socalledsound/sketches/cjxO852kb) for my super stupid landscape game from last class. I want to walk you through the code, show you how you can follow the logical thread of a program and see how it's composed of interlocking functions that all work together to create a certain outcome. Learning to think like this is what learning to code is. Learning to write these small functions, that do only one or two things, and fit them together using the syntax tricks that we've been learning will make your life so much easier when it comes to writing code.

We know that our setup function runs first, and then our draw function runs in a loop. In setup we have a function called startGame and in draw we have a function called drawGame, which runs as long as the gameOver variable is false.

First, startGame:

```

//reset all the global variables to the initial state and make a new Level
function startGame(){
    counter = 0;
    score = 0;
    gameOver = false;
    level = new Level(imgs[counter]);
}

```

Here, we just reset all the gloabl variables to their beginning values and make a new Level. A Level is an organizing structure that I made. Let's take a look at its constructor function to see what kinds of data it stores:

```
//this is a class which keeps track of all the aspects of a level
class Level{
constructor(img){
    this.bg = img;
    this.door = new Door();
    this.targetX = this.door.handleX;
    this.targetY = this.door.handleY;
    this.player = new Player(this.targetX, this.targetY);
    this.totalTime = 15000;
    this.timeStarted = millis();
}

```

You can see that it keeps track of a background image, a door, a target -- the door handle -- a player -- which gets the target as parameters! -- , totalTime (time to complete the level) and timeStarted. So, it keeps track of the timer, which we looked at above. It's important to notice that we get a new image, a new door, a new player and a new timestarted each time we make a new level.

The Level also has methods for updating time and displaying the level -- the door the player, the time left, the score, which is everything on the screen -- on the canvas.

In the draw loop, I just say, if the game isn't over yet, then draw the game. And if it is, then draw game over onto the screen:

```
function draw() {
  //if the game isn't over then draw the game
  if(!gameOver){
    drawGame();
  } else {
    //if the game is over draw the game over screen
    background(0)
    drawGameOver();
  }
}
```

So let's take a look at this drawGame function, at line 213:

```

function drawGame(){
    //the level has a player which has a method to check to see if it reached the goal
    level.player.checkHand();

  //if the player has reached the goal then update the counter and make a new level
  if(level.player.atGoal){
      score++
      counter++
      level = new Level(imgs[counter%imgs.length]);
  }
    //display the level
    level.display();
}

```

Now we're starting to see where the collision is, right? Every time through the draw loop, the first thing we do is call a function called Level.player.checkHand(). Remember, each Level makes a new player, and we pass in the target that that player is trying to reach. Let's look at the checkHand method of the class Player. If you don't understand why we're checking the class Player for a function called checkHand, be sure to reach out to me! Here's the Player:

```

//our player constructor, gets remade for every level
class Player{
  constructor(targetX, targetY){
  this.x = random(0+100,width-100);
  this.y = 340;
  this.width = 30;
  this.height = 90;
  this.targetX = targetX;
  this.targetY = targetY;
  this.atGoal = false;
  }

  //draw the player
  display(){
    image(hand, this.x, this.y, this.width,this.height);
  }

  //functions to move the player by incrementing its x and y values
  moveUp(){
     this.y-=10;
  }

    moveDown(){
     this.y+=10;
  }

    moveLeft(){
     this.x-=10;
  }

    moveRight(){
     this.x+=10;
  }


  //check if the hand is near the doorknob
  checkHand(){
      let goal = dist(this.x + this.width/2, this.y, this.targetX, this.targetY);

      if(goal < 20 ){
        this.atGoal = true;
      }
  }



}

```

And we can see that the checkHand function is pretty straightforward, and uses a nice method from the p5 library called dist(), which calculates the distance between one x.y coordinate and another. So all I need to do is check what the distance between the target and the player is, and then, if it's close enough, set the player.atGoal property to true. Make sense? I got the number 20 sort of by trial and error, it was just what worked reasonably well, quickly. I could tighten that up but for a demo it seemed fine.

Back in the drawgame function now maybe it makes sense?

```
level.player.checkHand();

```

First we checkHand, which will set player.atGoal to true if the player has gotten close enough. Then if the player is at the goal we'll make a new level. Either way, we'll display the current level.

```
  if(level.player.atGoal){
      score++
      counter++
      level = new Level(imgs[counter%imgs.length]);
  }
    //display the level
    level.display();

```

And that, my friends, is a very very very simple example of collision detection. Let's look at another slightly more challenging example from the p5 examples: [bouncy bubbles](https://editor.p5js.org/p5/sketches/Motion:_Bouncy_Bubbles).

Hopefully this object-oriented approach is starting to make sense. Each one of these balls is a class named Ball. In setup, we use a for loop to make numBalls number of balls, passing in x and y coordinates, a diameter, an id number and the array called balls, which of course has the data for all of the balls.

In draw, we loop over the array of balls and call three methods on each ball: collide(), move(), and display(). Let's look at collide.

```
  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }
```

Remember, for each ball in the array, we run this function, which is a loop that starts at the index number in the array of the current ball and checks from here until the end of the array if this ball is colliding with any other ball.

Just like with the landscape game, we check the distance between the center of this ball and center of the ball being checked, to see if it's less than the radius (half of the diameter) of this ball + the radius of the other ball.

And then if it the balls are colliding (the radius of one is overlapping the radius of another), we turn it around, calculating a new trajectory for the ball with the help of a trig function called [atan2](https://p5js.org/reference/#/p5/atan2). How this works is beyond the scope of our current discussion and might distract us from colliders, but if you want to learn more I refer you to a book that I've mentioned in the past, Daniel Shiffman's [the nature of code](https://natureofcode.com/book/chapter-3-oscillation/) Chapter 3 explains this really well, for beginning trigonometry students!

The main thing I want you to take away from this is, we can keep track of a bunch of stuff in our program, using objects and we can compare the current location of all of those things and make decisions about what to do based on those collisions.

# p5.play - sprites and collisions

So far we've only really used one aspect of p5.play, which is the tools it has for helping us work with sprite sheets. But there's also a ton we can do with those sprite sheets (or sequences of images) once we get them loaded in.

And everything starts with a [Sprite](https://molleindustria.github.io/p5.play/docs/classes/Sprite.html).

I'm going to bring back the alien from the other day to illustrate how we can make a version of the ball colliders from above, using a Sprite.

We'll start with a simple [example](https://molleindustria.github.io/p5.play/examples/index.html?fileName=sprite6.js) from the p5.play examples.

As you can see, we create a variable called cloud and then set the value of that sprite to a sprite by calling the function createSprite() and passing in a location.

```
cloud = createSprite(400, 200);
```

Then, add an animation and a velocity:

```
cloud.addAnimation('normal', 'assets/cloud_breathing0001.png', 'assets/cloud_breathing0009.png');
cloud.velocity.x = 3;
```

Then in the main draw function we call drawSprites(). If we don't pass any values in, it will draw all of the sprites in the sketch. You can see that there is also a 'visible' property on our Sprite, which we can set to true or false. In the sketch there's also a conditional statement that moves the animation back to the left edge of the screen when it gets to the right edge.

```
  if(cloud.position.x > width){
        cloud.position.x = 0;
  }


```

In this sketch there's also a mousePressed function, that draws a nice sketch at the position of the mouse if it is clicked and sets a lifespan value, after which it will be removed from the sketch:

```

//every mouse press
function mousePressed() {

  //create a sprite
  var splat = createSprite(mouseX, mouseY);
  splat.addAnimation('normal', 'assets/asterisk_explode0001.png', 'assets/asterisk_explode0011.png');

  //set a self destruction timer (life)
  splat.life = 40;
}
```

These are things that we've done before without this library, so I hope this all makes a certain amount of sense at this point!

Now, another thing that we really want to be able to do is, changeAnimation. As [here](https://molleindustria.github.io/p5.play/examples/index.html?fileName=sprite3.js).

As you can see, we can add multiple animations to a sprite, give each one a key, and then depending on what's going on in our sketch, call changeAnimation(), passing in the appropriate key. Nice! Easy!

We can also set various collision methods on a Sprite. Here's another [example](https://molleindustria.github.io/p5.play/examples/index.html?fileName=collisions.js): overlap, collide and displace.

I think the comments here explain what's happening pretty well, in the draw loop, we check if

We can also make Groups of sprites, which will let us re-make the ball collider sketch from above, but with dancing aliens! You can see the code [here](https://editor.p5js.org/socalledsound/sketches/GGPGwFghg).

I make group called aliens and then in a for loop I create as many aliens as I want and add them to that group.

Then in my main draw loop I can just say

```
aliens.bounce(aliens);
```

Which is a lot like what we did up above with our array of balls, but I think you'll agree, it's kind of easier. Thank you [MolleIndustria](https://molleindustria.org/)!

And you can see another [example](https://molleindustria.github.io/p5.play/examples/index.html?fileName=collisions4.js) of this in the p5.play examples.

# landscapes and collisions

Now, if you remember from last time, we had made a landscape from tiles. I want to add a character to the scene from last time and check to see if that character is colliding with anything in the scene, using Sprites. You can get the code [here](https://github.com/socalledsound/SE-unit2-day14-spritescape/tree/05-with-character), I'll add a few notes of explanation.

First off, this player and most of this example comes from a weirdly hidden example in the p5.play examples. The characeter animation is a spritesheet. In preload, we load that, alomg with another animation for the jumping player.

```
player_sprite_sheet = loadSpriteSheet('player_spritesheet.png', player_frames);

  player_walk = loadAnimation(player_sprite_sheet);

  // An animation with a single frame for standing
  player_stand = loadAnimation(new SpriteSheet('player_spritesheet.png',
    [{'name':'player_stand', 'frame':{'x':284, 'y': 95, 'width': 70, 'height': 94}}]));

  player_jump = loadAnimation('ghost_standing0001.png', 'ghost_standing0007.png');


```

In setup, I make a player sprite as well as two groups of sprites for the landscape, one group for things that will have colliders and one for things that won't.

```

  landscape = new Group();
  backgroundSprites = new Group();
  // Create the Player sprite and add it's animations
  player_sprite = createSprite(140, 300, 40, 10);
  player_sprite.addAnimation('walk', player_walk);
  player_sprite.addAnimation('stand', player_stand);
  player_sprite.addAnimation('jump', player_jump);

```

Then, I mostly just use the code from last class to add these landscape sprites to the scene:

```
  for (var x = 0; x < TOTAL_COLUMNS; x++) {
    addLandscapeCollider('snow.png', x, TOTAL_ROWS - 1);
  }

  // Draw the sign tiles
   addBackgroundSprite('signRight.png', 0, TOTAL_ROWS - 2);
  addBackgroundSprite('signExit.png', 0, 0);

  //draw some more stuff
  addLandscapeCollider('dirtCliffLeft.png', 1, 2);
  addLandscapeCollider('dirtCliffRight.png', 2, 2);
  addLandscapeCollider('grassCliffLeft.png', 4, 4);
  addLandscapeCollider('grassCliffRight.png', 5, 4);

}

```

And then in the draw loop, I draw all of the sprites and then for sprites that I want to check for a collision with the player sprite, I call the Sprite.collide method:

```
  clear();
  background(0);
  drawSprites(backgroundSprites);
  drawSprites(landscape);
  touchScreen();
  gravity();
  movePlayer();
  player_sprite.collide(landscape);
  drawSprites();

```

I should add that I had some trouble using a sprite sheet tile as an image for a sprite, in the end I ended up needing to write a helper function to get the image data out of the sprite sheet. If you run into any trouble be sure to reach out and I'll show you what I had to do.

# finally

I hope this has given you some ideas about how to work with sprites and how to build your game! There are many different directions for you to go from here. I'll leave you with some links for further inspiration.

First, that sky-muse code from last class. Check it out again! I think of this as a game....sort of? Or, certainly something that would count as a game for our purposes. At some point I'm going to see if I can rewrite it, better, myself, I really like the fluid effect it uses, which is very much like this [code](https://editor.p5js.org/codingtrain/sketches/L_ME8qKmQ) you can learn about in a Daniel Shiffman [tutorial](https://thecodingtrain.com/CodingChallenges/036-blobby.html). But it evolves over time, she really ran with that effect and did some interesting things, I think. And although the code is pretty disorganized and maybe hard to read, it works! So who cares. Don't feel like you have to use classes, or compose with functions or any of the rest of it, if just writing stuff out in order works better for you right now, then do that!

[sky-muse code](https://editor.p5js.org/socalledsound/sketches/B-8Md6Bz5)

Also, don't forget, the p5.play examples have four games made in p5.play that you can riff off of, in the examples. For instance, [asteroids](https://molleindustria.github.io/p5.play/examples/index.html?fileName=asteroids.js).

Here's a frogger style game you can code with Daniel Shiffman: [link](https://thecodingtrain.com/CodingChallenges/072.1-frogger.html).

And here's one on [Space Invaders](https://thecodingtrain.com/CodingChallenges/005-space-invaders-p5.html).

Also, [flappy bird](https://thecodingtrain.com/CodingChallenges/031-flappybird.html). And [angry birds](https://thecodingtrain.com/CodingChallenges/138-angry-birds.html). Boy that guy sure makes a lot of videos. We're lucky to have him.

If you're ready to open your mind up to nested for loops and matrixes, this [tutorial](https://www.youtube.com/watch?v=H2aW5V46khA), which builds tetris in vanills js (no p5) is really great. He doesn't explain all that much but the coding style is really, really nice. I just love the way he handles the objects and collision detection. He uses the canvas without p5, so you can also get a sense of what that's like from that video.

The same friendly swedish fellow also has a long series on making super mario in the canvas, without p5. In it, he explores, for instance, a more comprehensive approach to building a landscape from tiles and then checking for collisions. Highly recommended if these things interest you! [link](https://www.youtube.com/watch?v=g-FpDQ8Eqw8)

And here's a [game](https://github.com/socalledsound/soundgame-badlandsclone) that I've been working on, with p5. I was originally going to have the making of this game be the core tutorial of this unit but I realized it was maybe too specific and involved and I thought you'd appreciate the p5.play stuff so I branched out. But, I'm still slowly building it and I'll probably keep building it here and there for the rest of the semester, I'll share it with you as I go along.

<!-- And finally, I made a little [video]() for you that goes through the process of drawing an animation by hand, digitizing it, and bringing it in to p5 or p5.play.  You probably don't need it at this point, but if you do, it's there. -->

<!--
Today we talked about this concept of an enemy. Or, as I've said in the project description, foils. Which is to say, things that push back against our sense of self.

What we're really talking about is an 'other', or, another. We're talking about people and experiences that change us.

I'm inclined to follow people like Octavia Butler in viewing the 'other' as an opportunity to learn, grow, change and adapt.

And perhaps the biggest enemy is just, time. As in, we never have enough of it, unless we have too much of it.

In that super stupid landscape game that we looked at in the landscape excercise, as in many games (and in university courses, and jobs, and life itself!), we have a certain amount of time to do something and if we don't succeed in doing the thing in the right amount of time, then the game is over.

We often times want to show that time on the screen. So let's talk first about that.

Here's a little [sketch](https://editor.p5js.org/socalledsound/sketches/z7pFgr9AC) that does that, and only that. It counts down the time and shows it on the screen. It's a version of the code that runs the countdown timer in the landscape game. I could definitely do this with fewer variables, but I think more variables makes it maybe easier to see exactly what's going on?

In setup I use a function called millis(), which gets the current time in milliseconds

```
 timeStarted = millis();

```

Then, in the draw loop, I can get the current time and calculate elapsed and remaining time from that:

```

  //get the current time
  currentTime = millis();
  timeElapsed = currentTime - timeStarted;
  timeLeft = timeToCompleteLevel - timeElapsed

```

If the time is running out, let the player know:

```
  //if less than 5 seconds, change text color to red
  if(timeLeft < 5000){
    fill(255, 0, 0);
  } else {
    fill(0)
  }

```

And if time runs out, get rid of the timer and draw a game over screen. Otherwise, keep drawing the time left on the screen:

```
  if(timeLeft <= 0){
    background(0);
    fill(255);
    text('game over', 200, 200);

  } else {
      //convert the output of millis to a nicer format, check the console
  console.log(timeLeft);
  timeLeft = millisToMinutesAndSeconds(timeLeft)
  console.log(timeLeft);
  text(timeLeft, 200, 200)
  }
```

You can see I also use a helper function that converts the time to a more readable format.

```
//just a helper function to help show the time remaining in a nice format
function millisToMinutesAndSeconds(millis) {
const minutes = Math.floor(millis / 60000);
console.log(millis);
const seconds = ((millis % 60000) / 1000).toFixed(0);
return (seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
}
```

This is actually some code that someone else wrote. First we divide millis by 60000, which is the number of milliseconds in an hour. Then we use the modulo from last class to get what's left after we get the hours. Make sense? And we divide that by 1000, rounding it off so we throw away any extra milliseconds.

The last line is maybe the most confusing. It's a super nice syntax for writing a conditional statement that is much shorter and clearer in some cases. It basically says

```
if(seconds == 60){
    //add one to minutes and return a string that displays the number of minutes and :00
} else {
    //return the number of minutes and
    if(seconds < 10){
        //return zero and then the number of seconds
        else{
            // return the number of seconds
        }
    }
}

```

It's called a ternary expression and it's kind of confusing at first, but once you get it, you find yourself using it ALL THE TIME.

But the great part also, is, you don't really have to understand what's going on here to use a function like that! You can just use it. Feed in millis, get back minutes:seconds.

# collision

Ok, so time is one part of the socalled enemy in this game, which, really, is more like desire than a traditional enemy, right? Now, this game is super boring, mostly because there isn't much to figure out. It's like a super simple puzzle.

But it does have another element that is common to many games, that I want to explore in a little more detail right now, which is collision detection.

Now first of all, I'm going to say that what we discuss here will be giving short time to a pretty complext topic. My first example was just sort of generally colluding, and in future examples we'll use the p5.play library. But you can get much more precise if you check individual points or vertices against each other, and that's generally how 'real' collision detection works. The math can get a little hairy, but it's kind of neat. If you want to take a look at what that looks like, here's an [example](https://editor.p5js.org/socalledsound/sketches/X_slFU6DU) that checks a collision between a pentagon and a complex polygon and [here](https://editor.p5js.org/socalledsound/sketches/3wNZL0zts) is one for a line/point collision. I ported both from an excellent online book called [collision detection](http://www.jeffreythompson.org/collision-detection/table_of_contents.php). The online examples are in processing, but porting the ideas to p5 is pretty straightforward as we've discussed before, and mostly has to do with changing the variables so that they aren't typed. More challenging is understanding the math involved, particularly if you're not already familiar with vectors and trigonometry. Again, as so often, I recommend Daniel Shiffman's really amazing [nature of code](https://natureofcode.com/book/chapter-1-vectors/) if you want to get deeper with this stuff! Chapter 1 dives right into vectors, and he presents the material in a really approachable way.

# back to the landscape game

Let's look again at the [code](https://editor.p5js.org/socalledsound/sketches/cjxO852kb) for my super stupid landscape game from last class. I want to walk you through the code, show you how you can follow the logical thread of a program and see how it's composed of interlocking functions that all work together to create a certain outcome. Learning to think like this is what learning to code is. Learning to write these small functions, that do only one or two things, and fit them together using the syntax tricks that we've been learning will make your life so much easier when it comes to writing code.

We know that our setup function runs first, and then our draw function runs in a loop. In setup we have a function called startGame and in draw we have a function called drawGame, which runs as long as the gameOver variable is false.

First, startGame:

```

//reset all the global variables to the initial state and make a new Level
function startGame(){
    counter = 0;
    score = 0;
    gameOver = false;
    level = new Level(imgs[counter]);
}

```

Here, we just reset all the gloabl variables to their beginning values and make a new Level. A Level is an organizing structure that I made. Let's take a look at its constructor function to see what kinds of data it stores:

```
//this is a class which keeps track of all the aspects of a level
class Level{
constructor(img){
    this.bg = img;
    this.door = new Door();
    this.targetX = this.door.handleX;
    this.targetY = this.door.handleY;
    this.player = new Player(this.targetX, this.targetY);
    this.totalTime = 15000;
    this.timeStarted = millis();
}

```

You can see that it keeps track of a background image, a door, a target -- the door handle -- a player -- which gets the target as parameters! -- , totalTime (time to complete the level) and timeStarted. So, it keeps track of the timer, which we looked at above. It's important to notice that we get a new image, a new door, a new player and a new timestarted each time we make a new level.

The Level also has methods for updating time and displaying the level -- the door the player, the time left, the score, which is everything on the screen -- on the canvas.

In the draw loop, I just say, if the game isn't over yet, then draw the game. And if it is, then draw game over onto the screen:

```
function draw() {
  //if the game isn't over then draw the game
  if(!gameOver){
    drawGame();
  } else {
    //if the game is over draw the game over screen
    background(0)
    drawGameOver();
  }
}
```

So let's take a look at this drawGame function, at line 213:

```

function drawGame(){
    //the level has a player which has a method to check to see if it reached the goal
    level.player.checkHand();

  //if the player has reached the goal then update the counter and make a new level
  if(level.player.atGoal){
      score++
      counter++
      level = new Level(imgs[counter%imgs.length]);
  }
    //display the level
    level.display();
}

```

Now we're starting to see where the collision is, right? Every time through the draw loop, the first thing we do is call a function called Level.player.checkHand(). Remember, each Level makes a new player, and we pass in the target that that player is trying to reach. Let's look at the checkHand method of the class Player. If you don't understand why we're checking the class Player for a function called checkHand, be sure to reach out to me! Here's the Player:

```

//our player constructor, gets remade for every level
class Player{
  constructor(targetX, targetY){
  this.x = random(0+100,width-100);
  this.y = 340;
  this.width = 30;
  this.height = 90;
  this.targetX = targetX;
  this.targetY = targetY;
  this.atGoal = false;
  }

  //draw the player
  display(){
    image(hand, this.x, this.y, this.width,this.height);
  }

  //functions to move the player by incrementing its x and y values
  moveUp(){
     this.y-=10;
  }

    moveDown(){
     this.y+=10;
  }

    moveLeft(){
     this.x-=10;
  }

    moveRight(){
     this.x+=10;
  }


  //check if the hand is near the doorknob
  checkHand(){
      let goal = dist(this.x + this.width/2, this.y, this.targetX, this.targetY);

      if(goal < 20 ){
        this.atGoal = true;
      }
  }



}

```

And we can see that the checkHand function is pretty straightforward, and uses a nice method from the p5 library called dist(), which calculates the distance between one x.y coordinate and another. So all I need to do is check what the distance between the target and the player is, and then, if it's close enough, set the player.atGoal property to true. Make sense? I got the number 20 sort of by trial and error, it was just what worked reasonably well, quickly. I could tighten that up but for a demo it seemed fine.

Back in the drawgame function now maybe it makes sense?

```
level.player.checkHand();

```

First we checkHand, which will set player.atGoal to true if the player has gotten close enough. Then if the player is at the goal we'll make a new level. Either way, we'll display the current level.

```
  if(level.player.atGoal){
      score++
      counter++
      level = new Level(imgs[counter%imgs.length]);
  }
    //display the level
    level.display();

```

And that, my friends, is a very very very simple example of collision detection. Let's look at another slightly more challenging example from the p5 examples: [bouncy bubbles](https://editor.p5js.org/p5/sketches/Motion:_Bouncy_Bubbles).

Hopefully this object-oriented approach is starting to make sense. Each one of these balls is a class named Ball. In setup, we use a for loop to make numBalls number of balls, passing in x and y coordinates, a diameter, an id number and the array called balls, which of course has the data for all of the balls.

In draw, we loop over the array of balls and call three methods on each ball: collide(), move(), and display(). Let's look at collide.

```
  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }
```

Remember, for each ball in the array, we run this function, which is a loop that starts at the index number in the array of the current ball and checks from here until the end of the array if this ball is colliding with any other ball.

Just like with the landscape game, we check the distance between the center of this ball and center of the ball being checked, to see if it's less than the radius (half of the diameter) of this ball + the radius of the other ball.

And then if it the balls are colliding (the radius of one is overlapping the radius of another), we turn it around, calculating a new trajectory for the ball with the help of a trig function called [atan2](https://p5js.org/reference/#/p5/atan2). How this works is beyond the scope of our current discussion and might distract us from colliders, but if you want to learn more I refer you to a book that I've mentioned in the past, Daniel Shiffman's [the nature of code](https://natureofcode.com/book/chapter-3-oscillation/) Chapter 3 explains this really well, for beginning trigonometry students!

The main thing I want you to take away from this is, we can keep track of a bunch of stuff in our program, using objects and we can compare the current location of all of those things and make decisions about what to do based on those collisions.

# p5.play - sprites and collisions

So far we've only really used one aspect of p5.play, which is the tools it has for helping us work with sprite sheets. But there's also a ton we can do with those sprite sheets (or sequences of images) once we get them loaded in.

And everything starts with a [Sprite](https://molleindustria.github.io/p5.play/docs/classes/Sprite.html).

I'm going to bring back the alien from the other day to illustrate how we can make a version of the ball colliders from above, using a Sprite.

We'll start with a simple [example](https://molleindustria.github.io/p5.play/examples/index.html?fileName=sprite6.js) from the p5.play examples.

As you can see, we create a variable called cloud and then set the value of that sprite to a sprite by calling the function createSprite() and passing in a location.

```
cloud = createSprite(400, 200);
```

Then, add an animation and a velocity:

```
cloud.addAnimation('normal', 'assets/cloud_breathing0001.png', 'assets/cloud_breathing0009.png');
cloud.velocity.x = 3;
```

Then in the main draw function we call drawSprites(). If we don't pass any values in, it will draw all of the sprites in the sketch. You can see that there is also a 'visible' property on our Sprite, which we can set to true or false. In the sketch there's also a conditional statement that moves the animation back to the left edge of the screen when it gets to the right edge.

```
  if(cloud.position.x > width){
        cloud.position.x = 0;
  }


```

In this sketch there's also a mousePressed function, that draws a nice sketch at the position of the mouse if it is clicked and sets a lifespan value, after which it will be removed from the sketch:

```

//every mouse press
function mousePressed() {

  //create a sprite
  var splat = createSprite(mouseX, mouseY);
  splat.addAnimation('normal', 'assets/asterisk_explode0001.png', 'assets/asterisk_explode0011.png');

  //set a self destruction timer (life)
  splat.life = 40;
}
```

These are things that we've done before without this library, so I hope this all makes a certain amount of sense at this point!

Now, another thing that we really want to be able to do is, changeAnimation. As [here](https://molleindustria.github.io/p5.play/examples/index.html?fileName=sprite3.js).

As you can see, we can add multiple animations to a sprite, give each one a key, and then depending on what's going on in our sketch, call changeAnimation(), passing in the appropriate key. Nice! Easy!

We can also set various collision methods on a Sprite. Here's another [example](https://molleindustria.github.io/p5.play/examples/index.html?fileName=collisions.js): overlap, collide and displace.

I think the comments here explain what's happening pretty well, in the draw loop, we check if

We can also make Groups of sprites, which will let us re-make the ball collider sketch from above, but with dancing aliens! You can see the code [here](https://editor.p5js.org/socalledsound/sketches/GGPGwFghg).

I make group called aliens and then in a for loop I create as many aliens as I want and add them to that group.

Then in my main draw loop I can just say

```
aliens.bounce(aliens);
```

Which is a lot like what we did up above with our array of balls, but I think you'll agree, it's kind of easier. Thank you [MolleIndustria](https://molleindustria.org/)!

And you can see another [example](https://molleindustria.github.io/p5.play/examples/index.html?fileName=collisions4.js) of this in the p5.play examples.

# landscapes and collisions

Now, if you remember from last time, we had made a landscape from tiles. I want to add a character to the scene from last time and check to see if that character is colliding with anything in the scene, using Sprites. You can get the code [here](https://github.com/socalledsound/SE-unit2-day14-spritescape/tree/05-with-character), I'll add a few notes of explanation.

First off, this player and most of this example comes from a weirdly hidden example in the p5.play examples. The characeter animation is a spritesheet. In preload, we load that, alomg with another animation for the jumping player.

```
player_sprite_sheet = loadSpriteSheet('player_spritesheet.png', player_frames);

  player_walk = loadAnimation(player_sprite_sheet);

  // An animation with a single frame for standing
  player_stand = loadAnimation(new SpriteSheet('player_spritesheet.png',
    [{'name':'player_stand', 'frame':{'x':284, 'y': 95, 'width': 70, 'height': 94}}]));

  player_jump = loadAnimation('ghost_standing0001.png', 'ghost_standing0007.png');


```

In setup, I make a player sprite as well as two groups of sprites for the landscape, one group for things that will have colliders and one for things that won't.

```

  landscape = new Group();
  backgroundSprites = new Group();
  // Create the Player sprite and add it's animations
  player_sprite = createSprite(140, 300, 40, 10);
  player_sprite.addAnimation('walk', player_walk);
  player_sprite.addAnimation('stand', player_stand);
  player_sprite.addAnimation('jump', player_jump);

```

Then, I mostly just use the code from last class to add these landscape sprites to the scene:

```
  for (var x = 0; x < TOTAL_COLUMNS; x++) {
    addLandscapeCollider('snow.png', x, TOTAL_ROWS - 1);
  }

  // Draw the sign tiles
   addBackgroundSprite('signRight.png', 0, TOTAL_ROWS - 2);
  addBackgroundSprite('signExit.png', 0, 0);

  //draw some more stuff
  addLandscapeCollider('dirtCliffLeft.png', 1, 2);
  addLandscapeCollider('dirtCliffRight.png', 2, 2);
  addLandscapeCollider('grassCliffLeft.png', 4, 4);
  addLandscapeCollider('grassCliffRight.png', 5, 4);

}

```

And then in the draw loop, I draw all of the sprites and then for sprites that I want to check for a collision with the player sprite, I call the Sprite.collide method:

```
  clear();
  background(0);
  drawSprites(backgroundSprites);
  drawSprites(landscape);
  touchScreen();
  gravity();
  movePlayer();
  player_sprite.collide(landscape);
  drawSprites();

```

I should add that I had some trouble using a sprite sheet tile as an image for a sprite, in the end I ended up needing to write a helper function to get the image data out of the sprite sheet. If you run into any trouble be sure to reach out and I'll show you what I had to do.

# finally

I hope this has given you some ideas about how to work with sprites and how to build your game! There are many different directions for you to go from here. I'll leave you with some links for further inspiration.

First, that sky-muse code from last class. Check it out again! I think of this as a game....sort of? Or, certainly something that would count as a game for our purposes. At some point I'm going to see if I can rewrite it, better, myself, I really like the fluid effect it uses, which is very much like this [code](https://editor.p5js.org/codingtrain/sketches/L_ME8qKmQ) you can learn about in a Daniel Shiffman [tutorial](https://thecodingtrain.com/CodingChallenges/036-blobby.html). But it evolves over time, she really ran with that effect and did some interesting things, I think. And although the code is pretty disorganized and maybe hard to read, it works! So who cares. Don't feel like you have to use classes, or compose with functions or any of the rest of it, if just writing stuff out in order works better for you right now, then do that!

[sky-muse code](https://editor.p5js.org/socalledsound/sketches/B-8Md6Bz5)

Also, don't forget, the p5.play examples have four games made in p5.play that you can riff off of, in the examples. For instance, [asteroids](https://molleindustria.github.io/p5.play/examples/index.html?fileName=asteroids.js).

Here's a frogger style game you can code with Daniel Shiffman: [link](https://thecodingtrain.com/CodingChallenges/072.1-frogger.html).

And here's one on [Space Invaders](https://thecodingtrain.com/CodingChallenges/005-space-invaders-p5.html).

Also, [flappy bird](https://thecodingtrain.com/CodingChallenges/031-flappybird.html). And [angry birds](https://thecodingtrain.com/CodingChallenges/138-angry-birds.html). Boy that guy sure makes a lot of videos. We're lucky to have him.

If you're ready to open your mind up to nested for loops and matrixes, this [tutorial](https://www.youtube.com/watch?v=H2aW5V46khA), which builds tetris in vanills js (no p5) is really great. He doesn't explain all that much but the coding style is really, really nice. I just love the way he handles the objects and collision detection. He uses the canvas without p5, so you can also get a sense of what that's like from that video.

The same friendly swedish fellow also has a long series on making super mario in the canvas, without p5. In it, he explores, for instance, a more comprehensive approach to building a landscape from tiles and then checking for collisions. Highly recommended if these things interest you! [link](https://www.youtube.com/watch?v=g-FpDQ8Eqw8)

And here's a [game](https://github.com/socalledsound/soundgame-badlandsclone) that I've been working on, with p5. I was originally going to have the making of this game be the core tutorial of this unit but I realized it was maybe too specific and involved and I thought you'd appreciate the p5.play stuff so I branched out. But, I'm still slowly building it and I'll probably keep building it here and there for the rest of the semester, I'll share it with you as I go along.-->

<!-- And finally, I made a little [video]() for you that goes through the process of drawing an animation by hand, digitizing it, and bringing it in to p5 or p5.play.  You probably don't need it at this point, but if you do, it's there. -->

<!--For today's assignment, please share your game up to this point! Hopefully you've got a landscape, a character and some interactions happening!

Keep working over the weekend! Don't be afraid to reach out if you need some help. See you next week. --> -->
