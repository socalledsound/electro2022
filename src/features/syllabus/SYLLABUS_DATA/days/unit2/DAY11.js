const DAY11 = {
    id: 11,
    async: true,
    unit: 'unit2',
    date: 'September 30, 2021',
    title: 'game on!',
    assignment: 'state',
    description: `
    Today we are going to step up our game a bit, literally, and talk about game STATE.
    Just like we previously realized that we can back out and up of our code to make a Coin class
    and a Mario class, we can back up and out even farther to make a Game.  We can store everything
    in the game world in there, and this means we will have a single source of truth for our game,
    which is always deeply satisfying.  Watch the vids and come to class for more on this very big topic.
    `,
    illustrationURL:'https://res.cloudinary.com/chris-kubick/image/upload/v1598458992/side-effects/B0B7D0BB-F967-4D6C-92EB-34B9E9DF164D_phz7by.jpg',
    discussionQuestions: [
        `What is 'state' and why is it good to have a 'single source of truth'?`,
        `Give some examples of ways we can manage state in javascript.`,
        `Why is it nice or good to have a 'Game' object?`,
        `What is 'refactoring'?  What are some signs that you need to think about it?`,

    ],
    inspirationLinks: [
        
        {
            linkText: 'top 10 games from js13k 2020',
            linkSrc: 'https://github.blog/2020-10-11-top-ten-games-from-the-js13k-2020-competition/',
            
        },
        {
            linkText: 'and you can still vote in the 2021 games....',
            linkSrc: 'https://js13kgames.com/entries/2021',
        },
        {
            linkText: 'i really liked this one!',
            linkSrc: 'https://js13kgames.com/entries/choch',
        },
        {
            linkText: 'massively multiplayer tetris that i built a while ago with that meth meth method tutorial below',
            linkSrc: 'https://tetris-clone-6000.herokuapp.com/'
        }
        ],
        techLinks: [
           
            
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
                linkText: 'come to think of it, an hour to build tetris is probably more appropriate!',
                linkSrc: 'https://www.youtube.com/watch?v=H2aW5V46khA',
            },

            {
                linkText: 'super stupid landscape game',
                linkSrc: 'https://editor.p5js.org/socalledsound/sketches/cjxO852kb',
            },
            {
                linkText: "soundlands, a badlands clone I've been working on",
                linkSrc: 'https://github.com/socalledsound/soundgame-badlandsclone',
            },

        ], 
        videos: [

            {
                linkText: 'mario game 8: Game class, LONG one 😬',
                linkSrc: 'https://youtu.be/0kA4oQx2PR8',
            },
            {
                linkText: 'mario game 9: scoreboard',
                linkSrc: 'https://youtu.be/0i106wnVKhM',
            },
            {
                linkText: 'mario game 10: start button',
                linkSrc: 'https://youtu.be/06c5h0InwcY',
            },
            {
                linkText: 'mario game 10: add sounds',
                linkSrc: 'https://www.youtube.com/watch?v=UoLU_D8KgZw',
            },
 
        ],  

}

export default DAY11