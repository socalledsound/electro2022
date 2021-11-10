const DAY25 = {
    id: 25,
    async: true,
    unit: 'unit3',
    date: 'November 18, 2021',
    assignment: 'shade',
    title: 'throwing shade',
    description: `
    Today we'll continue our WEBGL explorations by looking at materials, lighting and...shaders. 
    We'll start by making sure that importing obj files is working for you, then we'll add
    images, aka 'texture' to those models.  Then, we'll look at some of the lights we can add
    to a scene, and talk about   
    Shaders are a bit daunting, written in a variant of C called shader language, as they are.  
    But, tapping into the power of shaders lets us render images a LOT faster, with more resolution, detail and speed.  
    We'll look at the basics of working with shaders today. First, we'll learn about a little about lighting,
    and we'll learn how to apply textures.  
    WE'll learn how to add images as textures and also how to generate shaders using code --  
    we'll use a simplex noise algorithm (aka perlin noise...) to make a wood grain pattern.
    `,
    illustrationURL:'https://res.cloudinary.com/chris-kubick/image/upload/v1632429353/side-effects/LGwood1_xo8ez7.png',

    videos: [

    ],
    inspirationLinks: [
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
            linkText: 'coding train: light and material in webGl',
            linkSrc: 'https://www.youtube.com/watch?v=k2FguXvqp60&list=PLRqwX-V7Uu6bPhi8sS1hHJ77n3zRO9FR_&index=3',
        },
        {
            linkText: "'normal' (rainbow) cat in p5",
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/AhBNTJ83H',
        },

        {
            linkText: 'clouds on a cat',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/dan9XWo2o',
        },
        {
            linkText: 'fox with colors',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/ZD2Xorhfh',
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

    ],


}

export default DAY25