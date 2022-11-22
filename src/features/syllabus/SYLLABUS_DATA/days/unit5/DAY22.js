const DAY22 = {
    id: 22,
    async: true,
    unit: 'unit5',
    date: 'November 10, 2022',
    title: 'camera',
    assignment: 'selfies',
    description: `
    Today we'll learn how to use a camera to take data in to the web browser.  
    We'll also learn how to manipulate that data at the pixel level.  
    This means we'll work in nested for loops, to create grids of color info.
    This makes all kinds of amazing manipulations possible!  Like, pixel sorting, and edge
    detection, and all sort of filtering and re-sampling, a few examples are in the links.
    We're also going to work with some motion tracking software today!  And you will add a mask image
    (happy halloween!) to your own face, please submit an image of yourself in your clmtracker mask to 
    the gallery!
    `,
    illustrationURL:'https://res.cloudinary.com/chris-kubick/image/upload/v1603987612/zombie_jts9s0.jpg',
    // videos: [
    //     {
    //         linkText: 'click the assignment button for the text tutorial, on pixels and motion tracking. videos are linked from there....',
    //         linkSrc: '',
    //     },

    // ],
    inspirationLinks: [
        {
            linkText: 'nobumichi asai - face projection mapping',
            linkSrc: 'https://www.youtube.com/watch?v=4hTxi2cyHhw',
        },
        {
            linkText: 'interview with nobumichi asai',
            linkSrc: 'https://www.annamonteverdi.it/digital/the-poetry-and-philosophy-of-face-mapping-my-interview-to-nobumichi-asai-author-of-the-omote-project/',
        },
        {
            linkText: 'jacolby satherwaite at art 21',
            linkSrc: 'https://art21.org/artist/jacolby-satterwhite/',
        },
        {
            linkText: 'live face projection mapping',
            linkSrc: 'https://www.youtube.com/watch?v=MZ9MoF5QowM',
        },
        {
            linkText: 'basic pixel array',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/lWZR5BN-o',
        },
        {
            linkText: 'sunrise pixel ripples',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/jP5xjo7F1',
        },
        {
            linkText: 'melting bear',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/JXSaZyLjS',
        },
        {
            linkText: 'CA pixel bear 3d',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/oGqWRe4ce',
        },
        {
            linkText: 'image edge detection',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/MrysOMgrc'
        },
        {
            linkText:'basic pixel sort',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/aKupRiwQU'
        },
        {
            linkText: 'ASDF pixel sorting w/ bitwise operators',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/yapFC24FG',
        },
        {
            linkText: 'pixelate video example',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/MHpS_is5i',
        },
        {
            linkText: 'pixelate with shader',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/-wnTyH5Dz',
        },
        {
            linkText: 'video particles',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/f3mHA8cO2',
        },
        {
            linkText: 'yodel pixels',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/STHJQaBF4',
        },
        {
            linkText: `pixel manipulation with shaders...`,
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/k5Ib2t5Qa',
        },
        {
            linkText: `another shader-based camera manipulation, running slow for some reason`,
            linkSrc: `https://editor.p5js.org/socalledsound/sketches/kVWQKkuNt`
        }
    ],
    techLinks: [
        {
            linkText: 'Daniel Shiffman - the pixel array',
            linkSrc: 'https://www.youtube.com/watch?v=nMUMZ5YRxHI',
        },
        {
            linkText: 'Daniel Shiffman; painting with pixels',
            linkSrc: 'https://www.youtube.com/watch?v=NbX3RnlAyGU&vl=en',
        },
  
        {
            linkText: 'clmtrackr (w/ link to research paper outlining the details)',
            linkSrc: 'https://github.com/auduno/clmtrackr',
        },
        {
            linkText: 'my clmtrackr starter',
            linkSrc: 'https://github.com/socalledsound/clmtrackr-mask',
        },

        {
            linkText: 'building a kitty cam with face detection!',
            linkSrc: 'https://girliemac.com/blog/2015/12/25/kittycam-raspberrypi-camera-cat-face-recog-nodejs/',
        },

        {
            linkText: 'viola jones algorithm (face detection) explained',
            linkSrc: 'https://www.youtube.com/watch?v=uEJ71VlUmMQ',
        },
        {
            linkText: 'how face id works (probably)',
            linkSrc: 'https://www.youtube.com/watch?v=mwTaISbA87A',
        },
        {
            linkText: 'the fft algorithm (used w pixel array in compression algorithms)',
            linkSrc: 'https://www.youtube.com/watch?v=nmgFG7PUHfo&t=142s',
        },
        {
            linkText: 'download vs code',
            linkSrc: 'https://code.visualstudio.com/download',
        },
    ],

}

export default DAY22