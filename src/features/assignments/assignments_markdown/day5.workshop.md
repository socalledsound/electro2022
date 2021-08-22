# jeremey bearimy

![jeremy bearimy](https://res.cloudinary.com/chris-kubick/image/upload/v1596754483/side-effects/jeremy-bearimy_ol3r8h.png) 
</br>

When my daughter was about 2, a friend sent us some pictures.  When she came across them, she knew all about phones and other touchscreens but hadn't ever seen one of these so, naturally, she swiped her finger across it.  And then swiped it again several times before looking at me, exasperated.
</br>
</br>
"It's broken," she said, with concern.
</br>
</br>
That really spoke to me and I haven't ever forgotten it.  To me it says so much about our world, and the interfaces that we have come to expect.  But it also speaks volumes about the contemporary meaning of photography.  Photographs are not singular events -- one leads to another, and those photographs are deeply informed by their context.  Today's photographs are, by default, links: you click on them or swipe them and you expect something to happen.  
</br>
</br>

![swipe](https://res.cloudinary.com/chris-kubick/image/upload/v1597082347/side-effects/swipe-left_oaufrc.jpg)

</br>
</br>

Today, we're going to use javascript to make the simplest of single page apps, one which creates a garden of forking paths (as in the famous [story](http://www.coldbacon.com/writing/borges-garden.html) by Borges) through a collection of images.
</br>
</br>
But first, it seems like a good moment to  learn how to use links in hypertexts.  Because, that's essentially what we're talking about here.  This idea of a hyper-linked text, natural as it is to us today, was a pretty revolutionary idea in its day.  Just like the swipe-able image alters what an image is, the clickable text completely transforms the nature of reading and writing.  If a writer could ever hope to pretend that a reader would read a book as an ordered sequence of words, the hypertext upends all that.  When I was a kid, the closest we got to this idea was those corny choose-your-own-adventure books that you've seen in memes.  But with the interent, the hypertext became the norm and clicks became valuable.  Which leads to all sorts of new fun.
</br>
</br>

 [click this link please](https://www.youtube.com/watch?time_continue=21&v=5uZr3JWYdy8&feature=emb_title). 
 
 </br>
</br>
  Sorry, couldn't resist!

</br>
</br>
Behind the scenes, a link on a web page is created using an anchor tag, socalled because originally links didn't lead to content dispersed across the internetz, they led to another part of a document; the anchor tag had a reference to an 'anchor' which would pull the reader to that new location.  An anchor tag looks like this:
</br>

![anchor tag](https://res.cloudinary.com/chris-kubick/image/upload/v1596994464/side-effects/anchor_lrygnv.jpg)
</br>

They're similar to image tags, except they point to a url, rather than an image file.  (But in our case, we're using images that are hosted at a URL so, they're basically the same thing!)
</br>
</br>
One place we can use these tags is in a navigation menu.  Let's say we want to set up a basic nav bar for a portfolio site.  We'll have a home page, an about page and a page for unicorns.  We can make a group of anchor tags, like this, and include it at the top of each page, so people can easily navigate around the site: 

```
    <nav>

        <a href="index.html">home</a>
        <a href="about.html">about</a>
        <a href="unicorns.html">unicorns</a>
    
    </nav>

```

But let's not just talk about it, let's actually set this up.  Open up vs code.  We've graduated beyond codepen here, which is mostly for quick little sketches.  

</br>
</br>
I've made you a starter file, you can download it from github:
</br>
</br>
[starter](https://github.com/socalledsound/jeremy-bearimy-starter/tree/master)
</br>
</br>
By convention, the home pages of web sites are named'index' and the .html file tells the browser (and vs code) that this is an html file.
</br>
</br>
Now, we are going to get some html boilerplate on this page.  Type an '!' and immediately hit return/enter.  Your page should magically look like this:
</br>
</br>
![html boilerplate]()
</br>
</br>
Cool, huh?  This is courtesy of a very useful extension that's built in to vs code, called emmet.  It can do amazing html things.  I've put a link to an emmet cheat sheet in today's links.  I'm going to use it a lot when we write html code together.
</br>
</br>

Hit tab twice and give your page a title. Like 'rainbow's end'.

</br>
</br>

Everything you're seeing right now was hidden by codepen.  It was there, underneath, but they abstract it away.  So, before, when we were typing html we were typing between the body tags.  Let's add some stuff in there now.  Between the body tags, insert an h1 that says something, and below that, an `<img />` with a path to an image in your img/ folder.  like this:


```
<body>
    <h2>kitty!</h2>
     <img src="img-sq/0.jpeg" alt="an image of a kitten">
</body>
```
</br>
</br>
Let's also style the image a little.  We don't have our handy little css panel any more, now we can put our styles in a seperate file or if we don't have too many, we can put them in a style tag, just above the title:

```
    <style>
        img {
            width: 60%;
            margin-left: 20%;
            margin-top: 10%;
        }
    </style>

```


</br>
</br>

Now, befre we can see our image in a browser, we've got one more little setup step, which is to enable a vs code extension named live server.  Click on the extensions pane in vs code: 
</br>
</br>

![vs code extensions pane](https://res.cloudinary.com/chris-kubick/image/upload/v1599416841/side-effects/extensions_vyhot6.jpg)

</br>
</br>

search for an extension named live server in the search pane at the top and click the little green button that says 'install'. You may need to restart vs code before you can use it, save everything you have and do so.  When you open vs code again, you should be able to use live server by option clicking on the file you want to open and selecting live server.  Your page should load in your default web browser and if all went well you should see your message, and an image.  I'm going to go grab a cup of coffee while you make sure your whole thing is working the way it should.  If it isn't, let me know and I'll help you sort it out.
</br>
</br>
All right I think we're all back and ready to get started moving through the garden of forking paths.  What was that we were saying about a nav bar?  Oh yeah, let's make one.  Remember, our code looks like this: 

```
    <nav>

        <a href="index.html">kitty1</a>
        <a href="pageTwo.html">kitty2</a>
        <a href="pageThree.html">kitty3</a>
    
    </nav>

```

Copy and paste that code above into the top of the body of your html document, like this:

</br>
</br>

![nav in body in vs code](https://res.cloudinary.com/chris-kubick/image/upload/v1599416918/side-effects/nav-html_iccfe8.jpg)

</br>
</br>
In your web browser it should look like this:

</br>
</br>

![nav in chrome ](https://res.cloudinary.com/chris-kubick/image/upload/v1599416843/side-effects/withnav_lur5ht.jpg)

</br>
</br>
In other words, not too good, if it's not 1997.  Let's fix that.  Go to this [link](https://cdnjs.com/libraries/semantic-ui) and copy the link for the semantic ui css library, or just grab it from below:

```
https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

```

</br>
</br>
Now, in vs code we're going to add a link to this stylesheet.  Like this:



</br>
</br>
In vs code you can just type 'link' and then immediately return, up there in the 'head' section which is where we put links to stylesheets and other non-displaying code.  It should look like this: 
</br>
</br>
[semantic ui](https://res.cloudinary.com/chris-kubick/image/upload/v1599417042/side-effects/with-semantic-ui_ybmdze.jpg)

</br>
</br>
Now let's add some classes to our nav bar, like this:

```

    <nav class="ui three item menu">

        <a class="item" href="index.html">kitty1</a>
        <a class="item" href="pageTwo.html">kitty2</a>
        <a class="item" href="pageThree.html">kitty3</a>
    
    </nav>


```

And just like that, our navbar looks fairly modern.  
</br>
</br>

[styled nav bar](https://res.cloudinary.com/chris-kubick/image/upload/v1599418256/side-effects/styled-nav_shefle.jpg)
</br>
</br>
Semantic UI is a css library, among many.  I like it because it's, well, semantic.  Want to add more items to your menu, ok, just add them and change the three to however many items you add.  I used some semantic ui styles on this site, actually, some buttons and the comment styles.
</br>
</br>
There are other libraries and you can feel free to explore those if you wish.  I've put an article that compares the top contenders in today's links if you're interested.
</br>
</br>
Now, we just have to make some more pages, which is basically a copy/paste operation.  Make another file in that folder, using either 'FileMenu/New' or by ctrl-click in the left pane.  Call the file pageTwo.html, and then copy and paste the entire index.html file into that page.  Change the src for the image file:

```
<img src="img-sq/0.jpeg" alt="an image of a kitten">
```

And, you should be able to navigate between those pages using the nav bar!
</br>
</br>
As you can see, every page we make needs to have the nav bar.
</br>
</br>
I'm going to break us off into groups now and I'll come around and help folks out if they're stuck.  I'd like you to make more pages, one for each of the images that you have, so we can navigate between the images.  It's basically a copy and paste job, you need the navbar on each page, you'll just change the image path on each page.
</br>
</br>
I've also made an alternate version of this which you can download from github: [altkitties](https://github.com/socalledsound/jeremy-bearimy-starter/tree/altkitties).

</br>
</br>
In about half an hour or so I'll bring you back and we'll add some javascript to this playground.  If you finish, feel free to get started with the javascripting down below.
</br>
</br>
Ok, we're back.
</br>
</br>
So hopefully that's all working.  Now, I want to show you a couple of things we can do with javascript, because this is all feeling kind of tame.  It seemed important to teach you how to build a standard boring menu driven web site, you might want that for your own web site, or maybe you want to use that approach for your project 1 assignment -- although I wouldn't really recommend it.  It's not that fun, or artful!  Where's the forking path here?  We've got some images and some numbers and that sure seems pretty sequential and fixed to me.  But we can fix that with some javascript, which, after all, was invented to make the web a little more interesting.  
</br>
</br>
To make sure that you can follow along and don't get mired down in pathnames and imagenames and such, I've put together a [starter](https://github.com/socalledsound/jeremy-bearimy-starter/tree/js-starter) for you at github.  It's got some images in it, a standard html scaffold, and a tiny bit of javascript, which we'll add to.

</br>
</br>
First, go to the index.html and see that at the bottom of the body there's a script tag.  Inside, I've declared an array to hold all of our image pathnames as a constant, like this:

```
<script type="javascript">

    const pathNames = [
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg',
        'img/img4.jpg',
        'img/img5.jpg',
        'img/img6.jpg',
        'img/img7.jpg',
        'img/img8.jpg',
        'img/img9.jpg',
        'img/img10.jpg',
    ]


</script>

```

</br>
</br>
Last class we learned a bit about variables, which are used to store values.  Here, we are encountering another type of data structure, the array, which is used to store a collection of values.  They can store numbers, objects, variables or even other arrays, and each item is stored in sequential order, which means that we can access the value of each item in an array like this:

```
// gets the first item in an array
myArray[0]

//gets the next item
myArray[1]

```

</br>
</br>

We can access these pathnames to dynamically change the image that is displayed on our page.  In the script tag, below the array, declare another const, like so:

```
const myImageElement = document.body.querySelector('img');


```

What we're doing here, is getting a reference to the img element.  Next, we'll change it.  If you open it in live server, ou can see that it's showing img1, which is hardcoded into the html.  But we can show a different image like this:

```

myImageElement.src = `${pathNames[3]}`;

```

Take a look again, you should see a different image.  We are using javascript to give the img tag a different src, which is being chosen from the array of pathnames.  Change the number to something else -- just make sure that number is less than the number of elements in the array.  Or -- maybe it's a good idea to try a big number, like 100, which will fail and throw an error.  If you open up the console, you can see it.  You'll probably get that kind of error a lot, which comes from asking the browser to find something that just isn't there.  

</br>
</br>
Notice that around the pathname I'm not using quotation marks, those are backticks.  That's called 'string interpolation' in javascript, an we'll use it a lot, it let's you mix javascript code and strings of characters, like this:

```
`these are text characters but ${this is javascript code}`

```
</br>
</br>
You can read more about it [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) if your're interested.

</br>
</br>
        😃
</br>
</br>
So here's an alternative navigation we can build, using javascript: we take away the nav bar and trust that the user will know, photgraphs are for clicking.  We can add an onClick handler to the browser window that will specify a function to run every time someone clicks on it.  
</br>
</br>
So in our body tag we can add :

```
<body onClick="changeImage()">


```

And in our javascript we can define that function.  Functions are a huge topic and they are the very essence of javascript.  I'll be explainging a lot about functions in this course, but today I just want to give you a little taste before we go.  Paste this code into your script section:


```

const changeImage = () => {

    myImageElement.src = `${pathNames[Math.floor(Math.random()*pathNames.length)]}`;

}


```

</br>
</br>
You can see my finished code [here](https://github.com/socalledsound/jeremy-bearimy-starter/tree/withjs)
</br>
</br>
You may have noticed that it's very similar to the code above, I've simply switched the fixed number for a randomly generated number, which we can get with Math.random(), which uses the built in javascript math library to get a random number between 0.001 and 1.000.  I think there's more zeroes involved than that but that would be a paint to type, it's basically between 0 and 1.  Then I multiply that times the length of the array, so we get a number that's between 0 and the length of the array, and then use Math.floor to round it down to the nearest integer, because you need an integer to access a position in an array.  
</br>
</br>
And I'm wrapping up all of that in a function, which we are calling each time the body of the page gets clicked.  
</br>
</br>
There are two different ways to declare a function in javascript.  One is the way that I'm using here, which is called arrow notation, and is the way I prefer, because it's concise and I think that the arrow demonstrates exactly what functions do: they transform data.  We can also declare a function with the function keyword, which you'll see a lot, the arrow syntax is new and a lot of people prefer to use the function keyword.  that same function would look like this:

```

function changeImage (){

    myImageElement.src = `${pathNames[Math.floor(Math.random()*pathNames.length)]}`;

}

```

</br>
</br>

We'll talk a lot more about functions soon, they are absolutely integral to javascript.

</br>
</br>

Try to use this code in your own project!  All you need to do is to bring your own images into the project and load them into the array.

</br>
</br>
Or, take a stab at writing your own function, and try to randomly change your menu bar text, to really mess with people!  It's a little tricker to change the text, you'll have to read up a bit on [.innerHtml](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).  

</br>
</br>
You may also want to randomly display random combinations of images on a page, or on multiple pages.....or maybe randomness just isn't your thing and you'd prefer a more predictable layout and more predictable path through the garden of forking paths.  Just do what seems right to you, and have fun.
</br>
</br>
We'll return to this stuff next class.  Upload your work at the submit link below!
</br>
</br>










<!-- If we want to set an image as the 'background' of our page, we use a css property called 'background-image' and give it a url (which can be a local file):
```
body {
    background-image
} -->



<!-- we often see them in lists:

</br>
![list of links image]()
</br> -->







