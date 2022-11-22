# stable diffusion

Today we'll explore the much-talked about stable diffusion model for generating images using text prompts.

You've undoubtedly all heard about this by now (not least perhaps because I've been talking about it all semester), and perhaps even used these tools.  If not, let's get started by trying a few.  After we try them, I'll come back and explain some of the differences.

---

First, Stable Diffusion.


Text-to-image AI has been around in nearly it's current form since at least early 2021, when advanoun pioneered the pairing of open AI's CLIP language model with VQGAN techniques (more on that later).

But back then, those techniques required at least a little familiarity with Python and Google's Cloud tools, such as colab notebooks, like the one here  (which is from early 2021):

https://colab.research.google.com/drive/1NCceX2mbiKOSlAd_o7IU7nA9UskKN5WR?usp=sharing

Then, in August of 2022, stable diffusion sprang onto the scene, with open source versions of all of these tools, so enterprising folks could bundle them into new interfaces and applications.

Diffusion bee is, I think, a good way to use this if you have the hardware to support it.  You can install it locally and run it as much as you want.

https://diffusionbee.com/


If you don't have the hardware to support it, you can use the same model online, until you run out of credits, at the stable diffusion website:
https://stablediffusionweb.com/#demo


Midjourney is another popular tool which does roughly the same thing:

https://www.midjourney.com/


https://discord.com/invite/midjourney


There are, of course, other variations of these tools: [https://imagen.research.google/](Google), [](Meta), [](Microsoft) and [](nvidia) all have their own versions of these tools, and these tools are continuing to develop at breakneck speed!  It seems more or less certain that fully immersive films generated from propmpts will be possible soon, or maybe even by the end of the semester.  

It's all pretty amazing.

But how does it work, actually?  Let's roll up our sleeves and take a peek under the hood.  We're not going to go deep into the math, or even deep into the code; but, today and also next Tuesday we will scratch the surface a tiny bit.

I'd like to start with one of my favorite recent resources, a google colab notebook called [https://colab.research.google.com/drive/1dlgggNa5Mz8sEAGU0wFCHhGLFooW_pf1?usp=sharing#scrollTo=JpjEKYlXXFd0]('grokking stable diffusion').  

You may need to make an account at Google colab if you don't already have one.  Google colab is a site that lets you run code on google servers, meaning you can run complex tasks remotely on their servers. You get a certain amount of free time per month, or you can upgrade to a premium account for ten bucks or something.

This notebook was put together by a guy named John Whitaker, who, coincidentally, is just about to start teaching another free online course: [https://johnowhitaker.github.io/tglcourse/](the generative landscape).  I'm signed up for it and, if you're interested, I recommend that you sign up, too!   It should be a lot of fun.  It starts in a few weeks.

If you open it up, you'll see, first, a section called setup and imports.  I talked about a few of these libraries in class.  If you mouse over a black cell, you should see a little play button the left.  Run each cell, one after the other, to run the setup and imports.  Next, we import the models, I also talked just a bit about this; this is in a lot of ways, the thing we call AI, these are bits of code which have learned how to transform text into images.  Run this cell, too.

With stable diffusion, we start with text prompts, so we have a model, first, that takes a string of text and attempts to understand what it means.  It does this by studying the relationships between words, then creating a complex multidimensional understanding of that string of text -- where, in games we work in two or three dimensions (x, y, z), these language models tend to work in more like 500 dimensions.  Mindblowing.

Our string of text gets encoded, alongside an image that is, literally, randomized noise.

Then, in a number of steps that we can define -- which we can think of sort of like the semantic resolution of our generative image -- the diffusion model peels away that noise, cross-referencing our developing image at each step, to 'create' our image.

This is an overly simplistic representation of this process, but it'll do for now.  If you want to learn a little more about this process, dig into the notebook!  Our chat with me a bit.  I'm by no means an expert on this stuff but I do have some experience with it and I have a pretty solid understanding of the pieces involved.

But even without deep understanding of this code or the process, there are some places that we can have some fun.  Take a look at the next 'diffusion loop' section of code.  This is where the program loops through the necessary steps to turn water (noise) into wine (an image that makes us happy).

At the top you see some settings: 


```

# Some settings
prompt = ["A watercolor painting of a macaw"]
height = 512                        # default height of Stable Diffusion
width = 512                         # default width of Stable Diffusion
num_inference_steps = 30            # Number of denoising steps
guidance_scale = 7.5                # Scale for classifier-free guidance
generator = torch.manual_seed(32)   # Seed generator to create the inital latent noise
batch_size = 1


```

The most important variable here is our prompt.  You can change this to any text that you like.  People have been working with these models for a while now, and there are forums like [https://www.reddit.com/r/StableDiffusion/](reddit/stableDiffusion) where people share prompts that work well with the model.  Also, later on in this notebook, the author describes a bit more about how this prompt gets encoded, if you're interested. 

The dimensions of the image are not really that interesting to change, but obviously you can.

The steps, which is the number of times this loop gets run, will change the image dramatically, as will the guidance scale.  Change those values, as well as the seed, and run this cell a few times and you'll see that you can get remarkably different outputs from the same text prompt!

The batch size is, obviously, the number of outputs that you get each time.

If you run this cell, you should see an image ouptut underneath the cell.

So, read through the rest of this notebook!  He talks a bit more about how the models work and also shows you some other alternatives, like image->image and mixing multiple text embeddings.  Play around a bit, and post something neat to the gallery!

Next class, I'll show you how to train your own model, so you take images of your own face, or your own artwork and use those as a basis for image output.
