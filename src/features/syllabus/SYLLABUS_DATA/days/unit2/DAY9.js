const DAY8 = {
    id: 8,
    async: false,
    unit: 'unit2',
    date: 'September 27, 2022',
    title: 'transformation',
    assignment: 'movement',
    illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/c_scale,h_526/v1596997450/side-effects/billy-trips_hr3eoy.jpg',
    description: `
    Today we begin unit 2, which will focus on generative compositions which unfold in time, such as animation and video games.  
    Or, choose your own adventure books, like the one shown on the right.
    We'll look at some art games today.
     And, we'll start actually composing software in javascript.  
     Today we'll talk about characters, and vectors and sprites, and we'll get a start building our midterm projects,
     by making a Player class.
    `,
    discussionQuestions: [
        
        `What makes a good game?`,
        `Do you have any favorite games?  (digital or 'real')`,
        `Is Johan Huizinga right?  Do games have meaning?  Does life have meaning with them?`,
        `'gamification': evil, amazing or both?`,
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
            title: 'breakout game in p5',
            link: 'https://editor.p5js.org/bansal321/sketches/HJAFXebeV',
        },
        {
            title: 'stepping out : step sequencer + breakout',
            link: 'https://github.com/socalledsound/stepping-out',
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
            // {
            //     linkText: 'p5 online editor - check examples under file menu',
            //     linkSrc: 'https://editor.p5js.org/',
            // },
            // {
            //     linkText: 'github repo for our first animation',
            //     linkSrc: 'https://github.com/socalledsound/sound-game-1-starter',
            // },
            {
                linkText: 'git and github for poets',
                linkSrc: 'https://www.youtube.com/watch?v=BCQHnlnPusY&list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV',
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
            {
                linkText: 'shiffman: angles and vectors',
                linkSrc: 'https://www.youtube.com/watch?v=oXwCVDXS2Lg'
            },
            {
                linkText: 'bouncing sequencer',
                linkSrc: 'https://github.com/socalledsound/sound-game-1-starter/tree/07-finsihed'
            }
            
        ],    

}

export default DAY8