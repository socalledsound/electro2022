//unit 1
import DAY1 from './days/unit0/DAY1'
import DAY2 from './days/unit0/DAY2'
import DAY3 from './days/unit0/DAY3'
//unit 1
import DAY4 from './days/unit1/DAY4'
import DAY5 from './days/unit1/DAY5'
import DAY6 from './days/unit1/DAY6'
import DAY7 from './days/unit1/DAY7'
//unit 2
import DAY8 from './days/unit2/DAY8'
import DAY9 from './days/unit2/DAY9'
import DAY10 from './days/unit2/DAY10'
import DAY11 from './days/unit2/DAY11'
import DAY12 from './days/unit2/DAY12'
import DAY13 from './days/unit2/DAY13'
import DAY14 from './days/unit2/DAY14'
import DAY15 from './days/unit2/DAY15'
//unit 3
import DAY16 from './days/unit3/DAY16'
import DAY17 from './days/unit3/DAY17'
import DAY18 from './days/unit3/DAY18'
import DAY19 from './days/unit3/DAY19'
import DAY20 from './days/unit3/DAY20'
import DAY21 from './days/unit3/DAY21'
//unit 4
import DAY22 from './days/unit4/DAY22'
import DAY23 from './days/unit4/DAY23'
import DAY24 from './days/unit4/DAY24'
import DAY25 from './days/unit4/DAY25'
import DAY26 from './days/unit4/DAY26'
// unit 5
import DAY27 from './days/unit5/DAY27'
import DAY28 from './days/unit5/DAY28'
import DAY29 from './days/unit5/DAY29'
import DAY30 from './days/unit5/DAY30'
import { PROJECT0 } from '../../projects/PROJECTS_DATA/PROJECT0'
import { PROJECT1 } from '../../projects/PROJECTS_DATA/PROJECT1'
import { MIDTERM_PROJECT } from '../../projects/PROJECTS_DATA/MIDTERM_PROJECT'
import { PROJECT3 } from '../../projects/PROJECTS_DATA/PROJECT3'
import { FINAL_PROJECT } from '../../projects/PROJECTS_DATA/FINAL_PROJECT'
import UNIT0LOGO from '../../../assets/purecss-francine.png'
import UNIT2LOGO from '../../../assets/pitagoru1.png'
import UNIT4LOGO from '../../../assets/hvbrd2.jpg'

export const UNIT0 = {
    id: 100,
    title: 'unit 0 : circuits',
    unit: 'unit0',
    illustrationURL: UNIT0LOGO,
    overview: `In this first unit, we'll be getting 
    our bearings with the tools that we'll use: electical circuits, inputs, outputs, code.  
    We'll start by learning how to use this thing called the circuit playground express, learn
    how to wire up speakers and LEDs, and also learn about event listeners.`,
    days: [DAY1, DAY2, DAY3],
    project: PROJECT0,
}

export const UNIT1 = {
    id: 101,
    title: 'unit 1 : collection',
    unit: 'unit1',
    illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/v1597205509/side-effects/FA8224F5-0759-480F-B9FF-38D9320412C4_ycjanr.jpg',
    overview: `
    This unit is about collections, otherwise known as data.  
    What makes a meaningful collection?  
    What are some of the strategies we can use to tame data, or set it free?  
    Data is to coding as paint is to painting.  
    In this unit we will learn some things about storing and manipulating data but also spend a good ammount of time 
    thinking about why we should do this, and explore various approaches to organizing and presenting collections.  
    Most importantly, we'll discuss how to introduce just enough fuckery to keep things spicy and fun.  
    We'll look at the work of a wide range of artists who have tackled these problems in interesting ways: 
    Eva Hesse, Agnes Martin, Francis Alys, Joseph Kosuth and, of course, Iggy Azalea.   
    And many others  .  Wait, what?  Data, Eva Hesse, you ask?  
    All will be made clear, and I hope it will be a fun process.
    To see the details, click below:
    `,
    project: PROJECT1,
    days: [DAY4, DAY5, DAY6, DAY7]
    
}

export const UNIT2 = {
    id: 102,
    title: 'unit 2 : pitagoru suitchi',
    unit: 'unit2',
    illustrationURL: UNIT2LOGO,
    overview: `
    In 'Homo Ludens', Johan Huizinga argues that everything productive in human society comes from games. We create, by playing.
    In this unit we'll be thinking about systems -- generative compositions which unfold in time -- such as animations and video games.
    I'm taking the famous 'Goldberg Machines', or 'Pitagoru Suitchi', as they're called in Japan,
     as inspiration for this unit, not just because those machines are senesless and wonderful, but also because they are 
     processes.  We'll be focusing on artworks that are processes in this unit, and I hope what you learn here will cause 
     you to look at all kinds of work differently.  We'll also switch gears slightly, and move our attention to the 
     javascript in its native context, the web.  
    You're probably familiar with a 'rube goldberg' machine, where the main character of a cartoon wakes up, stumbles out of bed,
    and without doing anything at all, gets their teeth brushed and finds himself sitting at a table with breakfast and a cup of coffee in
    front of them.  
    In a lot of ways, these imaginary machines are the playful precursors to today's robotics startups.
    We're going to try to make our own playful versions of Goldberg machines in this unit, 
    using javascript.  These can be games, with scores and treasure chests and all the rest, 
    or they can just be abstract playful interactions.  If you want to, you can even make physical, real-world
    machines.  
    And I will be showing you how to use your CPE to control your games, if they're written in p5!
    So you can use things like an accelerometer, microphone input, or the touch sensitive buttons to control a screen. 
    The key thing is, you must make a repeatable process, that unfolds in time  More details after the click.  
    `,
    project: MIDTERM_PROJECT,
    days: [DAY8, DAY9, DAY10, DAY11, DAY12, DAY13, DAY14, DAY15]
}

export const UNIT3 = {
    id: 103,
    title: 'unit 3 : sensing',
    unit: 'unit3',
    illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/v1597869667/side-effects/Untitled_xko40r.png',
    overview: `
        In this unit we are going to take some of the things that we learned in unit 2 and apply them to the realm of user input.
       Where before we were able to take in some input from a button, and output it to an led to tell us what the value of that input was;
       now we will take in streams of data and similarly output streams of data.  We've moved from singular inputs and outputs and into the
       realm of SYSTEMS.  I know it probably doesn't sound like that much fun, but it is!   
    `,
    project: PROJECT3,
    days: [DAY16, DAY17, DAY18, DAY19, DAY20, DAY21]
}

export const UNIT4 = {
    id: 104,
    title: 'unit 4 : three D',
    unit: 'unit4',
    illustrationURL: UNIT4LOGO,
    overview: `So far, we've been in flatland.  
    We've dealt with, first, binary or ranged values, and the things
    we can do with them, like trigger sound files; then, two
    dimensional values, where we have x and y axes and shapes
    like circles and squares.
    In this unit, we go to planet Z, the third dimension, which let's 
    us make shapes that have depth, or the illusion of depth.
    This also lets us intereact with our world in...'deeper' ways.
    IN this unit we'll explore 'expanded' realities, in other words,
    augmented realy, virtual reality and all the other realities
    that we can dream up.
    `,
    project: FINAL_PROJECT,
    days: [DAY22, DAY23, DAY24, DAY25, DAY26]   
}

export const UNIT5 = {
    id: 105,
    title: 'unit 5 : finally',
    unit: 'unit5',
    illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/v1605154288/side-effects/kissclipart-diagram-clipart-diagram-client-amazon-elasticache-2e20865f5cfcf417_fjydbg.png',
    overview: "in which you take off from the nest and soar like a bird into unknown spaces",
    project: FINAL_PROJECT,
    days: [DAY27, DAY28, DAY29, DAY30]   
}