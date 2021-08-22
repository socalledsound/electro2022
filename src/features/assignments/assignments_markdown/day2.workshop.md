# painting with css 1

Today we're going to copy a couple of abstract paintings that we talked about in class and learn a little about how to lay out a web page in the process. </br>

<!-- </br> -->
<!-- <img src="https://res.cloudinary.com/chris-kubick/image/upload/v1596610606/side-effects/bridget_riley_blaze_1_1962_emulsion_on_hardboard_43x43_uffguh.jpg" alt="drawing" width="200"/>
<img src="https://res.cloudinary.com/chris-kubick/image/upload/v1596611381/side-effects/vasarely_wajaeb.jpg" alt= "vasarely" width="200"/> -->

![albers many](https://res.cloudinary.com/chris-kubick/image/upload/c_scale,w_348/v1596660749/side-effects/albers-many-boxes_nztt6v.jpg)
</br>
</br>

We'll start with Josef Albers, and his box paintings, which he made to illustrate and explore the fluidity of color.

> Color is like cooking. The cook puts in more or less salt, that’s the difference! If one says ‘Red’ – the name of color – and there are fifty people listening, it can be expected that there will be fifty reds in their minds. And one can be sure that all these reds will be very different. --Josef Albers

</br>
For our first little project we're going to make something like this: </br>

![josef albers box painting](https://res.cloudinary.com/chris-kubick/image/upload/v1596653631/side-effects/albers-square_qfrsfw.jpg)

A few years ago a student in this class made a Josef Albers twitter bot, which created images like this and posted them to twitter. You could take a picture, upload it to his app and it would analyze the colors in the photo and generate a Josef Albers box painting from those colors. A very cool litle AI but sadly it's no longer online. By the end of this semester you will hopefully be able to make something just as cool! Today, we're going to start with the basics.

</br>

</br>

## hello world

Go to [codepen.io](https://codepen.io/). On the left, click 'pen' to start a new pen and then the icon with a pencil in the top left to rename your project. You might have to create an account or sign in to name/save your project.

![codepen comp](https://res.cloudinary.com/chris-kubick/image/upload/v1596133847/side-effects/codepen-comp_gkoclv.png)

You should see a big panel, which represents the browser window, and then three smaller panels for code: one each for html, css, and javascript.

![empty pen](https://res.cloudinary.com/chris-kubick/image/upload/v1596133981/side-effects/empty_pen_peegdy.jpg)

You can click the change view button to change where the panels are located and also resize the different windows as you like.

Let's start by adding a div with a class name of canvas in our html panel, like this:

```
<div class="canvas"> hello world </div>
```

You should see **hello world** in your browser: nice! this is the html version of the classic 'hello world' program, which is basically a little test to make sure you can effectively get a _side effect_ -- in other words, some output -- from your program.  
</br>
</br>

we can add a style for our "canvas" class in the css panel:

```
      .canvas {
        font-size: 80px;
        color: blue;
        background-color: linen;
        width: 100vw;
        height: 100vh;

     }

```

I've given our canvas a font-size of 80 pixels. The color of the text is blue, the background color of the div is linen, and the width and height are 100 percent of the viewport width and height.

your codepen page and editor should look like this: </br>

![codepen:](https://res.cloudinary.com/chris-kubick/image/upload/c_scale,w_837/v1596655403/side-effects/hello-world-canvas_weyaet.jpg)

we're **targeting** the the canvas tag in our div using css. whatever styles we write between those curly braces after .canvas will be applied to our div and everything in it. go ahead and play with it a bit -- try typing a different color name in place of blue.  
</br>
Or, why don't we pick a more specific blue? we'll use a hex color, because we just learned about those and they're cool.  
</br>
</br>

> You can experiment with the colors, remembering that the first two digits are the 'red' value, the second two are the 'green' portion and the last two are the 'blue', and 16 digit scale goes from 0 to F: 01233456789ABCDEF. So #FF0000 is full on red with no green or blue.

</br>
Or just go to [htmlcolorcodes](https://htmlcolorcodes.com/) and find a nice blue.  I'm going to use #33C5FF.

```
      .canvas {
        font-size: 80px;
        color: #33C5FF;
        background-color: linen;
        width: 100vw;
        height: 100vh;

     }

```

# painting with css

OK, let's delete the 'hello world from our div and put two colored boxes 'inside' that 'canvas', with classes of 'inner-box' and 'central-box' .
</br>
</br>
Your html should look like this:

```
  <div class="canvas">
        <div class="inner-box">
            <div class="central-box"></div>
        </div>
    </div>
```

Note that the tabs and spacing don't matter that much to the computer, but follow my lead and try to stay organized! The biggest source of problems with html is with the closing part of the tag. If you keep your tabs aligned, it's a LOT easier to see where the problem is if you're not getting the output you want.  
</br>
</br>
Now let's style those boxes and the canvas to look like the painting above:

```

.canvas {
  background-color: #FFD77D;
  width: 800px;
  height: 800px;
}

.inner-box {
  background-color: #fff538;
  width: 450px;
  height: 500px;
  position: absolute;
  top: 250px;
  left: 175px;
}

.central-box {
  background-color: #ffeec4;
  width: 300px;
  height: 300px;
  position: absolute;
  left: 75px;
  top: 150px;


}


```

Here's what your codepen should look like now:

![codepen:](https://res.cloudinary.com/chris-kubick/image/upload/c_scale,w_681/v1596658301/side-effects/albers-box-finished-use_uwqovu.jpg)

The colors and proportions aren't perfect, but they're close. If yours looks a little different, notice that I changed the style for the canvas tag, to give it a new color and a specific dimension, rather than one based off the browser window size. To position the inner boxes, I'm specifying 'position: absolute' and then giving each of them a left and top offset, which is measured from the top left corner of the parent div.  
</br>
</br>
Play with the colors and positioning. I find these boxes to be an amazing way to see the relationships between colors. If you change one color in the composition, all of the colors change.
</br>
</br>
And that's it! An Albers painting! But, while I've got you here, let's explore positioning a little bit more. Because this Albers painting really reminds me of one of the most important things to know in CSS, which is the box model.</br>

![box model](https://res.cloudinary.com/chris-kubick/image/upload/v1596658176/side-effects/css-box-model-use_kz9kib.png)

## exploring the box model

We positioned our boxes using absolute positioning, but there's another alternative, which is to use the box model. Fork your codepen, or just make a new pen, and put this css in place of what was there before:

```
.canvas {
  background-color: #FFD77D;
  width: 800px;
  height: 800px;
  position: absolute;
}

.inner-box {
  background-color: #fff538;
  width: 450px;
  height: 500px;
  margin-top: 250px;
  margin-left: 175px;
}

.central-box {
  background-color: #ffeec4;
  width: 300px;
  height: 300px;
  margin-left: 75px;
  margin-top: 150px;
  display: inline-block;

}
```

Here, we're using the margin property instead of specifying an offset. The margin is the area outside of a given element and is measured from the boundary of its parent, as you can see from the diagram above. One note: we have to set the display of our central box to inline-block, instead of the default div display type of block, to stop our top margin from collapsing with its parent. You can read a bit more about this here if you're interested:
[collapsing margins](https://medium.com/@joseph0crick/margin-collapse-in-css-what-why-and-how-328c10e37ca0)
</br>
</br>
Now let's try this with padding instead. We'll keep the margin that is offsetting the bigger box from the canvas and delete the margin properties from its child, the central box, and position the central box by using a padding property on the bigger inner box.

```
.inner-box {
  background-color: #fff538;
  width: 450px;
  height: 500px;
  margin-top: 250px;
  margin-left: 175px;
  padding-left: 75px;
  padding-top: 150px;

}

.central-box {
  background-color: #ffeec4;
  width: 300px;
  height: 300px;

}

```

check out your code in the browser: IT'S BROKEN. Because the padding is now making the enclosing inner box bigger, by the padding amount! So, let's subtract those padding values from the width and height like so:

```
.inner-box {
  background-color: #fff538;
  width: 375px;
  height: 350px;
  margin-top: 250px;
  margin-left: 175px;
  padding-left: 75px;
  padding-top: 150px;

}

.central-box {
  background-color: #ffeec4;
  width: 300px;
  height: 300px;

}


```

and we're good to go!

## stripes

Ok, now it's your turn to do some work on your own. I've started a painting for you, at this codepen:

[codepen reilly starter](https://codepen.io/Fleischut/pen/VweJyrR)
</br>
</br>
fork it to your own account and add more html to make it look (somewhat) like this painting:
</br>
</br>

![rose rose](https://res.cloudinary.com/chris-kubick/image/upload/v1596610463/side-effects/roserose-horizontal_j4vf83.jpg)
</br>
</br>

Good luck! When you're done with that, try changing the width of your 'stripe' class, like this:

```
.stripe {
    height: 50px;
    width: 50px;
}
```

You see how those divs still stay one on top of each other?

</br>
</br>
Now add a 'display: inline-block' to it - see how they 'float' up?
</br>
</br>
The 'display' property is a very important part of css.  By default, divs are 'block-level', which means that they occupy the whole width of the apge by default.  We actually saw that in action with our stripes: they were 100% of the width, before we assigned a width!  But even after we assign a width, the page layout considers them to be 100% wide, unless we re-categorize them as 'inline', or 'inline-block'.  But if we specify just 'inline' they will not have any height unless they have some content, even if we specify the height!  Just one of the slightly weird aspects of css, don't worry, there are lots of them.
</br>
</br>

</br>
</br>

> Ok, now it's time to play! Make your own painting, with colored boxes. Play, do whatever you want! Then, submit your work at the link below. Be sure to make a screen shot, and upload it along with a title, description and a link to your work at codepen. Still haven't had enough painting in css? Check out this paint your own mondrian project that google put together: [mondrian in css](https://googlecreativelab.github.io/coder-projects/projects/mondrian/). It gets a little more deeply into this idea of the flow layout, and you can build it in codepen or on a raspberry pi, using their 'code' project.

</br>
</br>
