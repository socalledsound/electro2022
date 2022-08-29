const DAY6 = {
    id: 6,
    async: false,
    unit: 'unit1',
    date: 'September 15, 2022',
    title: 'listen!',
    assignment: 'switches',
    illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/v1597030532/side-effects/neuhaus1_jggnxk.jpg',
    description: `
    Today we'll take a quick tour of computer history and a little look inside how they actually work.  
    We'll talk about what object oriented programming is and what it was supposed to be.  
    We'll talk about listening and artists and composers who do it, and then we'll talk about how to do it 
    in javascript (and on our CPE).
    And when I say, 'listen' with our CPE, I don't mean in the sonic sense; we'll do that soon enough.  
    No, in this class, we'll learn about listening for event messages, using 'event listeners',
    which are pretty essential to all forms of machine/human interfaces.  
    For the assignment we're going to build a simple but evolving interface that can exist in multiple states.
    Watch the videos to find out what I mean!`,

    discussionQuestions: [
        `Is 'blind' listening possible?  Is it desirable?  `,
        `What is the distinction between a 'sound' and a 'sound effect'`,
        `Is the same sound under two different names actually the same sound?`,
    ],
    inClassDemo: [
        {
            title: 'how to make a contact microphone'
        },
        {
            title: 'working with a zoom recorder'
        }
    ],
    videos: [
        {
            linkText: '3.1 : listen!',
            linkSrc: 'https://youtu.be/vTYjGfJCMB8',
        },  
        {
            linkText: '3.2 : switches+listeners',
            linkSrc: 'https://youtu.be/m-2VbSgHgP0',
        },      
        {
            linkText: '3.3 coding a volume graph for the CPE',
            linkSrc: 'https://youtu.be/ULldzqSlt0A',
        }, 
        {
            linkText: '3.4 coding an AND sound gate for the CPE',
            linkSrc: 'https://youtu.be/dEffjyXvPEg',
        },        
    ],
    reading : [
        {
            linkText: 'Pauline Oliveros: some sound observations',
            linkSrc: 'https://drive.google.com/file/d/1OAnH99RQi2uKMdw5ri6_RB7UzNi98p6y/view',
        },
    ],
    inspirationLinks: [

        {
            linkText: 'The watts prophets: listen',
            linkSrc: 'https://www.youtube.com/watch?v=kU8X3GQOOqo',
        },
        {
            linkText: 'Pauline Oliveros: the difference between hearing and listening',
            linkSrc: 'https://www.youtube.com/watch?v=_QHfOuRrJB8',
        },
        {
            linkText: 'max neuhaus, times square',
            linkSrc: 'https://www.diaart.org/visit/visit-our-locations-sites/max-neuhaus-times-square',
        },
        {
            linkText: 'video about max neuhaus times square',
            linkSrc:'https://www.youtube.com/watch?v=kA-fihBFWBI',
        },
        {
            linkText: `4' 33" on a bus`,
            linkSrc: 'https://www.youtube.com/watch?v=WYQhXN1UFbU&t=55s',
        }, 
        {
            linkText: 'earl brown, december 1952',
            linkSrc: 'https://res.cloudinary.com/chris-kubick/image/upload/v1630297036/Earle-Browns-December-1952_upbwoj.png',
        },
        {
            linkText:"yoko ono bicycle piece",
            linkSrc:"https://socalledsound.github.io/gap2018/images/non-sense/yokoBicycle.jpg"
        },
        {
            linkText:"open that window",
            linkSrc:"http://www.openthatwindow.com/"
        },
        {
            linkText: 'Scientists Invent Noise-Canceling Windows',
            linkSrc: 'https://www.insidescience.org/news/scientists-invent-noise-canceling-windows#:~:text=(Inside%20Science)%20%2D%2D%20A%20device,a%20microphone%20outside%20the%20window.',
        },
      
        {
            linkText: 'computerhistory.org',
            linkSrc: 'https://www.computerhistory.org/revolution/topics#exhibition',
        },        
       
        {
            linkText: 'What Are Semiconductors? And How Do They Work?',
          linkSrc: 'https://www.scienceabc.com/innovation/what-are-semiconductors-and-how-do-they-work.html'
      },    
       {
        linkText: 'How transistors work, a basic explanation',
        linkSrc: 'https://www.youtube.com/watch?v=0CvdruTMH1c&t=51s',
    },      
      {
          linkText: 'an introduction to the smalltalk language',
          linkSrc: 'https://www.codeproject.com/Articles/1241904/Introduction-to-the-Smalltalk-Programming-Language',
      },
      {
          linkText: 'supercollider is a truly beautiful audio programming language/environment, based on smalltalk!',
            linkSrc: 'https://supercollider.github.io/'
        },
        {
            linkText: 'the three body problem by Liu Cixin',
            linkSrc: 'https://en.wikipedia.org/wiki/The_Three-Body_Problem_(novel)'
        },



    ],
    techLinks: [

      
        {
            linkText: 'CPE: volume controls',
            linkSrc: 'https://makecode.com/_8wtVw8L0pAJc',
        },   
             
        {
            linkText: 'CPE: AND gate sound player',
            linkSrc: 'https://makecode.com/_XR6M9fXYjCmA',
        }, 
        {
            linkText: 'my binary color abacus (written in javascript!)',
            linkSrc: 'https://suspicious-shockley-333ae2.netlify.app/',
        },
        {
            linkText: 'an interactive abacus (it inspired my thing above!)',
            linkSrc: 'https://www.advanced-ict.info/mathematics/abacus.html',
        }, 
        {
            linkText: 'interactive and or nand nor xor nxor',
            linkSrc: 'https://www.advanced-ict.info/interactive/circuits.html',
        },  
        {
            linkSrc: 'https://makecode.adafruit.com/javascript',
            linkText: 'javascript on the CPE',
        },
        {
            linkText: 'the make code library API',
            linkSrc: 'https://makecode.adafruit.com/reference',
        },
        {
            linkText: 'set all lights to a hex color',
            linkSrc: 'https://makecode.adafruit.com/reference/light/set-all',
        },
        {
            linkText: 'make code: logic lab',
            linkSrc: 'https://makecode.adafruit.com/learnsystem/logic-lab',
        },        
        {
            linkText: 'addEventListener() method at MDN',
            linkSrc: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener',
        },
        {
    
            linkText: 'web events @ MDN',
            linkSrc: 'https://developer.mozilla.org/en-US/docs/Web/Events',
        },
        
  {
            linkText: 'make a Transistor NAND Gate Circuit on a breadboard',
            linkSrc: 'https://www.dummies.com/programming/electronics/diy-projects/electronics-projects-how-to-create-a-transistor-nand-gate-circuit/',
        },        {
            linkText: 'intro to logic gates in javascript',
            linkSrc: 'https://blog.nona.digital/introduction-to-boolean-logic-gates-in-javascript/',
        },        {
            linkText: 'nand2tetris',
            linkSrc: 'https://www.nand2tetris.org/',
        },              
        {
            linkText: 'this looks cool if you prefer python on your CPE',
            linkSrc: 'https://www.hanselman.com/blog/adafruits-circuit-playground-express-simulated-visual-studio-codes-device-simulator-express',
        },        
        {
            linkText: 'linux signals',
            linkSrc: 'https://wizardzines.com/comics/signals/',
        },
       
        {
            linkText: 'make code API reference',
            linkSrc: 'https://makecode.adafruit.com/reference',
        },        
        {
            linkText: 'random color loop',
            linkSrc: 'https://makecode.com/_hfqDD8TYYWVz',
        },
    ],

}

export default DAY6