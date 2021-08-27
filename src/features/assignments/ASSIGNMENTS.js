import DAY1_WORKSHOP_MD from './assignments_markdown/day1.workshop.md';
import DAY2_WORKSHOP_MD from './assignments_markdown/day2.workshop.md';
import DAY3_WORKSHOP_MD from './assignments_markdown/day3.workshop.md';
import DAY4_WORKSHOP_MD from './assignments_markdown/day4.workshop.md';
import DAY5_WORKSHOP_MD from './assignments_markdown/day5.workshop.md';
import DAY6_WORKSHOP_MD from './assignments_markdown/day6.workshop.md';
import DAY7_WORKSHOP_MD from './assignments_markdown/day7.workshop.md';
import DAY8_WORKSHOP_MD from './assignments_markdown/day8.workshop.md';
import DAY9_WORKSHOP_MD from './assignments_markdown/day9.workshop.md';
import DAY10_WORKSHOP_MD from './assignments_markdown/day10.workshop.md';
import DAY11_WORKSHOP_MD from './assignments_markdown/day11.workshop.md';
import DAY12_WORKSHOP_MD from './assignments_markdown/day12.workshop.md';
import DAY13_WORKSHOP_MD from './assignments_markdown/day13.workshop.md';
import DAY14_WORKSHOP_MD from './assignments_markdown/day14.workshop.md';
import DAY15_WORKSHOP_MD from './assignments_markdown/day15.workshop.md';
import DAY16_WORKSHOP_MD from './assignments_markdown/day16.workshop.md';
import DAY17_WORKSHOP_MD from './assignments_markdown/day17.workshop.md';
import DAY18_WORKSHOP_MD from './assignments_markdown/day18.workshop.md';
import DAY19_WORKSHOP_MD from './assignments_markdown/day19.workshop.md';
import DAY20_WORKSHOP_MD from './assignments_markdown/day20.workshop.md';
import DAY21_WORKSHOP_MD from './assignments_markdown/day21.workshop.md';
import DAY22_WORKSHOP_MD from './assignments_markdown/day22.workshop.md';
import DAY23_WORKSHOP_MD from './assignments_markdown/day23.workshop.md';
import DAY24_WORKSHOP_MD from './assignments_markdown/day24.workshop.md';
import DAY25_WORKSHOP_MD from './assignments_markdown/day25.workshop.md';
import DAY26_WORKSHOP_MD from './assignments_markdown/day26.workshop.md';
import DAY27_WORKSHOP_MD from './assignments_markdown/day27.workshop.md';
import DAY28_WORKSHOP_MD from './assignments_markdown/day28.workshop.md';
import DAY29_WORKSHOP_MD from './assignments_markdown/day29.workshop.md';
import DAY30_WORKSHOP_MD from './assignments_markdown/day30.workshop.md';
import DAY31_WORKSHOP_MD from './assignments_markdown/day31.workshop.md';

// import DAY8_WORKSHOP_MD from './assignments_markdown/day8.workshop.md';


//export const ASSIGNMENT_TITLES = [  'final-final','proto-final',  'sketchy-final', 'sockets and servers', 'hiro', 'shade', 'WEBGL', 'selfies', 'fun with fourier', 'project 2: goldberg machine', 'loading....', 'boids', 'enemy mine', 'games without players', 'SPRITES', 'new Player','pendulum music', 'fun fun function',  'project 1', 'listening', 'collecting', 'jeremy bearimy', 'can haz meme' , 'painting with css part 2', 'painting with css part 1'];
export const ASSIGNMENT_TITLES = [
    'hello!',
    ''
]

export const ASSIGNMENT1 = {
    id: 1,
    title : 'intro',
    description : ``,
    markdown: DAY1_WORKSHOP_MD,
}

export const ASSIGNMENT2 = {
    title : 'resistance',
    description : ``,
    markdown: DAY2_WORKSHOP_MD,
}

export const ASSIGNMENT3 = {
    title : 'switches',
    description : ``,

    markdown: DAY3_WORKSHOP_MD,
}

export const ASSIGNMENT4 = {
    title : 'sensing',
    description: ``, 
    markdown: DAY4_WORKSHOP_MD,
}

export const ASSIGNMENT5 = {
    title : 'collection',
    description :``,
    markdown: DAY5_WORKSHOP_MD,
}

export const ASSIGNMENT6 = {
    title : 'hardware',
    description : ``,
    markdown: DAY6_WORKSHOP_MD,
}

export const ASSIGNMENT7 = {
    title : 'jamz',
    description : "Today we're going to get a little bit deeper with a pretty tricky kind of side effect: listening, which means, waiting for user input.  And we're going to build a sampler!  details after the click", 
    markdown: DAY7_WORKSHOP_MD,
}

export const ASSIGNMENT8 = {
    title : 'project 1',
    description : "Keep working on those projects!  I've pushed the due date back until Sept 26, Saturday -- we're going to try foregoing the usual crit method.  Please submit your project by then, and then be sure to leave some thoughtful comments for at least ten of your peers... or for all of them!",
    markdown: DAY8_WORKSHOP_MD,
    project: 1,
    projectRoute: '/unit1/project/project1',
}

export const ASSIGNMENT9 = {
    title : 'whew',
    description : "Finish project 1 if you haven't already!  If you need help with something leave a question in the discussion area or send me an email.  Leave comments for at least ten of your peers over the weekend, and remember to be honest.  Let them know what is and isn't working.  Be kind but truthful!  If someone looks great for the big dance but has a super long piece of toilet paper stuck on their shoe dragging behind them, be sure to let them know you love their shoes but they need to deal with that toilet paper.  And, if you have any unsubmitted assignments from project 1, go back and submit them!",
    markdown: DAY9_WORKSHOP_MD,
}

export const ASSIGNMENT10 = {
    title : 'fun fun function',
    description : "We'll kick off unit 2 today by introducing a new library, one of my favorites, p5.js.  P5 draws to a <canvas /> in the browser, which lets us do pretty amazing pixel-based animations, including fun things like webGL.  It has many great tools for an artist, like shapes and curves and image filters and sound and video capabilities.  Most of these things are available using various web APIs, but they're a little bit easier in p5, and I like easy!  We're also going to take a deeper dive into what I consider to be the most important and fundamental aspect of javascript: functions.",
    markdown: DAY10_WORKSHOP_MD,
}

export const ASSIGNMENT11 = {
    title : "pendulum music",
    description : "Today we'll make a model of Steve Reich's pendulum music, which will also get us animating in more interesting ways.  Along the way, we'll also make models of waves in motion and explore the ultra-useful sin and cosin functions.  We'll build a nity pendulum in class.  But for your assignment submission, I want you to write, in psuedo-code, a Hero object, the hero of your unit 2 game.  I'll show you a few examples of what I mean in class, and at the end of the assignment page.",
    markdown: DAY11_WORKSHOP_MD,
}


export const ASSIGNMENT12 = {
    title : 'new Player',
    description : "Today we'll learn a little more about object-oriented programming in javascript as we create a player for the game that we're going to make over the next few classes. We'll also talk a bit about object oriented programming in javascript and learn about something called a sprite sheet.",
    markdown: DAY12_WORKSHOP_MD,
}


export const ASSIGNMENT13 = {
    title : 'SPRITES',
    description : "Today we're going to learn a few ways to animate sequences of images, and also some ways to create short sequenced animations and chain them together or trigger them based on program state.  We'll make this horse to the right run and jump, we'll make an alien dance, and we'll animate the sprite sheets that you just made, too.  And we'll talk just a little about easing functions.",
    markdown: DAY13_WORKSHOP_MD,
}


export const ASSIGNMENT14 = {
    title : 'games without players',
    description : "Today we work on landscapes, in multiple different ways.  We'll make landscapes use images, vector graphics, tile-based sprite sheets, and more.  You should submit a landscape (website) for your game today!",
    markdown: DAY14_WORKSHOP_MD,
}


export const ASSIGNMENT15 = {
    title : 'enemy mine',
    description :  "Today we'll look at some foolproof ways to make enemies.  Fun, right?  ",
    markdown: DAY15_WORKSHOP_MD,
}


export const ASSIGNMENT16 = {
    title : 'boids',
    description : "Today we're going to build a classic game AI known as boids, which is one of the simplest examples of an emergent system.  It will be a deeper dive into object oriented programming and I think it'll be pretty fun.  After we're done with that, I'll work with you on your projects.  Don't be shy about reaching out to schedule some time outside of class, I'm here for you this week if you need some extra help!  The final final due date for this midterm project is this coming Saturday at midnight, but if you finish before Weds. at midnight, and want a crit, we'll do that Thursday!",
    markdown: DAY16_WORKSHOP_MD,
}


export const ASSIGNMENT17 = {
    title : 'loading....',
    description : "Today we finish up project 2 by adding an intro page.  This is where we can orient people for the experience that they're about to have, and also where we can load files so that they're available for our site!  Upload your splash page, to the gallery when you're done with it.",
    markdown: DAY17_WORKSHOP_MD,
}


export const ASSIGNMENT18 = {
    title : 
    'fun with fourier',
    description : "Today we'll look at using microphone input in a browser.  We'll learn to use the p5.AudioIn, p5.Amplitude and p5.FFT objects to draw interesting shapes and lines on the screen, and make our first foray into visualizing music.  This will get even more interesting in a few weeks when we learn to use shaders!",
    markdown:  DAY18_WORKSHOP_MD,
}


export const ASSIGNMENT19 = {
    title : 'selfies',
    description : "Today we turn to camera input.  We'll look at some ways to gather, respond to and manipulate pixels.  We'll finish by making a rudimentary version of those selfie filters that are so popular on snapchat and insta.",
    markdown:  DAY19_WORKSHOP_MD,
}


export const ASSIGNMENT20 = {
    title : 'WEBGL',
    description : "Today we'll get started learning about webGL, looking at the various ways that the WEBGL canvas is different from the 2d canvas, and drawing 3d shapes to the screen.  For your assignment, you should find (or make) an .obj file and load it into a p5 sketch.  And don't worry, I'll show you what an obj file is and how to make or get one!",
    markdown: DAY20_WORKSHOP_MD,
}

export const ASSIGNMENT21 = {
    title : 'shade',
    description : "Today we look at materials, light and shaders!  Shaders are a bit tricky but they can create some amazing visual effects.  We'll learn the basics, apply them to our web models and even look at how to make them respond to sound.",
    markdown: DAY21_WORKSHOP_MD,
}


export const ASSIGNMENT22 = {
    title : 'hiro',
    description : "Today we look at aframe, and how it helps us create immersive and augmented realities.  We can use most of the ideas we've already learned about using p5 and as a bonus, we can even write aframe code in p5 using a the aframp5 library.",
    markdown: DAY22_WORKSHOP_MD,
}


export const ASSIGNMENT23 = {
    title : 'sockets and servers',
    description : "Today in workshop we'll learn how to build a web server, host it at heroku, and then connect multiple browsers to that server.  ",
    markdown: DAY23_WORKSHOP_MD,
}


export const ASSIGNMENT24 = {
    title : 'sketchy-final', 
    description : "Today we;ll use what we learned last class to use a library called johny five, that let's us connect our web sketches to inputs like volume knobs and switches and to putputs like LEDs and motors.",
    markdown: DAY24_WORKSHOP_MD,
}

export const ASSIGNMENT25 = {
    title : 'proto-final',
    description : "Today we're going learn how to use websockets to add a real-time chat client to our game or other projects.  But, first, we're going to have to learn how to take in text input!  I made a few videos showing you how to do that, and how to wire up a sockets chat with that input.  Click through for more.",
    markdown: DAY25_WORKSHOP_MD,
}
 
export const ASSIGNMENT26 = {
    title : 'working-final',
    description : "today we learn the basics of adding persistent data to our web sites.  if for instance, we want to have users, or give them the ability to upload images, or text, we can set up a backend database to keep track of that stuff.  it's surprisingly easy to do so these days, and we'll learn how, today.",
    markdown: DAY26_WORKSHOP_MD,
}

export const ASSIGNMENT27 = {
    title :  'testing-final',
    description : "hopefully, you've finished your final project and are ready to test it!  but seriously, who am I kidding?  we'll do some last-minute coding today and also just generally polish stuff up, and if you have the bandwidth, be sure to check out the videos about Promises, CORS and using firebase console, all of which we will need to understand in order to use p5 and firebase successfully together.",
    markdown: DAY27_WORKSHOP_MD,
}

export const ASSIGNMENT28 = {
    title : 'final-final',
    description : 'final project!  yay!',
    markdown: DAY28_WORKSHOP_MD
    ,
}

export const ASSIGNMENT29 = {
    title : '',
    description : '',
    markdown: DAY29_WORKSHOP_MD,
}


export const ASSIGNMENT30 = {
    title : '',
    description : '',
    markdown: DAY30_WORKSHOP_MD,
}

export const ASSIGNMENT31 = {
    title : '',
    description : '',
    markdown: DAY31_WORKSHOP_MD,
}




