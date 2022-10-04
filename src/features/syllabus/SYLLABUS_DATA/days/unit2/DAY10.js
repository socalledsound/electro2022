const DAY10 = {
    id: 10,
    async: true,
    unit: 'unit2',
    date: 'September 29, 2022',
    title: 'noisy shapes',
    assignment: 'sketchy',
    description: `
        Today we're going to learn how to make more complex shapes, and breakout of the boring simplicity of circles and squares.
        We'll learn how to use code to generate strings of vertexes, about beginning and ending shapes, and we'll also learn
        a little bit about something called Perlin noise, which is a super nifty algorithm for generating somewhat less
        random randomness. 
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
            title: 'Array.from ',
            link: 'https://editor.p5js.org/socalledsound/sketches/Z8A_VuDs2'
        },
        {
            title: 'circle with slider',
            link: 'https://editor.p5js.org/socalledsound/sketches/MaajoyZbw'
        },
        {
            title: 'noisy circle',
            link: 'https://editor.p5js.org/socalledsound/sketches/yr-5mAmHh'
        },
        {
            title: 'noisy line',
            link: 'https://editor.p5js.org/socalledsound/sketches/HqEIfeqyy'
        },
        {
            title: 'asteroidscape',
            link: 'https://editor.p5js.org/socalledsound/sketches/2tzHTK6Cc'
        },


        {
            title: 'tree rings in p5',
            link: 'https://editor.p5js.org/socalledsound/sketches/ZdabVpSPf'
        },
    



                   
        // {
        //     title: 'github repo for our breakout game',
        //     link: 'https://github.com/socalledsound/sound-game-1-starter',
        // },
    ],
    inspirationLinks: [
        {
            title: 'stepping out : step sequencer + breakout',
            link: 'https://github.com/socalledsound/stepping-out',
        },
        {
            linkText: 'a simpler bouncing sequencer',
            linkSrc: 'https://github.com/socalledsound/sound-game-1-starter/tree/07-finsihed'
        },


        {
            linkText: 'asteroids in p5',
            linkSrc: 'https://editor.p5js.org/simontiger/sketches/r16tcHq3e',       
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
            linkText: 'another breakout game in the online editor',
            linkSrc: 'https://editor.p5js.org/bansal321/sketches/HJAFXebeV',
        },
        {
            linkText: 'a scaly drawing I made with p5 yesterday',
            linkSrc: 'https://socalledsound.github.io/noisy-circles/',
        },
        {
            linkText: 'fourier series - waves with circles',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/GiQgCoOei',
        },
        {
            linkText: 'you can draw anything with circles',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/deqkKFzOq',
        },
        {
            linkText: 'perlin noise flow field',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/FYPmKW_06',
        },
        {
            linkText: 'perlin noise 3d terrain',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/daLyawjn-',
        },
        ],
        techLinks: [
            {
                linkText: 'Daniel Shiffman series of videos on Perlin noise',
                linkSrc: 'https://www.youtube.com/watch?v=Qf4dIN99e2w',
            },
            {
                linkText: 'shiffman: angles and vectors',
                linkSrc: 'https://www.youtube.com/watch?v=oXwCVDXS2Lg'
            },
 
            {
                linkText: 'article on collision detection physics',
                linkSrc: 'https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics',
            },
            {
                linkText: 'online book about collision detection',
                linkSrc: 'https://www.jeffreythompson.org/collision-detection/table_of_contents.php',
            },
            {
                linkText:`procedural shapes, from 'programming design systems'`,
                linkSrc: 'https://programmingdesignsystems.com/shape/procedural-shapes/index.html#procedural-shapes-qYPzCLg',
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
                linkText: 'or code mario with me, in p5!',
                linkSrc: 'https://www.youtube.com/watch?v=SPzJ84y4qxc&list=PL1Kp_s25fdCBZFnp3rMM2Qah53Hs0XMJD&index=29',
            },
            {
                linkSrc: 'https://github.com/socalledsound/p5-mario-game',
                linkText: 'my mario game github repo',
            },

            {
                linkText: `come to think of it, an hour to build tetris is probably more appropriate! (but it's still pretty hard!)`,
                linkSrc: 'https://www.youtube.com/watch?v=H2aW5V46khA',
            },

            // {
            //     linkText: "soundlands, a badlands clone I've been working on",
            //     linkSrc: 'https://github.com/socalledsound/soundgame-badlandsclone',
            // },
            // {
            //     linkText: 'entity component system at wikipedia',
            //     linkSrc: 'https://en.wikipedia.org/wiki/Entity_component_system',
            // },
            // {
            //     linkText:'wander steering',
            //     linkSrc: 'https://www.youtube.com/watch?v=ujsR2vcJlLk',
            // },

        ], 
        videos: [
            {
                linkText: 'code-along: bringing things to life pt 1',
                linkSrc: 'https://youtu.be/tk2TOlN4Qmw',
            },
            {
                linkText: 'code-along: bringing things to life pt 2',
                linkSrc: 'https://youtu.be/uSnvsfot_U4',
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

export default DAY10