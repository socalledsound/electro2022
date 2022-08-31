# Player Player

Today we'll make a character for a player to play; I'll make a basic version and a more complicated version and you will hopefully learn enough to be able to make your own!  We'll look at handling mouse and keyboard actions and then turning those into movement on the screen, and we'll look at storing some values for our character.  We're going to use object oriented programming in javascript and learn a few of the basics of object oriented programming.

So, hopefully, you wrote a Hero object, based on what we learned about class syntax in javascript, and hopefully you posted it to the gallery.  

I had my Doroth class, and then in class we made a Joker as well.

I did this to get you used to object syntax, and class syntax, and I hope you had some fun with it.  But before we go any further with that, I want to say, even though it's fun to make have all of those specifics and include them in our blueprint.....it's probably a mistake.  What I really should have written is not a 'Dorothy' class, but a Hero class.  And, in that 'Hero' class, left room for a hero who could be both Dorothy and, say, the Joker.

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

And then, when I make an instance of each one, I can pass in the values appropriate to each character.  So, something like this:


```

const myDorothy = new Character('Dorothy', 'Harlem', 'get home');
const myJoker = new Character('Joker', 'Gotham', 'kill batman');


```

The more loose and abstract we can be with our classes, the more reusable we can make them, the better.  But....if we make a single class definition for both of these characters, it's a lot less useful, innit?  I mean, what about singing, dancing, causing mayhem -- the things these characters need to be able to do that aren't consistent to both of them?  Well, this is where the keyword 'extends' comes in.  We can make a basic class, and then make other classes that inherit the characteristics of the baisic class, and add specific functionality.

This all probably seems ultra abstract, so let's put it into action in a simple animation which will, in time, become a game!

Download a starter sketch, with the libraries we need -- and a few sound and image files that we'll use later -- [here]().

I've set up your index.html file for you and I've linked to an index.js file from that index.html.  Open up index.js and you should see a pretty plain p5.js sketch, with a setup that creates a canvas and a draw function that draws a background color on the canvas:

```

function setup(){
    createCanvas(600, 600);
}

function draw(){
    background(210,220,240);
}


```


Now, we're going to add a super basic ball character to our sketch.  Let's do it using this class syntax that we're learning.  So, at the bottom of the page, under the draw function, write

```

class Ball {
    constructor(x, y, r, fillColor){
        this.x = x;
        this.y = y;
        this. r = r;
        this.fillColor = fillColor;
    }

    display(){
        fill(this.fillColor);
        ellipse(this.x, this.y, this.r * 2);
    }
}

```


Just the basics we need to draw an ellipse: a display method and some values for that method, that we bring into our constructor function and set to be properties of THIS ball.  We can change those values and get a different size or color ball.  Write this at the top of your sketch:


```

const myLittleGreenBall = new Ball(100,100,20, [0, 250, 0]);
const myBigBlueBall = new Ball(300,300,200, [0, 0, 250]); 


```

Make sense?  Now, more astute observers will already know that we won't see anything yet.  Why not?  Before we continue, can you make the balls show up on the screen??  Take a minute to do so before continuing!  


![image of the balls]()



We need to call our display method in the draw loop, like this:



```

function draw(){
    background(210,220,240);
    mylittleGreenBall.display();
    myBigBlueBall.disaplay();
}


```

And now we've got a base class, this Ball thing, that is handling drawing for both of our balls.  We've made this generic class that handles stuff that any ball would need to do.  But what if we want these balls to come to life, like we've done before?  We need to add a move function to our Ball class -- but we don't want them to move the same way.  We want to be able to control the blue ball with our arrow keys -- this is going to be our Hero ball, our PlayerBall, and we want the green balls to move on their own.  How do we add these unique methods to this base class?  We extend the base class, like this:

```

class PlayerBall extends Ball {
    constructor(){
        super()
    }

    move(axis, amount){
        if(axis === 'x'){
            this.x += amount;
        } else if(axis === 'y'){
            this.y += amount
        }
    }
}


```

The key things we have to do are first, use the keyword 'extends' to extend our base class, and then in the constructor, call the function super(), which brings in all of the 


















class Dorothy extends Character {
    constructor(){
        super()
        this.friends = ['lion', ]
    }
}

```








But this is pretty hard, isn't it?!?!



In both the real world and in programming, when we talk about class, we're really talking about inheritance; who inherits what from whom.  Class is a way of structuring societies, or code, in such a way that children inherit things from their parents.  It's kind of messed up, but it's what we got.

In javascript, this means that we can make a Ball class that has children who inherit ball like characteristics.  The plain Ball is like a blueprint for all the other balls.  And then we can make a special FlickeringBall that has a flicker method that other balls don't have.  

Classes in javascript are special objects which have a constructor function that lets us make other similar objects.</p>

Class syntax looks like this:</p>


```
class Ball {

    //the constructor function
    constructor(){
        this.x = 300;
        this.y = 300;
        this.diameter = 100;
        this.fillColor = [110,90,210];
    }

    //a method of the class
    display(){
        fill(this.fillColor);
        ellipse(this.x, this.y, this.diameter);
    }

}

```

<p>We start with the keyword class, then give our class a name -- which should be capitalized.</p>
<p>Next, we supply our class with a constructor function.  In our constructor function, we use the keyword this to give our class some properties.  'this' is a confusing concept to many, but it just means that we are making a variable that belongs to our class.  When we want access to that variable inside our class, for instance the x value, we will use this.x. We can also acess those properties outside our class, if we make an instance of that class, by first calling the keyword 'new', as below: </p>

```
const myBall = new Ball();
console.log(myPlayer.x);

```
<p>After I create new instance of the Ball class and assign it to the variable myPlayer, I can get the values of this instance of the Ball class using dot notation.  I can also use the methods -- functions -- that are attached to this class, like this:

```
myPlayer.display();

```

<p>But enough preamble.  Let's do this in a p5 sketch.  I've gotten you started with that basic Player class and the p5 library, you can download the starter sketch [here]()</p>

<p>If you load the sketch you should see this: </p>



