# Sprites

For today's assignment, you need to create a javascript poem that describes a character.

Ideally, this should be a character for a game that you're thinking about developing for your midterm project, but it can also be a character from a movie that you've seen recently.
Don't worry about creating good code; instead, write something that communicates a character to us.

Also, be sure to submit an image. You can sketch this by hand, use the <a href=''>piskel editor I showed you</a>, take a photograph and use that, or use any other tool of your choice -- or you can steal someone else's image if you think you can get away with it! -- just be sure to submit an image with your poem.

Be sure to include some properties that can change over time, one or more
more boolean (true/false) attributes, and some functions that describe things that the character does.

Here's an example of a character from a movie that I saw recently, which was really good, The Farewell. This is Awkwafina's character Billi:

```
const Billi = {
    home: 'Brooklyn',
    currentLocation: 'Changchun',
    identities: [Chinese, American]
    currentIdentityIndex: 1,
    oneTrueLove: 'Nai Nai',
    emotions: ['crying', 'pouting'],
    currentEmotionIndex: 1,
    keepSecret: (idx) => {
        if(emotions[idx] === 0){
            return false
        } else {
            return true
        }
    }
    secretKept: keepSecret(currentEmotionIndex)
    deepMessageFromNaiNai: 'life is not about what things one does, but rather how one does them',
}
```

And here's an example of a character like this, from a game that I'd like to make:

```
const Douglas = {
    occupation: 'language removal',
    location: {
        x: 'Hollywood blvd.',
        y: 'Vine blvd.
    },
    coins: Infinity,
    mentalHealth: undefined,
    soundCollection: HUGE_SOUND_COLLECTION,
    createSound: (sound) => (process) => process(sound)(),
    dreamAchieved: false,
    acheiveDream: (world) => (process) => process(world)()
}

```

You can learn more about objects in <a href='https://www.youtube.com/watch?v=UQWpnXc3tPI'>this video</a> from the javascript morsels playlist that I made for you.

Feel free to use javascript's class syntax for describing objects, also introduced in the video above, which we'll explore next week.

Have fun with it! And use it as an opportunity to explore the <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference'>javascript reference</a>.

<!-- NEED TO REWRITE THIS. no classes here, just focus on keyboard interaction. -->

<!--

Today we'll make a character for a player to play; I'll make a basic version and a more complicated version and you will hopefully learn enough to be able to make your own! We'll look at handling mouse and keyboard actions and then turning those into movement on the screen, and we'll look at storing some values for our character. We're going to use object oriented programming in javascript and learn a few of the basics of object oriented programming.

Let's start by looking again at what an object is in javascript: a collection of keys that we can use to store information.

So if we have a hero, like Dorothy, in the Wizard of Oz, we can write an object to describe some things we know about her:

```
const Dorothy = {
    name: 'Dorothy,
    dogName: 'Toto',
    birthplace: 'Kansas',
    issue: 'needs to find her way home',
    enemy: 'wicked with of the west',
    friends: ['Tin Man', 'Lion', 'Scarecrow']
}

```

Or, if we are talking about another Dorothy, the main character in The Wiz, we could write that similarly :

```
const Dorothy = {
    name: 'Dorothy,
    dogName: 'Toto',
    birthplace: 'NYC',
    issue: 'needs to find her way home',
    enemy: 'wicked with of the west',
    friends: ['Tin Man', 'Lion', 'Scarecrow']
}
```

And immediately you can see that those characters named Dorothy have a lot in common. Now, let's say we want to make a game where people have the option to play either one of those Dorothies, or we want to make a game with both of them in it. One thing you should always be looking for when writing code, is to avoid repeating yourself. One of the key ways we can do this with our data, is by thinking about objects in terms of CLASSES.

So, let's make a class named 'Dorothy', it will be like a blueprint for all the Dorothies to come. We know that these Dorothies have a lot in common, so let's put those commmon things in first.

To write a class, we start with the class keyword, and we define the class between curly braces, like this

```
class Dorothy {

}

```

Now, inside the class, we add a constructor function, which will build us a Dorothy.

```
class Dorothy {
    constructor(){

    }
}

```

Inside that constructor, we can specify the properties that all Dorothies have:

```
class Dorothy {
    constructor(){
        this.name = 'Dorothy,
        this.dogName: 'Toto',
        this.issue: 'needs to find her way home',
        this.enemy: 'wicked with of the west',
        this.friends: ['Tin Man', 'Lion', 'Scarecrow']
    }
}
```

So, hopefully, you wrote a Hero object, based on what we learned about class syntax in javascript, and hopefully you posted it to the gallery.

I had my Dorothy class, and then in class we made a Joker as well.

I did this to get you used to object syntax, and class syntax, and I hope you had some fun with it. But before we go any further with that, I want to say, even though it's fun to make have all of those specifics and include them in our blueprint.....it's probably a mistake. What I really should have written is not a 'Dorothy' class, but a Hero class. And, in that 'Hero' class, left room for a hero who could be both Dorothy and, say, the Joker.

So, someting like this:

```
class Character {
    constructor(name, home, desire){
        this.name = name;
        this.home = home;
        this.desire = desire;
    }
}

```

And then, when I make an instance of each one, I can pass in the values appropriate to each character. So, something like this:

```

const myDorothy = new Character('Dorothy', 'Harlem', 'get home');
const myJoker = new Character('Joker', 'Gotham', 'kill batman');


```

The more loose and abstract we can be with our classes, the more reusable we can make them, the better.

Since this probably seems a lot abstract right, now, I want you to download the starter sketch [here](https://github.com/socalledsound/SE-unit2-day12-characters/tree/01-starter). We'll start by learning simply ow to display some images on a page, and we'll build from there, using a variety of approaches. Along the way, we'll get a chance to talk about some approaches to using an object-oriented approach in javascript. As we go through all this, I want you to remember that there's a lot of different ways to code! Nearly anything you want to write can be written in a bunch of different ways and if you find that writing code in your own way works better for you, or one of these approaches works best for you, just do that.

In the folder you just downloaded, you should find a few images in a folder called 'assets', and an index.js that uses the p5 library to render an image to the screen. Load it up, hopefully it's working and it looks something like this:

![image of totoro]()

Ok, let's start by drawing the ground, which will be a rectangle. Now this is a pretty clear case where, at least for now, we probably don't need a class-based object, it's just too much work, and our ground isn't going to be changing. But even so, it's maybe nice to have a simple object to store some data. And I'm going to also make some variables for the width and the height of the canvas, so we can use those in our code. Like this:

```
let myTotoroImage;
const imgsize = 100;
const canvasWidth = 600, canvasHeight = 600;
const horizon = 500;
const ground = {
    x: 0,
    y: horizon,
    w: canvasWidth,
    h: canvasHeight - horizon,
    color: 'brown',

};


```

I generally find it pretty useful to have variables for nearly everything at the the top of whatever part of my code that I'm going to use them in. This helps me keep my variables in the appropriate scope, which is something we've talked a little bit about but I want to mention it again here.

By having a constant here called canvasWidth, which is declared in the global scope -- not inside any other function -- we can use it inside every function. We can use it in our setup function, in createCanvas, and we can also later use it in other functions that we write, like the class for our 'Character' that we'll write in a bit.

And that's also why I declare a variable called myTotoroIMage -- this way I can give it a value == to a loadedImage inside this program's preload function and then use it in the draw function. Make sense? If not, stop me! This is an important thing to understand.

But let's get back to drawing the ground. Notice how I make a ground object with all of the values I'll need in order to draw the ground: an x, y, width, height and color, which I can then pass in to a function called drawGround, inside our draw function, as a nice, tidy package. Readable code is good code! And then at the bottom I declare this drawground function. Here's the complete code:

```

function preload(){
    myTotoroImage = loadImage('assets/totoro-use.png');
}
function setup(){
    createCanvas( canvasWidth, canvasHeight);
}

function draw(){

    drawGround(ground);
    image(myTotoroImage, 0, ground.y - imgSize, 100, imgSize);

}

function drawGround(ground){
    fill(ground.color);
    rect(ground.x, ground.y, ground.w, ground.h);
}

```

You can see this code in branch 2, [here](https://github.com/socalledsound/SE-unit2-day12-characters/tree/02-withground).

And now, what you should see if you load up this code is, an image of a totoro, standing on some ground:

![totoro on ground]()

All right, now we've got a base to work with but we haven't used this idea of classes yet. And, actually, though this might be annoying, I want to first keep coding without classes, this way we can get a better sense of when we might want one and when we can usually get away without one. We definitely don't need a class-based object to draw some images on the screen, but I still often find data objects to be useful, when we've got multiple related values to keep track of, like above, with the ground object. Let's make another object for our totoro image data.

```
const totoroObject = {
    x: 0,
    y: ground.y - imgSize,
    w: imgSize,
    h: imgSize,

}

```

And then in preload we can assign the image to the totoro object:

```


function preload(){

   // myTotoroImage = loadImage('assets/totoro-use.png');
   totoroObject.image = loadImage('assets/totoro-use.png');

}

```

And in our draw loop, we can use those all those values:

```

function draw(){

   drawGround(ground);
   image(totoroObject.image, totoroObject.x, totoroObject.y, totoroObject.w, totoroObject.h);


}


```

This might seem like a bunch of unnecessary work, but to me it makes the code a lot more organized. And ALSO, a big also, it means we can move the image around, by modifying those values. If you change totoroObject.x, it will move the image. Like [here](https://github.com/socalledsound/SE-unit2-day12-characters/tree/04-move-totoro-no-class).

We can update our draw function like this:

```
function draw(){
    background(200,190,250);
    drawGround(ground);

    if(totoroObject.x < 0  || totoroObject.x > width - totoroObject.w){
        totoroObject.speed *= -1;
    }
    totoroObject.x += totoroObject.speed;

    image(totoroObject.image, totoroObject.x, totoroObject.y, totoroObject.w, totoroObject.h);


}


```

And now our totoro image goes back and forth in the same way as a our ball a few days ago.

Now what I want you to do, while I take a break and get some coffee, is to bring the other images in the 'assets' folder in to this sketch. Make an object for each one, just like the totoroObject, display each image, and make each image move. Be sure to space them out on the page. Each image object will need an x, y, width, height, and then add the image in the preload function, just like with the first one. Then, write some code to make each image move. You can do it!
I'll post my code after the image

![image of three characters]()

And you can see my code [here](https://github.com/socalledsound/SE-unit2-day12-characters/tree/05-more-images);

So here we are! Images on the screen, moving. We can keep track of values, like the x( or y) position of each character independently in each object, and we can also update them.

But we're repeating a lot of code here, aren't we? To me, this looks messy, and the more features we add, the messier it will look. In general, if we are going to want to keep track of changes to an object over time, or keep track of the current STATE of an object, and in particular if there are some shared behaviors that we want a bunch of objects to do, it's a good time to start thinking about using a class. In this case, we can clean this code up a bunch by writing a Character class.

I've re-written this code for you [here]()

You can see, I've written a Character class, moved the drawing of the image into a display method of that class, and written a generic move function, that takes in a direction to move.

```
class Character {
    constructor({x, y, w, h, img, speed}){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.speed = speed;
    }

    display(){
        image(this.img, this.x, this.y, this.w, this.h)
    }


    move(direction){
        if(direction === 'left'){
            if(this.x > 0){
                this.x -= this.speed;
            }
        } else if(direction === 'right'){
          if(this.x < canvasWidth - this.w){
            this.x += this.speed;
          }
        }
    }


}


```

I think this makes our code a lot cleaner, and if we want to add interactions between these characters, classes become even more useful.

I've also added keyboard input -- which I'm using to move one character, the smiling character.

We can also control it with the keyboard, by using p5's keyIsDown function. You can use any key you like, I'm going to check for right and left arrow keys. I'm going to put both of these in a function called checkKeyInput that I'll declare at the bottom of the page, like this:

```

function checkKeyInput(){
    if(keyIsDown(RIGHT_ARROW)){
        smilingCharacter.move('right');
    }

    if(keyIsDown(LEFT_ARROW)){
        smilingCharacter.move('left');
    }
}


```

And then I'll call it in the draw loop:

```

function draw(){
    background(200,190,250);
    drawGround(ground);
    checkKeyInput();

}


```

But what if I want to have these different characters do different things? Then I can create either create subclasses, like I'll show you now, or I can rethink things a bit and create seperate classes. What I've decided to do is, have the smiling character be keyboard controlled and the other characters move on their own. The smiling character will be a player character, and the others will be autonomous. SO I could probably go ahead and create two seperate classes now, but let's work with this a little bit first, just to see some syntax. First, a SmilingCharacter, which extends the basic Character class:

```
class SmilingCharacter extends Character {
    constructor({ x, y, w, h, img, speed }){
        const addHeight = 200;
        super({ x, y, w, h, img, speed});
        this.y = this.y - addHeight;
        this.w = w + addHeight/2;
        this.h = h + addHeight;
        this.jumpingValue = 30;
        this.originY = this.y;
        this.driftSpeed = 3;

    }

    jump(){
        this.y -= this.jumpingValue;
    }

    driftDown(){
        if(this.y < this.originY){
            this.y += this.driftSpeed;
        }
    }
}

```

So now the smiling character does all the things that the base character does, but also can jump and drift down. If you play with [this](https://github.com/socalledsound/SE-unit2-day12-characters/tree/07-smiling-totoro) code a bit, you cab see it in action. The SmilingCharacter is also a bit bigger. It has the move and display methods of the base character class, and it also has all the base properties of that class, that I bring in using the super() function in the constructor. We'll do more with this and what it means in coming classes, but for now just know that that super() function is bringing in the properties, x,y, w, etc of the parent class.

In pur main program loop, we can now create an instane of a smiling character like this, passing in the same object as before.

```
  smilingCharacter = new SmilingCharacter(smilingTotoroObject);

```

If we also want to modify the littles, we can do so, and make a LittleCharacter that also extends the base character class, so they don't just stop at the edge, but actually reverse direction. Like this:

```
class LittleCharacter extends Character {
    constructor({ x, y, w, h, img, speed}){
        super({ x, y, w, h, img, speed});
    }

    checkEdges(){
        if(this.x <= 10 || this.x > canvasWidth - this.w  - 50 ){
            this.speed *= -1;
        }
    }
}

```

You can see how I bring this little character into the main program loop [here](https://github.com/socalledsound/SE-unit2-day12-characters/tree/08-modify-littles).

Now there are these little characters and the bigger character, the little characters move on their own and the bigger character moves using the arrow keys, and can jump.

We're almost done with this silly first stage game. I hope you've learned some things! Here's some of the biggies as I see it:

1. how to draw an image on the screen
2. how to organize data into object
3. how to organize multiple functions into one larger function
4. how to organize data and functions into classes

Before we stop, I want to add a gameover state, to the global scope, so we can stop drawing the game if it ends. But first, let's think a bit more about these sub-classes we've made. By drawing on a base class, we've saved ourselves some code, sure, but we've also created a situation where all of our characters are kind of tightly coupled together. This is the tradeoff of subclassing, and it's something to think carefully about! You could say the same thing about creating a class in the first place, I think.

We can save ourselves code repetition, but it sometimes comes at the cost of interconnectedness. If I want to add a new method to the main Character class, it will affect all of the characters. This can be a real pain in the ass. This whole topic is the subject of so much angst in the programming community that some people have even gotten to the point where they completely reject object oriented programming because it can lead to....side effects. We'll definitely return to these somewhat complex ideas later in this unit but for now I just want to put that out there and mention that what I try to do, as a rule of thumb, as I'm designing my code, is keep an eye on those interdependencies, and if necessary, break them apart. In this case, it doesn't make that much sense to me, actually, to have our main Player character and the other little characters come from the same class. We save a little code but also make the code a little more complicated. So, I'm going to rethink this and do what I should have done from the start, which is have two different classes. You can see that code [here](https://github.com/socalledsound/SE-unit2-day12-characters/tree/09-refactor-two-classes). You'll probably want to download that code and work off of that as we add the gameOver function.

You can see that there's no more super() business to deal with. We do have duplicate display methods, but the move methods are now different for each type of character. It's better in some ways! And easier to think through. I've also put the littles into an array, which I think helps the design of the program. Now, if we want to add more littles, like for isntance and a new one, we can do that easily. Check out the next [branch](https://github.com/socalledsound/SE-unit2-day12-characters/tree/10-add-random-little) to see that in action. I wrote a function to add a random little at some specified occurence, like in this case, a pretty rare random number:

```


function addRandomLittle(){
    if(Math.random() > 0.995){


        const object = Math.random() > 0.5 ? totoroObject : pikachuObject;
        // let object;
        // if(Math.random() > 0.5){
        //     object = totoroObject;
        // } else {
        //     object = pikachuObject;
        // }

        littles.push(new LittleCharacter(object));
    }
}


```

Here, I'm using one of my favorite little shorthand syntaxes, which is called a ternary expression. It basically says, let's set a variable named object to one of two values, depending on whether the condition -- Math.random() being greater than 0.5, in this case.
You can see the longer if/else version of it below that in a comment.

Okay, I promised a game over state, didn't I? First, an easy one. Let's start the smiling totoro higher on the screen and if he gets down below a certain level, we end the game.

First, we need a global gameOver variable, in the global scope(are you understanding what that means? if not, say something NOW!), set to false:

```
const gameOver = false;

```

Now let's take our entire current draw loop, cut everything out, and wrap that code in a function called draw game:

```

function drawGame(){
    background(200,190,250);
    drawGround(ground);

    checkKeyInput();

    littles.forEach( little => {
        little.update();
        little.display();
    })


    smilingCharacter.driftDown();
    smilingCharacter.display();


    if(Math.random() > 0.995){


        const object = Math.random() > 0.5 ? totoroObject : pikachuObject;
        // let object;
        // if(Math.random() > 0.5){
        //     object = totoroObject;
        // } else {
        //     object = pikachuObject;
        // }

        littles.push(new LittleCharacter(object));
    }

}

```

And make a new function called checkGameOver:

```

function checkGameOver(){
    if(smilingCharacter.y > 250){
        gameOver = true;
    }
}

```

And update our draw loop to check if the game over condition has been met. if not, draw the game, if not, just set the backfround to black. We could also call some sort of animation, here, or out a text message on the screen.

```
function draw(){

    checkGameOver();

    if(!gameOver){
        drawGame();
    } else {
        background(0);
    }


}


```

If you got lost there, you can see that code [here](https://github.com/socalledsound/SE-unit2-day12-characters/tree/11-basic-game-over).

So here we have an important concept: a global state for our game. If it is over, it's over, and it affects everything. We have that variable in the global scope, because literally everuthing else depends on it. We could also keep track of a score in this way, but that's for another day.

And [here](https://github.com/socalledsound/SE-unit2-day12-characters/tree/12-finished-game) you can see a modification to that code, which only ends the game if the totoro collides with another character. The collision is a little loose because the images are bigger than they look, they have some dead space around them. We could make that better but it doesn't seem worth it honestly for this game. We'll learn more about collisions later, but for now just have a look and see if you can understand what's going on and holler if anything is confusing.

Don't be alarmed if some of this is making sense and some of it isn't. Learning to code is like that! But hopefully you learned how to draw an image on a screen and you learned a little about composing with classes.

I had originally started doing this excercise without images, you can see that code in this [repo](https://github.com/socalledsound/SE-unit2-day12-no-images/tree/11-player-jump). It's similar to what we did today, but a bit more abstract, so maybe looking at that will be interesting and helpful for you. The game I'm making alongside you in this unit will build on these simple shapes and use sound, but I realized that you may want to use images for your characters or animations, so I decided to redo things a bit. I hope this has been interesting. Let me know what's useful and what's confusing, please!

Next class, I want to continue with these ideas, and make animations using not just a single image, but sets of images. For your assignment, I want you to draw the hero character of your game, not just once, but numerous times! You can use whatever software you like, but I've put together a [video](https://youtu.be/HS2OaAu07MU) on how to use something called [piskel](https://www.piskelapp.com/) to put together either a series of images, or a spritesheet. You can read a bit about spritesheets [here](https://blog.felgo.com/game-resources/make-pixel-art-online). I think you'll find that it's super easy to use and pretty fun.

Or, if you prefer, take a series of images of yourself or a friend, in costume, moving -- be the character. Or, photograph a series of handdrawn images. Or, if you really don't feel you can do the art yourself, go to [https://opengameart.org/](https://opengameart.org/) and search through what they have there. I did a [search](https://opengameart.org/art-search?keys=character+spritesheet) for character spritesheet and got a ton of results. Next class, we are going to learn how to animate these sequences of images in a few different ways, including using sprite sheets.

You don't have to upload these files, but you should organize them, numbered sequentially, so we can animate them!

Do submit one of these images for this assignment submission!

Have a great day and see you next class! -->
