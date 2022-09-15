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
    We'll start by looking at some games for inspiration.  Then, I'll show you a simple online tool for making pixel art,
    which you can use to make a character.  But, you can also make a character using any tool you prefer, including drawing
    by hand -- you just have to be sure you can export an image or several images so you can bring them in to p5.
    WE'll look at loading those in, making characters move with the keyboard, and giving the character items to collect
    so that the game can progress and also a way or ways to die, so the game can end.  
    To get started, you need a character.  What should it/they look like?  What do they want/need/collect?  What are they afraid of
    and how do they die?
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
            title:'Player.render(): importing images, sprites and sounds',
            link: '',
        },
        {
            title:'Player.move(): moving a character',
            link: '',
        },
        {
            title:'Game: scoring and dying',
            link: '',
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
                linkText: 'Daniel Shiffman: programming in p5.js playist',
                linkSrc: 'https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA',
            },

            {
                linkText: 'git and github for poets',
                linkSrc: 'https://www.youtube.com/watch?v=BCQHnlnPusY&list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV',
            },
      
            {
                linkText: 'tic tac toe game',
                linkSrc: 'https://github.com/socalledsound/classless-tic-tac-toe',
            },
            {
                linkText: 'Objects and Classes Example: Butterfly in p5.js',
                linkSrc: 'https://editor.p5js.org/socalledsound/sketches/s_M6cyyxN',
            },
            {
                linkText: 'mario game github repo (with a branch for each video)',
                linkSrc: 'https://github.com/socalledsound/p5-mario-game',
            },
            {
                linkText:"a simple snake game in p5",
                linkSrc:"https://editor.p5js.org/socalledsound/sketches/Rtk-3emZh"
            },

            {
                linkText:"snake game tutorial",
                linkSrc:"https://thecodingtrain.com/CodingChallenges/115-snake-game-redux.html"
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

        ], 
        videos: [
            {
                linkText: 'github basics',
                linkSrc: 'https://youtu.be/RpYKKYsG7Io',
            },
            // {
            //     linkText: 'getting started with p5',
            //     linkSrc: 'https://youtu.be/iLZZ5O4HN9A',
            // },
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