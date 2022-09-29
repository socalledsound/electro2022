# sketchy

So far with p5 we've been using pretty simple -- and honestly pretty boring -- shapes.  Circles, rectangles, lines.

In this assignment, I'm going to show you how to make your own, more interesting and lifelike shapes.  It's a pretty simple technique,
but it opens up a lot of possibilities.  And, to really effectively make use of those possibilities, I'll also show you how to introduce noise to your p5 drawings.  Together, I think these techniques can lead to some really nice results.

# beginShape / endShape



But, just so we understand the syntax let's start with a really simple example:  a square.  


![square with points](https://res.cloudinary.com/chris-kubick/image/upload/v1664202715/Screen_Shot_2022-09-26_at_7.31.47_AM_qpbkhh.png)

[square code](https://editor.p5js.org/socalledsound/sketches/5nfnlo2Vh)

To make a freeform shape in p5, all we need to do is call beginShape().  Then, we specify the vertexes of our shape, and finally we call endShape, and we can pass in CLOSE to endShape if we want p5 to draw a line from the last vertex back to the starting point.  So to make a square, we would write

```
        function setup() {
        createCanvas(400, 400);
        }

        function draw() {
        background(220);
        fill(20, 200, 20)
        beginShape()
            vertex(100, 100)
            vertex(300, 100)
            vertex(300, 300)
            vertex(100, 300)
        endShape(CLOSE)

        }

```

You can play with the locations of the vertexes and see that you can change this shape however you like, or even add some more points.

You can make pretty much anything you want this way, but I generally try to let the machine make my points for me, which means...math.  And, for some reason, my favorite math is circle math.  So let's start there.  Once we learn a prety simple formula, we'll be able to make a lot of interesting shapes, like for instance, this asteroid:

![asteroid](https://res.cloudinary.com/chris-kubick/image/upload/v1664126887/Screen_Shot_2022-09-25_at_10.27.33_AM_smellg.png)

or these tree rings:

![tree ring](https://res.cloudinary.com/chris-kubick/image/upload/v1664126887/Screen_Shot_2022-09-25_at_10.26.36_AM_um5b1o.png)

or...a lot of other more interesting shapes, which I'm sure you'll be able to discover.  So, let's look at that formula.

# circle

If we know the point at the center of a circle and we know it's radius, we can find all of the points on the edge of that circle using the sine and cosine functions.  

For every point on that circle, x and y are defined by

---
### x = centerX + cos(angle) * r

### y = centerY + sin(angle) * r

---

It might seem daunting at first, but once you use it a few times, it really starts to make sense.  
So, let's start by making some variables.

```

  const centerX = 300
  const centerY = 300
  const r = 100
  const numPoints = 360


```



We can use those variables with the formula above to create an array of points in javascript, using Array.from, like this:


```

        const circlePoints = Array.from({length: numPoints}, (el, idx) => {
            // idx will be the numbers 0 to 360
            // so we can draw a point for every angle of the circle
            // if we just set theta to idx
            // const theta = idx
            // BUT we can generalize this formula by dividing 360 by the number of points
            // and then multiplying by the current idx, which is better
            const theta = (360/numPoints) * idx
            return ({
            x: centerX + cos(theta) * r,
            y: centerY + sin(theta) * r
        })
        })


```

[Array.from in editor](https://editor.p5js.org/socalledsound/sketches/Z8A_VuDs2)

Remember, Array.from() takes two inputs, the first is an object with a key named length, that defines how many items will be in our array.


```

        let myArray = Array.from({length: 10})

```

The second is a function that returns each element of our array.  We usually write this 'inline', using arrow function syntax, which is a shorter way to write functions, but we can also write that function seperately and then pass it in like this:


```
        function saySomething(){
            const text = 'say something'
            return text
        }
       
        let myArray = Array.from({length: 10}, saySomething)
        console.log(myArray)


```

!['say something'](https://res.cloudinary.com/chris-kubick/image/upload/v1664127474/Screen_Shot_2022-09-25_at_10.37.36_AM_flnf9r.png)

Here, I've made an array where each item in the array contains the text 'say something'.

But, since this is an Array method, it has some nifty tricks, and the most important is the ability to take in as a parameter the index number of the array, which will be a sequential series of numbers going from 0 to the length of the array.  I can make an array that contains a sequential series of those numbers like this:


```
    function eachIndex(el, idx){
        return idx
    }
    let sequentialNumbers = Array.from({length: 30}, eachIndex)
    console.log(sequentialNumbers)

```

We can shorten this syntax using an arrow function, which is just a way of writing a function without the function keyword.

```

let seqNumbers2 = Array.from({length:10}, (el, idx) => {
    return idx
})
console.log(seqNumbers2)

```



Array.from is hard to wrap your head around at first, but I hope that by now it's starting to make sense!  If not, just keep using it until it does!  Or, ask me for a little help!


Now, let's draw those points.  We'll call beginShape and then draw each vertex using Array.forEach().  

```
  
  beginShape()
    // each of the elements of our newly generated array has an x and a y key!
    circlePoints.forEach(pt => {
      vertex(pt.x, pt.y)
    })
  
  endShape(CLOSE)
}

```

Try changing the value assigned to numPoints and you'll seee that prety much any shape which has sides of an equal length is just a lower resolution circle.
Amazing stuff.

[circle with slider](https://editor.p5js.org/socalledsound/sketches/MaajoyZbw)


# asteroid

![asteroid](https://res.cloudinary.com/chris-kubick/image/upload/v1664126887/Screen_Shot_2022-09-25_at_10.27.33_AM_smellg.png)

All right, now lets get a little more interesting and make an asteroid that looks like this.  We've basically got everything we need.  Can you do it on your own???  Give it a shot.

***

If you guessed that all we need to do is make a low resolution circle with a little bit of randomness thrown in, you totally got it.

```

            numPoints = 12
        circlePoints = Array.from({length: numPoints}, (el, idx) => {
            const theta = (360/numPoints) * idx
            return ({
            x: centerX + cos(theta) * r + random(-r, 0),
            y: centerY + sin(theta) * r + random(-r, 0)
            })
        })

```


[asteroid sketch](https://editor.p5js.org/socalledsound/sketches/PwlBs2YSZ)


And we can do this a bunch of times, if we want, right?  Perhaps with an asteroid class, and make them move?

[asteroids](https://editor.p5js.org/socalledsound/sketches/2tzHTK6Cc)
[asteroids with ship](https://editor.p5js.org/socalledsound/sketches/F21bDX7r6)

and of course, we've done a lot of the heavy lifting to make the famous old school game:

[asteroids game in p5](https://editor.p5js.org/socalledsound/sketches/gKX3rFKhl)

Next class, we'll look at collisions, and we'll be able to turn this sketch into a proper asteroid game, like this:



# adding noise

But I think that we can go even farther with this, and make it a lot more useful.  Lately, I've been interested in drawing more organically with p5, and making noisy shapes is one way I do that.  Compare these two circles:



The one on the left is made with noise, and vertexes, while the one on the right is just a circle.  Noise is a neat algorithm.  We could dig deeply into it, but I think that won't be too interesting until we use it a little bit.  We'll save that for next week.  For now, All we really need to know about noise is that it is a kind of smooth randomization.  Let's make some noisy asteroids and see how that goes.

To use noise in p5, all we need to do is pass in a location.  That location is the location of a specific position in a noise field.  If we pass in locations that are pretty close to each other, then the random offset that we introduce to whatever we're making will be smaller.

Which probably sounds a little abstract, so, let's just use it.

Before, we made our asteroid shape's points like this:


```

    numPoints = 12
  circlePoints = Array.from({length: numPoints}, (el, idx) => {
    const theta = (360/numPoints) * idx
    return ({
        x: centerX + cos(theta) * r + random(-r, 0),
        y:  centerY + sin(theta) * r + random(-r, 0),
    })
  })

```

Now, in place of the random value between -r and 0, let's use noise.

First, we get the x/y coordinates:

```

    circlePoints = Array.from({length: numPoints}, (el, idx) => {
    const theta = (360/numPoints) * idx
    const x1 = centerX + cos(theta) * r
    const y1 = centerY + sin(theta) * r

    })
  })

```

Then, we'll get some noise.  So I'll call noise and pass in that x and y value, but also multiply each value by .002 to diminish the noise value.


```
            const n = noise(x1 * 0.002, y1 * 0.002)

```

Then, I'll map that very small noise value, which is between 0 and 1, into a range that we can see in our drawing:

```
            const offset = map(n, 0, 1, -100, 100)

```

And finally add it to the original x1/y1 point.


```
                circlePoints = Array.from({length: numPoints}, (el, idx) => {
                const theta = (360/numPoints) * idx
                const x1 = centerX + cos(theta) * r
                const y1 = centerY + sin(theta) * r
                const n = noise(x1 * res, y1 * res)
                const offset = map(n, 0, 1, -100, 100)
                return ({
                    x: x1 + offset,
                    y: y1 + offset,
                })
            })

```

It's a bit complicated, but I think it has a really nice effect, particularly at small and subtle values.  It adds something irregular, and almost hand-drawn.  

Here's a sketch where you can use a slider to play with the amount of noise:

[noisy circle](https://editor.p5js.org/socalledsound/sketches/yr-5mAmHh).

We'll use noise again later in the semester and talk about it more then, but if you want to learn more about it and some nifty ways to use it in p5, here's a [series of videos](https://www.youtube.com/watch?v=Qf4dIN99e2w) by Daniel Shiffman on the topic!

# 6 in conclusion

SO, that was a lot.  But I hope you can see how fun working with your own shapes can be!

Here are some [animated tree rings](https://editor.p5js.org/socalledsound/sketches/ZdabVpSPf)

And here's a [noisy line](https://editor.p5js.org/socalledsound/sketches/HqEIfeqyy), or really a bunch of them. 

Particularly in these last two sketches, it's easy to see how the noise pattern remains consistent, as we select different points from it.

But.... if you refresh the page, you get a completely new noise pattern.

# 7 ok now it's your turn.  

Use beginShape and endShape to make a nifty shape or shapes with vertexes -- and throw in some noise if you feel like it!  See if you can add that new shape to the game/animation that you started making in the last assignment, or start over your new shape.  You may want to use Array.from() to generate your points!  Try some stuff and see what happens.