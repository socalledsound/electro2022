const DAY9 = {
    id: 9,
    async: false,
    unit: 'unit2',
    date: 'September 27, 2022',
    title: 'player player',
    assignment: 'player',
    illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/c_scale,h_526/v1596997450/side-effects/billy-trips_hr3eoy.jpg',
    description: `
    Today we begin unit 2, which will focus on generative compositions which unfold in time, such as animation and video games.  
    Or, choose your own adventure books, like the one shown on the right.
    We'll start by looking at some games for inspiration.  Then, we'll make one, with p5, a simple snake-like game.
    You'll learn how to move a character around and how to make it interact with it's environment, in this case, just eating some
    food.  
    After we've done that, I'll show you a simple online tool for making pixel art, which you can use to make a character.  
    But, you can also make a character using any tool you prefer, including drawing by hand -- you just have to be sure you can export 
    an image or several images so you can eventually bring them in to p5.
    See if you can replace the snake of our snake game with your own character!!  
    And if you struggle, don't worry, it's part of the process, and we'll get things sorted out next class.
    You should upload your small beginning proto game to the gallery.
    `,
    // Today, we're going to go a little deeper with the idea of characters.
    // We'll start by looking at the characters that you've invented, then we'll build on those characters, 
    // by giving them something that they wantneed.
    
    // For your gallery submission, I want you to take those ideas and make
    // your own character. 
    // that interests your character, 
    // whether that be books, wind, or grains of sand.
    discussionQuestions: [
        
        `What makes a good game?`,
        `Do you have any favorite games?  (digital or 'real')`,
        `Is Johan Huizinga right?  Do games have meaning?  Does life have meaning with them?`,
        `'gamification': evil, amazing or both?`,
    ],
    inClassDemo: [
        {
            title:'memory game',
            link: 'https://github.com/socalledsound/memory-game'
        },
        {
            title:'vectors: position',
            link: 'https://editor.p5js.org/socalledsound/sketches/VG0KPVY8u',
        },
        {
            title:'vectors: motion (velocity + acceleration)',
            link: 'https://editor.p5js.org/socalledsound/sketches/mkRp7gGn2',
        },
        {
            title:'snakey - starter',
            link: 'https://editor.p5js.org/socalledsound/sketches/qerJq6jSZ',
        },
        {
            title:'snakey w/Player -- ADD FOOD',
            link: 'https://editor.p5js.org/socalledsound/sketches/Y1uWBLF-Z',
        },
        {
            title:'circle circle collision',
            link: 'https://editor.p5js.org/socalledsound/sketches/nhI2uDnRC',
        },
        {
            title:'more complex circle collision with bounce!',
            link: 'https://p5js.org/examples/motion-circle-collision.html',
        },
        {
            title:'snakey w/Player and Food',
            link: 'https://editor.p5js.org/socalledsound/sketches/nPO2P1QDV',
        },
        {
            title: 'sprite animation example',
            link: 'https://editor.p5js.org/socalledsound/sketches/0FFFlg-U6'
        },

    ],
    inspirationLinks: [
        {
            linkText: 'homo ludens',
            linkSrc: 'https://en.wikipedia.org/wiki/Homo_Ludens',
        },
        {
            linkText:"Pitagoru Suitchi",
            linkSrc:"https://www.facebook.com/34842394274/videos/1054182998170/"
        },
        {
            linkText: 'fischli and weiss:the way things go',
            linkSrc: 'https://vimeo.com/463685768',
        },
        {
            linkText: '748時間かけたピタゴラ装置（short ver.）Rube Goldberg Machine made in 748 hours',
            linkSrc: 'https://www.youtube.com/watch?v=IfEWIT_pHPk',
        },
        {
            linkText:"sound shapes game",
            linkSrc:"https://www.youtube.com/watch?v=FIxKLZHFThE"
        },
        {
            linkText: 'badlands gameplay',
            linkSrc: 'https://www.youtube.com/watch?v=JwOkJs0jh2A',
        },
        {
            linkText:"giphy arcade",
            linkSrc:"https://arcade.giphy.com/"
        },
        {
            linkText: 'giphy arcade nose',
            linkSrc: 'https://arcade.giphy.com/playlist/-LntTOeuqUo2uIjJwWjG',
        },
        {
            linkText:"Designing For Play | Meet Hellicar & Lewis",
            linkSrc:"https://www.youtube.com/watch?v=Xxdg2H9DvXg"
        },
        {
            linkText:"Ludic Interfaces, Matthias Fuchs et al",
            linkSrc:"http://creativegames.org.uk/publications/pdf_files/Ludic_Interfaces-2013.pdf"
        },
        {
            linkText:"Indie Game Development with Jane Friedhoff",
            linkSrc:"https://www.youtube.com/watch?v=VIEwBm7PWQM"
        },
        {
            linkText:"Jane Friedhoff",
            linkSrc:"http://janefriedhoff.com/"
        },
        {
            linkText:"jane friedhoff- scream em up",
            linkSrc:"https://vimeo.com/41629022"
        },	
        {
            linkText:"handvaska by Ramsey nasser and Jane Friedhof",
            linkSrc:"http://nas.sr/handv%C3%A4ska/"
        },	
        {
            linkText: 'js13k games',
            linkSrc: 'https://js13kgames.com/',
        },
        {
            linkText: 'top 10 games from js13k 2020',
            linkSrc: 'https://2021.js13kgames.com/#winners',
            
        },
        {
            linkText: 'and you can vote in the 2021 games....',
            linkSrc: 'https://js13kgames.com/entries/2022',
        },
        {
            linkText: 'i really liked this one!',
            linkSrc: 'https://js13kgames.com/entries/choch',
        },
        {
            linkText: 'anopther fun one',
            linkSrc: 'https://js13kgames.com/games/the-adventures-of-captain-callisto/index.html'
        },
        {
            linkText: 'this website will self-destruct',
            linkSrc: 'https://www.thiswebsitewillselfdestruct.com/',
        },


        {
            linkText: '',
            linkSrc: '',
        },
        // {
        //     linkText: 'On Music and Tech with Holly Herndon & Mat Dryhurst',
        //     linkSrc: 'https://www.classicalcontemporary.art/episoden/on-music-and-tech-with-holly-herndon-amp-mat-dryhurst',
        // },
        // {
        //     linkText:"Gabriel Orozco - horses running endlessly",
        //     linkSrc:"https://www.moma.org/collection/works/81977"
        // },
        // {
        //     linkText:"rethinking wargames - chess where pawns win?",
        //     linkSrc:"http://ruthcatlow.net/?works=rethinking-wargames"
        // },
        ],
        techLinks: [
            {
                linkText: 'pixilart.com',
                linkSrc: 'https://www.pixilart.com/'
            },
            {
                linkText: 'download p5.js',
                linkSrc: 'https://p5js.org/download/',
            },
            {
                linkText: 'p5.js reference',
                linkSrc: 'https://p5js.org/reference/',
            },
            {
                linkText: 'javascript morsels playlist',
                linkSrc: 'https://www.youtube.com/playlist?list=PL1Kp_s25fdCBJS2x_RkZ4r80GUcniHyU-'
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
                linkText: 'tree rings in p5',
                linkSrc: 'https://editor.p5js.org/socalledsound/sketches/ZdabVpSPf'
            },
            {
                linkText: 'circle circle collision',
                linkSrc: 'https://www.jeffreythompson.org/collision-detection/circle-circle.php'
            },
            {
                linkText: 'nice collision detection article',
                linkSrc: 'https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics'
            },



        ], 
        videos: [
            {
                linkText: 'github basics',
                linkSrc: 'https://youtu.be/RpYKKYsG7Io',
            },
            {
                linkText: 'getting started with p5',
                linkSrc: 'https://youtu.be/iLZZ5O4HN9A',
            },
            // {
            //     linkText: 'code-along: bringing things to life pt 1',
            //     linkSrc: 'https://youtu.be/tk2TOlN4Qmw',
            // },
            // {
            //     linkText: 'code-along: bringing things to life pt 2',
            //     linkSrc: 'https://youtu.be/uSnvsfot_U4',
            // },
            // {
            //     linkText: 'submitting an assignment',
            //     linkSrc: 'https://youtu.be/EgPmpnQltt8',
            // },
            // {
            //     linkText: 'javascript morsels playlist',
            //     linkSrc: 'https://www.youtube.com/playlist?list=PL1Kp_s25fdCBJS2x_RkZ4r80GUcniHyU-',
            // },

            
        ],    

}

export default DAY9