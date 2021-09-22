const DAY9 = {
    id: 9,
    async: true,
    unit: 'unit2',
    date: 'September 23, 2021',
    title: 'player player',
    description: `
    Today we're going to create characters.  
    We'll start by looking at some artists who have grappled with this question of 
    what a character is and what it means to play one.
    Then, we'll make our own.  
    For our code assignment, we're going to continue our experiments with animation, but
    this time we'll use sequences of images, so we can create animating characters. 
    We'll learn about images in p5, sprite sheets,  and another useful library, p5.play.
    For today's assignment, you'll need to sketch out a character for your game.  Details 
    on the assignment.
    `,
    discussionQuestions: [
        `Is 'identity' different from 'character'?`,
        `Is it ok to borrow identity?  Character?  When, Why/not?`,
        `Is it ok to invent?  to lie?  When, Why/not?`,
    ],
    illustrationURL:'https://res.cloudinary.com/chris-kubick/image/upload/v1597703164/side-effects/trent5_o835fq.jpg',
    inspirationLinks: [
        {
            linkText: 'stop motion animation by some kids with water!',
            linkSrc: 'https://thumbs.gfycat.com/TenderFrayedHagfish-size_restricted.gif',
        },
        {
            linkText: 'the best new animators are making their names on tiktok',
            linkSrc: 'https://www.theverge.com/21436768/tiktok-cartoons-animators-creators-king-science-tootymcnooty-maddi-winter-alex-rabbit',
        },
        {
            linkText:"Introduction to Observing Kobito Hiding Peach Bottom Kobitos",
            linkSrc:"https://www.youtube.com/watch?v=6c0hBQQRRJY"
        },	
        {
            linkText:"william pope l as superman",
            linkSrc:"https://www.google.com/search?q=william+pope+l+superman&sxsrf=ACYBGNRMAFa9qh7KPoltkCUrUYZoFI9-Aw:1572931878311&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjF9vLuq9LlAhVxFjQIHazWC7wQ_AUIEigB&biw=3164&bih=714"
        },
        {
            linkText:"James Luna - take  Picture With a Real Indian",
            linkSrc:"https://www.youtube.com/watch?v=dAa69BVwPYg"
        },
        {
            linkText:"Rammellzee",
            linkSrc:"https://www.youtube.com/watch?v=T52mHTpvSeA"
        },	
                               
        {
            linkText:"pierre Huyghe",
            linkSrc:"https://www.youtube.com/watch?v=J3E8ioPg8xQ"
        },
        {
            linkText:"Angela Washko - the game",
            linkSrc:"https://angelawashko.com/home.html"
        }
        ,
        {
            linkText:"Adrian Piper, Mythic Being",
            linkSrc:"http://www.adrianpiper.com/vs/video_tmb.shtml"
        },
        {
            linkText: 'adrian piper - the probable trust registry',
            linkSrc: 'https://hyperallergic.com/127622/adrian-piper-binds-us-with-impossible-trust/',
        },
        {
            linkText:"Star Choir by Malik Gaines and Alexandro Segade",
            linkSrc:"https://vimeo.com/193188303"
        },		

         {
            linkText:"Nao Bustamente, 'Silver & Gold'",
            linkSrc:"https://vimeo.com/86799096"
        },
        {
            linkText:"Senga Nengudi",
            linkSrc:"http://sengasenga.com/gallery.html"
        },
        {
            linkText:"Mikka Rottenberg",
            linkSrc:"https://www.youtube.com/watch?v=jQjZ-nZeWcE"
        },
        {
            linkText:"Nick Cave, Until",
            linkSrc:"http://massmoca.org/nick-cave-until/"
        },

        {
            linkText:"Nikki S. Lee",
            linkSrc:"https://www.youtube.com/watch?v=oI8xpJItPVI"
        },
        {
            linkText:"scathing critique of Nikki S Lee",
            linkSrc:"http://contemptorary.org/nikki-s-lees-projects-and-the-ongoing-circulation-of-blackface-brownface-in-art/"
        },

        {
            linkText:"William Pope L - the will to exhaust",
            linkSrc:"https://walkerart.org/magazine/william-popel-will-exhaust"
        },
        {
            linkText: 'trenton doyle hancock on art 21',
            linkSrc: 'https://art21.org/watch/art-in-the-twenty-first-century/s2/trenton-doyle-hancock-in-stories-segment/',
        },

        {
            linkText: 'She created a fake Twitter persona — then she killed it with COVID-19',
            linkSrc: 'https://www.theverge.com/21419820/fake-twitter-persona-covid-death-munchausen-metoostem-co-founder',
        },
        ],
        techLinks: [
            {
                linkText: 'pixilart, nice editor for making pixel art characters',
                linkSrc: 'https://www.pixilart.com/',
            },
            {
                linkText: 'piskel is also nice',
                linkSrc: 'https://www.piskelapp.com/',
            },
            {
                linkText: 'p5.play',
                linkSrc: 'https://molleindustria.github.io/p5.play/'
            },
            {
                linkText:"walking sprite in p5",
                linkSrc:"https://editor.p5js.org/socalledsound/sketches/bZBw_u4p6"
            },
            {
                linkText:"dancing alien in p5",
                linkSrc:"https://editor.p5js.org/socalledsound/sketches/k5r2dvTpg"
            },
            {
                linkText:"piskel example",
                linkSrc:"https://editor.p5js.org/socalledsound/sketches/zLpcIXltI"
            },
  

            {
                linkText:"animated sprites in p5",
                linkSrc:"https://www.youtube.com/watch?v=3noMeuufLZY"
            },
            {
                linkText:"sprites in p5.play",
                linkSrc:"https://molleindustria.github.io/p5.play/docs/classes/Sprite.html"
            },
    
            {
                linkText: 'setTimeout, explained by Daniel Shiffman',
                linkSrc: 'https://www.youtube.com/watch?v=nGfTjA8qNDA',
            },
            {
                linkText: 'setInterval, explained by Daniel Shiffman',
                linkSrc: 'https://www.youtube.com/watch?v=CqDqHiamRHA',
            },

            {
                linkText: 'dancing alien repo from today',
                linkSrc: 'https://github.com/socalledsound/SE-unit2-day13-alien',
            },
            {
                linkText: 'sprite sheet repo from today',
                linkSrc: 'https://github.com/socalledsound/SE-unit2-day13-spritesheet',
            },
            {
                linkText: 'p5.play spritesheet repo',
                linkSrc: 'https://github.com/socalledsound/SE-unit2-day13-p5play',
            },
            {
                linkText:"dancing alien sprite with p5.play mouse attraction",
                linkSrc:"https://editor.p5js.org/socalledsound/sketches/rEHv8XTMk"
            },
            {
                linkText:"dancing alien sprite with p5.play bounce",
                linkSrc:"https://editor.p5js.org/socalledsound/sketches/GGPGwFghg"
            },
            {
                linkText:"dancing alien sprite with p5.play mouse attraction",
                linkSrc:"https://editor.p5js.org/socalledsound/sketches/rEHv8XTMk"
            },
            {
                linkText: 'mario spritesheet animation on github',
                linkSrc: 'https://github.com/socalledsound/mario-simple-sprite',
            }
 
        ], 
        videos: [
            {
                linkText: 'using piskel',
                linkSrc: 'https://www.youtube.com/watch?v=HS2OaAu07MU'
            },
            {
                linkText: 'loading images in p5',
                linkSrc: 'https://youtu.be/OGErT4-4Xpw',
            },
            {
                linkText: 'getting started/animating a sprite sheet with p5.play',
                linkSrc: 'https://youtu.be/IeUdwaXhhaA',
            },
            {
                linkText: 'animating a mario spritesheet with p5',
                linkSrc: 'https://youtu.be/cmzbjLPiD9I',
            },
            {
                linkText: 'javascript morsels: objects and this',
                linkSrc : 'https://www.youtube.com/watch?v=UQWpnXc3tPI',
            },
            {
                linkText: 'live server links are not web links',
                linkSrc : 'https://youtu.be/ahblxZfIRVA',
            },
            {
                linkText: 'branching with git',
                linkSrc: 'https://youtu.be/iioxcp7gC7Q',
            },
        ], 

}

export default DAY9