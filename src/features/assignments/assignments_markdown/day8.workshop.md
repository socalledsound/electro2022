# let's review what we know!


<p>Today I want to meet with anyone who needs help with their project.  I'll do these meetings in the main room, so you can listen in in case you may also be helped by the answer.  You can sign up for a slot on the sign up page @ [www.socalledsidefx.com/meetings/project1](/www.socalledsidefx.com/meetings/project1)

<p>I also want you to take a little time here to consolidate what we've learned, and perhaps learn a bit more.  Below is some code that should make sense to you!  If there's anything in there that doesn't make sense, read on, I'll explain below</p>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="more.js"></script>
    <style>
        .my-container {
            display: flex; 
            flex-wrap: wrap;
            background-color: #FFF;      
        }
        h1 { 
            color: red;
        }
        .item {
            background-color: rgba(120,90,230,0.7);
            margin-left: 50px;
        }
        .item:hover {
            background-color: #aaa;
        }
        p {
            color: #a5a80c;
        }
    </style>
    <title>my page</title>
</head>
<body>
    <div class="my-container">
        <div class="item">
            <h1>item 1</h1>
            <img src="img/image1.jpg" />
            <p>this is a paragraph description about item 1</p>
        </div>
        <div class="item">
            <h1>item 2</h1>
            <img src="img/image2.jpg" />
            <p>this is a paragraph description about item 2</p>
        </div>
    </div>
    <script>
        //now let's make a bunch more divs like that using javascript!
        //first let's get the container as a global constant:
        const container = document.querySelector('.my-container');
        //a constant to specify length of array
        const length = 10;
        //the function we call in Array.from, we pass in the index number so we can specify which image and some of the text
        const makeDiv = (i) => {
            //create our html elements
            const div = document.createElement('div');
            div.className = 'item';
            const headerTag = document.createElement('h1');
            //here we use the javascript template literal syntax to fill in the i value we are taking in above, which 
            //will iterate from 0 to the length of the string
            headerTag.innerHTML = `item ${i}`
            const image = document.createElement('img');
            //again, a template literal
            image.src = `img/image${i}.jpg`;
            const paragraph = document.createElement('p');
            paragraph.innerHTML= `this is a paragraph description about item ${i}`;
            //now we use .appendChild to add them inside the div
           div.appendChild(headerTag);
           div.appendChild(image);
           div.appendChild(paragraph);
           //we can't forget to return the div we just made!
           return div
        }
        //now we pass the function into Array.from and we pass the index argument into our function!  
        const myArray = Array.from({length: 10}, (e, i) => makeDiv(i));  
        //let's add a useless event listener to each element just for fun:
        myArray.forEach(element => {
            element.addEventListener('click', ()=>console.log('hi'));
        })
        //and finally, use Array.forEach() to iterate over our array and add each element to our container!
        myArray.forEach(element => {
            container.appendChild(element);
        })
        myArray.forEach(element)
    </script>
</body>
</html>

```



<p>We started by learning some html tags: div, a, img, p, h[1..6].  Divs are sections of a page, a are links, img is for images and p and h tags are for text.  These tags all go inside a body tag on our html page.</p>

<p>We use css to style our page.  We can specify colors, background colors, and sizes and positions for everything on our page in css, as well as do nifty animations and specify hover states.  We can also use display properties (none, inline, inline-block, flex) to specify how our content will be displayed.  We can write those files in a style tag or in an external document using the link tag.  And We can also load in external libraries and fonts to help us with our layout using the link tag.</p>

<p>We put link and style tags in the head section of our html.</p>

```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="styles.css">
    

    <style>
        .myContainer {
            display: flex; 
            background-color: #FFF;      
        }
        h { 
            color: red;
        }

        .item {
            background-color: rgba(120,90,230,0.7);
        }

        .item:hover {
            background-color: #aaa;
        }

        p {
            color: #a5a80c;
        }
    </style>


    <title>my page</title>
</head>

```



<p>We can use the :hover pseudo class to specify a change to our page when the mouse is over a specific element.</p>

<p>Colors can be specified using one of the accepted color names like 'red' or 'lightpink' or we can get more specific and use an rgba value like rgba(255,20,120, 0.5), where each color is a number between 0 and 255 and the alpha value or opacity is a decimal number between 0 and 1, or we can use a hex color where we give those colors as three hexadecimal numbers written in binary like #a5a80c.</p>

<p>Maybe the biggest and broadest thing we learned is, how html, css and javascript work together to make a web page.  Html is the collection of data which forms a web page.  CSS styles it.  Javascript is the language we use to dynamically alter our css and html.  Our focus for the rest of this course will be on javascript, because it gives us so many possibilities.  But, at the end of the day, you can't show anything on the page without html and css, so we also need to know a bit about those.</p>

<p>We can load javascript into our page using a script tag in our html.  We can load an external file like this:</p>

```
<script src="index.js"></script>

```
<p>Or we can write our javascript in a script tag like this:</p>


```
<script>

        const myNumber = 10;


</script>

```

<p>Built into our web browser is a console, you can find it in developer tools in all web browsers.  Using the console, we can see what's happening in our javascript:</p>

```
console.log('what's going on here??')

```

<p>We can write comments for ourselves or other people that the computer will ignore, like this:</p>

```
// this is a comment

```

<p>We can store values in javascript using constants and variables.  Constants don't change and variables do.</p>

```
const myConstant = 'me';
let myVariable = 'myAge';

console.log(me, myAge);
```
<p>The values stored in constants and variables can be one of six primitive types: string (text), number, boolean (true/false), undefined, null, or symbol.  We mostly are going to use them to store the first three types of data; null and undefined are useful for conditional statements and error checking, and honestly I've never used symbol, though it seems useful.</p>

<p>If you want to get the type of something in javascript you can use the typeof operator like this:</p>

```
const myName = 'chris';
console.log(typeof myName)

```


<p>There is another data type in javascript, which is not a primitive type, and it is undeniably more important than all of the other ones.  It is called an Object, and it can be used to store collections of all of the other data types, including other objects.  Objects store multiple properties using key/value pairs, like this:</p>

```
const myObject = {
    fillColor: 'brown',
    borderColor: 'red'
}

console.log(myObect, typeof myObject);


```

<p>And then we can acess those properties using dot notation like this:</p>

```

console.log(myObject.borderColor)


```

<p>Or using square brackets like this: </p>


```
console.log(myObject[fillColor]);

```

<p>We also learned about storing data in Arrays, like this:</p>

```
const myArray = [1, 5, 8, 9, 2];
console.log(myArray);
console.log(typeof myArray);

```


<p>Wait, what?  typeof myArray is 'object'.  Yes!  Arrays are actually a specific type of Object, which uses indexes (numbers) instead of key/value pairs to set and get data.  So we can access the value of an array at a specific place, starting with the 0th place, like this:</p>

```
console.log(myArray[0])
console.log(myArray[3]);

```

<p>And, we learned about functions.   Functions perform some operation and then can optionally return a value.  They can also take in values.  A lot of people will tell you that it's best to always take in the value that you want to transform as an argument to your function and then return the transformed value, like this:</p>

```

const myFunction = (inputValue) => {
    if(typeof inputValue === 'number') {
    return inputvalue + 1
    } else {
        return 'not a number' 
    }

   
}

console.log( typeof myFunction);
console.log(myFunction(1));
console.log(myFunction('hi'));

```

<p>Here, we're using an if/then statement that checks to see what the type of the input is and then returns an appropriate output depending on what type of value we put in.  (We haven't really looked at if/then statements yet but we'll look at them more soon).  We can define a function with either the arrow syntax like above, or with a function keyword like this:</p>

```

function myNonArrowFunction(inputValue){
        if(typeof inputValue === 'number'){
    return inputvalue + 1
    } else {
        return 'not a number' 
    }
}

```

<p>Functions can take functions in as arguments, like in event listeners or in setInterval, which is a timing function built in to the browser:</p>

```

        let number = 0; 

        const increment = () => {
                number += 1;
                console.log(number);
             };

        setTimeout(increment, 500)

```

<p>A special type of function is called a constructor function, which is a function which returns an object, when preceded by the keyword 'new'.  We'll learn more about these, and about classes in unit 2.  The other day we encountered them when we made our Howls, using new Howl().  The objects returned by these functions have access to methods, which we used when we used the .play() method of our Howls, and also when we used some of the Array methods that are available on the Array object.  Let's review a few of those methods now, because they are very useful and very important in javascript.</p>

<p>First of all, we can make an array of a specified length using Array.from() and passing in an object with a length property.  We can also optionally pass in a function that we can use to fill each element of the array, like this:

```
const length = 10;

const makeDiv = () => document.createElement('div');

const myArray = Array.from({length: 10}, ()=>makeDiv());    

```
<p>We can get the length of our new array using Array.length:
```
console.log(myArray.length);
```

<p>We can also iterate over an array that we have created and apply a function to each element using Array.forEach():

```
const container = document.querySelector('.container');
myArray.forEach(element => {
    container.appendChild(element);
})
```

<p>There are many different array methods that lets us sort, combine and add and remove items from arrays, it's well worth learning them all if you have the time and interest!</p>
<p>Often times, we put our javascript on our html page inside our body tags, at the bottom of our body:  </p>

```
<body>

    <div class="myContainer">
        <div class="item">
            <h1>item 1</h1>
            <img src="img/image1.jpg"
            <p>this is a paragraph description about item 1</p>
        </div>

        <div class="item">
            <h1>item 2</h1>
            <img src="img/image2.jpg"
            <p>this is a paragraph description about item 2</p>
        </div>

        

    </div>


    <script>
        //nsome javscript here
        
    </script>
</body>

```


<p>This is so that our javascript has access to the DOM, after the html has been loaded into the browser.  If we aren't concerned with DOM manupulation, we can put our javascript at the top, in the head section of our html, which is where we usually put things like libraries:</p>

```
 <script src="more.js"></script>
```


<p>Javascript interacts with our html and css using something called the DOM -- the Document Object Model.  When the web browser loads our page, it creates this abstract representation of our html and css.  This thing is a javascript Object called 'Document'.  </p>

<p>The most import DOM methods are querSelector, querySelectorAll, createElement and appendChild.  Below, I query for the container on my page, make an element, give that element some style and then append it to the page.</p>


```
const container = document.querySelector('.container');
const newDiv = createElement('div');
newDiv.style.backgroundColor = 'red';
newDiv.style.height = '50px';
newDiv.style.width = '100px';
container.appendChild(newDiv);


```



<p>And finally, a quick note about event listeners, which we can use to listen for specific events on our page.  If for instance we want to do something when the mouse clicks on a specific div, we can first get the element from our page using querySelector, then attach an event listener, and pass into it first the name of the listener that we want to invoke and then a function that we want to run when the listened for event happens:</p>

```
        myArray.forEach(element => {
            element.addEventListener('click', ()=>console.log('hi'));
        })

```

<p>Ok!  That's a quick review for you.  Now go finish project 1!  Or go learn some more about git and the command line, using the links at the side of today's syllabus page.</p>

