const DAY12 = {
    id: 12,
    async: true,
    unit: 'unit2',
    date: 'October 06, 2022',
    title: 'landscapes',
    assignment: 'landscape',
    description: `
    So far, we've focused our attention on the player avatar, and the mechanics of moving around.  
    Maybe now it's time to give our player somewhere to go.
    Today we're going to give our little snake a way to go off the edges of it's world...and learn how
    we can follow it off the edge.
    We'll learn about the translation matrix: translating, rotating, scaling the view of a p5 sketch.
    
    `
    ,
    // add maze photo here 
    illustrationURL:'https://res.cloudinary.com/chris-kubick/image/upload/v1664478910/Screen_Shot_2022-09-29_at_12.14.55_PM_rllqph.png',
    discussionQuestions: [
        ``
    ],
    inClassDemo: [

        {
            title: 'transformations',
            link: 'https://editor.p5js.org/socalledsound/sketches/UGQE7kkJm'
        },
        {
            title: 'scrolling landscape game',
            link: 'https://editor.p5js.org/socalledsound/sketches/-FCpkdk0E'
        },
        {
            title: 'snakey with game class',
            link: 'https://editor.p5js.org/socalledsound/sketches/oMnOAV7Zd'
        },
        {
            title: 'snakey with start button',
            link: 'https://editor.p5js.org/socalledsound/sketches/w2PDNwf4z'
        },
        {
            title: 'snakey with wider scrolling landscape',
            link: 'https://editor.p5js.org/socalledsound/sketches/FLcIvyL6K'
        },
        {
            title: 'snakey with dying',
            link: 'https://editor.p5js.org/socalledsound/sketches/evy_GaDiQ'
        },


        // {
        //     title: '',
        //     link: ''
        // },
        {
            title: 'maze game',
            link: 'https://editor.p5js.org/socalledsound/sketches/S0saQ1QzL'
        },
        {
            title: 'two types of food',
            link: 'https://editor.p5js.org/socalledsound/sketches/v4sO9NgKy'
        },
        // {
        //     title: 'tiled game with spritesheet',
        //     link: ''
        // },

    

        // {
        //     title: 'mario clouds with castle at end',
        //     link: ''
        // },
       
    ],
    inspirationLinks: [   

        {
            linkText: 'four fold',
            linkSrc: 'https://js13kgames.com/games/fourfold/index.html',
        },
        {
            linkText: '404 laundry not found',
            linkSrc: 'https://js13kgames.com/games/404-laundry-not-found/index.html',
        },
        {
            linkText: 'astray',
            linkSrc: 'https://games.wwwtyro.net/astray-2/index.html',
        },
   
        {
            linkText: 'geoguessr',
            linkSrc: 'https://www.geoguessr.com/'
        },
        {
            linkText:"Bill Viola - the night journey",
            linkSrc:"https://www.youtube.com/watch?v=zL1_twK2NDc"
        },

        {
            linkText:"Corey Arcangel - Super mario Clouds",
            linkSrc:"http://www.coryarcangel.com/things-i-made/2002-001-super-mario-clouds"
        },
        {
            linkText:"San Andreas Animal Cam",
            linkSrc:"http://sanandreasanimalcams.com/"
        },
        {
            linkText:"Burn Out",
            linkSrc:"https://vimeo.com/53038609"
        },
        {
            linkText:"city of drones",
            linkSrc:"http://cityofdrones.io/"
        },
        // {
        //     linkText: '',
        //     linkSrc: '',
        // },
        // {
        //     linkText: '',
        //     linkSrc: '',
        // },
        // {
        //     linkText: '',
        //     linkSrc: '',
        // },
        // {
        //     linkText: '',
        //     linkSrc: '',
        // },
        {
            linkText: 'flow field',
            linkSrc: 'https://editor.p5js.org/enickles/sketches/JBjMz8Ph2',
        },
       
        ],
        techLinks: [
            
            {
                linkText: 'maze generator in p5 with daniel shiffman',
                linkSrc: 'https://www.youtube.com/watch?v=HyK_Q5rrcr4',
            },
            {
                linkText: 'pausing maze generator (use arrow key to step through)',
                linkSrc: 'https://socalledsound.github.io/maze-generator-pausing/',
            },
            {
                linkText: 'perlin noise 3d landscape with daniel shiffman',
                linkSrc: 'https://www.youtube.com/watch?v=IKB1hWWedMk',
            },
            {
                linkText: 'my p5 version of that perlin noise landscape',
                linkSrc: 'https://editor.p5js.org/socalledsound/sketches/daLyawjn-',
            },

            {
                linkText: 'perlin noise mountains',
                linkSrc: 'https://github.com/socalledsound/perlin-mountains-2',
            },
            {
                linkText: 'a (very) simple 3d driving game in p5',
                linkSrc: 'https://github.com/socalledsound/simple-3d-driving-game',
            },

            {
                linkText: ' game : in the modulator',
                linkSrc:'https://socalledsound.github.io/modulator-game/',
            },
   
            
            // {
            //     linkText:'keycode is deprecated, generally use key instead',
            //     linkSrc: 'https://stackoverflow.com/questions/35394937/keyboardevent-keycode-deprecated-what-does-this-mean-in-practice',
            // },
            // {
            //     linkText:'remember window.addEventListener() ? -- you can also use it for keyboard input!',
            //     linkSrc: 'https://editor.p5js.org/socalledsound/sketches/NBosLc6cQ',
            // },

            // {
            //     linkText:"make angry birds with p5.js and matter.js",
            //     linkSrc:"https://thecodingtrain.com/CodingChallenges/138-angry-birds.html"
            // },

            // {
            //     linkText: 'build space invaders with daniel shiffman',
            //     linkSrc: 'https://thecodingtrain.com/CodingChallenges/005-space-invaders-p5.html',
            // },
            // {
            //     linkText: 'frogger in p5.js',
            //     linkSrc: 'https://editor.p5js.org/codingtrain/sketches/crMMFw8vD',
            // },
            // {
            //     linkText: 'code super mario in vanilla js (25 parts!  maybe save it for later?)',
            //     linkSrc: 'https://www.youtube.com/watch?v=g-FpDQ8Eqw8',
            // },

            // {
            //     linkText: 'come to think of it, an hour to build tetris is probably more appropriate!',
            //     linkSrc: 'https://www.youtube.com/watch?v=H2aW5V46khA',
            // },

            // {
            //     linkText: 'super stupid landscape game',
            //     linkSrc: 'https://editor.p5js.org/socalledsound/sketches/cjxO852kb',
            // },
            // // {
            // //     linkText: "soundlands, a badlands clone I've been working on",
            // //     linkSrc: 'https://github.com/socalledsound/soundgame-badlandsclone',
            // // },
            // {
            //     linkText: 'happy wanderer code from class',
            //     linkSrc: 'https://github.com/socalledsound/happy-wanderer',
            // }

        ], 
        videos: [

            // {
            //     linkText: 'mario game 11: coin collisions (+bounding box)',
            //     linkSrc: 'https://youtu.be/45tkBBKOi2o',
            // },
            // {
            //     linkText: 'mario game 12: goomba 1',
            //     linkSrc: 'https://youtu.be/IODifDMBgUQ',
            // },
            // {
            //     linkText: 'mario game 13: goomba collisions',
            //     linkSrc: 'https://youtu.be/2JpxgyoOI_I',
            // },
            // {
            //     linkText: 'mario game 14: game over - last steps',
            //     linkSrc: 'https://youtu.be/ieVixlQGzDY',
            // },
        ],  

}  

export default DAY12




// Today we are going to step up our game a bit, literally, and talk about game STATE.
// Just like we previously realized that we can back out and up of our code to make a Coin class
// and a Mario class, we can back up and out even farther to make a Game.  We can store everything
// in the game world in there, and this means we will have a single source of truth for our game,
// which is always deeply satisfying.  Watch the vids and come to class for more on this very big topic.