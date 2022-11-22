const DAY24 = {
    id: 24,
    async: true,
    unit: 'unit6',
    date: 'November 17, 2022',
    assignment: 'diffuse',
    title: 'text to image',
    description: `
    Today we'll take a look at the now-ubiquitous text to image tools for using AI to create images:
    how/where to use them, how they work, where they are going and what it all means for us as artists.
    We'll focus on the approach that has led to an absolute explosion of open source tools, latent diffusion models.
    We'll look at the different pieces that make up the text to image pipeline and, hopefully,
    by the end, you'll have a better sense of how and where you can better control this process, to 
    create art that feels like your own art.

    `,
    illustrationURL:'https://res.cloudinary.com/chris-kubick/image/upload/v1667835211/big-brain-1_yjawuu.jpg',

    discussionQuestions: [
        `Is it reasonable to call the art we make with AI 'Art'?  Is it reasonable to NOT call it 'Art'?`,
        `How is the introduction of AI similar/different to the introduction of photography?`,
        `Should we be allowed to 'train' AI models on images that are copyrighted?  Why or why not?`,
        `Will AI affect the future livelihood of artists?  Of people generally?`,
        ``,
    ],
    inspirationLinks: [
        {
            linkText: 'this person does not exist (previous generation/style GAN)',
            linkSrc: 'https://thispersondoesnotexist.com/',
        },
        {
            linkText: 'the infinite conversation',
            linkSrc: 'https://infiniteconversation.com/',
        },

        {
            linkText: 'Frieder Nake',
            linkSrc: 'https://www.google.com/search?q=frieder+nake&sxsrf=ALiCzsahS6d29d7AFOTjq6mZ8mnkfyCXEw:1668537666560&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjhgqOX67D7AhVqLUQIHYpuDdYQ_AUoAXoECAIQAw&biw=1740&bih=1072&dpr=2',
        },
        {
            linkText: 'Harold Cohen, AARON',
            linkSrc: 'http://www.aaronshome.com/aaron/index.html',
        },
        {
            linkText: 'Sofia Crespo: Artifical Natural History',
            linkSrc: 'https://www.aiartonline.com/highlights-2020/sofia-crespo-2/#:~:text=Artificial%20Natural%20History%20(2020)%20is,history%20book%20that%20never%20was%E2%80%9D.',
        },
        {
            linkText: 'advanoun @ twitter',
            linkSrc: 'https://twitter.com/advadnoun?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        },
        {
            linkText: 'sure ai labs @ twitter',
            linkSrc: 'https://twitter.com/sureailabs',
        },
        {
            linkText: 'images ai @ twitter',
            linkSrc: 'https://twitter.com/images_ai',
        },
        {
            linkText: 'Dalle-2 @ twitter',
            linkSrc: 'https://twitter.com/Dalle2_',
        },

        {
            linkText: 'inifite yay @ twitter',
            linkSrc: 'https://twitter.com/infiniteyay',
        },
        {
            linkText: 'can UX design dave us from AI?',
            linkSrc: 'https://uxdesign.cc/can-artificial-intelligence-help-save-democracy-3a1cceb4d54a',
        },       
        {
            linkText: 'nvidia AI playground',
            linkSrc: 'https://www.nvidia.com/en-us/research/ai-playground/',
        },

        {
            linkText: 'midjourney community showcase',
            linkSrc: 'https://www.midjourney.com/showcase/',
        },
        {
            linkText: 'deep dream generator gallery',
            linkSrc: 'https://deepdreamgenerator.com/#gallery',
        },
        {
            linkText: `nvidia's ediffi, image to image generation `,
            linkSrc: 'https://analyticsindiamag.com/nvidias-text-to-image-model-ediffi-completes-the-picture/',
        },
        {
            linkText: 'dream fusion AI (3d models generated with text)',
            linkSrc: 'https://www.youtube.com/watch?v=zWD5ZR5GtJM',
        },

        {
            linkText: 'a nice thoughtful collection of AI works',
            linkSrc: 'https://www.aiartonline.com/'
        }


    ],
    techLinks: [
        {
            linkText: 'diffusion bee',
            linkSrc: 'https://diffusionbee.com/',
        },
        {
            linkText: 'stable diffusion web',
            linkSrc: 'https://stablediffusionweb.com/#demo',
        },

        {
            linkText: 'midjourney',
            linkSrc: 'https://www.midjourney.com/',
        },
        {
            linkText: 'grokking stable diffusion notebook',
            linkSrc: 'https://colab.research.google.com/drive/1dlgggNa5Mz8sEAGU0wFCHhGLFooW_pf1?usp=sharing#scrollTo=JpjEKYlXXFd0',
        },
        {
            linkText: `'The generative landscape' -- free course (starting NOW!) by the guy who put together the notebook above`,
            linkSrc: 'https://johnowhitaker.github.io/tglcourse/',
        },

        {
            linkText: 'video: how does stable diffusion work? (AI coffee)',
            linkSrc: 'https://www.youtube.com/watch?v=J87hffSMB60',
        },
          

          
        // {
        //     linkText: 'another nice video on stable diffusion',
        //     linkSrc: 'https://www.youtube.com/watch?v=1CIpzeNxIhU',
        // },

        // {
        //     linkText: 'a shallow dive into stable diffusion code',
        //     linkSrc: 'https://www.youtube.com/watch?v=-lz30by8-sU',
        // },
          
        {
            linkText: 'paper: high resolution image synthesis with latent diffusion models',
            linkSrc: 'https://arxiv.org/abs/2112.10752',
        },

        {
            linkText: 'stable diffusion at github',
            linkSrc: 'https://github.com/CompVis/stable-diffusion',
        }, 
        {
            linkText: 'practical deep learning for coders',
            linkSrc: 'https://course.fast.ai/',
        },
        {
            linkText: 'stable diffusion explained in 15 tweets',
            linkSrc: 'https://twitter.com/iscienceluvr/status/1592860019057250304?s=27&t=km7cKku14aRYe5tM4InGsg',
        },
    ],


}

export default DAY24