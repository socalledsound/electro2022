# Listening


![neuhuas listen](https://res.cloudinary.com/chris-kubick/image/upload/v1597029252/side-effects/max-neuhaus-listen-1_l5gaoq.jpg)

</br>
</br>
All right, let's build a sampler!  I put together a scaffolded beginning for you [here](https://github.com/socalledsound/sampler-starter);
</br>
</br>
There are a few audio files in a 'sounds' folder and there's a javascript library called [Howler.js](https://howlerjs.com/) in a folder called 'libs'.  Howler is my favorite way to include audio files on a web page.  It's not strictly necessary, but it makes the process a lot easier.

</br>
</br>
I've included it on our web page using a  script tag at the top of our index.html:

```
    <script src="libs/howler.js"></script>

```
If you open the page you should see a button, that you can click, and hear a sound.  

</br>
</br>

![sampler starter image](https://res.cloudinary.com/chris-kubick/image/upload/v1597350021/side-effects/Untitled_mcomhi.jpg)

</br>
</br>


If it's not working, check your speakers, and if it's still not working, holler at me.  We want to be sure everything is working before we start.  We're going to take what we did last time and build on it, to include user interaction and also output.  In other words....more side effects!

</br>
</br>

On the right side of that image you can see that we log out our sound, which is wrapped in an object called a Howl, that comes with the howler library.  When we want to add a sound, we pass a pathname into a new Howl, like this:

```
const sound0 = new Howl({ src: 'sounds/0.mp3' });
```
then we can play it, like this:

```
sound0.play();
```
You can see in the code below, I've re-written the playSound function.  Instead of specifying, inside my function, which sound I want to play, I've made my function more broadyly useful by taking in a sound as an argument, and then saying, play whatever sound comes in.  This is a super important thing to pay attention to and learn!  We want to be able to write flexible building blocks in our code, that we can re-use in different ways and in different contexts.

```
const playSound = (sound) => {
    sound.play();
}

```

So now, when I call my function, I specify the sound that I want to play between the parentheses, and it comes into the function as an argument called 'sound' and is played.  Look up in the div -- I pass 'sound0' into the function, and it gets played.  Let's make another div and another sound and have it play the other sound.  In your javascript add:

```
const sound1 = new Howl({ src: 'sounds/1.mp3' });

```
And in your html, just below the other div and inside the container add:

```
 <div class="button" onclick="playSound(sound1)"></div>

```
You should now have two buttons that each play a different sound!  Now go ahead and add two more buttons with two more sounds.  I'm going to grab a cup of coffee while you work.
</br>
</br>
Ok, you should have something that plays four different sounds and looks like this:
</br>
</br>

![simple sampler](https://res.cloudinary.com/chris-kubick/image/upload/v1597350788/side-effects/simople_sampler_dykqnd.jpg)
</br>
</br>
If for some reason yours isn't working, it's ok, I got your back.  Here's a working version: [code](https://github.com/socalledsound/sampler-starter/tree/simple-finished)
</br>
</br>
Now, I bet you can guess that I'm not loving the approach we've been taking so far.  There's a lot of repeated code here.  Also, what happens if we want to add say 16 different sounds.  And what if we want to make it so people can upload and choose their own sounds??  Let's try and do some of this stuff in javascript.  

</br>
</br>
You can download this code from [finished nicer sampler](https://github.com/socalledsound/sampler-starter/tree/fancier-sampler) and follow along in vs code if you want to; the syntax hifghlighting makes it a lot easier to read.
</br>
</br>

First off, let's delete all of our divs and all of our javascript except the playSound function.  Then, let's make an array of sounds:
</br>
</br>

![code 1](https://res.cloudinary.com/chris-kubick/image/upload/v1597353104/side-effects/sounds_array_yr7tdi.jpg)

</br>
</br>
Now, we're going to make an array of divs and add them to the container.  But, why don't we also bring in our random color function from before and give each one it's own color:
</br>
</br>

![code 2](https://res.cloudinary.com/chris-kubick/image/upload/v1597353104/side-effects/random_colors_zc8ve5.jpg)
</br>
</br>
Ok, now let's go through that same process we did last time.  We'll grab a reference to our container, make some divs using a makeDiv function, and finally, append them to the container:

</br>
</br>

![code 3](https://res.cloudinary.com/chris-kubick/image/upload/v1597353104/side-effects/divs_container_bhzlhp.jpg)

</br>
</br>
Now the last thing we need to do is add something called an event listener, which will listen for our click.  Event listeners can also listen for mouse movements, file uploads, microphone input, all kinds of things.  We're going to actually add three: one for the click, and two to handle the hover state, which, as before, will turn the background grey when the mouse is over it.  This kind of visual feedback is really helpful in orienting a user, and preparing to take action.

</br>
</br>

![code 4](https://res.cloudinary.com/chris-kubick/image/upload/v1597353104/side-effects/listeners_r25ha7.jpg)

</br>
</br>
And that's pretty much it!  If you want to add your own sounds, just make sure they are mp3 files with a name that is a sequential number starting with 4.  Copy the file into the sounds folder, and then update the number of sounds on line 54.  The could should give you more buttons to match the new number of sounds.  IN the next unit we'll come back to this and turn it into a looping sequencer.
</br>
</br>

One of the things that I hope you took away from our discussion today is that 'listening' isn't just done with the ears.  To me, it's more a state of mind, a receptivity that is quite different from looking.  We listen with our whole bodies, not just with our ears.

But how do we focus our listening?  What is that process by which our brain transfers attention from one thing to another, from one mode of listening to another?  

I'm not sure anyone knows.  

But, happily, as is so often the case, in javascript, there's a very clear answer to this question.  In javascript, we turn listening on and off by attaching an event listener.

We've already used these, when we established an 'onclick' handler over the last few classes.  When we do this, we are telling the target element to listen for a click.

But, clicks and mouse movements are just the tip of the iceberg; a web page can listen for all kinds of events.  You can see a full list [here](https://developer.mozilla.org/en-US/docs/Web/API/Event)



>>  Now here's a big challenge for you.  Pull these last two projects together, by using an image on each div, and triggering a sound when you click the image.  I know you can do it.  And if you get lost, you can always look at my version [here]()
