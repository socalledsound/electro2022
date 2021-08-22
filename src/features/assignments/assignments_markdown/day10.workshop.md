# animation: literally,  bringing things to life

![soundgame1](https://res.cloudinary.com/chris-kubick/image/upload/v1599606598/side-effects/127.0.0.1_5501_index.html_vkz2zh.png)

Today, we'll start using p5.js, one of my favorite javascript libraries.  It's a port to javascript of a project called Processing, which is probably the best-known coding environment for artists.  Although Processing uses java -- very different from javascript! -- as it's primary language, if you know Processing, learning/adapting to p5 will be a piece of cake, as it uses pretty much the same API, but written in a different language.


The really nice thing about p5.js is that any project you create in it can be run in a web browser, and every project you make is actually a web site that you can host on the web, so your work becomes much easier to share with others.


P5 is a canvas-based library, which means that it draw onto a canvas element in the browser.  The canvas element is a pixel-based environment for drawing graphics.  Which is both good and bad; it is definitely computationally expensive, but it also gives us complete control over every pixel of the screen.  

But enough of this preamble, let's just write some code and pick up the pieces later.  I've made a starter skeleton with the main p5 library, along with the p5.sound library, loaded it with some sound files and written some basic code that draws a circle.  Download it from github: [here](https://github.com/socalledsound/sound-game-1-starter/tree/01-starter) and open it up in vs code.  You can load it into a browser using live server, and it should look like this:


![basic p5 sketch with an ellipse](https://res.cloudinary.com/chris-kubick/image/upload/v1599608847/side-effects/127.0.0.1_5500_index.html_jlgybo.png)


A basic p5 sketch starts with two javascript functions, named setup and draw.  I've always found these to be a little mysterious, because we declare the functions but don't actually run the functions.  This happens automagically behind the scenes with p5: setup is called once, when the page loads (or, you press play on the online editor), and draw loop is called continuously in a loop, at either the default frame rate or one which you specify.  
</br>
</br>
I've also used the preload function in this example, to "preload" some sounds, which means that the sketch won't run until those sounds load.  We're going to come back to those later.  For now, look at the setup function, where I create a new canvas, giving it a height and width, and then set a backgroundColor for the canvas, by passing it an rgb value.

```
function setup(){
    createCanvas(600, 600);
    backgroundColor(230, 220, 190);
}

```

In the draw function, I use p5's stroke, fill and ellipse methods to draw an ellipse:  


```

function draw(){
    stroke(0,220,20);
    fill(190, 80, 230);
    ellipse(300, 300, 90);

}


```


All of these functions come from the p5 API, which is available [here](https://p5js.org/reference/).  If you take a look, you'll see that p5 has a pretty great library of helper functions that make it easy to make all sorts of generative artwork.  But let's focus on the ellipse method, so we can better understand what's going on.  If we take a look at the ellipse page [reference page](https://p5js.org/reference/#/p5/ellipse) , we can see that the ellipse function takes three arguments -- an x coordinate, a y coordinate, a radius and an optional fourth argument for a vertical radius, which you can specify if you want an oval rather than a circle.

</br>
</br>
![image of p5 ellipse method page, the part with the args](https://res.cloudinary.com/chris-kubick/image/upload/v1599608547/side-effects/p5js.org_reference__gt8tey.png)

</br>
</br>
We can change those values and get a different looking ellipse.

We can also change the outline color by change the color values we are feeding into the stroke() function, or change the fill() color.
</br>
</br>
We're going to play with those values in a minute, but first I want to show you a new data type in javascript, one that is probably the most fundamental and useful data type in javascript, the javascript Object.
</br>
</br>
Objects use key - value pairs to store their data.  You can think of them as collections of variables.  
</br>
</br>
At the very top of your page, outside of both functions, let's write an object.  We'll call our object 'ball1' and give it an x, y, r, fillColor and strokeColor.  Since it's outside of all of the functions, in the 'global' scope, it is accessible to all of our functions.

```
const ball1 = {
    x: 300,
    y: 300,
    r: 100,
    fillColor: [0,220,20],
    strokeColor: [0, 220, 20]
}

```

</br>
</br>
As you can see, you can store numbers, arrays, or even other objects as keys in an object.  This is tremendously useful for organizing data.  Now, we can use those values in our sketch, in place of the numbers we currently have in there:


```

function draw(){

    stroke(ball1.strokeColor);
    fill(ball1.fillColor)
    ellipse(ball1.x, ball1.y, ball1.r);

}


```

Your code should run the same as before, but we actually took a major step towards making it more flexible.  I'll show you why in a second.

</br>
</br>
But first, I want to take a slightly deeper dive into this thing called a function.  In a very general sense, a function is a transformation or mapping of one value into another value, or of one set of values into another set of values.  That seems pretty abstract, so I prefer to think of functions just as sets of operations that we can perform on data.  Just like you can take an apple and call a cut() function to cut it up and then a mixPieIngredients() function to add sugar and spice, and then a bake() function to cook it, we can take a set of numbers and turn them into a circle on our canvas. And, we can replace the apple with a peach, or replace our numbers with new numbers, and get a different pie, or circle, using the same functions.
</br>
</br>
And -- this is maybe the most important thing to take away here -- we can compose with these functions.  So, we can create a makePie() function from our various functions, and simply send an apple into that function, and walk away with a pie.  Let's do something like that now.

```
const drawCircle = () => {
    stroke(ball1.strokeColor);
    fill(ball1.fillColor)
    ellipse(ball1.x, ball1.y, ball1.r);
}


```

Now, we can call this function, in our main draw loop, in place of the other functions, like this:

```

function draw(){

    drawCircle();
}


```

In my function declaration, I used the arrow syntax that I introduced earlier in the course, remember?  It's basically the same as saying 

```
function drawCircle(){
    stroke(ball1.strokeColor);
    fill(ball1.fillColor)
    ellipse(ball1.x, ball1.y, ball1.r);
}


```

But I like it better, because I think that the arrow speaks to what's happening here: an input value is being processed.  I think it's also a good idea to get used to using this syntax because as you get more advanced you'll discover that arrow functions are absolutely a huge improvement when it comes to dealing with scope, or, where the function is defined.  But wait....I said 'input value' but there isn't one in this function.  
</br>
</br>
The input value, or argument, is optional and goes in the parentheses. We don't currently have one, but it would be much better to make this function re-usable, by adding some arguments, like this: 

```

const drawCircle = (x,y,r,strokeColor, fillColor) => {
        stroke(strokeColor);
        fill(fillColor)
        ellipse(x, y, r);
}



```

Now, we can re-use this function to draw circles of varying sizes and colors, by passing the values that the function wants whne we call it:


```

function draw(){

    drawCircle(ball1.x, ball1.y, ball1.r, ball1.strokeColor, ball1.fillColor);
}


```

BUT before you take the time to write that out, we can make our lives a heck of a lot easier by just passing in our entire ball object, and 'destructuring' the values we want from the ball, like this:


```

function draw(){

    drawCircle(ball1);
}

const drawCircle = ({x, y, r, strokeColor, fillColor}) => {
        stroke(strokeColor);
        fill(fillColor)
        ellipse(x, y, r);
}


```

<p>See how I put that whole object {} in the where we put the arguments, and then put the values we want to grab from that object between those braces?  This really cleans up our code!</p>

<p>If you want to check your code against my code, we're now at the 'draw-function' branch: [link](https://github.com/socalledsound/sound-game-1-starter/blob/with-draw-function/index.js)<p>
<p>Let's make a few more balls, and add a few more key value pairs as well while we're at it.  First, delete our original ball1, and then copy these balls into your code:</p>


```
const ball1 = {
    x: 300,
    y: 300,
    r: 100,
    speed: 1,
    fillColor: [190,80,230],
    strokeColor: [0,220,20],
    outlineWidth: 6,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 2000,
} 

const ball2 = {
    x: 300,
    y: 100,
    r: 50,
    speed: 2,
    fillColor: [190,80,230],
    strokeColor: [0,220,20],
    outlineWidth: 6,
    rightSound: sounds[2],
    leftSound: sounds[3],
    soundLength: 1000,
} 

const ball3 = {
    x: 300,
    y: 200,
    r: 80,
    speed: 2,
    fillColor: [190,80,230],
    strokeColor: [0,220,20],
    outlineWidth: 6,
    rightSound: sounds[4],
    leftSound: sounds[5],
    soundLength: 500,
} 

```

Keep drawCircle the same for now, but update your draw loop to call drawCircle with each of the three balls.

```

function draw(){

    drawCircle(ball1);
    drawCircle(ball2);
    drawCircle(ball3);
}



```


Presto!  Three balls ([repo](https://github.com/socalledsound/sound-game-1-starter/blob/multiple-balls/index.js))!  But wait, this gets better!  Let's put these three balls into an array, so we can use the forEach() method on the Array object, to make this code a little less repetitive.  First, declare the array:


```
const balls = [ball1, ball2, ball3];


```

Then, in the draw loop:


```

function draw(){

    balls.forEach( (ball) => {
        drawCircle(ball)
    })
}



```

Now, before we continue, let's look a little more deeply at the forEach() method, now that we've talked a bit about functions.  forEach() is a method of the Array object that's built into javascript.  In this way, it's a little like the ellipse() method of the p5 library.  It's a function that takes in values and changes them.  But what it takes in is....A FUNCTION.  That function can be written as an arrow function or an old fashioned function.  I've written it as an arrow function here.  It takes each element of the array as it's input.  We can call this element whatever we want to -- but the value of this thing, in our function, will be each item in our array.  
</br>
</br>
We can test this out, by using console.log(), like this:

```
function draw(){

    balls.forEach( (ball) => {
        console.log(ball);
        drawCircle(ball)
    })
}

```





Inside of our function, we can perform any number of tranformations upon each object in our array.  Let's add another function in there, to move each of our balls at the speed that we have already coded into each ball.


```

const move = (ball) => {
    ball.x += ball.speed;
}


```


And then in our draw loop:


```
function draw(){

    balls.forEach( (ball) => {
        console.log(ball);
        move(ball);
        drawCircle(ball)
    })
}

```

And now we are updating each of the values of x for each of the balls.  This makes each of the balls appear to move, at the speed that we have already declared for each ball!  Each time the draw loop runs, it updates the value of x and then redraws the ball.  But, it'll look better if we also redraw the background each time, so that we only see one ball at a time:

```
function draw(){
    background(backgroundColor);
    balls.forEach( (ball) => {
        console.log(ball);
        ball.x = updateX(ball);
        drawCircle(ball)
    })
}

```

</br>

So here we are: [link](https://github.com/socalledsound/sound-game-1-starter/tree/04-moving-array).  Now...we have a bit of a problem, which is that the balls disappear, rather quickly.  It would be better if we keep them on the screen.  We'll need a function to check the position of the balls and reverse them if they are getting off the screen.  But, before we write this, let's draw some lines so we know where the ball should reverse, one line at say 50px from the left edge and the other at 50px from the right edge.  I'm going to let you take a stab at doing this on your own, while I grab a cup of coffee.  I'll give you one clue, which is the reference for the line() method of p5, which as you can [see](https://p5js.org/reference/#/p5/line), takes an two x value and two y values.  You'll probably want to make objects for each of the lines, with those values, and maybe also have a constant for a line color that you can use for both of the lines?  Then, make a function that draws the lines.  You can do it!  See you in a bit.  My solution is below, after the picture -- but seriously, don't peek, do it yourself!

</br>

![image of three balls with lines](https://res.cloudinary.com/chris-kubick/image/upload/v1600994613/side-effects/127.0.0.1_5500_index.html_1_hjcalc.png)


</br>

All right so here's what I did.  [Solution](https://github.com/socalledsound/sound-game-1-starter/tree/05-with-lines)  First, I made some objects to store the data for our lines:

```
const leftEdge = {
    x1: 230,
    y1: 0,
    x2: 230,
    y2: 600,
    color: lineColor,
    width: lineWidth,

}

const rightEdge = {
    x1: 370,
    y1: 0,
    x2: 370,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}


```

Then, I made a function called drawLines, to draw the lines.

And finally, I fed the data into the function.  I could have drawn these in the setup function, and only drawn them once; but I plan on animating them in a minute, so I'm going to go ahead an put it in the draw function:

```


function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}


function draw(){
    
    background(backgroundColor);

    balls.forEach((ball) => {
        moveBall(ball);
        displayBall(ball);
    })
    drawLine(leftEdge);
    drawLine(rightEdge);
}


```
I also changed the names of our ball functions to make them more specific.

</br>
You can see the current code [here](https://github.com/socalledsound/sound-game-1-starter/tree/05-with-lines).
</br>


Now, that's only the first part, right?  The next thing we have to do is turn the balls around when we hit the lines.
</br>


Currently, we're moving the balls left by adding the speed value to the x coordinate of the ball.  So what we need to do is, reverse the speed, by multiplying it times -1 when we hit a line.  Since we're no longer just moving the ball, why don't we make our function a little more general, and call it 'updateball'?  In there, we'll use a conditional statement to check the current value of x, and before we move the ball, check and see if we need to reverse direction.  So, something like this:

```
function updateBall(ball){
    console.log(ball.x);
    if(ball.x + ball.size/2 > rightEdge.x1 ){
        ball.speed *= -1;
        activateLine(rightEdge);
    } else if(ball.x - ball.size/2 < leftEdge.x1 ){
        ball.speed *= -1;
        activateLine(leftEdge);
    }
    ball.x+= ball.speed;
}

```

We take in a ball and first, we check if the right edge of the ball (ball.x + ball.size/2) has made it to the x position of the right line.  If it has, we reverse speed -- so the ball turns around.  We do the same thing on the other side, and then we add the new (or old, depending on whether the condition has been satisfied) speed to the old location of the ball.  If we add a positive value to x it goes right...if negative it goes left.  You can see the code [here](https://github.com/socalledsound/sound-game-1-starter/tree/06-reversing-direction).
</br>

</br>


And you can see that I've also, gratuitously, added an activateLine function, which is a little animation that makes the line wider briefly and then shrinks it back down to size after an ammount of time specified in our setTimeout function. 

```
function activateLine(line){

    line.color = activeLineColor;
    line.width = activelineWidth;

    setTimeout(() => resetLines(line), 500);
}


function resetLines(line){
    line.color = lineColor;
    line.width = lineWidth;
}


```

All right, all that's left is to add the sounds! We can do that by calling

```
ball.rightSound.play();

```

or 


```
ball.leftSound.play();

```


Can you figure out where to put them?  I'll be here to answer questions, or you can cheat and look at the finished code [here](https://github.com/socalledsound/sound-game-1-starter/tree/07-finsihed)

</br>
</br>

The other thing I'd like you to do is, make this code at least slightly your own by changing the look of the balls or the lines.  Add an 'activateBall' function if you want to, which triggers when the ball hits a line.  Change the sounds and otherwise make it your own!  We've built a weird little sound looper!  Could it be a drum machine?  Maybe try making beats with it, loading in some samples from a drum kit.Then post it to the gallery and call it a day.  Next class we're going to go farther with these ideas, which are going to serve us very well when we start making our 'games'!

</br>
</br>
ps! I had to set the ball sounds in the preload function so they were loaded when I set them.  There is no doubt a cleaner way to do this but I'm in a bit of a hurry and I'll have to come back to it.  If you have a better idea here, let us know!

```


function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    console.log(sounds);

    ball1.rightSound = sounds[0];
    ball1.leftSound = sounds[1];
    ball2.rightSound = sounds[2];
    ball2.leftSound = sounds[3];
    ball3.rightSound = sounds[4];
    ball3.leftSound = sounds[5];
}

```




