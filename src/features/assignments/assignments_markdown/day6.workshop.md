## day 6 : collections

<!-- this is collections: start by making the damien hirst painting

then make it so when you click you get a new assortment of random dots every time.  and then they go black. -->

Today we're going to do something a little bit different with our images, which is display them all on the same page, in a nice grid, using a powerful css layout tool called flexbox.
</br>
</br>
But first...now that we've learned a little javascript, let's go back to painting in the browser, this time using javascript.  We'll  make something like this painting by Damien Hirst, that we talked about in class.
</br>
</br>

![damien hirst spot painting](https://res.cloudinary.com/chris-kubick/image/upload/c_scale,w_576/v1597283803/side-effects/damien-hirst-spot-painting_pddu75.jpg)

</br>
</br>
Download the starter project I made for you from [github](https://github.com/socalledsound/hirst-starter) -- and open it up in vs code.  It should look like this:
</br>
</br>

![ getting started in vs code](https://res.cloudinary.com/chris-kubick/image/upload/v1597289990/side-effects/hirst-starter_pnitfu.jpg)

</br>
</br>

Open it up in your  browser using live server, you should see a blue-ish dot.  Now, copy and paste your div a bunch of times, until your browser is full of dots.  And add 'display: flex' and flex-wrap: wrap to your containing div, like this:

```
        .container {
            display: flex;
            flex-wrap: wrap;
        }

```

Your page should start filling up with blue dots.  You can add a little margin to 'my-circle' to get a little space.  

```
        .my-circle {
            background-color: #45a99B;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            margin-top: 20px;
            margin-left: 20px;
        }

```


It should look roughly like this:

</br>
</br>

![blu circles](https://res.cloudinary.com/chris-kubick/image/upload/v1597294803/side-effects/blue-circles-really_use_ipolop.jpg)


</br>
</br>

Flexbox is a very nifty and easy to use layout model in css.  Flexbox will try to evenly space out anything we put on a page. It's great for a portfolio, for instance.  I use it in many places on this site.  Later, we'll come back and use it to lay out our photos, and turn each photo into a clickable link.  But, first, these spots.

</br>
</br>

We could, as I said, make these divs manually and then we could make say a hundred different colors and apply a second class to each div, with a color name, like we've done before.  But this repetitive process seems like a great place to use some code.  So let's do that.

</br>
</br>

First, let's write a function (remember our function last time that changed the image?) which will generate a random color.  

```

const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`; 

```

It looks a bit like what we doing before with Math.random(), doesn't it?  Remember, when we chose a random image from an array of images.  


It gives us a random hexadecimal color value.
</br>
</br>
Copy that into your script in your html page, like this:


```

<script>

const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`; 

</script>

```

It should be lots of pretty colors if vs code is reading it as javascript.
</br>
</br>
Let's just test it out a little.  Paste this code on the line below.

```
console.log(getRandomColor());

```

This will log out a random color value to the console.  The console is where the browser can talk back to us and let us know what's going on in our program.  You can open it by clicking the three dots at the top rioght corner of the chrome browser:

</br>
</br>

![image of the three dots](https://res.cloudinary.com/chris-kubick/image/upload/v1597294738/side-effects/chrome_-tools-crop_smaller_ggm4ua.png)

</br>
</br>

and then clicking 'more tools' -> 'developer tools'.  Or just click cmd+option+i.

</br>
</br>
There are a bunch of diagnostic tools in here.  In the elements tab you can see the html elements on your page and the css associated with them:

</br>
</br>

![elements](https://res.cloudinary.com/chris-kubick/image/upload/v1597295079/side-effects/elements_x6y5td.jpg)

</br>
</br>
In the console you should see the output of your log, which should be a hex color!
</br>
</br>

![console](https://res.cloudinary.com/chris-kubick/image/upload/v1597295079/side-effects/console_2_ey1m6c.jpg)

</br>
</br>
Nice.
</br>
</br>
Now, let's change the color of our spots, in javascript.  We'll find everything with a class of 'my-circle' and change it's background color.  First, we'll use document.querySelectorAll() to get an array named elements that will contain everything in the document that has a class of my circle:


```
const elements = document.querySelectorAll('.my-circle');
```
</br>
</br>

Next, we'll iterate through that array using Array.forEach(), applying a random color to each element.  Like this:

```
elements.forEach(element => element.style.backgroundColor=getRandomColor());

```

Don't worry if this all seems a little overwhelming right now!  It will make more sense soon.  But, look at your browser window -- you should see a bunch of randomly colored dots!  Nice.  

</br>
</br>
If you don't, don't worry, it's probably a typo.  You can download see, and download the finished code [here](https://github.com/socalledsound/hirst-starter/tree/finished).

</br>
</br>
Now let's try and understand what we just did.

</br>
</br>

Ok let's start with [document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).
</br>
</br>
If you click that link you'll see that querySelector is a method of the Document interface.  What the heck does that mean?  Basically, it means that it's a function that comes built into the web browser that lets you get any element that corresponds to the search term that you give it that exists on your web page.  You pass a selector into the function, in our case we passed in the class my-circle: '.my-circle'.
</br>
</br>
Let's log the result in the console:

```
const elements = document.querySelectorAll('.my-circle');
console.log(elements);
```
</br>
</br>

![elements log](https://res.cloudinary.com/chris-kubick/image/upload/v1597348702/side-effects/log-elements_qgllkw.jpg)

</br>
</br>
We see that our constant value 'elements' is a bunch of divs with a class name of my-circle.  One thing worth noting is, the type of object that it is: a [NodeList](https://gomakethings.com/nodelists-vs-arrays/).  This is a document data type that looks kind of like an array and acts kind of like an array but isn't actually an array.  We can check that by using a method of the Array object, Array.isArray().  We pass in our elements constant like this:


```
const elements = document.querySelectorAll('.my-circle');
console.log(elements);
console.log(Array.isArray(elements));

```

and you can see the result
</br>
</br>

![is array log](https://res.cloudinary.com/chris-kubick/image/upload/v1597348703/side-effects/is-array-false_jhgpnt.jpg)
</br>
</br>

The Array object is a tremendously important part of working in javascript, and if you go to the Array documentation, you can see that there are a lot of methods that let us work with array in powerful ways.  We'll look at two of these today.  First, Array.from(), which lets us create an array from an object:

```
const elements = document.querySelectorAll('.my-circle');
console.log(elements);
console.log(Array.isArray(elements));
const myArray = Array.from(elements);
console.log(myArray);
console.log(Array.isArray(myArray));

```
</br>
</br>

![my array log](https://res.cloudinary.com/chris-kubick/image/upload/v1597348704/side-effects/myArray-log_qb7weu.jpg)

</br>
</br>
Another Array method we can use is called Array.forEach(), which lets us apply a function to every member of an array -- or on a nodelist, which is kind of weird but very helpful.  (So, I didn't need to explain that a nodelist isn't exactly an array, but I wanted to, anyway!)

So, we can use our getRandomColor function in elements.forEach() to generate a different random color for every item in the array:

```
elements.forEach(element => element.style.backgroundColor=getRandomColor());

```

Here, we set the backgroundColor style property of each element in our nodelist to a random color.  I hope that makes sense!  If not, go ahead and ask me a question about it.

</br>
</br>

We can also use the Array.from() method we were looking at above to create an empty array of a length that we specify, like this:

```
const newArray = Array.from({ length: 100 });
console.log(newArray);

```

If we look at the console now, we see we get an array of length 100 with 100 undefined entries. 

</br>
</br>

![array](https://res.cloudinary.com/chris-kubick/image/upload/v1597348702/side-effects/array-from-100_x3pffs.jpg)

</br>
</br>


 We can also make this bigger, or smaller as we see fit.  Which is SUPER useful.  I'll show you how.  Grab [this](https://github.com/socalledsound/hirst-starter/tree/supercharged) branch of that hirst-starter repo.  It should be called supercharged, and you'll see why if you download it and open it.  It should look like this:
</br>
</br>

![hirst supercharged](https://res.cloudinary.com/chris-kubick/image/upload/v1597348702/side-effects/hirst-supercharged_oaqj0o.jpg)

</br>
</br>
You can see in the code, I've created a reall big array, and then iterated over all of the elements of that array with a function that makes a new div.  Then I give it a class name of my-circle and add a random color and finally append it to the container on the page, which I earlier grabbed a reference to, using document.querySelector().

</br>
</br>
This may be a little over your head right now, but we'll get more practice with this over the coming weeks, so don't worry about it too much right now.  I just wanted to give you a taste of what's possible with javascript.  

</br>
</br>
Let's do something a little more straightforward now: use flexbox to lay out some images.  This will only take a moment, and then we'll take a break and we'll break off into groups and you can work on getting your own images laid out using flexbox.


</br>
</br>
Download my starter code [here](https://github.com/socalledsound/kittens-starter).  I've written the html to include all of the images from my img folder.  Each one of the images is inside a div with a class name of 'item'.  And then, all of those divs are wrapped inside of a 'container'.  You can open the page and see the images on the page.  
</br>
</br>

![kittens](https://res.cloudinary.com/chris-kubick/image/upload/v1597348702/side-effects/kittens1_okiqyn.jpg)

</br>
</br>
Now, go up to the top of the page and uncomment the style section.  Select the text and hit command+backslash, or go to the edit menu and select toggle block comment.  You should see the kitties automagically rearrange themselves into orderly boxes, if you save the document.  
</br>
</br>
![flex kittens](https://res.cloudinary.com/chris-kubick/image/upload/v1597348703/side-effects/flex-kittens_bt4xmj.jpg)
</br>
</br>
So, what's going on here?  The container has a property display: flex, and each item in the flex container has a width and a height and some margin.  Then, I set the image to be the same size as the div that is enclosing it.  To top it all off, I put a :hover pseudoclass on each item that scales it up a little bit when the mouse is over it.  CSS transforms are pretty nifty, but they're saly outside the scope of this class.  You can get started learning about them [here](https://css-tricks.com/almanac/properties/t/transform/) if you're interested!
<!-- </br>
</br> 
</br>
</br> -->

<!-- </br>
</br> -->

</br>
</br>
> Ok, it's your turn!  Use flexbox to lay out your images on a page.  Play with different aspects of your layout until you have something that you like.  As an extra challenge, see if you can use javascript to put the images on the page, like we did with the hirst dots, and randomize the order of the images!  I've done just that in this [code](https://github.com/socalledsound/kittens-starter/tree/js-kitties).  If you want to use the code I wrote, you'll have to rename your images to be sequential numbers and set the number of images to the number of images you have.  i think you'll find, as the number of images gets bigger, it's a lot easier to use javascript.  Also...if we want to do things like grab a thousand images from a database and display them on a page....we'll need javascript for that.  Have fun, don't freak out if your code doesn't work or you don't get everything right now...being confused is a normal part of this process.  It will wear off over time!







