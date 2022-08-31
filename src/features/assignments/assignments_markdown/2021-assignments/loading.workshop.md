# loading....

Today we're going to wrap up our game by giving it a splash page with instructions and whatever context you want to provide. We'll also talk a bit about how to set up a loading state, that waits until everything is loaded before giving the player the go ahead to actually play. And we'll talk about a few other tweaks as well, like making our game mobile friendly, and loading files using some nifty async code.

Remember life before p5 and the canvas? Where we just built html pages? Let's do that again today. In addition to our canvas, we'll have an intro page. It'll have a picture and some text telling the player what to do and it'll have a button we can push to start the game. I want you to go through this process for your own game as we go along, but I'm going to also give you some [reference](https://github.com/socalledsound/SE-unit2-day-17-loading) code at github so you can see what my code looks like at each step of the way and compare yours to mine.

# making a seperate game page

Since our index.html will always be the first thing people see, we're going to have to move our code out of there, right? Let's make a new page called game.html and cut/paste our current index.html into that page. And then make a new index.html. You can design and code yours as you like, but I think what I want is a background image, a text overlay and a nice big button. You can see my code [here](https://github.com/socalledsound/SE-unit2-day-17-loading/blob/master/index.html). Notice, there's also an external stylesheet.

![image of my splash page]()

# starting the sketch

Hopefully you remember how to navigate between pages in our html? When I click the button we want to open a new page, which will be game.html. We'll want to make a seperate page which will be a landing page, and that will be our index.html. Make sense?

Here's my new index.html: [link](https://github.com/socalledsound/SE-unit2-day-17-loading/blob/master/index.html)

And here's the css: [link](https://github.com/socalledsound/SE-unit2-day-17-loading/blob/master/css/styles.css)

Remember, I need to link to the stylesheet from my index.html if I want the styles to be applied.

```
    <link rel="stylesheet" href="css/styles.css">
```

The styles there should all make sense to you, but I want to draw your attention to one in particular, which is the 'button'. Which isn't actually a button, it's an anchor tag (a link tag) that's styled to look like a button:

```
 <a href="game.html" class="gtg">start</a>
```

And the style, which is attached to the class name of the anchor tag:

```

.gtg {

        background-color: white;
        border: 2px solid darkgrey;
        border-radius: 12px;
        color: red;
        padding: 24px 24px;
        text-align: center;
        display: inline-block;
        font-size: 20px;
        margin: 0 auto;
        margin-left: 35%;
        cursor: pointer;
        text-decoration:none;
        width: 15%;

}

.gtg:hover {
    background-color: lightgray;
}

```

So, when a player clicks the start tag, it links to [game.html](https://github.com/socalledsound/SE-unit2-day-17-loading/blob/master/game.html).

Which has all that nice p5 javascript, linked to in the head:

```
    <script src="js/libraries/p5.js"></script>
    <script src="js/libraries/p5.sound.js"></script>
    <script src="js/Character.js"></script>
    <script src="js/DemonWall.js"></script>
    <script src="js/LoadingCircle.js"></script>
    <script src="js/LoadingBall.js"></script>
    <script src="js/sketch.js"></script>

```

And so it will run the sketch.

# promises

And there's a lot in this game that may or may not be interesting to you, explore the code at your leisure. It features all of the usual suspects: a player class, an enemy class, some action, keyboard input, several game states, including a gameOver state.

But I'm going to focus on preload for a minute, because something new and cool is happening there:

```
function preload(){

    buffers.forEach((buffer, i) => {
        buffers[i] = new Promise((resolve) => {
            sounds[i] = loadSound(`${path}${i}.mp3`, setTimeout(resolve, 10000));
        })
    })

    Promise.all(buffers)
        .then(() => {
            console.log('all audio is loaded')
            loaded = true;
            bg = 0;
        })
        .catch(()=> console.error('error loading sounds'))

}


```

Whoa. new Promise?

So, a word on Promises is in order. Promises are a very very very useful feature of javascript, which help us deal with asynchronous code, in other words, code that needs to wait for a bit, for instance if we request some data from a web site, or like here, we want to be sure all of our sound files get loaded before the game starts. They're a little confusing, but I'll try to cut to the core of the matter.

You can think of them sort of like event listeners, where the events are named 'then' and 'catch'. When we write our Promise, we have access to a property called 'resolve' and another called 'reject'. When we want the event listener named 'then' to fire, we call the function named resolve that gets passed in when we make a promise.

Let's take a look at a basic [example](https://editor.p5js.org/socalledsound/sketches/u3BeiLJAy') first.

```
  const myPromise = new Promise((resolve) => {sound = loadSound('Damscray_DancingTiger.mp3', resolve)
    });
```

Here, we have one promise. We pass in a function (with the resolve parameter -- resolve is a FUNCTION, remember!). In that function we do something asynchronous, in this case, load a sound. Most async functions these days are actually promises, but p5 is a bit old so it instead has a callback function, which means that there's a second argument you can pass in to loadSound, after the file name, which is a function that will be called when loadSound is done.

To call my promise, I'll use its .then and .catch methods:

```

  myPromise.then(() => {
      console.log('all audio is loaded')
    	audioLoaded = true;
    	sound.disconnect();
      conv.process(sound);
    })
    .catch(() => console.log('error loading audio'))

```

Kinda tricky, I know! And if you aren't getting it yet, be patient.

Here in this code, I've got two arrays. One is the array of sounds, and the other is an array of promises.

For each member of the array of promises -- which I'm calling buffers because it describes what's happening, I'm buffering the audio -- I am making a new Promise. That promise takes in a function, which has a parameter which is the function called 'resolve'. When 'resolve' gets called, the promise status goes to resolved and the .then gets calkled. In this code, this happens here after a delay because I have added a setTimeout function to lengthen the process so you can enjoy my loading animation.

To resolve the promises I am using something called Promise.all. I pass the whole array of promises in to this and when they have all returned resolve, my global variable named loaded gets set to true, I change the background color and I log to the console that all audio has been loaded. If an error occurs, then the .catch() gets returned instead and an error gets logged.

We'll see promises more in the future -- don't feel like you have to really understand them now, it took me maybe two years to really understand them!

But know that you could also use loadImage here, wrapped in a promise, and your game would wait until the promise had been resolved, before continuing.

If you want to implement this in your own game but aren't really sure how to, reach out! I'll help and we can talk more about this. Also, check the syllabus page for a few helpful links.

# loading

And the other thing I want to show is just the loading animation, which I wrote in p5.

Let's look first at the draw loop, which i think is pretty readable:

```

function draw() {
    if(loaded){
        if(!gameOver){
            drawGame();
        } else {
            drawGameOver();
        }

    } else {
        drawLoading();
    }

}
```

If the promises have resolved, then, if the game isn't over, draw the game. Else, if !loaded drawLoading().

```
function drawLoading(){
    background(bg);
    loadingCircle.balls.forEach(ball => {
        ball.update();
        ball.display();
    })
    noStroke();
    textSize(30);
    text('loading...', width/2 -50, height/2 );

}

```

And maybe this looks a little familiar? Here I've got an array called loadingCircle.balls that I'm iterating over, updating and drawing each ball.

Each one of these balls is a class member of a LoadingBall. The array is created in the class LoadingCircle, when I make anew LoadingCircle, in setup:

```
 loadingCircle = new LoadingCircle();

```

Please take a look at those classes and see if you can figure out what's going on there! Let me know if uyou have questions.

# mobile.

So, you probably noticed that your p5 sketches don't look great on mobile. This is a big and involved topic, but I'm going to put a few words on how to take a first step to make your sketches look better on mobile. And, I guess, also not on mobile.

The first is to set the width and height of the sketch’s canvas to the size of the device itself. Aka 'fullscreen'. Here’s an example sketch to illustrate:

```
function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    background(0);
    fill(255);
    ellipse(width/2, height/2, 100, 100);
}

```

and then in index.html we need to make sure that the web browser doesn't do any pixel resampling on mobile:

```
<meta name="viewport" content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width">

```

There's a lot more we can do for mobile browsers, but I think that's enough for today! Good luck finishing your projects! Submit wherever you are, today, and submit the final project by Saturday please! Then, be sure to log in to the gallery on Sunday and leave as many (BUT TEN AT A MINIMUM!) thoughtful comments as you can!
