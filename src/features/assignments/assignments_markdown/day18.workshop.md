# drawing with sound


Today we're going to start our journey into exanded realities by exploring sound a bit more.

And in particular, how to map sound input into actions on the screen.

I"m not talking about speech recogntion, like 'hey google, make me a milkshake', although that is possible (but not super reliable, honestly) with a library called [p5.speech](https://idmnyu.github.io/p5.js-speech/).

I'm talking instead about taking in data from a microphone and analyzing it, and then using that data to draw images on the screen.  I think this will be a good prelude to working with the camera and I think it'll be fun.

# microphone

Before we do anything, we need to ask for permision to turn on the microphone.  This can sometimes be tricky, if the person using the web browser doesn't have a microphone, or....many other factors come into play.  But, all we can do is try, right?  Let's start with a simple example from editor.p5: [mic threshold](https://editor.p5js.org/p5/sketches/Sound:_Mic_Threshold)

Notice how we have to make some global variables:

```
let input;
let analyzer;

```

Then in setup we can try to turn on the input:

```
function setup() {
  createCanvas(400, 400);
  // Create an Audio input
  input = new p5.AudioIn();
  input.start();
}



```

Which should send the user a prompt asking if it's ok to turn on the microphone.

Then in the draw loop, all we have to do is say 

```
function draw() {
  background(220);
  let volume = input.getLevel();
}

```

to get a steady stream of data.

This data, which we can log:

```
console.log(volume)

```

Will be a float between zero and 1.  If we want to use it, maybe we want to map that value into a different range?

```

let color1 = map(volume, 0.0, 1.0, 0, 255);

```

Which will take the value and remap into into a range between 0 and 255.

We can use that, obviously, as a color, or we can map into into a different range and use it to draw a circle:

```
let color1 = map(volume, 0.0, 1.0, 0, 255);
fill(color1);
let circleSize = map(volume, 0.0, 1.0, 1, 500);
ellipse(width/2, height/2, circleSize);

```

You may have to play with the mapping values to get a value that you like.

Make sense?  I hope so.  Here's the [finished code]() in case you got lost along the way.


Let's get a little more complicated, shall we?  Let's draw amplitude over a period of time, dynamically.  In other words, let's draw a waveform.


# amplitude part 2

Ok, so this time we're going to analyze the amplitude of a sound file as it plays.


We'll start by declaring a few global variables: one for our sound, one for our amplitude analyzer, a boolean called loaded, another called started, an empty array.   In preload we'll load the sound, passing in a function called setLoaded as the second parameter.

This function is called a callback function, it will run when the sound is loaded.

AS you can see if you run the code, the status of that boolean will change from false to true, once preload is done loading and setup runs.  You can see that in the console, as first line 14 prints false and then line 20 prints true.

In setup we also make a new Amplitude object, which will keep track of the level of any sound being played.

```
let protestCrowd
let amp;
let myLevels = [];
let started  = false;
let loaded = false;

//set loaded to true
function setLoaded(){
  loaded = true;
}

//load sound
function preload(){
  console.log(loaded);
  //setLoaded is a function that will run after sound is loaded
  protestCrowd = loadSound('protestCrowd.mp3', setLoaded);
}

function setup() {
  console.log(loaded);
  createCanvas(400, 400);
  stroke(0);
// create new amplitude object
  amp = new p5.Amplitude();
}

```

Now, let's take a look at why we're seeing this message 'click screen to start sound'.  We have a function called drawStartScreen(). 

```
//a function to draw some text
function drawStartScreen(){
  fill(0);
  textSize(30);
  text('click screen to start sound', 10, 100);
}
```


It is being conditionally called in our draw loop:

```
function draw() {
  background(220);

  //if not started then draw some text
  // otherwise draw the amplitude
  if(!started){
    drawStartScreen();
  } else {
    if(loaded){
      drawAmplitude();
    }
   
  }
}
```
If the value of our boolean named started is false; then drawStartScreen will run, otherwise drawAmplitude will run.

Farther down, we have a mousePressed function, that sets the value of started to true, and starts the sound playing:

```
//start the sound and set started to true so that drawAmplitude will run
function mousePressed(){
started = true;
protestCrowd.play();

}

```

Handling these kinds of conditionals is super important to creating dynamic programs.  I noticed that many of you struggled trying to get your game top reflect changes in status -- one of the best way to keep track of these changes is with boolean variables that you check in if/then statements!

# beginShape, endShape

Ok, continuing on.  I'm going to show you something new: making your own shapes.  We're going to make a pretty wild shape, which will be a waveform.

This is all going to happen in our drawAmplitude function:

```
//draw the amplitude
function drawAmplitude(){
//get the current amplitude
  let vol = amp.getLevel();
  if (vol > 0){
    //if current amplitude is greater than zero, push it to levels array
  myLevels.push(vol);
  }
    // no fill color ie just a line
    noFill();

//begin shape starts a new shape with any number of vertexes
    beginShape()
  
    myLevels.forEach((level, i) => {
      // remap the value
      let y = map(level, 0.001, 0.4, height, 0);
      console.log(y);
      vertex(i,y);
    })  

    //end the shape
    endShape();
  
    // if the number of levels is bigger than half of the screen, delete the first one
    // this creates the scrolling effect
    if(myLevels.length > width - 150){
      myLevels.splice(0, 1);
    }  
}

```
As you can hopefully tell from the comments, first we get the current amplitude and then, if it's greater than zero, we add it to the array called myLevels.

```
//get the current amplitude
  let vol = amp.getLevel();
  if (vol > 0){
    //if current amplitude is greater than zero, push it to levels array
  myLevels.push(vol);
  }
```

Then, we draw our shape, by calling beginShape().  Farther down we call endShape(), which ends the shape; we can optionally pass in a parameter called CLOSE like this

```
endShape(CLOSE)

```
if we want to close the shape.  

Between beginShape and endShape, we can draw any number of vertexes, exactly where we want them.  We're going to draw a vertex for each element in our array named myLevels, which should be a collection of amplitudes.

```
    myLevels.forEach((level, i) => {
      // remap the value
      let y = map(level, 0.001, 0.4, height, 0);
      console.log(y);
      vertex(i,y);
    })  

```

i is going to be a number between 0 and the length of the array; we'll use that to specify the x position of our vertex.  To get the y coordinate, we'll remap our level value, which theoretically should be a number between 0 and 1 but, after logging some values I realized that in this case it's really between 0 and 0.4.

Make sense?

Then, after we draw the shape, we can check to see how long the array of levels is; if it gets too long it will draw off the screen, right?  So, we can delete the first one if the array is getting too long:

```
    if(myLevels.length > width - 150){
      myLevels.splice(0, 1);
    }  
```

And then we run the loop again.  

You can run the finished [code](https://editor.p5js.org/socalledsound/sketches/1Z3WpRlaV) in the p5 online editor, or download and try your own sound!

And here's another [sketch](https://editor.p5js.org/socalledsound/sketches/zolM77RJs), with a looping snare drum, slowed down, this time I also make an array of colors and use them to fill some ellipses that I draw on top of the waveform.

# fft analysis

Amplitude is fine, but if we really want to understand a sound, we have another tool at our disposal, which is frequency analysis.  Or, an analysis of the relative strength of the various frequencies that make up a sound.  

I honestly think this is one of the most interesting things I've ever learned, the notions that underly this sort of analysis.  The tool we use to make this kind of analysis is called a 'fast fourier transform', or fft.  

I'd love to go into the whys and wherefores of this, but this page is already a little long, and I'm also not entirely sure I understand the notion of Fourier transform in any depth, so I'll give you a [link](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/).  

Basically, the fourier transform is a method that takes a time-based pattern and breaks it up into it's discrete components.  

So if we remember that sounds in real life are periodic waves, that are basically composed of sub-waves of different periods and intensities, the fourier transform helps us pull out the individual waves.  

Let's start by taking a look at a simple sinusoid [wave](https://editor.p5js.org/socalledsound/sketches/SWO6KTHK0).  It's peridioc, and the function is a simple one that we've looked at before, a sin function.

Now, if we subdivide that wave at regular ratios, we can get something more [complex](https://editor.p5js.org/codingtrain/sketches/SJ02W1OgV).

And if we introduce a little real world noise into this equation we get something kind of [life-like](https://editor.p5js.org/socalledsound/sketches/vUuH6dvCj).  That's almost a real world sound waveform there, and it might even be interesting to try to make that into a real sounding sound (final project??).

It turns out, in fact, that we can use this idea to draw almost anything, given the correct set of [data](https://editor.p5js.org/socalledsound/sketches/deqkKFzOq).

Daniel Shiffman has a bunch of great [videos](https://www.youtube.com/watch?v=MY4luNgGfms) on this topic and I highly recommend taking some time with them!

But we're going to aim a little lower.  We're going to use this fourier transform to analyze a sound, which is the sound of someone yodeling.  What we'll get out is some data that describes the individual frequencies of the sound.  We can do this pretty easily in p5, using an [FFT](https://p5js.org/reference/#/p5.FFT) object.  Using it is similar to the amplitude object, except that it returns an amplitude for each of (by default, but settable) 1024 different frequency values.

Here's a [sketch](https://editor.p5js.org/socalledsound/sketches/5dZY0UsJY) that uses it.

I think it's pretty well commented, but I'll pull a few details out before we end for the day.

```
let yodel, fft; 

function preload(){
  yodel = loadSound('yodel.mp3');
}

function setup() {
  createCanvas(1024, 255);
  noFill();
  yodel.rate(1.0);
  yodel.loop();
  fft = new p5.FFT();
}

```

I'm hoping this is all pretty straighforward at this point: we load a sound, start it looping and then make a new p5.FFT().  Notice that the canvas is 1024 pixels long, which is the size of the analysis buffer/

Then, in draw, we use that to .analyze() the sound playing:

```
 spectrum = fft.analyze();

```

and then we draw the spectrum:

```
    for(let i = 0; i < spectrum.length; i++){
      strokeWeight(5);
      stroke(i, 0, 120);  
      fill(spectrum[i],200,200);
      ellipse(i*10, height/2, 10, spectrum[i]);
    
    }

```


 Each time through the draw loop, we riun through all 1024 values of the specturm that is pulled from the sound at each time through the draw loop. We set the fill color to be a shade of red that is deriverd from the value of the spectrum at each buffer, and set the size of each ellipse on y axis to be equal to the value of the spectrum at that buffer.  Each buffer is a frequency range.

 And that's it for today!  

 Or almost it for today.  I'll leave you with one more link, in case you are interested in exploring speech in the browser, which is pretty well supported, even if it is a little bit less than precise.  There's a library called [p5.speech](https://idmnyu.github.io/p5.js-speech/) that can help you access the [speech api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).  Robert used it in his [midterm](https://github.com/rf-hurley/express-yourself), ask him about it!  Or follow up with me and I'll show you how to use it.  

 Please take some time to explore these ideas!  Use the microphone or a sound to generate an interesting visual pattern.  You can take my examples and tweak them a bit or you can come up with your own idea for deriving visual output from a sound!  
 
Try plotting your values along a circle, using the formula we've used in the past:

```
x = sin(angle) * radius;
y = cos(angle) * radius;

```

Try plotting the spectum values over time.  Try new forumlas using the values we get from amplitude or fft to generate new color values or new patterns.

 Just make sure that it looks different from what other people (including me) are doing and have fun!




