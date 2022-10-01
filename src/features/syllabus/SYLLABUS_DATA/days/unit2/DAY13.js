const DAY13 = {
    id: 13,
    async: false,
    unit: 'unit2',
    date: 'October 11, 2022',
    title: 'enemy mine',
    assignment: 'boids',
    description: `
    Let's talk about the baddies.  
    I want you to think about what an enemy might mean in your own artwork/ game.  
    Today we'll talk about foils, and spoils, and other things that our character might encounter as we 
    make our way towards our midterm project crit day.
    We're also going to take a look at some steering behaviors for AI characters in a game, 
    and build our own version of one of the most iconic of those systems, which is called Boids. 
    For your assignment, I want you to think about how you might incororporate an enemy into your game.
    You can submit an image of that enemy, or a word sketch, or an actual implementation, or you can submit
    your boids experiment.
    `,
    illustrationURL:'https://res.cloudinary.com/chris-kubick/image/upload/v1663201160/Screen_Shot_2022-09-14_at_5.18.58_PM_hfwk3q.png',
    reading: [
        // {
        //     linkText:`Steve Reich: Music As A Gradual Process`,
        //     linkSrc : 'https://drive.google.com/file/d/1clbQPUwUO2FBwk4dfUnQH0XXuS-b0ORr/view?usp=sharing',
        // },
        {
            linkText:`Daniel Shiffman, 'The Nature of Code', Chap.6`,
            linkSrc : 'https://natureofcode.com/book/chapter-6-autonomous-agents/',
        },
    ],

    discussionQuestions: [
        `are you an alien?  would you become one?  if not, why not?`,
        `do you have an enemy?`,
        `are trees sentient beings?`,
        `do robots deserve rights?`,
    ],
    inClassDemo: [


        { 
            title: 'wandering boids',
            link: 'https://editor.p5js.org/socalledsound/sketches/naiEO_W9g',
        },
        {
            title: 'snakey boids',
            link: 'https://editor.p5js.org/socalledsound/sketches/aU2h8E-Ul',
        },

        {
            title: 'seek behavior (slowly to a point)', 
            link: 'https://editor.p5js.org/socalledsound/sketches/CgIeAQP_p',
           
        },

        {
            title: 'pursue behavior',
            link: 'https://editor.p5js.org/socalledsound/sketches/MGivGyea3',
        },

        {
            title: 'wander behavior',
            link: 'https://editor.p5js.org/socalledsound/sketches/G2d-xJOJm',
           
        },
        {
            title: 'pursue + wander behavior',
            link: 'https://editor.p5js.org/socalledsound/sketches/8LzleTCkA',
        },
        {
            title: 'wander brush',
            link: ' https://editor.p5js.org/socalledsound/sketches/VMm2cEoq0',
        },

        {
            title: 'wander brush 3D',
            link: 'https://editor.p5js.org/socalledsound/sketches/AfkQ8ySO1',
        },
       

        {
            title: 'snakey -- adding autonomous player 1',
            link: 'https://editor.p5js.org/socalledsound/sketches/eSIXuN3_g',
           
        },

        {
            title: 'snakey -- collisions with other player',
            link: 'https://editor.p5js.org/socalledsound/sketches/CpZEjIzNs',
           
        },

        {
            title: 'snakey -- autonomous player with wander + seek',
            link: 'https://editor.p5js.org/socalledsound/sketches/FFRrW8a5N',
           
        },


            
    ],
    inspirationLinks: [
        {
            linkText: 'Handvaaska, by Ramsey Nasser and Jane Friedhoff',
            linkSrc: 'https://nas.sr/handv%C3%A4ska/',
        },
        {
            linkText: 'among us',
            linkSrc: 'http://www.innersloth.com/gameAmongUs.php',
        },
        {
            linkText: 'My Barbarian: Double Agency',
            linkSrc: 'https://vimeo.com/124203527',
        },
        {
            linkText: 'angela washko, the game',
            linkSrc: 'https://angelawashko.com/home.html',
        },
        {
            linkText: 'star choir',
            linkSrc: 'https://vimeo.com/441187530',
        },
        {
            linkText: 'star choir: nomads dissolution',
            linkSrc: 'https://vimeo.com/mybarbarian',
        },

        // {
        //     linkText: 'Alexander Gallowway: Gamic Action, Four Moments',
        //     linkSrc: 'https://com427fall2013ncsu.files.wordpress.com/2013/07/galloway_gamicaction.pdf',
        // },
        // {
        //     linkText: 'Ecosystem game environment',
        //     linkSrc: 'https://github.com/mimetaur/Ecosystem',

        // },
        // {
        //     linkText:"geoguessr game",
        //     linkSrc:"https://geoguessr.com/"
        // },
        // {
        //     linkText:"pursued game",
        //     linkSrc:"https://www.youtube.com/watch?v=CB0M648ROaI"
        // },	
        // {
        //     linkText:"Bill Viola - the night journey",
        //     linkSrc:"https://www.youtube.com/watch?v=zL1_twK2NDc"
        // },

        // {
        //     linkText:"Corey Arcangel - Super mario Clouds",
        //     linkSrc:"http://www.coryarcangel.com/things-i-made/2002-001-super-mario-clouds"
        // },
        // {
        //     linkText:"San Andreas Animal Cam",
        //     linkSrc:"http://sanandreasanimalcams.com/"
        // },
        // {
        //     linkText:"Burn Out",
        //     linkSrc:"https://vimeo.com/53038609"
        // },
        // {
        //     linkText:"city of drones",
        //     linkSrc:"http://cityofdrones.io/"
        // },

        // {
        //     linkText:"monument valley",
        //     linkSrc:"https://www.google.com/search?q=monument+valley+game&rlz=1C5CHFA_enUS704US704&espv=2&biw=1488&bih=933&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwjhwqLt9aTSAhXM1IMKHXCwAMYQ_AUIBigB"
        // },
        // {
        //     linkText:"myst",
        //     linkSrc:"https://www.google.com/search?q=myst+game&rlz=1C5CHFA_enUS704US704&espv=2&biw=1488&bih=933&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjOsZ7y9aTSAhUk94MKHanDAmUQ_AUIBygC"
        // },
        // {
        //     linkText:"katamari damacy - roll up the sun",
        //     linkSrc:"https://www.youtube.com/watch?v=uL2fX1FntnY"
        // },					
        // {
        //     linkText:"deprogrammed game",
        //     linkSrc:"http://www.deprogrammed.org/"
        // },
        // {
        //     linkText:"astray game - webGL",
        //     linkSrc:"http://wwwtyro.github.io/Astray/"
        // },
        // {
        //     linkText:"Dr. Langeskov, The Tiger, and The Terribly Cursed Emerald: A Whirlwind Heist",
        //     linkSrc:"https://www.youtube.com/watch?v=qYjSEEIJeps"
        // },
        // {						
        //     linkText:"tuple game",
        //     linkSrc:"http://games.ucla.edu/game/tupal#gallery-1"
        // },
        // {
        //     linkText:"camille utterback + romy achituv - text rain",
        //     linkSrc:"https://www.youtube.com/watch?v=f_u3sSffS78"
        // },
        // {
        //     linkText:"bodyspacemotionthings robert morris",
        //     linkSrc:"https://www.youtube.com/watch?v=IeUiL5vzSzA"
        // },
        // {
        //     linkText:"ay-o, rainbow room",
        //     linkSrc:"https://www.wikiart.org/en/ay-o/rainbow-environment-no-7-tactile-rainbow-room-1970"
        // },
        // {
        //     linkText:"yayoi kusama",
        //     linkSrc:"https://www.google.com/search?q=yayoi+kusama&sxsrf=ACYBGNRaaUBMsKhbt9cAt1xmeHQb3htXTw:1572931635511&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjwwo_7qtLlAhWOpZ4KHXEiBOYQ_AUIEigB&biw=3164&bih=714"
        // },

        // {
        //     linkText:"thomas saraceno - cloud cities",
        //     linkSrc:"https://studiotomassaraceno.org/"
        // },
        // {
        //     linkText:"cat heaven",
        //     linkSrc:"https://www.youtube.com/watch?v=B21YtuOrKRI"
        // },
        // {
        //     linkText:"carsten holler",
        //     linkSrc:"https://www.dezeen.com/2015/06/09/carsten-holler-decision-london-south-bank-hayward-gallery-playground-slides/"
        // },

        // {
        //     linkText: 'transforming the border wall into a teeter totter : rael san fratellio',
        //     linkSrc: 'https://www.youtube.com/watch?v=1bbeBo3te5E',
        // },
        // {
        //     linkText: 'frogger in p5.js',
        //     linkSrc: 'https://editor.p5js.org/codingtrain/sketches/crMMFw8vD',
        // },
        // {
        //     linkText: 'fourfold puzzle game from js13k',
        //     linkSrc: 'https://js13kgames.com/games/fourfold/index.html',
        // },

        // {
        //     linkText: '404 laundry not found',
        //     linkSrc: 'https://js13kgames.com/games/404-laundry-not-found/index.html',
        // },
        // {
        //     linkText: '[Sky][Muse], Margaret Noble ',
        //     linkSrc: 'https://www.openprocessing.org/sketch/972560/',
        // },
        // {
        //     linkText: 'nice landscape sketch i randomly found via google',
        //     linkSrc: 'https://editor.p5js.org/urbanatwork/sketches/4mV3Rj8P9',
        // },
        // {
        //     linkText: 'a different kind of generative landscape',
        //     linkSrc: 'https://p5js.org/examples/simulate-penrose-tiles.html',
        // },
        // {
        //     linkText: 'Plans for $400-billion new city in the American desert unveiled',
        //     linkSrc: 'https://www.cnn.com/style/article/telosa-marc-lore-blake-ingels-new-city/index.html',
        // }

        ],
        techLinks: [
            {
                linkText: 'Daniel Shiffman : flocking simulation',
                linkSrc: 'https://thecodingtrain.com/challenges/124-flocking-simulation',
            },
            {
                linkText: 'my version of boids, with wandering boid, at github',
                linkSrc: 'https://github.com/socalledsound/boids'
            },
            {
                linkText: 'boids with sound!  and step by step tutorial (by me), at github',
                linkSrc: 'https://github.com/socalledsound/SE-unit2-day16-boids'
            },
            {
                linkText: 'flow-field',
                linkSrc: 'https://editor.p5js.org/enickles/sketches/JBjMz8Ph2'
            },
            {
                linkText: '',
                linkSrc: ''
            },
            {
                linkText: '',
                linkSrc: ''
            },
            

            // {
            //     linkText: 'a super simple game with no classes!',
            //     linkSrc: 'https://github.com/socalledsound/game-no-classes-1'
            // },
            // {
            //     linkText: 'that same simple game with no classes but now with some draw functions!',
            //     linkSrc: 'https://github.com/socalledsound/game-no-classes-2'
            // },

            // {
            //     linkText: 'that same simple game with some images for the characters!',
            //     linkSrc: 'https://github.com/socalledsound/game-no-classes-3'
            // },
            // {
            //     linkText: 'and one last time, with a scoreboard!',
            //     linkSrc: 'https://github.com/socalledsound/game-no-classes-4'
            // },
            // {
            //     linkText: 'and finally, still no classes, but a little more complicated and a little more gamey....',
            //     linkSrc: 'https://github.com/socalledsound/game-no-classes-5'
            // },
            // {
            //     linkText: 'make an infinitely scrolling background for your game',
            //     linkSrc: 'https://www.geeksforgeeks.org/html5-game-development-infinitely-scrolling-background/',
            // },
            
            // {
            //     linkText: 'parallax scrolling',
            //     linkSrc: 'https://gamedevelopment.tutsplus.com/tutorials/parallax-scrolling-a-simple-effective-way-to-add-depth-to-a-2d-game--cms-21510',
            // },
            // {
            //     linkText: 'rendering a tile map from mdn',
            //     linkSrc: 'https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps',
            // },
            // {
            //     linkText: '2d generative tile map',
            //     linkSrc: 'https://editor.p5js.org/nyxtom/sketches/PdfVfmohi',
            // },
            // {
            //     linkText:"super stupid landscape game with comments",
            //     linkSrc:"https://editor.p5js.org/socalledsound/sketches/cjxO852kb"
            // },
            // {
            //     linkText:"scrolling background",
            //     linkSrc:"https://editor.p5js.org/socalledsound/sketches/C87J_3aU4"
            // },
            // {
            //     linkText:"scrolling background with clouds",
            //     linkSrc:"https://editor.p5js.org/socalledsound/sketches/-FCpkdk0E"
                
            // },
            // {
            //     linkText:"tilesheet repo in multiple branches with an accompanying text tutorial if interested in tilesheet landscape for your game",
            //     linkSrc:"https://github.com/socalledsound/SE-unit2-day14-spritescape/tree/master"
            // },
            // {
            //     linkText: 'p5 oscillator sketch inspired by Steve Reich',
            //     linkSrc: 'https://editor.p5js.org/socalledsound/sketches/SkjKp2Udm',
            // },
            // {
            //     linkText: 'bubble herd',
            //     linkSrc: 'https://editor.p5js.org/socalledsound/sketches/S1mjGCLOQ',
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
            //     linkText: `blake's really nice game`,
            //     linkSrc: 'https://github.com/MrGenius55/bench-game-2',
            // },
            // {
            //     linkText: 'my rewrite using a very small class',
            //     linkSrc: 'https://github.com/socalledsound/blake-bench-game'
            // },
            // {
            //     linkText: `shayne's nifty spiderman idea`,
            //     linkSrc: 'https://github.com/socalledsound/shayne-spidey'
            // }
        ], 
        videos: [
            // {
            //     linkText: `ALERT!  if you've been happily working your way through the mario videos, click the assignment link for a text tutorial.  if you've been struggling with those mario videos...try the more basic mario game videos below!`,
            //     linkSrc: '',
            // },

            // {
            //     linkText: `an even simpler mario game!  in three parts.  part 1, let's call this the green square slope, just your basic p5 game`,
            //     linkSrc: 'https://youtu.be/1IJcFoWWk_Y',
            // },
            // {
            //     linkText: `now, let's add some images, we'll call this the red dot slope...`,
            //     linkSrc: 'https://youtu.be/4khPuL1O61c',
            // },
            // {
            //     linkText: `and finally that same game, but a little tricker, let's call this the baby diamond slope`,
            //     linkSrc: 'https://youtu.be/VHcpYE0d3rw',
            // },

        ],    
}

export default DAY13