const DAY14 = {
    id: 14,
    unit: 'unit2',
    date: 'October 13, 2022',
    async: true,
    title: 'sockets',
    assignment: 'proto-midterm',
    illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/v1597763128/side-effects/clouds2_ngznbn.png',
    // illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/v1632426987/nes_t7dxfv.jpg',
    description: `
    Today, I WANTED TO play a game of snake over the internet.  I took our game sketch, and addedsockets.io, and node.js. two other javascript libraries, built a server, and
    made a multiplayer version of our game.
    UNFORTUNATELY -- the free service that I used to host the game has recently changed their free tier and now it's super slow, so the snake game
    doesn't really work in realtime, sadly.  So I'm going to demo the idea with another little class project that I made a few years ago.

   Using node.js we can create a web server, that handles requests from the browser, and performs various operations.
    We can use a node server to host databases (in this case a simple one that just keeps track of the players of our game), handle user authentication
    (we don't have any for this game, but we do for the course website), and all sorts of other useful things.
    Sockets.io is a nice little wrapper for some communications protocol that allows connected browsers to send data to each other.  
    Zoom, discord, roblox, google chat....all of these platforms use some version of sockets.  I'll show you the basics of how that works and
    point you in the right direction if you're interested to learn more.
    But for today's assignment, I just want you to work on your midterm project!  Good luck finishing it!
    `,
    discussionQuestions: [
        [
            ``,
            
        ]
    ],

    inClassDemo: [
        {

        },

        {
            title: '',
            link: '',
           
        },
        {
            title: '',
            link: '',
           
        },
        {
            title: '',
            link: '',
            
        },
            
    ],
    videos: [
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
        //https://www.rudyrucker.com/oldhomepage/msprojects.htm
        {
            linkText: 'hvbrd game',
            linkSrc: 'https://github.com/charliegerard/hvbrd-sockets',
        },

        {
            linkText: 'a multiplayer simon game over sockets - (sockets + p5)',
            linkSrc: 'https://mmm-simon-6000.herokuapp.com/',
        },
        // {
        //     linkText: 'sounding among us game - (sockets + p5)',
        //     linkSrc: '',
        // },
        {
            linkText: 'multiplayer online tetris (from a tutorial)',
            linkSrc: 'https://tetris-clone-6000.herokuapp.com/#a5747s',
        },


        {
            linkText: 'github repo for multiplayer snake game -- works well locally!',
            linkSrc: 'https://github.com/socalledsound/socket-snakes',
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

    
    techLinks: [
        {
            linkText: '',
            linkSrc: '',
        },
        {
            linkText: '',
            linkSrc: '',
        },
        {
            linkText: '',
            linkSrc: '',
        },
        {
            linkText: '',
            linkSrc: '',
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

} 

export default DAY14