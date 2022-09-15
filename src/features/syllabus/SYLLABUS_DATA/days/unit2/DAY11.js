const DAY11 = {
    id: 11,
    async: false,
    unit: 'unit2',
    date: 'October 4, 2022',
    title: 'breakout',
    assignment: 'breaking out',
    description: `
        Today we are going to look at a snazzy way to work with moving entities in p5: vectors.
        We'll use vectors to make a clone of the classic breakout game.
        We'll take some time to dive a little deeper into the physics of collision and get some practice 
        writing code!  
    `,
    illustrationURL:'https://res.cloudinary.com/chris-kubick/image/upload/v1662597810/pink-kool-aid_i4g1nh.jpg',
    discussionQuestions: [
        // `What is 'state' and why is it good to have a 'single source of truth'?`,
        // `Give some examples of ways we can manage state in javascript.`,
        // `Why is it nice or good to have a 'Game' object?`,
        // `What is 'refactoring'?  What are some signs that you need to think about it?`,
    ],
    inClassDemo: [

        {
            title:'Vector basics in p5',
            link: 'https://editor.p5js.org/socalledsound/sketches/DC8MWdJ95',
        },
        {
            title: 'two moving circles no classes',
            link: 'https://editor.p5js.org/socalledsound/sketches/cMlTybiLM',
        },
        {
            title:'circle/circle collisions in p5',
            link: 'https://editor.p5js.org/socalledsound/sketches/8KZz6c-aN',
        },
        {
            title:'circle/rectangle collisions in p5',
            link: '',
        },


        {
            title: 'stepping out : step sequencer + breakout',
            link: 'https://github.com/socalledsound/stepping-out',
        },
                   
        {
            linkText: 'github repo for our breakout game',
            linkSrc: 'https://github.com/socalledsound/sound-game-1-starter',
        },
    ],
    inspirationLinks: [
        

        {
            linkText: 'massively multiplayer tetris that i built a while ago with that meth meth method tutorial below',
            linkSrc: 'https://tetris-clone-6000.herokuapp.com/'
        },
        {
            linkText: 'asteroids in p5',
            linkSrc: 'https://editor.p5js.org/simontiger/sketches/r16tcHq3e',       
        }
        ],
        techLinks: [
            {
                linkText: 'article on collision detection physics',
                linkSrc: 'https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics',
            },
            {
                linkText: 'online book about collision detection',
                linkSrc: 'https://www.jeffreythompson.org/collision-detection/table_of_contents.php',
            },
            {
                linkText: 'another breakout game in the online editor',
                linkSrc: 'https://editor.p5js.org/bansal321/sketches/HJAFXebeV',
            },
           {
               linkText: `I took Tucker's noisy raindrops and turned them into a small heart system game`,
               linkSrc: 'https://github.com/socalledsound/tucker-thing'
           },
           {
               linkText: 'heart system live site',
               linkSrc: 'https://socalledsound.github.io/tucker-thing/',
           },
            {
                linkText:'keycode is deprecated, generally use key instead',
                linkSrc: 'https://stackoverflow.com/questions/35394937/keyboardevent-keycode-deprecated-what-does-this-mean-in-practice',
            },
            {
                linkText:'remember window.addEventListener() ? -- you can also use it for keyboard input!',
                linkSrc: 'https://editor.p5js.org/socalledsound/sketches/NBosLc6cQ',
            },

            {
                linkText:"make angry birds with p5.js and matter.js",
                linkSrc:"https://thecodingtrain.com/CodingChallenges/138-angry-birds.html"
            },

            {
                linkText: 'build space invaders with daniel shiffman',
                linkSrc: 'https://thecodingtrain.com/CodingChallenges/005-space-invaders-p5.html',
            },
            {
                linkText: 'frogger in p5.js',
                linkSrc: 'https://editor.p5js.org/codingtrain/sketches/crMMFw8vD',
            },
            {
                linkText: 'code super mario in vanilla js (25 parts!  maybe save it for later?)',
                linkSrc: 'https://www.youtube.com/watch?v=g-FpDQ8Eqw8',
            },

            {
                linkText: `come to think of it, an hour to build tetris is probably more appropriate! (but it's still pretty hard!)`,
                linkSrc: 'https://www.youtube.com/watch?v=H2aW5V46khA',
            },

            {
                linkText: "soundlands, a badlands clone I've been working on",
                linkSrc: 'https://github.com/socalledsound/soundgame-badlandsclone',
            },{
                linkText: 'entity component system at wikipedia',
                linkSrc: 'https://en.wikipedia.org/wiki/Entity_component_system',
            },
            {
                linkText:'wander steering',
                linkSrc: 'https://www.youtube.com/watch?v=ujsR2vcJlLk',
            },

        ], 
        videos: [
            {
                linkText: 'shiffman: angles and vectors',
                linkSrc: 'https://www.youtube.com/watch?v=oXwCVDXS2Lg'
            },
            {
                linkText: 'bouncing sequencer',
                linkSrc: 'https://github.com/socalledsound/sound-game-1-starter/tree/07-finsihed'
            },
            // {
            //     linkText: 'mario game 8: Game class, LONG one 😬sorry',
            //     linkSrc: 'https://youtu.be/0kA4oQx2PR8',
            // },
            // {
            //     linkText: 'mario game 9: scoreboard',
            //     linkSrc: 'https://youtu.be/0i106wnVKhM',
            // },
            // {
            //     linkText: 'mario game 10: start button',
            //     linkSrc: 'https://youtu.be/06c5h0InwcY',
            // },
            // {
            //     linkText: 'mario game 10: add sounds',
            //     linkSrc: 'https://www.youtube.com/watch?v=UoLU_D8KgZw',
            // },
 
        ],  

}

export default DAY11