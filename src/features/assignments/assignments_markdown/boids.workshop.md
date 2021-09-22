# boids

Today I want to build with you the boids algorithm that we talked about in class today.  And, my implentation is also a generative sound piece!  I think it'll be pretty fun and will give us a chance to practice working with the class syntax since, as I'm sure you can guess, a Boid is going to be a class that we write.

A [version](https://editor.p5js.org/p5/sketches/Simulate:_Flocking) of this algorithm is in the online p5 examples, I worked off of that example as I built mine.  I also want to recommend this [video](https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html) by you-know-who which is a great introduction to the material, he was the guy that I originally learned how to code this algorithm from.

In my final code I'm also going to use this algorithm to make sounds!  Or, more accurately, I'm going to use the data generated by the boids as they align and re-align themselves with each other to control the playback rate of sounds that are attached to the boids.  The math here is going to be a little hard, don't fret too much if you don't totally get it the first time through, I didn't either.  But if you stick with it, and maybe do it twice or three times, this will take your game up three of four levels.

![my boids](https://res.cloudinary.com/chris-kubick/image/upload/v1603142033/side-effects/my-boids_zmmw21.jpg)


# getting started

So let's start with an empty starter [sketch](https://github.com/socalledsound/SE-unit2-day16-boids/tree/01-starter).

Let's start by adding some intro text, a little message letting people know what they need to do in this sketch.

Let's make a function called drawIntro:

```
function drawIntro(){
    fill(255);
    text('drag the mouse to generate new boids', 100, 100);
}

```

And then in our draw loop call it:

```

function draw(){
    background(0);
    if(!started){
        drawIntro();
    }
}

```

So now, if the sketch is not started, we draw the intro.  

But we also need a global variable started at the very top of the sketch, in the global scope:

```
let started = false;
```

Good! Now we are by default !started -- not started -- and we'll draw the intro screen.  We can have a second fucntion called drawBoids that we call if we are started:

```

function draw(){
    background(0);
    if(!started){
        drawIntro();
    } else {
        drawBoids()
    }
}
```
And that function will be where we update and draw the boids.  

```
function drawBoids(){
    flock.forEach(boid => {
        //update boid will go here
        boid.display();
    })
}
```

So, we're going to need that array of boids, right?  First let's make an empty array. I'm going to call it flock because that's what we're making here, a flocking simulator.  Let's add that at the top with our other global variables:

```
const numBoids = 20;
let flock = Array.from({ length: numBoids });

```
And then we can iterate over that array in setup, adding a new Boid to each spot in that Array:


```
function setup(){
    flock.forEach((boid, i) => {
        flock[i] = new Boid(i)
    })
}

```

So now we've got an array of Boids.  Or, rather, we've got a program that's crashing, right?  Because we need to make the Boid class, and have that display method that we're calling in drawBoids.  Make a new document called Boid.js.  In there, we'll put the basics:

```
class Boid {
    constructor(){
        this.id = index;
        this.position = createVector(random(0, width), random(0, height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setmag(random(2,5));
        this.acceleration = createVector();
        this.size=random(3,20);
        this.fillColor = [random(255), random(355), random(255), 120];
        this.strokeColor = [120, 110,190];
        this.maXForce = 0.5;
        this.maxSpeed = 3.0;
    }


    display(){
        // console.log(this.position);
        fill(this.fillColor);
        stroke(this.strokeColor);
        ellipse(this.position.x, this.position.y, this.size);
    }


}


```

Now everything up to now has I hope felt like a bit of a review, we've done all this before several times.  But here, in the class definition, I'm using something new, and kind of revolutionary.  

```

 this.position = createVector(random(0, width), random(0, height));


```

Which I then use in the display method:

```
 ellipse(this.position.x, this.position.y, this.size);
```

# vectors

![vector](https://res.cloudinary.com/chris-kubick/image/upload/v1603142086/side-effects/p3dls1ajsli3npscra0k.png)

So now we're doing something new, we're using vectors.  Which are a SUPER useful [class](https://p5js.org/reference/#/p5.Vector) in p5 and a data structure available in many other languages.  In p5, a vector comes with many built in methods, which we'll be using as we go along.  Right now, just notice that we're storing two values in this vector, which are basically the x and y values.  We also use a vector for acceleration and velocity, which means that instead of six properties, we now have three.  Which will feel more and more useful as we do more and more calculations today.

A [vector](https://mathinsight.org/vector_introduction) is a concept from math that is a bit hard to grasp, honestly, I'm not sure I totally understand them either.  The short abstract answer is, a vector is an object that has both magnitude and direction.  In p5 the default magnitude is 1, but you can see that I'm randomly scaling up the velocity:

```
 this.velocity.setmag(random(2,5));

```

We could probably spend an entire semester learning about vectors in the abstract, but let's just use them and see if we come to a practical understanding of them instead.

At this point we're almost ready to see some boids on the screen.  We just have to add a mousePressed function that sets started to true.

```
function mousePressed(){
    if(!started){
        started = true;
    } else {
        flock.forEach((boid, i) => {
            flock[i] = new Boid(i);
        })
    }
    
}
```

And now when you click you should get a random assortment of static boids on your screen!  If you made it this far, pat yourself on the back.  We were moving pretty fast there.  If it's not working, compare your code to this [branch]() of the repo and try to figure out where you went wrong.  Let's take a break, get caffeinated, and in a bit we'll continue with the really interesting part, which is implementing this boids algorithm.  In the meantime, if you like, you can play with the size or color of the boids, or see if you can get them moving on your own.

# refactor

Ok, so before we get started again, let's do a little refactoring.  You see how I'm making the flock of boids in several places?  Why don't we turn that into a function of it's own?

```

function makeFlock(numBoids){
    flock = Array.from({length: numBoids}, (boid, index) =>  new Boid(index))
}

```

Now we can add that in setup, and delete what we had before:

```
  function setup(){
    createCanvas(600, 600);
    makeFlock(numBoids);
}

```

And also tidy up our mousePressed function :

```
function mousePressed(){
    if(!started){
        started = true;
    } else {
        numBoids = random(3, 60);
        makeFlock(numBoids);
    }
}

```

It should work the same as before, I just like to keep that code tidy.


# move dem boids


All right so, let's get these Boids moving.

Let's start by adding an update function in the drawBoids loop:


```
function drawBoids(){

    flock.forEach( boid => {
        boid.update();
        boid.display();
    })

}
```

And in our Boid class let's add that method : 

```
    update(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);        
    }

```

And we can immediately start to benefit from the p5.Vector class.

As you can see, we can add vectors together, we can also limit vectors, and mult(iply) them.

So what we do is, add acceleration to velocity, then limit the velocity our maxSpeed property, and then add velocity to our position.  And then we reset acceleration, I'll explain why soon.

So what you should see now is, your boids moving, each at their own velocity.  this.acceleration begins at zero and stays at zero, but that's going to change as we write our flocking algorithm.  So the boids just move, and then disappear, which is no good.  We want to keep them on the screen by adding a checkEdges method:

```

    checkEdges(){
        if(this.position.x < 0){
            this.position.x = width
        } else if (this.position.x > width){
            this.position.x = 0;
        }
        if(this.position.y < 0){
            this.position.y = height;
        } else if(this.position.y > height){
            this.position.y = 0;
        }
    }

```

And then we'll call that in the draw boids function in our main sketch:

```
function drawBoids(){

    flock.forEach( boid => {
        // boid.calculateFlocking(flock);
        boid.checkEdges();
        boid.update();
        boid.display();
    })

}

```

And now the boids should stay on the screen.  

# alignment

![ alignment](https://res.cloudinary.com/chris-kubick/image/upload/v1603142032/side-effects/alignment_bdm9h2.gif)

The next step is to make them flock.  This is a really neat algorithm, because it is emergent in nature.  Each boid behaves independently, but because of three defined steering behaviors, the Boids all move together in ways that we can recognize as flock-like, or herd-like.  For this reason, it's often introduced in the context of learning how to program games; we often want groups of say zombies, which are independent in some ways but also form a group.

The three behaviors are seperation, alignment and coohesion.  They're described well, conceptually at this [page](https://www.red3d.com/cwr/boids/) maintained by the algorithm author.  Basically, every boid has a defined neighborhood, which we'll call 'perceptionRadius'.  Inside that area, it will check itself against its neighbors.  It will make sure it isn't too close or too far from those neighbors, and it will steer in the average direction of all of the neighbors.

If you remember, we're using vectorsm, which are a data type that have both magnitude and .... direction!  That's gonna help.  I'm going to give you a function for each of these behaviors and unpack each a little for you. 

First alignment:

```
    align(boids){
       
        let sum = createVector(0,0);
        let total = 0;
        
        boids.forEach( (boid, index) => {
            const d = p5.Vector.dist(this.position, boid.position);
            if(d <  this.perceptionRadius && d > this.blindspot){
                // const influence = this.calculateInfluence(neighborPos.x, neighborPos.y);
                // desired.add(boid.velocity * influence);
                sum.add(boid.velocity);
                total++;
            }
        })
        
        if(total > 0){
            sum.div(total);
            sum.normalize();
            sum.mult(this.maxSpeed);
            let steer = p5.Vector.sub(sum, this.velocity);
            steer.limit(this.maxforce);
            return steer;
            
        }       
        return createVector(0, 0);
    }    

```

As you can see, for every boid, we check the distance between each boid and its neighbors.  We average the velocities of the boid and its neighbors by adding up the velocities of all of the neighbors and then dividing that sum by the total number of neighbors.  Then we make sure that it doesn't exceed our maxSpeed and maxForce values and finally we subtract our current velocity from this sum adn then return that value.  This is a bit tricky to understand, but maybe this image helps.

![steering](https://res.cloudinary.com/chris-kubick/image/upload/v1603038750/side-effects/ch06_04_glqusu.png)


We've got a desired velocity, which is sum in this case, and a current velocity, and we calculate a steering value, which we will ultimately add to our current velocity.  We'll do that in a method called calculateFlocking


```
    calculateFlocking(boids){
        const steering = this.align(boids);
        this.acceleration.add(steering);
    }
```


Here, we call our align method and update this.acceleration for this particular member of our Boid class.  Now we just need to update our boid in an update method:
```
    update(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        
    }
```
We add the acceleration value that we just calculated, limit velocity to max speed, add our new velocity to our position and then reset acceleration to zero and then we'll go back and calculate a new acceleration value in the next loop.  

Before we get this working, we need to also add these new properties that we've been using to our constructor function.  Which should now look something like:

        this.id = index;
       // this.position = createVector(random(0, width), random(0, height));
        this.position = createVector(width/2, height/2);
        this.velocity = p5.Vector.random2D();
        // this.velocity.setMag(random(2,5));
        this.velocity = createVector(random(-3, 3), random(-3, 3));
        this.acceleration = createVector(0,0);
        this.size = random(3,100);
        this.fillColor = [random(255), random(355), random(255), 120];
        this.strokeColor = [120, 110,190];
        this.maXForce = 0.005;
        this.maxSpeed = 3.0;
        this.perceptionRadius = 100;
        this.blindspot = 0;


Now we just need to calculate flocking and update all of our boids in the main drawBoids function in sketch.js:

```
class Boid {
    constructor(index){
        this.id = index;
        this.position = createVector(random(0, width), random(0, height));
       
        this.velocity = p5.Vector.random2D();
        // this.velocity.setMag(random(2,5));
        this.velocity = createVector(random(-3, 3), random(-3, 3));
        this.acceleration = createVector(0,0);
        this.size = random(3,100);
        this.fillColor = [random(255), random(355), random(255), 120];
        this.strokeColor = [120, 110,190];
        this.maXForce = 0.005;
        this.maxSpeed = 3.0;
        this.perceptionRadius = 100;
        this.blindspot = 0;
    }  

```

The finished alignment code is [here](https://github.com/socalledsound/SE-unit2-day16-boids/tree/03-align).

If you check the results in your browser, you should see that, before long, the boids all start to move in the same direction!  But it's not flocking yet, and it's not very dynamic.  Let's add cohesion.

# cohesion

![cohesion](https://res.cloudinary.com/chris-kubick/image/upload/v1603142032/side-effects/cohesion_jhu7gb.gif)

The Cohesion rule basically says, every boid inside the perceptionRadius should move to the average location of each of the boids in the perceptionRadius.  So it's a lot like what we just did, but we're going to average the position value instead of the velocity value.  First, the method:

```
    cohesion(boids){
      
        let sum = createVector(0,0);
        let count = 0;

        boids.forEach( boid => {
            const d = p5.Vector.dist(this.position, boid.position);
            if(d <  this.perceptionRadius && d > this.blindspot){
                sum.add(boid.position);
                count++
            }
    
        })

          if (count > 0) {
            sum.div(count);
            return this.seek(sum);
          } else {
            return createVector(0, 0);
          }

    }

```

Everything here is nearly the same as the last method, other than the fact that we are now averaging the positions of the boids inside the perceptionRadius, and then we are steering the position towards that position.  If we add cohesion to our calculate flocking method, we should see the results in our browser window:


```
    calculateFlocking(boids){
        //calculate the forces
        const align = this.align(boids);
        const cohesion = this.cohesion(boids);

        //apply the new forces
        this.acceleration.add(cohesion);
        this.acceleration.add(align);
        

    }

```

The finished cohesion code is [here](https://github.com/socalledsound/SE-unit2-day16-boids/tree/04-cohesion).

And you should see something like this:

![our cohesion](https://res.cloudinary.com/chris-kubick/image/upload/v1603142033/side-effects/cohesion_akk6qz.jpg)


Which is also kind of neat, but definitely isn't flocking.  We need to add seperation.

# seperation

![seperation](https://res.cloudinary.com/chris-kubick/image/upload/v1603142032/side-effects/separation_nb7etn.gif)

So now what we need to do is, not let these boids collapse on each other like that, we need to make them want some space between each other.  Which of course makes sense, in real like, birds don't tend to all collapse on one another in a big heap.  


```
    seperation(boids, seperationValue){
       let desiredSeperation = seperationValue;
        let steer = createVector(0,0);
        let count = 0;

        boids.forEach( boid => {
            const d = p5.Vector.dist(this.position, boid.position);
            if(d < desiredSeperation && d > this.blindspot){
                let diff = p5.Vector.sub(this.position, boid.position);
                diff.normalize();
                diff.div(d);
                steer.add(diff);
                count++
            }
    
        })

        if (count > 0) {
            steer.div(count);
            }
        if (steer.mag() > 0) {
                // Implement Reynolds: Steering = Desired - Velocity
                steer.normalize();
                steer.mult(this.maxSpeed);
                steer.sub(this.velocity);
                steer.limit(this.maxForce);
              }
        return steer;
    }
    

```

In some ways this is the hardest to understand.  As before, we check the perceptionRadius, but this time, we are going to steer away from the center of all of the voids.  If that makes sense.  We average the positions and then calculate each boids acceleration to be as strong, in the opposite direction, as a value that we get by figuring out how close it is to the average position of all of the boids.  That probably doesn't entirely make sense!  But I'm happy to sit down with you and chat about this if you want to learn more, and I hope this will encourage you to read [the nature of code](https://natureofcode.com/book/chapter-6-autonomous-agents/) when you have time!

Now we just need to add this new value to calculateFlocking.  I'm also going to add some weightings to the values and some tweaks to the seperationValue so that it looks a little smoother, and so that, randomly every once in a while a boid breaks away from the flock, because this happens in real life and I think it's interesting.

```
  calculateFlocking(boids){
        let seperationValue = this.size * 6 * random(0.001, 0.1);
        let coin = Math.random > 0.5;
        if(coin){
            seperationValue = 450;
        }        //calculate vectors
        const align = this.align(boids);
        const cohesion = this.cohesion(boids);
        const seperation = this.seperation(boids, seperationValue);
        //add weightings
        align.mult(1.0);
        cohesion.mult(0.1);
        seperation.mult(1.5);
        //apply the new force
        this.acceleration.add(cohesion);
        this.acceleration.add(align);
        this.acceleration.add(seperation);

    }
```

The finished seperation code is [here](https://github.com/socalledsound/SE-unit2-day16-boids/tree/05-seperation).


And now that's kind of flock like!  I've added some more tweaks in my [final](https://github.com/socalledsound/SE-unit2-day16-boids/tree/06-growing) version, adding sound and a little white dot that sort of indicates the current trajectory.  I think it's kinda nifty, I think it's sort of a game (there's a player ball at the mouse location that interacts with the flock!), and I'm happy to talk it through with you if you're interested.  Have a great day and keep working on your games, submit the current state of your game to the gallery as today's assignment!
