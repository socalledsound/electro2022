# pendulum music

##### redo this with the CPE

Today we're going to make an interactive pendulum that makes music, in an homage to Steve Reich's pendulum music. You can see a demo [here](https://socalledsound.github.io/side-effects-unit2-day11-pendulum/), here's the finished [code](https://github.com/socalledsound/side-effects-unit2-day11-pendulum/tree/07-mutliple-pendulum) with comments, and here's a starter [sketch](https://github.com/socalledsound/side-effects-unit2-day11-pendulum/tree/01-starter).

It's an interesting problem, the pendulum, and the motions involved are important to understanding how to move things on the screen in an interesting and convincing way. For me it also brings to light some really fascinating aspects of listening, time and perception -- and gives me a chance to demonstrate what I think is so interesting about Reich's 'Music as A Gradual Process' and his approach to composition.

Last time we learned a little bit about how to move stuff on a screen.

If you remember, we made this [sketch](https://socalledsound.github.io/sound-game-1-starter/). We incremented the x and y coordinates of an object by adding velocity to a position, over time. And then we added a conditional statement to check if the object was at the edge of the screen and if so, we reversed the velocity so the object would turn around there.

But there's actually an easier way to keep an object on a page. We can just use a sine function.:

```
x = Math.sin(theta) * screenWidth/2 + screenWidth/2;

```

Wait, what? If you've forgotten your tenth grade maths or if they just weren't ever really in your head, like me: a sine function, given an incrementing value (an angle) as input, will produce a range of numbers between -1 and 1. In trigonometry, it's a way of calculating the relationship of two sides of a triangle, as an angle changes. The angle is often called theta.

If we multiply the value we get from our sine function -- which will always be between -1 and 1 -- by say 500, we get a value between -500 and 500. If we add 500 to that, we get a value between 0 and 1000. Nice, right? You can see it in action in this code [here](https://github.com/socalledsound/side-effects-unit2-day11-pendulum/tree/02-sin-ball) Download that code and fire it up and you should see a ball moving back and forth along the x axis.

Another function from the Math library that produces a similarly oscillating value is called the cosine function, and if we use it to similarly keep our y value on screen, with the same angle as input, we get...a circle. Fire up the next branch in the repo, which you can get [here](https://github.com/socalledsound/side-effects-unit2-day11-pendulum/tree/03-circling-ball) and you should see a ball moving in a circular motion.

The easiest way to draw a circle is with the formula that we just put into practice:

```
    x = sin(theta) * r
    y = cos(theta) * r
```

It's one of those formulas that's helpful to memorize, and believe me, if you animate for a few years you undoubtedly will.</p<>>

But, to me, what's really neat about these functions is that they oscillate. They go back and forth in loops. And if we subtly offset them as Steve Reich did in his work -- you get WAVES. Fire up [this](https://github.com/socalledsound/side-effects-unit2-day11-pendulum/tree/05-Loopers2d) code to see some harmonically osciallating circles.

As someone who loves the ocean and loves to be on the water, this really blew my mind, that in waves, water isn't actually moving, or not the way I used to think it does. The force of the wave is transmitted from molecule to molecule, so we see a wave, where actually there are circles.

And this is, of course, true of sound waves as well.

But before we move on to sound waves and oscillators, let's stop for a moment and look at that wave code, because it introduces an important new concept, a way to create javascript objects from constructor functions.

Last time, we made our balls from objects that held data. We took that initial data and ran it through a series of functions over time to get results in our web browser.

But, sometimes it makes sense to organize our code a little differently. We've already seen how the Array object has functions that belong to every array. Well, we can do the same thing with our ball objects. We can take our functions and make them methods, and then we can call those methods. If we use a class constructor, then every ball we make using that constructor will have access to those methods.

The constructor function named Looper (constructor functions are generally named with capital letters) which is really at the heart of this code does just that. It serves as a blueprint for every looper that gets drawn to the screen. That constructor function is described in lines 79-115. If you look there, you'll see that the Looper object that this constructor makes every time we call new Looper() will have a number of properties, some of them passed in as arguments and some of them created when the object is created. bigX, bigY, angle, h are all passed in and then we set this.bigX, this.bigY and etc to those values. 'this' referese to 'this copy of those variables, or, the value of those properties INSIDE the constructor function.

The Looper also has a display method. This is actually pretty lazy coding on my part, if it's still there it's because I ran out of time, I should break this one function up into smaller functions, one for updating the new position and one for displaying it. But, alas, if you just read this, it means I didn't have the time! Anyways, it works. And it works in exactly the way I described above, each one of these loopers is a circle that moves in a circle, just like our previous example. I use the constructor function to fill every location of a 2 dimensional array at line 39, and as you can see, each consecutive looper is offset on the x and y positions to make a grid. Don't worry if this seems a bit over your head, we're going to work with this idea a few classes from now, it's not really the subject for today but I thought seeing these waves in motion would be interesting in the context of the pendulum that we'll build today.

We are going to use a special syntax for creating our blueprint or constructor function, which is the 'class' syntax in javascript.

I'll explain more about classes and objects at the end, but I think it'll be easier to understand if we just start using it before we really understand it.

I've made a a pendulum sketch [here](https://github.com/socalledsound/side-effects-unit2-day11-pendulum/tree/06-Pendulum-starter). Look in the file called Pendulum.js. It has a Pendulum class on a seperate page. We'll look at that in a second.

But first, if you look at the index.html file, you'll see that we have not one, but several javascript files that all load when our index.html gets loaded in the browser. We have the p5 libraries, then we have Pendulum.js and finally index.js, which will be our sketch. So, Pendulum is a little bit like our own tiny javascript library, right? ok, let's move on.

Let's take a closer look at Pendulum.js.

```



```

At it's heart, it's the code we were using before, wrapped in a class syntax, with some added physics to handle the pendulum motion.

First, we have our class declaration:

```
class Pendulum {

}

```

Which is, bascially, an empty object.

Then, we add a constructor function, which can take in some values that we give it when we initialize each member of the class.

If you look at index.js, we are using this class to make an instance or member of the class. We feed in four values, which are the same four values that come in in our constructor function. These specify the top x position of the line, a 'frequency', which is the length of the line, a radius for our ball, and a constant called gravity which we use in our physics calculations.

But why 'frequency'? Because the frequency of the pendulum motion is constant and is specified by the length of the line, a very interesting phenomenon that was discovered by Galileo. This observation led to the use of pendulums in clocks, and all of the world's most accurate clocks were pendulum clocks up til the 1930's, when quartz oscillators were introduced

Let's explore this idea a bit by making more pendulums, of different lengths!

Since we already have a class to work with, let's use it to make an array of pendulums.

IN your index.js file, comment out 'myPendulum' and in it's place make an array of pendulums, like this:

```

const gravity = 0.8;
// const myPendulum = new Pendulum(400, 400, 50, gravity);

const pendulums = Array.from({ length: 4 },(e, i)=> {
    return new Pendulum(400, (i+1)*100, (i+1)*30, gravity)
});

```

Remember Array.from()? We can make an array from an object that specifies some properties -- I'm only specifying length -- and a function. We pass the object in as the first value, and the function as the second. The function that we are using to create our array says, make a new Pendulum object and pass in a startingX of 400 and then a starting frequency of the index number of the array+ 1 times 100. I use i + 1 because the starting value of i, as I hope you already know, is zero, and zero just isn't any fun here.

Then in our draw loop let's loop over the array and update and display each member of the array:

```

function draw(){
    background(220, 220, 250);

    pendulums.forEach(pendulum => {
        pendulum.update();
        pendulum.display();
    })

}

```

Easy,right?
If you check it out in a browser window you should see the nicely complex rythm these four pendulums make together! If it's not working for you, go the repo and get the working code [here](https://github.com/socalledsound/side-effects-unit2-day11-pendulum/tree/07-mutliple-pendulum) and compare it to yours.

I love the way these pendulums drift in and out of sync. But...why don't we add some sound here? Doesn't 'frequency' just scream out for it?

P5 has a sound library which not only lets us play audio files, but also generate audio sounds using oscillators. This type of sound production is called synthesis, as I'm sure you're aware -- people often make it using 'synths' or synthesizers.

I've put together a simple sketch [here](https://editor.p5js.org/socalledsound/sketches/P81hsiTnf). If you open it in your browser you can play with the sound. Click anywhere and then move your mouse to hear and see the effects of changing the frequency, which is being affected by the mouseX value.

Now we're hearing, and seeing, a sin function in action. The line you see is representing various values of the sin function, with an angle displaced slightly in time, and the sound is similarly representing that function in the audio domain. How do we use this function in p5 to make sound? Let's have a look:

```
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();


```

In setup, we make a new instance of an oscillator, set some base values, and start it -- but with the volume or amplitude at 0. Amplitude, you'll notice if you look closely at the sketch in action, is the same thing as the height of the sound wave. Farther down in the sketch, is a p5 function called mousePressed, which is a mouseclick event listener helper function. Here' after a click, I slowly ramp up the amplitude to 0.5, over 3 seconds, after a click -- or if it's already playing, slowly ramp it down to zero.

```



function mouseClicked() {

    if (!playing) {
      // ramp amplitude to 0.5 over 3.0 seconds
      osc.amp(0.5, 3.0);
      playing = true;
      backgroundColor = color(0,255,255);
    } else {
      // ramp amplitude to 0 over 3.0 seconds
      osc.amp(0, 3.0);
      playing = false;
      backgroundColor = color(255,0,255);
    }

}

```

and then in the draw loop, I am constantly getting a value for mouseX and feeding it into the frequency value for the oscillator.

```
 osc.freq(mouseX*2);


```

As we've already learned, waves of all kinds, including soundwaves, oscillate at a specific frequency, or, really, set of frequencies.The sound of this sin oscillator is pretty boring and unnatural sound, because the waveform is so simple and uncomplicated. If we subdivide that oscillation, combine it with other frequencies, it gets a little more interesting. We can see something like this in action in this [sketch](https://editor.p5js.org/socalledsound/sketches/pzFdVAMS7). It's beyond the scope of this article to talk about the fourier series, but it is a super interesting and useful idea and if you want to learn more, watch this great [video](https://www.youtube.com/watch?v=Mm2eYfj0SgA) by Daniel Shiffman -- and also this [video](https://www.youtube.com/watch?v=MY4luNgGfms)where he uses the fourier transform to do some drawing! It's really fascinating stuff, and very useful if you want to understand this stuff a little more deeply.

But what I do want you to take away is the knowledge that more complex sounds are composites of simpler sounds. In the real world, these sound waves are naturally quite complex, many different waves combining and subdviding along innumerable timelines at a similarly innumerable number of frequencies. The call of a bird has a rich and unique timbre because so many factors are influencing this sound, beginning with conditions inside the throat of the bird but extending all the way to our ears.

It's very difficult to effectively synthesize the natural world using oscillators, but we can very quickly and cheaply make our simple oscillator a little more interesting by using a technique known as fm synthesis, or frequency modulation.

You can hear this in action in this [sketch](https://editor.p5js.org/socalledsound/sketches/By2AbIN_m).

The gist of fm synthesis is that, instead of feeding in a simple frequency value, we feed in an oscillator, or lfo. This immediately makes the waveform more complex and interesting and unpredictable. You can see in the code, osc.freq() takes another oscillator as its input value.

You can hear this in action in this [version](https://github.com/socalledsound/side-effects-unit2-day11-pendulum/tree/08-add-sound) of the pendulum sketch, where I'm adding a sound to each pendulum. The amplitude of each pendulum is determined by its movement. I'm using fm synthesis to make the sounds. I just sort of played with the various values until I got something that I liked a little bit. Maybe you can do better if you play with the various values a little!

 <!-- Which is really all I'm going to ask you to do for today's assignment submission.  Play with these ideas and see if you can come up with some interesting output, visual, sonic, or both.  If you want to, watch the shiffman videos on the fourier transfrom.  Or, just take the pendulums and change the way they are colored, the sizes, the various forces operating on them.  Upload your experiments to githiub, make a screenshot, and post it in the gallery.  Most of all, I hope you've understood this way of organizing code using classes.  I'll leave you with a little more code to play with, that explore these ideas of oscillation.  -->

Before I get to today's assignment, I want to mention one more thing about periodicity and drawing and sound and the places where they intersect, which is a fascinating invention called the harmonograph, which draws, using several pendulums interacting with each other. So, a little bit like a pendulum with a pencil attached to it, and an LFO connected to it, causes the rythms and waves to subdivide in pleasing ways on two axes. The results are very interesting, particularly when the ratios of the oscillators are musical. Here are two versions, in code: [1](https://editor.p5js.org/socalledsound/sketches/hzLiRa-5_) and [2](https://editor.p5js.org/socalledsound/sketches/3yGgeN_3I). If you play with the various values, you can get some amazing output!

Whew....that was a lot. I hope you're still with me. For today's assingment, you don't have to master any of these techniques, or write any real code. What I want you to do is, think about the hero of the game that you're going to make for us. If games are, ultimately, processes that the creator has relinquished some control over, we need to give the player of the game agency, and we do that in the hero character, the subject of the game. We ask the player of the game to become someone or something else. A talking tree, a deer stuck inside GTA5, a little yellow man that pacs, a spaceship, a superhero, a middle-aged and somewhat paranoid artist.

So, you need to decide who the hero of your game is.

I want you to desribe this character for us, using, at the very least, a javascript object. If you can draw this character or have a photograp that descrbes them, great! Link to those files in your javascript object. Be specific, and give this character properties that describe them and also methods that let them do things. So, something like:

```

class Dorothy {

  constructor(friends){
    const {lion, tinman, scarecrow} = friends;
    this.name = 'Dorothy';
    this.home = 'Harlem';
    this.dog = new Dog('toto', [0,0,0]);
    this.friends = [lion, tinman, scarecrow];
    this.themeSong = songs.easeOnDownTheRoad;
    this.seeking = 'Wiz';
    this.route = 'yellow/brick/road';

  }


  befriend(){
    //she is so good at making friends!

  }

  sing(){
      this.themeSong.play();
  }

  dance(){
        calculateDanceMoves(this.friends);
  }

  laugh(){
 //need code here
  }

  cry(){
 //need code here
  }

  seekWiz(){
    //really hard to write this, need to think about it
  }



}


```

But, better! I just wrote that really fast, about Dorothy, from The Wiz. Spend some time on yours!

If you can actually write working code for your character and maybe even make them move....then do it! We'll all be super impressed!

Upload your code or pseduo code to github, and be sure to include a screenshot of your code, or some part of your code.

As an added bonus, you can make a website for your character! I know you know how, and it would probably help us understand your character and maybe be pretty cool, too.

Next class, we will start with our 'game'! And, particularly, think some more about what a Player is. Read the links! See you Tuesday.
