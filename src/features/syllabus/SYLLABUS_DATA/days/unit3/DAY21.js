const DAY21 = {
    id: 21,
    async: false,
    unit: 'unit3',
    date: 'November 4, 2021',
    title: 'depth',
    assignment: '',
    illustrationURL: 'https://res.cloudinary.com/chris-kubick/image/upload/v1632431430/side-effects/pointcloud_0_myssvc.gif',
    description: `
        Today we're going to continue looking at camera input and the ways that we can interact with that input.
        Maybe you've seen installations where you can interact with a projected image?  Today we're going to put together
        some things that we've already learned with a few new ideas and learn how that's done!  First, we'll look at some basic
        ways to understand the 'depth' of an by looking at color changes.  Then, we'll dip our toes into depth sensing, point clouds,
        real-time-appearance-based-mapping, lidar and SLAM (simultaneous localization and mapping).  Combinations of these techniques
        is how images like the one on the right are made.
        
    `,
    discussionQuestions: [
        ``,
        ``,
        ``,
        ``,
    ],
    videos: [

        {
            linkText: 'shiffman videos (processing) that I based my p5 versions on (below), pt 1',
            linkSrc: 'https://www.youtube.com/watch?v=nCVZHROb_dE',
        },
        {
            linkText: 'shiffman videos (processing) that I based my p5 versions on (below), pt 2',
            linkSrc: 'https://www.youtube.com/watch?v=QLHMtE5XsMs',
        },
        {
            linkText: 'shiffman videos (processing) that I based my p5 versions on (below), pt 3',
            linkSrc: 'https://www.youtube.com/watch?v=ce-2l2wRqO8',
        },
    ],
    inspirationLinks: [

        {
            linkText: 'text rain, by camille utterback and romy achituv',
            linkSrc: 'http://camilleutterback.com/projects/text-rain-for-ph%c3%a6no/',
        },
        {
            linkText: 'out of bounds',
            linkSrc: 'https://www.youtube.com/watch?v=CMiuyrqz8rw',
        },
        {
            linkText: `'volumetric', video calling`,
            linkSrc: 'https://twitter.com/voxonphotonics/status/1154557133771292672?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1154557133771292672%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.intelrealsense.com%2Finteractive-art%2F',
        },
        {
            linkText: 'depth/motion + a unity visual effects graph',
            linkSrc: 'https://twitter.com/_kzr/status/1122490599876096001?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1122490599876096001%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.intelrealsense.com%2Finteractive-art%2F',
        },
        {
            linkText: 'photogrammetry',
            linkSrc: 'https://en.wikipedia.org/wiki/Photogrammetry',
        },
        {
            linkText: 'a car wrapped in neopixels (by a design firm) - used real sense depth camera',
            linkSrc: 'https://www.arrayofstars.com/case_study/infiniti-qx50',
        },
        {
            linkText: 'a little deeper dive into the intel depth sensing cameras for computer vision',
            linkSrc: 'https://www.youtube.com/watch?v=tcJHnHpwCXk',
        },

        {
            linkText: 'a pretty detailed paper on developing a painting robot',
            linkSrc: 'https://www.mdpi.com/2076-3417/11/4/1467/pdf',
        },
        {
            linkText: 'what are point clouds and how are they used?',
            linkSrc: 'https://www.dronegenuity.com/point-clouds/',
        },

    ],
    techLinks: [

        {
            linkText: 'color tracking, motion detection and blob tracking (adapted from the video above)',
            linkSrc: 'https://github.com/socalledsound/computer-vision-p5',
        },
        {
            linkText: 'edge detection in p5',
            linkSrc: 'https://editor.p5js.org/socalledsound/sketches/MrysOMgrc',
        },
        {
            linkText: 'pretty serious paper on edge detection for motion tracking',
            linkSrc: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8321341/',
        },
        {
            linkText: 'video edge detection in p5 by child coder simon tiger',
            linkSrc: 'https://editor.p5js.org/simontiger/sketches/a94yVnaRn',
        },
        {
            linkText: 'intel d435 with raspberry pi',
            linkSrc: 'https://www.youtube.com/watch?v=LBIBUntnxp8',
        },
        {
            linkText: 'handheld 3d scanning using raspberry pi and intel realsense camera',
            linkSrc: 'https://eleccelerator.com/pi-handheld-3d-scanner/',
        },
        {
            linkText: 'a differnet step by step handheld 3d scanning using raspberry pi and intel realsense camera',
            linkSrc: 'https://www.instructables.com/3D-Printable-3D-Scanner-Using-Intel-Realsense-D435/',
        },

        {
            linkText: 'shiffman videos (processing) that I based my p5 versions on (below), pt 1',
            linkSrc: 'https://www.youtube.com/watch?v=nCVZHROb_dE',
        },
        {
            linkText: 'shiffman videos (processing) that I based my p5 versions on (below), pt 2',
            linkSrc: 'https://www.youtube.com/watch?v=QLHMtE5XsMs',
        },
        {
            linkText: 'shiffman videos (processing) that I based my p5 versions on (below), pt 3',
            linkSrc: 'https://www.youtube.com/watch?v=ce-2l2wRqO8',
        },
    ],


}
export default DAY21