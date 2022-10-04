const DAY11 = {
    id: 11,
    async: false,
    unit: 'unit2',
    date: 'October 4, 2022',
    title: 'collision',
    assignment: 'change',
    illustrationURL:'https://res.cloudinary.com/chris-kubick/image/upload/v1598458992/side-effects/B0B7D0BB-F967-4D6C-92EB-34B9E9DF164D_phz7by.jpg',
    description: `
        Determining when one character is intersecting with another character or, as we've already seen, when a character is going off screen,
        is one important hurdle we have to leap over in order to make a decent game. If a character is on the ground, we want them to 'hit' the ground,
        ie not fall off the screen.  And if a character pushes open the door of the apothecary, we want to be sure that our character is 
        rewarded by giving them the ability to push that door open.  Today we'll learn a bit about circle/circle and rectangle/rectangle collisions,
        and how to add some collisions to our evolving project.
    `,
    discussionQuestions: [
        `
        You should be thinking about how you want to make your character or
        game experience evolve -- and how various types of collisions or
        clicks can help your game player accomplish those evolutions.
        Designing user experiences is really just about how you help
        people collide with your software!
        
        `
    ],
    inClassDemo: [

        {
            title:'snakey w/Player -- day 11 starter',
            link: 'https://editor.p5js.org/socalledsound/sketches/uytzSu7kX',
        },
        {
            title:'snakey w/Player and Food',
            link: 'https://editor.p5js.org/socalledsound/sketches/s9yba6BwI',
        },

        {
            title:'snakey - with growing tail',
            link: 'https://editor.p5js.org/socalledsound/sketches/6ReWoLBvF',
        },

        {
            title:'snakey - with multifoods',
            link: 'https://editor.p5js.org/socalledsound/sketches/6ReWoLBvF',
        },


        {
            title:'circle circle collision',
            link: 'https://editor.p5js.org/socalledsound/sketches/A0LTXpa9Y',
        },
        {
            title:'circle circle collision moving',
            link: 'https://editor.p5js.org/socalledsound/sketches/nhI2uDnRC',
        },
        {
            title:'bounding circles - asteroids',
            link: 'https://editor.p5js.org/socalledsound/sketches/7WsndMRlZ-',
        },

        {
            title:'circles and squares with gravity + ground',
            link: 'https://editor.p5js.org/socalledsound/sketches/IU_gaDARe',
        },
        {
            title:'more complex circle collision with bounce',
            link: 'https://p5js.org/examples/motion-circle-collision.html',
        },

        {
            title:'circle + lines collision',
            link: 'https://editor.p5js.org/socalledsound/sketches/27UZFZRxW',
        },


        {
            title:'rolling circles with sloped ground',
            link: 'https://editor.p5js.org/socalledsound/sketches/5uaSJy5g1',
        },

    ],
    inspirationLinks: [
        {
            linkText:'fluid box physics',
            linkSrc: 'https://labs.fluuu.id/box-physics/'
        },
        {
            linkText: '1000 unique postcards',
            linkSrc:'https://twitter.com/andreasgysin/status/956131218386509824',
        },
        {
            linkText: 'planck examples',
            linkSrc:'https://piqnt.com/planck.js/',
        },
        {
            linkText: 'a rube goldberg machine project',
            linkSrc:'https://sites.google.com/bedford.k12.va.us/fms-stem/activities/engineering/rube-goldberg-machine',
        },
        {
            linkText: ' game : in the modulator',
            linkSrc:'https://socalledsound.github.io/modulator-game/',
        },
        {
            linkText: 'badland game that inspired the game above',
            linkSrc: 'https://www.youtube.com/watch?v=Cs-9F3xAyqc',
        },
        {
            linkText: 'music of our times, a song with collisions',
            linkSrc:'https://github.com/socalledsound/music-of-our-times',
        },
        {
            linkText: 'step sequencer that you can modify by playing breakout',
            linkSrc:'https://github.com/socalledsound/stepping-out',
        },

        

        ],
        techLinks: [
            {
                linkText: 'mouse following in p5.js',
                linkSrc: 'https://medium.com/@maxswann/p5-js-mouse-following-tutorial-using-vectors-188481008b99'
            },
            {
                linkText: 'Objects and Classes Example: Butterfly in p5.js',
                linkSrc: 'https://editor.p5js.org/socalledsound/sketches/s_M6cyyxN',
            },

            {
                linkText:"snake game tutorial",
                linkSrc:"https://www.youtube.com/watch?v=OMoVcohRgZA"
            },
            {
                linkText:"a simple snake game in p5",
                linkSrc:"https://editor.p5js.org/socalledsound/sketches/Rtk-3emZh"
            },
            {
                linkText: '3d snake game in p5!!  (nice!)',
                linkSrc: 'https://editor.p5js.org/socalledsound/sketches/N1syHlF1W'
            },

            {
                linkText: 'build space invaders with daniel shiffman',
                linkSrc: 'https://thecodingtrain.com/CodingChallenges/005-space-invaders-p5.html',
            },
            {
                linkText: 'frogger in p5.js',
                linkSrc: 'https://editor.p5js.org/codingtrain/sketches/crMMFw8vD',
            },
            // {
            //     linkText: 'a slightly more complex p5 animation with various media',
            //     linkSrc: 'https://editor.p5js.org/socalledsound/sketches/BkEc6TIO7',
            // },
            {
                linkText:"basic game mechanics in p5",
                linkSrc:"https://medium.com/@kellylougheed/make-your-first-game-with-p5-js-38bfb308a671"
            },
            {
                linkText: 'javascript classes',
                linkSrc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes',
            },
            {
                linkText: 'classes in javascript with daniel shiffman',
                linkSrc: 'https://www.youtube.com/watch?v=T-HGdc8L-7w',
            },
            {
                linkText: 'planck.js is a nice physics library',
                linkSrc: 'https://github.com/shakiba/planck.js/',
            },
            {
                linkText: 'animated dashed lines in p5',
                linkSrc: 'https://gorillasun.de/blog/animated-dashed-lines-in-p5js'
            },
            {
                linkText: 'nice collision detection article',
                linkSrc: 'https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics'
            },
        ], 
       
        
        videos: [

        //    {
        //         linkText: 'mario game github repo (with a branch for each video)',
        //         linkSrc: 'https://github.com/socalledsound/p5-mario-game',
        //     },

            // {
            //     linkText: 'circle circle collision',
            //     linkSrc: 'https://www.jeffreythompson.org/collision-detection/circle-circle.php'
            // },
  


    
      
            // {
            //     linkText: 'tic tac toe game',
            //     linkSrc: 'https://github.com/socalledsound/classless-tic-tac-toe',
            // },
            // {
            //     linkText: 'Objects and Classes Example: Butterfly in p5.js',
            //     linkSrc: 'https://editor.p5js.org/socalledsound/sketches/s_M6cyyxN',
            // },
 
            // {
            //     linkText:"snake game tutorial",
            //     linkSrc:"https://thecodingtrain.com/CodingChallenges/115-snake-game-redux.html"
            // },
            // {
            //     linkText: 'build space invaders with daniel shiffman',
            //     linkSrc: 'https://thecodingtrain.com/CodingChallenges/005-space-invaders-p5.html',
            // },
            // {
            //     linkText: 'frogger in p5.js',
            //     linkSrc: 'https://editor.p5js.org/codingtrain/sketches/crMMFw8vD',
            // },
        ]
                        // {
            //     linkText: 'a slightly more complex p5 animation with various media',
            //     linkSrc: 'https://editor.p5js.org/socalledsound/sketches/BkEc6TIO7',
            // },

        //     {
        //         linkText: 'javascript classes',
        //         linkSrc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes',
        //     },
        //     {
        //         linkText: 'classes in javascript with daniel shiffman',
        //         linkSrc: 'https://www.youtube.com/watch?v=T-HGdc8L-7w',
        //     },
        // ],

        }

export default DAY11

  // videos: [
        //     // {
        //     //     linkText: 'javascript morsels: objects and this',
        //     //     linkSrc : 'https://www.youtube.com/watch?v=UQWpnXc3tPI',
        //     // },
        //     // {
        //     //     linkText: 'branching with git',
        //     //     linkSrc: 'https://youtu.be/iioxcp7gC7Q',
        //     // },
        //     // {
        //     //     linkText: 'mario game 1: Coin  no class',
        //     //     linkSrc: 'https://youtu.be/SPzJ84y4qxc',
        //     // },
        //     // {
        //     //     linkText: 'mario game 2: Coin class',
        //     //     linkSrc: 'https://youtu.be/_fVjGDlJqlo',
        //     // },
        //     // {
        //     //     linkText: 'mario game 3: CHALLENGE: write Mario',
        //     //     linkSrc: 'https://youtu.be/TJDZob2UPAI',
        //     // },
        //     // {
        //     //     linkText: 'mario game 4: ANSWER: Mario Class ',
        //     //     linkSrc: 'https://youtu.be/qlzRqo-_lRQ',
        //     // },
        //     // {
        //     //     linkText: 'mario game 5: run, mario, run!',
        //     //     linkSrc: 'https://youtu.be/YeUpImYgil8',
        //     // },
        //     // {
        //     //     linkText: 'mario game 6: run, better, mario!',
        //     //     linkSrc: 'https://youtu.be/c52epUJghsg',
        //     // },
        //     // {
        //     //     linkText: 'mario game 7: jump, mario',
        //     //     linkSrc: 'https://youtu.be/73GudfuavTk',
        //     // },
        //     // {
        //     //     linkText: 'non orthogonal reflection',
        //     //     linkSrc: 'https://p5js.org/examples/motion-non-orthogonal-reflection.html',
        //     // },
        //     // {
        //     //     linkText: 'bouncy vectors directional heading',
        //     //     linkSrc: 'https://editor.p5js.org/jonfroehlich/sketches/A6t4YPD3',
        //     // },
        // ],  