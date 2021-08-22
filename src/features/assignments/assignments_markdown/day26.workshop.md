# backend 

We're going to build an online gallery today, giving users the ability to upload images, and then displaying all of the images that have been uploaded.

I sent you an email earlier this semester with a coupon for some free time on the google cloud. Today we're going to learn what that's all about.  We'll set up a remote database, and wire that up to our client.  

We're going to use a service from Google called [Firebase](https://firebase.google.com/).

It's one of a number big 'server as a service' (SAS) providers.  Another big one is available thru Amazon, it's called AWS.  

And there are a bunch of other ones, too.  

These services are a more developed alternative to cloud hosting services like Heroku, which we used before.

They offer very quick setup for thigns like databases, and take care of all the details.  If we wanted to deploy a database to something like heroku, or even our own web server, it would be a lot more work.

Firebase has three storage options, firebase realtime database, firebase firestore and firebase storage.  We're going to use two of those options: firebase storage for storing media files, in our case, images; and firestore, for storing the urls of those images so we can use them.

We could also store other information in firestore, like comments or names of the images, or whatever.  But we're going to keep it nice and simple, with just the images.

The repo for this project is [here](https://github.com/socalledsound/new-image-gallery).

I've made some videos in which I go through this process and explain it, this time I could test the drag and drop and it actually works (cough).  Apologies for my lack of testing on the last ones!  

I think the videos are quite self-explanatory!

In a later video, I'll go into more detail about promises and also show you how to set up a p5 sketch to handle image urls from firebase!

For now, I leave you with the videos:

[intro](https://youtu.be/eC7RGp1cOtA)
[html+css starter code](https://youtu.be/wMini92hSNw)
[drag and drop (no firebase)](https://youtu.be/atWLR6YBtyQ)
[firebase setup](https://youtu.be/PaazEphXf5A)
[uploading files](https://youtu.be/m_C_kKbWmOg)
[firestore integration](https://youtu.be/zLgFI6kKbJo)
[deploy to firebase hosting](https://youtu.be/wyr39Wnb14s)

<!-- 
[setting up firebase](https://youtu.be/9r0GRwCBbLQ)
[intro to gallery project](https://youtu.be/I_IxkQkp438)
[drag-drop-dom](https://youtu.be/GZ6GnjunwgI)
[image uplaod](https://youtu.be/zck6-8OCF0Y)
[integrating firestore](https://youtu.be/OpvZdfYNkT8)
[deploy app](https://youtu.be/0kegg3n2NqU) -->


Ok!  And I hope that was all clear, let me know if you need help.

Some helpful links:

[firebase](https://firebase.google.com/)
[firebase console](https://console.firebase.google.com/u/0/)
[FileReader api](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
[get started with firebase hosting](https://firebase.google.com/docs/hosting/quickstart)
[my app, live](https://persistently-4625f.web.app/)
