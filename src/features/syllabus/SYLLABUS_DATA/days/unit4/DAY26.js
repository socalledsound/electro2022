const DAY26 = {
    id: 26,
    async: true,
    unit: 'unit3',
    date: 'November 23, 2021',
    title: 'ripples and noise',
    assignment: 'ripples',
    illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/v1604102337/side-effects/light-shade-ripples-pattern-swimming-pool-turquoise-clean-water-vivid-separatio-lines-separation-113595482_agwgav.jpg',
    description: `
    We'll continue our exploration of shaders today and use them with sound to make nifty visualizations that re-arrange 
    the pixels of an image into ripples.

    Finally, we'll pull back the curtain
    just a bit and look at what we can do with shaders, by adding a generative wood pattern to our model.   
    Shaders are a bit daunting, written in a variant of C called shader language, as they are.  
    But, tapping into the power of shaders lets us render images a LOT faster, with more resolution, detail and speed.  
    
    WE'll learn how to add images as textures and also how to generate shaders using code --  
    we'll use a simplex noise algorithm (aka perlin noise...) to make a wood grain pattern.

    `,
    videos: [
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
    inspirationLinks: [
        {
            linkText: 'perlin noise mountains landscape',
            linkSrc: 'https://github.com/socalledsound/perlin-mountains',
        }, 
        {
            linkText: 'sound circle waves on a sphere',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/Lv1ebN2QBg',
        },
        {
            linkText: 'nothing is more fun than a hypercube full of monkeys',
            linkSrc: 'https://blogs.scientificamerican.com/roots-of-unity/nothing-is-more-fun-than-a-hypercube-of-monkeys/',
        },
        {
            linkText: 'stereophonic projection with henry segerman',
            linkSrc: 'https://artthescience.com/blog/2016/11/11/creators-henry-segerman/',
        },
        {
            linkText: 'the pure metal asteroid, Psyche',
            linkSrc: 'https://observer.com/2020/10/nasa-discover-asteroid-pysche-metal-10-quadrillion/',
        },
        {
            linkText: 'Andrew ferris web site',
            linkSrc: 'https://amf.fyi/',
        },
        {
            linkText: 'animate 10,000 points with shaders',
            linkSrc: 'https://bl.ocks.org/pbeshai/66f1a837ec33f787dace43e1b5039e31',
        },
        {
            linkText: 'shadertoy website',
            linkSrc: 'https://www.shadertoy.com/',
        },
        {
            linkText: 'how to port a shadertoy example to p5.js',
            linkSrc: 'https://itp-xstory.github.io/p5js-shaders/#/./docs/examples/shadertoy',
        },
        {
            linkText: 'Audio-based Image Distortion Effects with WebGL',
            linkSrc: 'https://tympanus.net/codrops/2020/02/24/audio-based-image-distortion-effects-with-webgl/',
        },
        {
            linkText: 'Fast and easy high resolution fractals with a pixel shader',
            linkSrc: 'http://nuclear.mutantstargoat.com/articles/sdr_fract/',
        },
        {
            linkText: 'the book of shaders',
            linkSrc: 'https://thebookofshaders.com/00/',
        },
        {
            linkText: 'basic lighting in opengl (webgl is based on opengl)',
            linkSrc: 'https://learnopengl.com/Lighting/Basic-Lighting',
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
            linkText: 'mandelbrot shader',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/8R_8wlC5G',
        },

        {
            linkText: 'pixelate camera input using a shader',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/-wnTyH5Dz',
        },


        {
            linkText: 'pixel mosaic shadera cam',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/kVWQKkuNt',
        },
        {
            linkText: 'gradient shader on a sphere',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/8XlSP85TX',
        },
        {
            linkText: "fly's eye mosaic on a fox",
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/rD7vvfHUX',
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

export default DAY26