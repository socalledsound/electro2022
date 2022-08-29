<!-- ### pendulum music -->

### landscapes

Today we are going to look at several different ways to make a landscape for a game.

As we talked about in class, a game can be entirely landscape -- just as a film can be a film where 'nothing happens'.

And, personally, I tend towards games where the landscape dominates, where the experience is somewhat zen and what a player is doing is inhabiting an interesting space, and maybe reflecting on that space, or solving puzzles in that space. But, even in the most active game, the landscape plays a huge role, in transporting us to a certain space and time, and inviting us into the gamic world, what the Dutch theorist Jan Huizinga called the 'magic circle' where the rules of the regular world cease to exist.

In general, I think it's more interesting as a game creator and also as a game player to deal with games that use generative backgrounds, backgrounds that are created on the fly, from a set of resources. Sometimes these resources are just vector graphics that are made by the game engine as it goes along, or they can be generated from image assets, often organized into a specific type of sprite sheet called a tile map.

I really like a site called js13k for games, because the games are bit-sized and also because the games aren't perfect, I feel like I can learn a lot from what people are doing well...and also what they're not doing so well.

A nice example of an entirely generative, abstract background is [fourfold](https://js13kgames.com/games/fourfold/index.html) and a game that uses a tile map would be like [404 laundry not found](https://js13kgames.com/games/404-laundry-not-found/index.html). They're both fun! There are advantages to each method.

We'll look at both of these ways of working today.

Now, before we start, today we're not going to talk about the aspect of the game landscape in which the game landscape is actually part of the 'enemy'; the character may die, for instance, if they fall in a pool of boiling lava.

I'm going to save that for Thursday when we talk about collisions.

Today, we're just dealing with the actual landscape. And we're going to start with images. Just one image, for a background landscape.

[Here](https://editor.p5js.org/socalledsound/sketches/cjxO852kb) is a simple game I made, in the p5 online editor.

It's a landscape game, with landscape paintings as the background.

All of the recognizable components of a 'game' are here....a player (hand), an objective, which maybe isn't clear at first(go to a new landscape) and a foil, in this case, time and the door. There's a scoreboard at the top and if you don't get to the door in time, the game ends. I commented the code pretty extensively and I hope it makes sense. We'll focus on other aspects of this game in coming days, but for now, let's just look at the landscape. Which is just an image. At line 247, I invoke a class called Level, and pass in a new image, each time I make a new level. That image is the landscape for that level.

```
 level = new Level(imgs[counter]);

```

Simple, right?

And then in the Level, there's a method called display, which draws the image, and then draws the door, the player hand, and the scoreboard on top of the landscape.

```
  display(){
    image(this.bg, 0, 0, width, height);
    this.door.display();
    this.player.display();

    //draw score
    drawScoreBox();
    drawScore();
    drawTime();
  }

```

So, that's one way to make a landscape.

Now, what if I want the landscape to move? Well, one super straightforward thing to do is to just make a super long image, and scroll it. Like [here](https://editor.p5js.org/socalledsound/sketches/C87J_3aU4).

I used GIMP to make a 5000 x 500 pixel image and then, when the player clicks the mouse, the ball moves, and the background moves as well, I simply move the image left by decreasing the value of the x position of the image. I should probably put something in to do something like end the level when the value gets too far into the negative, right? But this is just an example.

We can obviously also use an image like this in combination with more dynamic methods; [here](https://editor.p5js.org/socalledsound/sketches/-FCpkdk0E) I'm drawing some dynamically generated "clouds" on top of the background.

Let's take a closer look at those clouds, actually.

<!-- Obviously, the entire game background could also just be the clouds!  I could draw a gradient background in p5 and just have clouds float across the background, like [here](). -->

Personally, I really like that kind of game landscape, because it really blurs the line between animation and game, and I like to write code, I like to figure out formulas for creating images. But the choice is really up to you.

On the other hand, making game assets in some kind of image software, or drawing them by hand and digitizing them, can also be fun. I think that probably the most common approach is to make small game asset files -- often combined together on a sprite sheet, and then use those elements to compose the game. We're going to look at that approach now, and we're going to use p5.play, like we did last time. Let's start with a really simple example that I pulled from the p5.play examples. The original example is [here](https://molleindustria.github.io/p5.play/examples/index.html?fileName=sprites_with_sheet.js), you can see that there's a landscape drawn using image tiles, and also a player. I've pulled out just the landscape aspects [here](https://editor.p5js.org/socalledsound/sketches/nP6MDCoLL).

#NOTE!!!
there's a bug in the p5.play library right now! And it's in the drawFrame() method that we're using today. I fixed it, a pull request has been submitted I think....but as I said before, this library is kind of old and not maintained super well. So, DON'T USE THE P5.PLAY LIBRARY FROM THEIR WEBSITE WITH DRAWFRAME. Use the version of the p5.play library that I'm using [here](https://github.com/socalledsound/SE-unit2-day14-spritescape/tree/01-start), I corrected the drawFrame() function from the original library.

Previously, when we loaded in sprite sheets, we loaded them as animations and then we drew them with the animation function in our draw loop.

Here, we're doing it a little differently. First, in preload, we load some json data that describes the sprite sheet, and then we load the sprite sheet, passing in the image and the json data:

```

function preload() {
  // Load the json for the tiles sprite sheet
  loadJSON('tiles.json', function(tile_frames) {
    // Load tiles sprite sheet from frames array once frames array is ready
    tile_sprite_sheet = loadSpriteSheet('tiles_spritesheet.png', tile_frames);
  });
}

```

Then, in the draw loop we can just call the drawFrame() method of the sprite sheet, and pass in the name of the cell we want to draw (which the spritesheet object got from the json file!) and a location where we want to display that frame.

```
  tile_sprite_sheet.drawFrame('signExit.png', 700, 280);
  tile_sprite_sheet.drawFrame('signRight.png', 0, 280);

```

And, we can also draw a bunch of frames, in a draw loop:

```
  // Draw the ground tiles
  for (var x = 0; x < 840; x += 70) {
    tile_sprite_sheet.drawFrame('snow.png', x, 350);
  }

```

Here, we draw the same frame each time through the loop, and we get the x value from the loop itself, being careful to incrememnt x not by 1, but by 70, each time, from one side of screen to the other. So x will be [0, 70, 140, 210, ...] Make sense???

Similarly, I can go to the tiles.json file, find the name of any tile that I want to use, and plug it into draw frame. Like for instance:

```
  tile_sprite_sheet.drawFrame('boxCoin.png', 70, 70);
  tile_sprite_sheet.drawFrame('boxCoinAlt.png', 140, 70);

```

So, we can draw a landscape for our game this way, constructing it from these tiles.

A modest improvement on this, would be to make some constants: a constant called TILE_SIZE set to the size of our tiles (70 pixels), and one for CANVAS_WIDTH and CANVAS_HEIGHT. That way we can get rid of all those pesky numbers and make less mistakes with our calculations. See it [here](https://github.com/socalledsound/SE-unit2-day14-spritescape/tree/02-constants)

```
const TILE_SIZE = 70;
const CANVAS_WIDTH = TILE_SIZE * 9;
const CANVAS_HEIGHT = TILE_SIZE * 6;

```

And our new draw loop:

```
function draw() {
  clear();
  background(0);

  // Draw the ground tiles
  for (var x = 0; x < CANVAS_WIDTH; x += TILE_SIZE) {
    tile_sprite_sheet.drawFrame('snow.png', x, CANVAS_HEIGHT - TILE_SIZE);
  }

  // Draw the sign tiles
  tile_sprite_sheet.drawFrame('signExit.png', CANVAS_WIDTH - TILE_SIZE, CANVAS_HEIGHT - TILE_SIZE * 2);
  tile_sprite_sheet.drawFrame('signRight.png', 0, CANVAS_HEIGHT - TILE_SIZE * 2);


  //draw some more stuff
  tile_sprite_sheet.drawFrame('boxCoin.png', TILE_SIZE, TILE_SIZE);
  tile_sprite_sheet.drawFrame('boxCoinAlt.png', TILE_SIZE * 2, TILE_SIZE);
}
```

I think the next step should probably be to also add a drawTile function. Something like [this](https://github.com/socalledsound/SE-unit2-day14-spritescape/tree/03-drawTile):

```

function drawTile(tilename, gridX, gridY){
    tile_sprite_sheet.drawFrame(tilename, TILE_SIZE * gridX, TILE_SIZE * gridY);
}

```

And now we can add constants for total number of rows and columns:

```
const TOTAL_COLUMNS = 9;
const TOTAL_ROWS = 6;
const CANVAS_WIDTH = TILE_SIZE * TOTAL_COLUMNS;
const CANVAS_HEIGHT = TILE_SIZE * TOTAL_ROWS;
```

and start using some really simple single digit math, basically dividing our screen up into a 9x6 grid.

```

function draw() {
 clear();
 background(0);

 // Draw the ground tiles
 for (var x = 0; x < TOTAL_COLUMNS; x++) {
   drawTile('snow.png', x, TOTAL_ROWS - 1)
 }

 // Draw the sign tiles
 drawTile('signRight.png', 0, TOTAL_ROWS - 2);
 drawTile('signExit.png', 0, 0);

 //draw some more stuff
 drawTile('dirtCliffLeft.png', 1, 1);
 drawTile('dirtCliffRight.png', 2, 1);
 // drawTile('boxCoinAlt.png', 3, 1);
 drawTile('boxCoinAlt.png', 4, 1);

 drawTile('grassCliffLeft.png', 4, 3);
 drawTile('grassCliffRight.png', 5, 3);
}
```

Nice huh? So that's pretty easy. You just call drawTile whenever you want to draw a tile, and pass in x/y values on that 9x6 grid.

One way we can keep track of those values -- which we'll need to do if we want to for instance walk around on this landscape -- is to store the values in objects, right? Something like this:

```
const dirtCliffLeft = {
    x: 1,
    y: 1
}

const dirtCliffRight = {
    x: 2,
    y: 1
}

```

And then pass those values into our drawTile function at the appropriate place.

But what if, instead, we make a comprehensive table of what's at every location?

There's a lot of different ways to do this, and most of the time it's going to be better to begin from some kind of key. You can read [Chapter 16](https://eloquentjavascript.net/16_game.html) of Eloquent javascript for a nice rundown on one way to do this; or the Mozilla page [here](https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps) for another interesting example if you're interested.

But since I've already got this code that draws the background of this level, I think I'll just keep that code as my key. Like [this](https://github.com/socalledsound/SE-unit2-day14-spritescape/tree/04-grid).

First, I'll make an array of arrays.

```
const rows = Array.from({length: TOTAL_ROWS});
rows.forEach((row, i) => {
  rows[i] = Array.from({ length: TOTAL_COLUMNS}, e => null);
})

```

That gives us 6 arrays with 9 values each, and they all start with a value of null.

Then, I'll move our code from before into setup, and add a line to the drawTile function that add the name of the image to our new data structure.

```
rows[gridY][gridX] = tilename;

```

And then I'll make a function that will draw that whole new datastructure, like this:

```
function drawLevel(){
  rows.forEach((row, j) => {
    row.forEach((item, i) => {
      if(item != null){
        drawTile(item, i, j);
      }
    })
  })

```

And now my draw loop is super simple:

```
function draw() {
  clear();
  background(0);
  drawLevel();
}
```

Now one neat thing is, I can re-draw my whole level, any time I like. I can also check the location of anything else in the sketch, or I can make stuff disappear or mutate if I want!

We're really only scratching the surface here. You can also make a map, [generatively](https://editor.p5js.org/nyxtom/sketches/PdfVfmohi) from tiles. And all sorts of other stuff. But I feel like that's enough for today!

For today's submission I want you to make some sort of interactive, generative landscape. This can be a sequence of images, or a scrolling image, or a combination of images and vector graphics, or a tile-based landscape, just get in there and play and have some fun. Upload your landscape to github and host it at github pages as a website!

<!-- So, let's go back and do those clouds a different way, to get warmed up.  I've put together a little starter [sketch](); -->
