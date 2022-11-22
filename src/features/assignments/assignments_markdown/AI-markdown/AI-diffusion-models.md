stable diffusion web:
https://stablediffusionweb.com/#demo

diffusion bee:
https://diffusionbee.com/
liner.ai
https://liner.ai/

coffee bean:
https://www.youtube.com/watch?v=J87hffSMB60
movie diffusion:
https://www.youtube.com/watch?v=AcvmyqGgMh8

(classifier free guidance?)

high resolution image synthesis with laten diffusion models
https://arxiv.org/abs/2112.10752

stable diffusion at github:
https://github.com/CompVis/stable-diffusion



forward diffusion process (t steps) end is noise

diffusion models learn to reverse this


u net cnn downsampling - upsampling

diffusion - little noise to more noise
backwards is reverse

step based.
at each step, we subtract a fraction of the total noise from the somewhat noisy image to get a less noisy image


TEXT via transformers
concatenated with image input and also letting unit attention layers attend to it

LATENT DIFFUSION MODELS
(LDM)


        glide - trained on smaller images + extra upsampling NN

run image through encoder (vqGAN) to create lower dimensional representation of image

LDM takes hgiher resolution and encodes it into a thing that doesn't seem like an image to us

diffusion happens in this 'latent space'
image semantics only occur in lower-dimensional latent space

then image is upsampled by decoder


stable diffusion was trained on a subset of LAION 5B called LAION-aesthetics
    these were five star images ranked by alpha testers of stable diffusion




hwo to finetune stabel diffusion using textual inversion




my prompts
an artificial intelligence as big as a football stadium in the style of studio ghibli


a brain as big as a football stadium in the style of studio ghibli

