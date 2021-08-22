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
import { PROJECT1 } from './projects/PROJECT1'
import { MIDTERM_PROJECT } from './projects/MIDTERM_PROJECT'
import { PROJECT3 } from './projects/PROJECT3'
import { FINAL_PROJECT } from './projects/FINAL_PROJECT'


export const UNIT0 = {
    id: 100,
    title: 'circuits',
    unit: 'unit0',
    overview: "In this first unit, we'll be getting our bearings with the tools that we'll use: electical circuits, inputs, outputs, code.",
    days: [DAY1, DAY2, DAY3]
}

export const UNIT1 = {
    id: 101,
    title: 'colllections',
    unit: 'unit1',
    overview: "This unit is about collections, otherwise known as data.  What makes a meaningful collection?  What are some of the strategies we can use to tame data, or set it free?  Data is to coding as paint is to painting.  In this unit we will learn some things about storing and manipulating data but also spend a good ammount of time thinking about why we should do this, and explore various approaches to organizing and presenting collections.  Most importantly, we'll discuss how to introduce just enough fuckery to keep things spicy and fun.  We'll look at the work of a wide range of artists who have tackled these problems in interesting ways: Eva Hesse, Agnes Martin, Francis Alys, Joseph Kosuth and, of course, Iggy Azalea.   And many others  .  Wait, what?  Data, Eva Hesse, you ask?  All will be made clear, and I hope it will be a fun process.",
    project: PROJECT1,
    days: [DAY4, DAY5, DAY6, DAY7]
    
}

export const UNIT2 = {
    id: 102,
    title: 'goldberg machine',
    unit: 'unit2',
    overview: "In this unit we'll be thinking about systems, using Goldberg's famous machines as our model.  After getting a degree in engineering from UC Berkeley in 1904, Rube Goldberg quickly realized that working as an engineer for the fore-runner of EBMUD just wasn't for him.  Instead, he did the sensible thing and became a cartoonist.  Over the years, his drawings of intricate and whimsical machines have become iconic.  We're going to try to make our own playful versions of Goldberg machines in this unit, using javascript.  These can be games, or they can just be playful interactions.  Read more after the click.",
    project: MIDTERM_PROJECT,
    days: [DAY8, DAY9, DAY10, DAY11, DAY12, DAY13, DAY14, DAY15]
}

export const UNIT3 = {
    id: 103,
    title: 'net work',
    unit: 'unit3',
    overview: "",
    project: PROJECT3,
    days: [DAY16, DAY17, DAY18, DAY19, DAY20, DAY21]
}

export const UNIT4 = {
    id: 104,
    title: 'three D',
    unit: 'unit4',
    overview: "",
    project: FINAL_PROJECT,
    days: [DAY22, DAY23, DAY24, DAY25, DAY26]   
}

export const UNIT5 = {
    id: 105,
    title: 'finally',
    unit: 'unit5',
    overview: "",
    project: FINAL_PROJECT,
    days: [DAY27, DAY28, DAY29, DAY30]   
}