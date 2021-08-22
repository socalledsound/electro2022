## meme

![i r dune cat](https://res.cloudinary.com/chris-kubick/image/upload/c_scale,w_640/v1596959762/side-effects/irdune_cvypcv.jpg)

<!-- ![used to haz cheezburger](https://res.cloudinary.com/chris-kubick/image/upload/v1596758242/side-effects/used-to-has-chz_bnsi05.jpg) -->


</br>
</br>
We all know the internet was basically invented for cats, and I'm guessing you all have a pretty funny cat video you could share with us.  Actually, do that, please, in the discssion, please post your favorite cat picture, video, meme, whatever: I made a channel for that topic, named catz.
</br>
</br>
Back in the mid aughts(c. 2005), Lolcats were everywhere.  The meme was apparently born on 4chan but the virus spread like a wildfire and for a while they were inescapable.  Their domination was so complete that they became a uniquitous reference, just like rainbow unicorns or doge.  At one point, someone even wrote a computer language in lolcat, which is actually really funny if you know a bit of code: [lolcat@wikipedia](https://en.wikipedia.org/wiki/LOLCODE)
</br>
</br>

The lolcat meme also, as far as I know, marks the birth of something called the image macro, which you surely know, if not by name: that thing where there's an image with some text over top of it, usually in the impact font, white text with a black border.
</br>


![image macro, keanu](https://res.cloudinary.com/chris-kubick/image/upload/v1596773243/side-effects/keanu_soaerl.jpg)
</br>
</br>
There are tools for making these image macros, like [meme generator](https://imgflip.com/memegenerator).
</br>
</br>
But we're going to do it with plain old with html and css, because it will give us a chance to explore images and text.  I made one here, using one of this year's hottest meme photos:  

</br>
</br>

![banking meme](https://res.cloudinary.com/chris-kubick/image/upload/v1596923288/side-effects/my-meme_ec9z5g.jpg)

</br>
</br>
My daughter doesn't get it but, that's ok with me, I view the bankers as the biggest part of the problems we're facing and, actually, the fact that no one understands the relationship between rates, inflation and oppression, as the main reason our society is dying.  But, I digress.
</br>
</br>
Let's start by putting an image on a page.  We can do that in a few ways.  One way is to use an image tag that references an image file, stored either locally, or at a url:

```
<img src="myFile.jpg" width="640" height="480">
<im src="https://www.fileUrl.com" width="200" height="200">

```

The width and height are optional, but one benefit of specifying the size in the html is, the browser knows how big the image will be before it starts loading the page.  
</br>
</br>
Another way tried and true way to size your images is to wrap them in a div, like at this sketch:
</br>
</br>
[lolcat starter](https://codepen.io/Fleischut/pen/bGpdyoy)
</br>
</br>
Notice how I'm setting the image size to 100% of the div that wraps it, and then sizing the div.
</br>
</br>
My image is hosted hosted at Cloudinary, a service that I really like which has a very generous free tier, because we can't host files on codepen with a free account.  In a bit, I'll take you through the process of hosting your own images there, but for now I'd like you to just fork my codepen to your own account.
</br>
</br>
![fork image here](https://res.cloudinary.com/chris-kubick/image/upload/v1597080794/side-effects/fork-codepen_hqoteo.jpg)

</br>
</br>

Now let's add some text.  You can come up with your own pithy phrase and translate it into lolspeak [here](https://speaklolcat.com/).


</br>
</br>
Add an h2 element to your div and paste your translated text into the h2.

```

 <h2>U SAY R FUCHUR DEPENDZ ON TEH POSTAL SERVICE?</h2>

``` 
Now we're going to give that h2 absolute positioning in relation to the div that encloses it, so we'll add position: relative tp the div and style the h2 like below: 

```
.wrapper {
  width: 750px;
  height: 600px;
  display: inline-block;
  position: relative;
}

.wrapper img {
  width: 100%;
  height: 100%;
}


h2 {

  position: absolute;
  left: 5%;
  bottom: 1%;

}

```

An important thing to notice here is that the h2 will be positioned inside body of the document (1% from the bottom of the page vs 1% from the bottom of the image) unless you give the div the position: relative property.

</br>
</br>
Ok, now let's style that text.  We'll start by finding a font that's similar to the Impact font that image macros are supposed to use.  Anton is a pretty good one that's free and open.  You can get it from [fonts.google.com](https://fonts.google.com/).  Search for Anton and navigate to embed.  We're looking for two little bits of code.  One will look like this:

```
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">


```

If you can't find it at google, just copy it from above.  Go to codepen and open 'settings', then html:  We want to paste it in to the head, like I did here:

</br>
</br>
![image of html settings in codepen](https://res.cloudinary.com/chris-kubick/image/upload/v1599412915/side-effects/codepen.io_Fleischut_pen_bGpdyoy_rbqmjd.png)

</br>
</br>
Now, we need to specify the font in our css.  We can use the font-family property:

```

font-family: 'Anton', sans-serif;

```

</br>
</br>
Now, where we put this will depend on how much of our page/site we want to be in that font.  we can do something like 

```
* {
    font-family: 'Anton', sans-serif;
}

```

if we want that font for our whole page/site, or we can target a specific element like this: 

```

h2 {
    font-family: 'Anton', sans-serif;
}

```
we'll go with the latter, and we'll also add some white color, change the size, and add the black border on the text.  To add the border, we'll need to use the webkit prefix.

```
h2 {
  font-size: 70px;
  position: absolute;
  left: 5%;
  bottom: 1%;
  color: white;
  width: 100%;
    -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

```

And that's pretty much that.  Some of these image macros have two (or more) chunks of text....but the process is pretty much the same.  One thing is bugging me, though.  The cat has a lot of white hair, and our text is white.  Maybe we should make our image darker.  We could of course do this in photoshop or gimp (see the class resources to download gimp!) but we don't need to, we can do it right in the css, which has a whole suite of filters.  See today's links for a complete list.  I've just taken the brightness down a bit.  Here's the finished css:

```
.wrapper {
  border: solid 2px red;
  width: 750px;
  height: 600px;
  display: inline-block;
  position: relative;
}

.wrapper img {
  width: 100%;
  height: 100%;
  filter: brightness(0.7);
}


h2 {
  font-size: 70px;
  position: absolute;
  left: 5%;
  bottom: 1%;
  color: white;
  width: 100%;
    -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}


```

And you can see all of my code at this link: [my lolcat](https://codepen.io/Fleischut/pen/LYNVjqx)

</br>
</br>



You can find the code for my image macro at this link:  [please stop, bankers](https://codepen.io/Fleischut/pen/LYNEojd)

</br>
</br>
But, of course, as we saw earlier today in class, we can do more than just make memes with text and images.  Although instagram (and a whole lot of other people) stole her font, I think what Barbara Kruger made with that font, the way she paired image and text, is just tremendously more thoughtful than what most people do.  Let's remember, we're not here to just learn these tools, we're here to make art.  So, please, as you make this assignment, try to use these techniques to probe a little deeper than the average meme, to take some kind of personal risk and to share your vision with us.  It doesn't have to be amazing or earth shatering, just do you.  
</br>
</br>
Uploading images to cloudinary is super easy and the interface is pretty intuitive.  First make an account, then from your main dashboard click 'media library'.  Add a new folder for organization, then on the left side, click upload.  There's a ton you can do with cloudinary in terms of resizing and applying images and also working with APIs to automate all kinds of tasks, but I'll let you discover that stuff on your own.  Hit me up in the discussion if you have any issues or questions.
</br>
</br>
![cloudinary interface](https://res.cloudinary.com/chris-kubick/image/upload/v1597081695/side-effects/cloudinary_n7r4jb.png)

</br>
</br>
Here's me, doing me:  [my text image thing at codepen](https://codepen.io/Fleischut/pen/LYNEojd)
</br>
</br>
Now, get to work!  And have fun.

</br>
</br>


> ok now it's your turn.  take an image (it can be one you shot yourself or one you found) that strikes a chord, and add some text to that image.  it doesn't have to be meme-y, in fact, i'd appreciate it if you made something that feels like art, to you!  that takes a risk.  think about all of the art we've looked at today, from dada to conceptualism, and get out there and have some fun.  submit it at the link below.



<!-- 


Above is a representative of one of the classic memes of the aughts, the can haz cheezburger cats.  At one time, they were kind of like the  ??????? of the internet, completely pointless and inane but somehow also endearing and pretty hard to unsee.
 -->

<!-- ![duchanp w cat](https://res.cloudinary.com/chris-kubick/image/upload/v1596758235/side-effects/Duchamp-lhooq-cat_yoiofc.jpg) -->