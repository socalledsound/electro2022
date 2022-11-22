# dream booth

Last class we took a look at how AI text to image generators work, and took a slightly closer look at how Stable Diffusion in particular works.

<!-- REVIEW HERE with a bit more depth

explain which model it uses -->

Today we're going to learn how to extend the base stable diffusion model with our own image models.

This is called 'transfer learning', because we start with an already somewhat 'intelligent' model and then add just a little more data on top of that.  In our case, the little that we add is going to be actually quite little -- 30 images or so -- and we're going to add just one keyword that is associated with those images.

Some of the downsides of the effectiveness of this process -- as well as the process itself -- are described a in the [invasive diffusion](https://waxy.org/2022/11/invasive-diffusion-how-one-unwilling-illustrator-found-herself-turned-into-an-ai-model/) article, which also has a link to a really helpful and easy to follow [youtube video](https://www.youtube.com/watch?v=ravETUa84P8) that goes through the process.

To follow it, you'll need to set up an account at [google colab](colab.research.google.com) if you don't already have one, and you'll also need a [google drive account](https://drive.google.com/) and an account at [hugging face](https://huggingface.co/).  The free tier of all of these should be fine.

The first thing you need are a bunch of images, I just used Google to grab 30 images of Sam Bankman-Fried, the famous crypto-grifter/vegan drug addict who recently lost 32 billion dollars or something like that.

(I just did him because I was having trouble finding thirty images of myself)

Next, you need to resize them all to 512 x 512 resolution.  [Birme]() is a website that can automate that process, or you can just do it using photoshop or apple preview.

Next, open up this [google colab page](https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast-DreamBooth.ipynb), and go through each cell.  

Refer to the [video](https://www.youtube.com/watch?v=ravETUa84P8) if you get stuck.

Training the model will be fairly time consuming, for me it took nearly an hour.

When you're done, you should be able to open up a stable diffusion instance and play to your heart's desire.

Be sure to post what you come up with in the gallery!

Below you can see some of the prompts that I used to coax a little more detail out of the system.

![portrait sabafry, joker, HDR, pop psychadelic art by Dan Mumford, low poly plastic figurine, on a white background, green neon](https://res.cloudinary.com/chris-kubick/image/upload/v1669090910/00020-3246086261-portrait_saba_m7rieg.png)

portrait sabafry, joker, HDR, pop psychadelic art by Dan Mumford, low poly plastic figurine, on a white background, green neon

![portrait sabafry, joker, HDR, pop psychadelic art by Dan Mumford, low poly plastic figurine, on a white background, green neon](https://res.cloudinary.com/chris-kubick/image/upload/v1669090910/00019-3246086260-portrait_saba_1_yk4vtk.png)

portrait sabafry, joker, HDR, pop psychadelic art by Dan Mumford, low poly plastic figurine, on a white background, green neon


![sabafry Funko pop joker figurine made of plastic product studio shot on a white background diffused lighting centered](https://res.cloudinary.com/chris-kubick/image/upload/v1669090725/00016-2081557248-sabafry_Funko_xovbxu.png)

sabafry Funko pop joker figurine made of plastic product studio shot on a white background diffused lighting centered

![sabafry Funko pop joker figurine made of plastic product studio shot on a white background diffused lighting centered](https://res.cloudinary.com/chris-kubick/image/upload/v1669090597/00015-2081557251-sabafry_Funko_syf7ic.png)

sabafry Funko pop joker figurine made of plastic product studio shot on a white background diffused lighting centered

![sabafry Funko pop joker figurine made of plastic product studio shot on a white background diffused lighting centered INTERRUPTED](https://res.cloudinary.com/chris-kubick/image/upload/v1669090597/00014-1158786946-sabafry_Funko_je5kcx.png)

sabafry Funko pop joker figurine made of plastic product studio shot on a white background diffused lighting centered INTERRUPTED


![portrait sabafry, joker, HDR, pop  psychadelic art by Dan Mumford, low poly on a white background, green neon
lighting,  vibrant,  vaporwave, centered, by derek gores](https://res.cloudinary.com/chris-kubick/image/upload/v1669090725/00017-195748172-portrait_sabaf_epxzrh.png)


![portrait of sabafry clown huge sunglasses rainbow hair tone mapped highly detailed digital painting concept art smooth art by alphonse mucha rutkowski castle background](https://res.cloudinary.com/chris-kubick/image/upload/v1669090644/00010-1668041602-portrait_of_s_zpcwhz.png)

portrait of sabafry clown huge sunglasses rainbow hair tone mapped highly detailed digital painting concept art smooth art by alphonse mucha rutkowski castle background


![portrait of sabafry clowndevil horns red nose rainbow hair tone mapped highly detailed digital painting concept art smooth art by magritte vegatables](https://res.cloudinary.com/chris-kubick/image/upload/v1669090643/00011-3628092417-portrait_of_s_ho3rx4.png)

portrait of sabafry clowndevil horns red nose rainbow hair tone mapped highly detailed digital painting concept art smooth art by magritte vegatables

![portrait of sabafry clowndevil horns red nose rainbow hair tone mapped highly detailed digital painting concept art smooth art by magritte vegatables](https://res.cloudinary.com/chris-kubick/image/upload/v1669090642/00012-3628092418-portrait_of_s_pwp8yi.png)

portrait of sabafry clowndevil horns red nose rainbow hair tone mapped highly detailed digital painting concept art smooth art by magritte vegatables

![portrait of sabafry clown devil horns red nose long face dramatic lighting tone mapped highly detailed digital painting concept art smooth art by dali ](https://res.cloudinary.com/chris-kubick/image/upload/v1669090618/00013-1981665439-portrait_of_s_tioylr.png)

portrait of sabafry clown devil horns red nose long face dramatic lighting tone mapped highly detailed digital painting concept art smooth art by dali 





