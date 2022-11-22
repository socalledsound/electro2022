const DAY19 = {
    id: 19,
    async: false,
    unit: 'unit4',
    date: 'November 1, 2022',
    title: 'resistance',
    assignment: 'proposal',
    illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/v1666217519/images_vmmtyb.jpg',
    description: `
        Today we'll dive into electrical currents, learn how electrons flow, and how we can resist them and in the
        process produce light and sound.  We'll wire up some speakers, learn about amps and signal flow,
        and hook some light bulbs, er, light emitting diodes up to a battery and learn why resistors
        are crucial.  I'll also show you a simple oscillator that I built -- and give you a chance to build it
        yourself.  And, we'll take a look at a nifty little way of making music called 'no input mixing'.
    `,
    // reading: [
    //     {
    //         linkText:`Steve Reich: Music As A Gradual Process`,
    //         linkSrc : 'https://drive.google.com/file/d/1clbQPUwUO2FBwk4dfUnQH0XXuS-b0ORr/view?usp=sharing',
    //     },
    // ],
    // discussionQuestions: [
    //     `What does this Steve Reich article have to do with art, anyway??  I thought it was about music`,
    //     `What does this mean: 'Then, the composer isn't privy to anything'?`,
    //     `How would you characterize this idea of 'music as a process' and how is it different from other types of music?`,
    // ],
    videos: [
        // {
        //     linkText: 'pendulums 1 -- sinning',
        //     linkSrc: 'https://youtu.be/P3yjUGc1M_s',
        // },
        // {
        //     linkText: 'pendulums 2 -- waveforms',
        //     linkSrc: 'https://youtu.be/1J1MFk3htlk',
        // },
        // {
        //     linkText: 'pendulums 3 -- pendulums, actually',
        //     linkSrc: 'https://youtu.be/dD3-OpvQs28',
        // },

        // {
        //     linkText: 'How electricity works (video)',
        //     linkSrc: 'https://mail.google.com/mail/u/0/#inbox/GTvVlcSKjsgMSHvLDwpjDsFtJGlllkXwDMVKZLvqrzNRXKrRsqDffSNfxpQKcBmNgXVqQXwnvztMM?projector=1',
        // },
    ],
    inspirationLinks: [
        {
            linkText:"toshimaru nakamaru, no input mixing board",
            linkSrc:"https://www.youtube.com/watch?v=qTi0hom6r44"
        },
        {
            linkText:"toshimaru nakamura on his approach to sound",
            linkSrc:"https://www.youtube.com/watch?v=dqfGbtqDVDk"
        }, 
               {
            linkText: 'christina kubisch cloud',
            linkSrc: 'https://www.sfmoma.org/artwork/2017.387/',
        },
        {
            linkText: 'christina kubisch interview/sfmoma',
            linkSrc: 'https://www.youtube.com/watch?v=k2Yjfdnbtgw',
        },
        {
            linkText: 'christina kubisch scores for memory article',
            linkSrc: 'https://edoc.hu-berlin.de/bitstream/handle/18452/21835/11-CBarbut_kunsttexte2020AP.pdf',
        },
        {
            linkText: 'echoes made visible, bill fontana',
            linkSrc: 'https://www.youtube.com/watch?v=6ymrP6uFlFw',
        },

        {
            linkText:"I am Sitting in A Room",
            linkSrc:"https://www.youtube.com/watch?v=fAxHlLK3Oyk"
        },
        {
            linkText:"Alvin Lucier on I Am Sitting In A Room",
            linkSrc:"https://www.youtube.com/watch?v=v9XJWBZBzq4"
        },
        {
            linkText:"feeback loops and interaction design",
            linkSrc:"https://www.smashingmagazine.com/2013/02/designing-great-feedback-loops/"
        },
        {
            linkText:"robert morris, box with the sound of tis own making",
            linkSrc:"https://www.wikiart.org/en/robert-morris/box-with-the-sound-of-its-own-making-1961"
        },
        {
            linkText:"terry fox cones of silence",
            linkSrc:"https://www.artsy.net/artwork/terry-fox-cones-of-silence"
        },
        {
            linkText:"sitting in a room cutup",
            linkSrc:"https://editor.p5js.org/socalledsound/sketches/rkw3-54uX"
        },

        {
            linkText:"recording filtered sounds to disk",
            linkSrc:"https://editor.p5js.org/socalledsound/sketches/B1TnzOmum"
        },
        {
            linkText:"no input mixer setup guide",
            linkSrc:"https://www.youtube.com/watch?v=Hv1VQL4zTKc"
        },
      
        {
            linkText: 'granular synthesis in p5',
            linkSrc: 'https://github.com/socalledsound/p5-multi-grains',
        },
        {
            linkText: 'P5 reverb',
            linkSrc: 'https://p5js.org/reference/#/p5.Reverb',
        },

    ],
    techLinks: [

        {
            linkText: 'How electricity works (video)',
            linkSrc: 'https://mail.google.com/mail/u/0/#inbox/GTvVlcSKjsgMSHvLDwpjDsFtJGlllkXwDMVKZLvqrzNRXKrRsqDffSNfxpQKcBmNgXVqQXwnvztMM?projector=1',
        },
        {
            linkText: "ohm's law explained",
            linkSrc: 'youtube.com/watch?v=HsLLq6Rm5tU&list=PLWv9VM947MKi_7yJ0_FCfzTBXpQU-Qd3K&index=7',
        },
        {
            linkText: 'electronic basics: resistors',
            linkSrc: 'https://www.youtube.com/watch?v=7w5I-KbJ1Sg'
        },
        {
            linkText: 'diodes explained (led = light emitting diode)',
            linkSrc: 'https://www.youtube.com/watch?v=Fwj_d3uO5g8&list=PLWv9VM947MKi_7yJ0_FCfzTBXpQU-Qd3K&index=8&t=197s',
        },
        {
            linkText: 'multimeters, measuring resistance',
            linkSrc: 'https://learn.adafruit.com/multimeters/resistance',
        },
        {
            linkText: 'how speakers make sound',
            linkSrc: 'https://animagraffs.com/loudspeaker/',
        },
        {
            linkText: 'how to make a home-made speaker',
            linkSrc: 'http://www.josepino.com/?homemade-hifi-speaker',
        },
        {
            linkText:"how to make a contact microphone",
            linkSrc:"http://www.instructables.com/id/Make-a-Contact-Microphone/"
        },     

        {
            linkText: `intro to electrical circuits at khan academy`,
            linkSrc: 'khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/circuits-part-1',
        },
        {
            linkText: 'parts express website',
            linkSrc: 'https://www.parts-express.com/',
        },
        {
            linkText: 'meditations on speaker impedance',
            linkSrc: 'http://www.prestonelectronics.com/audio/Impedance.htm'
        },
        {
            linkText: 'calculating the resistor value for an led',
            linkSrc: 'https://www.etechnog.com/2019/01/resistor-value-calculation-for-led.html',
        },
        
        {
            linkText: 'bare conductive paint',
            linkSrc: 'https://www.bareconductive.com/collections/electric-paint',
        },
        {
            linkText: '',
            linkSrc: '',
        },
        {
            linkText: '',
            linkSrc: '',
        },
        {
            linkText: '',
            linkSrc: '',
        },
        // {
        //     linkText: 'sinning circles',
        //     linkSrc: 'https://github.com/socalledsound/sinning-circles',
        // },
        // {
        //     linkText: 'noisy pendulums at github',
        //     linkSrc: 'https://github.com/socalledsound/noisy-pendulums',
        // },
        // {
        //     linkText: 'a pendulum in p5',
        //     linkSrc: 'https://editor.p5js.org/socalledsound/sketches/zJ3nVmVRA'
        // },
        // {
        //     linkText: 'color pendulums, also inspired by Steve Reich',
        //     linkSrc: 'https://github.com/socalledsound/pendulum-colors',
        // },
        // {
        //     linkText: 'wavey oscillations',
        //     linkSrc: 'https://editor.p5js.org/socalledsound/sketches/DDN5qjcrE',
        // },
        // {
        //     linkText: 'a bird with osciallting waves that I made',
        //     linkSrc: 'https://editor.p5js.org/socalledsound/sketches/EYQmgTJuZ',
        // },
        // {
        //     linkText: 'a little thing I made recently with fm synthesis',
        //     linkSrc: 'https://github.com/socalledsound/music-of-our-times',
        // },
        // {
        //     linkText: 'FM synthesis',
        //     linkSrc: 'https://editor.p5js.org/p5/sketches/Sound:_FreqModulation',
        // },

        // {
        //     linkText: 'p5 oscillator',
        //     linkSrc: 'https://p5js.org/reference/#/p5.Oscillator',
        // },
        // {
        //     linkText: 'P5 reverb',
        //     linkSrc: 'https://p5js.org/reference/#/p5.Reverb',
        // },
        // {
        //     linkText: 'harmonic oscillator',
        //     linkSrc: 'https://editor.p5js.org/claesjohnson/sketches/oDs_BdFS',
        // },

        // {
        //     linkText: 'my pendulum on codepen',
        //     linkSrc: 'https://codepen.io/Fleischut/pen/WNQYXVp',
        // },
        // {
        //     linkText: 'three.js pendulum on codepen',
        //     linkSrc: 'https://codepen.io/iondrimba/pen/zbOBRO?editors=1010',
        // },

        // {
        //     linkText:'wave pendulum in three.js',
        //     linkSrc:'https://github.com/franspaco/pendulums',
        // },

        // {
        //     linkText:"9.1: JavaScript setTimeout() Function - p5.js Tutorial",
        //     linkSrc:"https://www.youtube.com/watch?v=nGfTjA8qNDA"
        // },

        // {
        //     linkText:"9.2: JavaScript setInterval() Function - p5.js Tutorial",
        //     linkSrc:"https://www.youtube.com/watch?v=CqDqHiamRHA"
        // },
        // {
        //     linkText:"reich oscillators",
        //     linkSrc:"https://editor.p5js.org/socalledsound/sketches/SkjKp2Udm"
        // },

        // {
        //     linkText: 'a little multilooper thing I got started the other day',
        //     linkSrc: 'https://github.com/socalledsound/multi-looper',
        // },

    ],
}
export default DAY19


  
// title: 'G PI O',
// assignment: 'gpio',
// illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/v1632428208/side-effects/gpio_asgkmt.png',
// description: `
// Today I'm going to demonstrate some of the neat things that are possible with a raspberry pi.
// Maybe you bought one, maybe you will after today.  Or maybe it's just a nice thing to know about.
// However which way you slice it, it's what we're going to be talking about for a few days!
// `,
// videos: [
//     {
//         linkText: '',
//         linkSrc: '',
//     },
// ],
// inspirationLinks: [
//     {
//         linkText: 'Clock Clock 24 on a Raspberry Pi using Web Technologies',
//         linkSrc: 'https://manu.ninja/clock-clock-24-on-a-raspberry-pi-using-web-technologies/',
//     },
// ],
// techLinks: [
//     {
//         linkText: 'Clock Clock 24 on a Raspberry Pi using Web Technologies',
//         linkSrc: 'https://manu.ninja/clock-clock-24-on-a-raspberry-pi-using-web-technologies/',
//     },
// ],

// }
