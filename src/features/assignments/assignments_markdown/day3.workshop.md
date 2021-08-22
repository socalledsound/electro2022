#  painting with css 2

Today we're going to continue painting with css in codepen, and add some more complicated shapes.  We'll make an ice cream cone, like this one: </br>

![ice cream cone](https://res.cloudinary.com/chris-kubick/image/upload/v1596828849/side-effects/ice-cream-grassig_w5yuqy.png)
</br>
</br>
<!-- We'll do it first using just css and then we'll look at some other ways we could do the same thing, using something a vector graphic format called SVG.
</br>
</br> -->
Let's start by just looking: what shapes are we going to need here?  There's a little bit of fuss around the edges but I think it's pretty easy to see that we basically need a triangle and three circles, right?  
</br>
</br>
This is one of the most important things to learn in coding, this idea of breaking things down into components.  We'll return to this idea again and again!  If you want to build a web page, or any kind of software, you don't just build it, you first break it down, into manageable bits, and then you figure out how to put them together.
</br>
</br>
Open up a new pen.  Let's start with a couple of nested divs.  We'll give one a class of 'canvas', inside of that we'll make a wrapper for our ice cream cone, and then inside that we'll put a 'cone':

```
<div class="canvas">
    <div class="container>
        <div class="cone"></div>
    </div>
</div>

```

Now, some css.  We'll give the canvas a background color and size and position the cone at the bottom.  We're going to play with the border of this div.  First, just give it a position and a border to make sure everything is working:


```

.canvas {
    background-color: #ebb1fc;
    width: 100vw;
    height: 100vh;

}

.container {
 
  position: relative;
  margin: auto;
  display: block;
  margin-top: 5%;
  width: 600px;
  height: 600px;
}


.cone {
    width: 100px;
    height: 100px;
    border: 10px solid red;   
  position: absolute;
  left: 35%;
  bottom: 5%;
}

```

You should see a square with a red border near the bottom of your screen.  Now let's play with that border, by specifying different colors and sizes for each border, and getting rid iof the height and width of the underlying element entirely:

```
.cone {
    width: 0;
    height: 0;
    border-top: 250px solid brown; 
    border-left: 85px solid red;
    border-right: 85px solid orange;
    border-bottom: 25px solid blue;
    position: absolute;
    left: 35%;
    bottom: 5%;
}


```


Your screen should look like this:
</br>
</br>

![screenshot of traingle-y shape](https://res.cloudinary.com/chris-kubick/image/upload/v1596830339/side-effects/Untitled_hjkrqv.jpg)

</br>
</br>
Huh?  What happened is, we specified different sizes and colors for each of the sides of the box, and took away the inner dimension.  So, the web browser is trying to make it all make sense, and this is the result...four triangles.  But we only need one for our cone, right?  try this:

```
.cone {
    width: 0;
    height: 0;
    border-top: 250px solid brown; 
    border-left: 85px solid transparent;
    border-right: 85px solid transparent;
    position: absolute;
    left: 35%;
    bottom: 5%;
}

```

</br>
</br>

Your screen should look like this:
</br>
</br>

![screenshot of cone](https://res.cloudinary.com/chris-kubick/image/upload/v1596830687/side-effects/cone-use_gmtufb.jpg)

</br>
</br>
All right, on to the scoops!
</br>
</br>
Let's start by using a new css trick: css variables.


>  a variable is a very important concept in math and in programming.  Basically, it's a labeled box that lets you put things in it.  Like x=1.  In css we can store things like color values in variables. 

</br>
</br>

We'll start by making a :root pseudoclass, which will let us have access to the variables all across the document.  In there we'll specify three colors, one for each scoop.
</br>
</br>

```
:root {
  --scoop1-color: #ee786e;
  --scoop2-color: #ececa1;
  --scoop3-color: pink;
}


```
</br>
</br>


Then, we can use these variables in the scoops and in their accomponying droplets.  We'll start with the scoops:

```
  .pink-scoop {
    width: 180px;
    height: 160px;
    position: absolute;
    border-radius: 50%;
    background-color: var(--pinkish);
    left: 33.5%;
    bottom: 65%;
    z-index: 3;
    
  }


  .yellow-scoop {

    background-color: var(--yellowish);
    left: 32%;
    bottom: 50%;
    width: 180px;
    height: 160px;
    position: absolute;
    border-radius: 50%;
    z-index: 2;
  }

 
  .reddish-scoop{

    background-color: var(--reddish);
    left: 34%;
    bottom: 35%;
    z-index: 1;
    width: 180px;
    height: 160px;
    position: absolute;
    border-radius: 50%;
  }


```

and now your screen should look like this:

![codepen scoops ](https://res.cloudinary.com/chris-kubick/image/upload/v1596866903/side-effects/scoops_dum1b7.jpg)

</br>
</br>
There's a little bit going on here but most of it should look familiar by now.  Just like last class, we are giving some divs some height and width and positioning them using absolute positioning.  Those percentages tell the browser to put them that percentage from the left, or bottom.  Since they are inside the element 'container', those percentages are measured from the edges of that container.  
</br>
</br>
But why are they round?  Can you see what we're doing differently?  Much like the triangle before, it has to do with the border.  In this case, it's 'border-radius', which we are setting at 50%, and since the box we made was wider than it is tall, we get an ellipse. 
</br>
</br>

This border-radius property is super useful, not just for making ellipses and circles, but for giving a little round edge to the rectangles that hold your content.  If you look at this site for instance, you can see it all over the place in various slightly rounded boxes, those rounded edges are just a little more friendly than hard boxes, I think.  You can read more about the various ways to tweak your border-radius here: [border radius at mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)

</br>
</br>
<div>&#97278</div>

</br>
</br>
Ok, we're almost there.  In our original drawing, you could see that the shapes were a little more organic.  To get that look we're going to add some more circles, together with the big one, they'll start to look gloppy.  This will be just a big bunch of code, which will get pretty repetitive, but let's just look at the css for one pink gloop first :

```
.pink-scoop-gloop1{
    width: 60px;
    height: 45px;
    background-color: var(--pinkish);
    border-radius: 50%;
    position: absolute;
    left: 53%;
    bottom: 67%;
    z-index: 3;
  }


```
</br>
</br>
If you add a div with a class of pink-scoop-gloop1, you should get a gloopy little edge.  And we can add more:

```


  .pink-scoop-gloop2 {
     background-color: var(--pinkish);
    width: 40px;
    height: 120px;;
    position: absolute;
    left: 55%;
    bottom: 63%;
    z-index: 3;
    border-radius: 50%;
  }
 .pink-scoop-gloop3 {
   background-color: var(--pinkish);
    width: 70px;
    height: 45px;
    border-radius: 50%;
    position: absolute;
    left: 33%;
    bottom: 66%;
    z-index: 3;
  }
  .pink-scoop-gloop4 {
    background-color: var(--pinkish);
    width: 20px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    left: 53.5%;
    bottom: 64.5%;
    z-index: 3;
  
}

```
![ pink gloops](https://res.cloudinary.com/chris-kubick/image/upload/v1596866903/side-effects/pink-gloops_v24bnb.jpg)

All right, I think you know what you have to do.  See if you can add some yellow and red gloops, using what you have here.  Move them around slightly to make it look more natural.  Or -- make them look super unnnatural if you feel like it, give them other colors.  The point is, get familiar with laying things out on a page.  Even though we're not doing anything terribly practical here, I think that learning how to space things out like this on a web page will serve you incredibly well when it comes to making more practical things!  

</br>
</br>
Oh, before I leave you to it, one more thing.  Notice the property z-index, and how it's different for each of the different colors?  That controls which element is on top of the others.  If you think of a three dimensional geometry, the z axis is the front to back one.  We'll come back to z axes, obviously, when we get into things like VR, AR, 3d graphics.  But for now, just know that you should probably give your gloops the same z-axis as the 'flavor' or color that they are a part of.

</br>
</br>
I'll leave you to it and come back with my finished code slightly below.  Don't peek!  Unless you get bored.

</br>
</br>

Ok, I hope that was kind of fun and I hope you learned a thing or two.  Here's my finished codepen:
</br>
</br>

[finished ice cream cone](https://codepen.io/Fleischut/pen/GRZgYzV)

</br>
</br>
I do want to say, one thing that really bugs me about this code, and about css in general is, repetition.  In coding, we generally want to try and abide by a principle called DRY: Don't Repeat Yourself.  Any time you see repeated code, you should be seeing an opportunity to somehow make the computer do that repeating for you.  My approach is usually to do that repeating using javascript, which we'll start getting into next week. 
</br>
</br>
Another tool that can help you manage mountains of css is to use a css preprocessor like sass or scss or less.  In making this tutorial, I've been borrowing from a github repo that I found when I searched for css ice cream cones; I knew I wanted to do a thing with ice cream cones because they seem so natural for understanding this idea of breaking an image down into parts but I didn't want to have to do all the work myself.  The code I found was in sass (and in spanish too!), but I liked the image so I ported it over to vanilla css for you.  You can see the original sass here:

 [ice cream cone in sass](https://github.com/lauragrassig/ice-cream-project/blob/master/src/scss/main.scss)


One thing that's really nice about Sass and its ilk is, it helps with organization and it cuts down on some repetition.  We don't really have time to get into these tools in this course, but let me know if you're interested and I'll point you in the direction of some good materials.

</br>
</br>

>  Now that we've done some work together, I want you to do some work on your own.  Find an image or a thing in your reality -- it doesn't have to be that complicated! -- and draw it by combining simple shapes and colors, in css and html, like we did here.  Submit it at the link below.

 <!-- <div>&#9774</div>  
 -->







