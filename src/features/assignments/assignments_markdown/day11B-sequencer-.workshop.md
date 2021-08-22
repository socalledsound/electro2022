#  an animated looping sequencer

A few classes ag, we built a little sample player with buttons.  I'm a big fan of samplers and and sequencers, I love sampled sounds.  I used to work in Hollywood as a sound designer and as a result I have a huge library of sounds, almost every conceivable sound, actually.  Thanks to Hollywood's collective efforts, it sometimes feels like everything that could be recorded already has.  Which of course isn't true, there are always new discoveries to make, as Chris Watson previously in the course.  But I bet I've never listened to more than 10% of it, and I've had a lot of the sounds for nearly twenty years and worked daily with those sounds for nearly ten years.  I've got so much material there that I rarely make new recordings.  

Instead, I lke to manipulate samples.  I mostly use [SuperCollider](), a programming language designed specifically for working with audio.  Like p5, it has a massive built in library that allows you to do pretty much anything you could want to do with sounds.  It's a bit beyond the scope of this course -- most of the things you might want to do there can also be done in javascript -- but if you're interested, check the resources section of the site, I have a whole section on supercollider resources, and I'd be happy to work with any of you in Supercollider.  It was my first programming language and honestly it's still my favorite.

But I also love javascript and, happily, thanks to the web audio API, browsers can handle samples very capably.  Today, we're going to use Howler.js, which has some very straightforward bindings for the web audio API, to make a looping step sequencer.  We'll use p5.js to help us draw the interface.  It's going to look something like this:

[gif of simple sequencer]()

And here's the working [demo]().

I've set up a [starter project]() for you.  It has p5, and the same four samples we used for our previous simple sampler.


Let's start, same as before, by bringing our sounds into an array.  The only difference this time is, this time we'll use p5 to load the sounds.  We could of course use Howler again, but p5 is also pretty good and 

Now let's make a loop just to test out our sounds.  We'll use the browser's setInterval() method to play a sound chosen at random from the array at, you guessed it, set intervals.



