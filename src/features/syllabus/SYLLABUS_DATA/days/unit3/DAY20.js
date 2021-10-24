const DAY20 = {
    id: 20,
    async: true,
    unit: 'unit4',
    date: 'November 2, 2021',
    title: 'into the multiverse',
    assignment: 'transform',
    description: `
    Today we're going to help our little squares and circles realize that they can grow into cubes and spheres.
    With the help of WEBGL, we're going to start using a third dimension.
    So we'll learn about some basic 3d shapes, and also how to position them in 3d space.
    To do this, we'll use the transformation matrix, which allows us to translate
    and rotate the space in which the canvas is drawn.  
    It's kind of nifty, but there are a few pitfalls, and it really helps to remember a thing or two about perspective. 
    So check out the videos, then make your own 3d landscape and go to the assignment page and submit it!
    `,
    // In p5, that process is actually pretty straightforward, we just tell the canvas that we want it to be a WEBGL
    // canvas
    // Today we're going to break the second wall
    // So far, all of these techniques we've been using in this unit perform a kind of mapping.
    // We take in an input of some sort, say, a bunch of 
    // In preparation for working in three dimensions, we need to think about our canvas a little differently. 
    illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/v1607400295/side-effects/images_2Fdb637365-55fc-4477-a8eb-9faf08a77361_l17u4o.png',

    videos: [
        {
            linkText: 'intro to web GL and transforms 1 -- solar system',
            linkSrc: 'https://youtu.be/pb1oA9D_LPo',
        },
        {
            linkText: 'intro to web GL and transforms 2 -- landscape',
            linkSrc: 'hhttps://youtu.be/cT7Yurmp5yY',
        },
        {
            linkText: '',
            linkSrc: '',
        },
        {
            linkText: '',
            linkSrc: '',
        },
    ],
    inspirationLinks: [
        {
            linkText: 'CPU vs GPU mona lisa paint gun video',
            linkSrc: 'https://www.youtube.com/watch?v=fKK933KK6Gg',
        },
        {
            linkText: 'bees and bombs on twitter',
            linkSrc: 'https://twitter.com/beesandbombs?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        },
        {
            linkText: 'nicolas felton: creating meaningful stories out of data',
            linkSrc: 'http://videos.theconference.se/nicholas-felton-creating-meaningful-stories-out',
        },
        {
            linkText: 'Robert Smithson, Yucatan Mirror Displacements',
            linkSrc: 'https://www.guggenheim.org/artwork/5322',
        },
        {
            linkText: 'bees and bombs on twitter',
            linkSrc: 'https://twitter.com/beesandbombs?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        },
        {
            linkText: 'a nice cube of cubes by Joe Ryba',
            linkSrc: 'https://twitter.com/joe_ryba/status/1451739405383835650',
        },
        {
            linkText: 'butterflies',
            linkSrc: 'https://github.com/socalledsound/better-butterflies',
        },
        {
            linkText: 'gradient cubes',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/EbBW9bjW-',
        },
        {
            linkText: '&& more dimensional boxes',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/0nfVTRe8e',
        },

        {
            linkText: 'hvbrd game',
            linkSrc: 'https://github.com/charliegerard/hvbrd-sockets',
        },
        {
            linkText: 'webGL stars in p5',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/HDnzYOp4d',
        },

        {
            linkText: 'webGL sound boxes, pixels, fft',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/STHJQaBF4',
        },
        {
            linkText: 'sound-circle-waves on a sphere',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/Lv1ebN2QBg',
        },

        {
            linkText: '',
            linkSrc: '',
        },
        // {
        //     linkText:"a multiplayer simon game I made with sockets",
        //     linkSrc:"https://github.com/socalledsound/mmm-simon-heroku"
        // },
        // {
        //     linkText: 'my version of the multiplayer tetris game (tutorial below)',
        //     linkSrc: 'https://tetris-clone-6000.herokuapp.com/#n4agum',
        // },
        // {
        //     linkText: 'a little multiplayer sound instrument',
        //     linkSrc: 'https://sound-circles.herokuapp.com/',
        // },




    ],
    techLinks: [
        {
            linkText: `code from today's videos`,
            linkSrc: 'https://github.com/socalledsound/landscape-solar-system',
        },  
        {
            linkText: 'perlin noise mountains landscape',
            linkSrc: 'https://github.com/socalledsound/perlin-mountains',
        }, 
        {
            linkText: 'blender - see resources page for more blender links!',
            linkSrc: 'https://www.blender.org/',
        },
        {
            linkText: 'coding train series of videos on webGL',
            linkSrc: 'https://www.youtube.com/watch?v=nqiKWXUX-o8&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_',
        },   
       
        {
            linkText: 'p5.js transformations',
            linkSrc: 'https://genekogan.com/code/p5js-transformations/',
        },        {
            linkText: `a little more math on transformation matrixes if you're interested`,
            linkSrc: 'https://forum.patagames.com/posts/t501-What-Is-Transformation-Matrix-and-How-to-Use-It',
        }, 

      
        {
            linkText: '',
            linkSrc: '',
        },        {
            linkText: '',
            linkSrc: '',
        },        {
            linkText: '',
            linkSrc: '',
        },        {
            linkText: '',
            linkSrc: '',
        },        {
            linkText: '',
            linkSrc: '',
        },
        // {
        //     linkText: 'Getting started with Node and VS code',
        //     linkSrc: 'https://code.visualstudio.com/docs/nodejs/nodejs-tutorial',
        // },
        // {
        //     linkText: 'the node package manager',
        //     linkSrc: 'https://www.npmjs.com/',
        // },
        // {
        //     linkText: 'a nice intro to node and p5.js',
        //     linkSrc: 'https://creative-coding.decontextualize.com/node/',
        // },    
        // {
        //     linkText: 'what are web sockets?',
        //     linkSrc: 'https://pusher.com/websockets',
        // },

        // {
        //     linkText:"make agar.io with DS",
        //     linkSrc:"https://www.youtube.com/watch?v=JXuxYMGe4KI&vl=en"
        // },
        // {
        //     linkText: 'making an interactive skateboarding game using web sockets',
        //     linkSrc: 'https://medium.com/@devdevcharlie/hvbrd-c6266ee31461',
        // },
        // {
        //     linkText: 'great multiplayer tetris game tutorial (in 3 parts)(uses websockets but not socket.io)',
        //     linkSrc: 'https://www.youtube.com/watch?list=PLS8HfBXv9ZWW49tOAbvxmKy17gpsqWXaX&v=H2aW5V46khA',
        // },
        // {
        //     linkText: 'nice tutorial on making a smartphone controlled game',
        //     linkSrc: 'https://css-tricks.com/how-to-make-a-smartphone-controlled-3d-web-game/',
        // },
        // {
        //     linkText: 'https://github.com/socalledsound/simple-sound-circle-game',
        //     linkSrc: 'simple sound circle game repo',
        // },
        // {
        //     linkText: 'multiplayer sound circle game repo',
        //     linkSrc: 'https://github.com/socalledsound/sound-circle-server',
        // },
        {
            linkText: '',
            linkSrc: '',
        },
        {
            linkText: 'gradient cubes',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/EbBW9bjW-',
        },
    ],

}


export default DAY20