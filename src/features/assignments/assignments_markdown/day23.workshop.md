# augmented

<!--
    ![hvrbrd](https://res.cloudinary.com/chris-kubick/image/upload/v1599086549/side-effects/hvbrd2_otgcnw.jpg)

    # sockets

    Today we are going to get kind of technical.  Try to follow along as best you can in class, I think it really, really, REALLY helps to have someone who knows what they're doing to guide you through this process.  Today we're going to use Node.js, which is basically the javascript interpreter from a web browser, without the web browser.  We're going to build a server that uses web sockets and we're going to deploy it to Heroku.  This server will run a game remotely, and then several users can play it at the same time.  Or, someone can play it and control the game not with a keyboard or mouse, but with, say, the accelerometer from a phone, or a button or wind sensor or a 3d camera or....the possibilities are kind of endless.

    This is the same set of technologies that let;s us use these types of controls with a raspberry pi, so don't worry -- if you don't totally get it today you'll have another shot at it next Tuesday when we start exploring the raspberry pi.


    ![sockets image](https://res.cloudinary.com/chris-kubick/image/upload/v1605154288/side-effects/kissclipart-diagram-clipart-diagram-client-amazon-elasticache-2e20865f5cfcf417_fjydbg.png)

    <!-- I've also made a series of [videos]() you can follow to build this app. -->

    # node

    The first thing you need to do is install [node](https://nodejs.org/en/download/).  It installs like any other software on your computer.

    Once it's installed, open vscode and open a new window (shift+cmd+N).   Then click 'add workspace folder'.  Add a new folder to your desktop and then add that folder to the workspace.

    # the terminal

    Now we're going to open the terminal in vs code.  Go to the view menu and select terminal.  You should see a terminal open up at the bottom of the screen:

    ![terminal open](https://res.cloudinary.com/chris-kubick/image/upload/v1605154902/side-effects/terminal_q7k2zy.jpg).

    We're talked about this before, what we're seeing is a textual interface to our computer.  Let's look at the output.  On mine it says

    ```
    bash: /Users/df/.bashrc: No such file or directory
    (base) Douglass-iMac:socket-server df$

    ```

    First it's saying, I'm running a bash terminal.  It's looking for a setup file called .bashrc, which I have neglected to create.  That's ok, we don't need it.

    The next line lists the name of my computer and then the directory that I am currently in, which is called socket-server.  Then it lists my user name and finally a dollar sign which means it's awaiting a command.  Let's try 'ls'.  Type that, exactly, and hit the return key.

    ```
    (base) Douglass-iMac:socket-server df$

    ```

    I get the same line back, because there's nothing in this directory; ls lists the contents of the directory.  Let's try another command:

    ```
    (base) Douglass-iMac:socket-server df$ touch index.html

    ```

    And now try 'ls' again (don't forget to hit enter after every command).  You should see:

    ```
    index.html

    ```
    and then a new line awaiting  a new command.  Let's remove that file: 'rm index.html'

    If you 'ls' again, you should see that it's now gone.

    # node and npm

    First, let's make sure that node is installed. Type node -v.  You should get back a node version number.  Mine is version 14.2.0:

    ```
    v14.2.0

    ```

    Now type 'npm init'.  This will start you on a series of prompts where you can set things like your project name.  Just hit enter until it's done.  When it's done, you should have a new file in your directory called package.json.  Run the command 'ls' again to make sure.

    We can also see that file in the file browser to the left.  If you open it in vs vode it should show you a .json file.  Remember json from our sprite sheets?  Here it is again.  This is some data for your app.  It should look like this:

    ```
    {
    "name": "socket-server",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
    }
    ```


    Okay, things are about to get more interesting.  We're going to use npm to download some 'dependencies'.  AKA some javscript libraries to use in our project. Type the following into your terminal command line and hit return again:


    ```
    npm install express socket.io --save
    ```

    You should see a bunch of output in your terminal, a few warnings and then it should tell you that installed the packages we requested.  Your  package.json should now list those, under dependencies:

    ```
    {
    "name": "socket-server",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "express": "^4.17.1",
        "socket.io": "^3.0.1"
    }
    }

    ```

    And now there should be a folder called node_modules in your main directory.  It has a bunch of javascript inside.  I usually stay out of there and let the libraries do their thing.  These libraries are one of the best things about Node and, honestly, javascript.  There are well over a million packages at npm, waiting for you to download and use in your next project.  Two of the most popular are the ones that we've installed: express and sockets


    # express

    Express is amazing.  It let's you build a web server -- the code which will process incoming http requests and serve up pages -- with almost no code.

    Below is a fairly standard, simple one, the one we'll use.  I copied it from the skateboard game that we played earlier; I removed the sockets part of the server for now, but we'll add it back in a bit.  Make a new file called server.js in your root directory and copy the following code in:

    ```

    const express = require('express');
    const app = require('express')();
    const http = require('http').Server(app);

    app.use('/', express.static(__dirname + '/public'));

    http.listen(process.env.PORT || 7000);


    ```

    In node, we import code using the require() function.  So I import express and a library called http; I make an instance of express and call it app; I use the app to serve a page that will be in the root folder and then I tell http to listen on port 7000 for an http request.

    Ok let's make a 'public' folder.  In the terminal type 'mkdir public' and you should get a folder in your file browser.  Now move into that folder: 'cd public'.  Now, like before, 'touch index.html'.  You should have an index.html.  That's going to be the entry point for the web site we're building.

    Put a div on that file, along with the necessary biolerplate.  Remember how to do that?  It'll look like:

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div>hi</div>
    </body>
    </html>

    ```

    Ok, let's start that server.  In your terminal, type 'node server.js' to run your server code using node.  You should get back a console message in your terminal:

    ```
    server running on port:7000
    ```

    Now navigate to http://localhost:7000 in a web browser and let's see if your server is working.  You should get your index.html as a response from your server.

    When you are well and finished loving yourself for making it this far, type ctrl+c to quit the server.  If you refresh your browser that's showing localhost:7000, now you'll get a message that the site can't be reached.  Oh well.  Nothing is permanent.

    ![sockets image](https://res.cloudinary.com/chris-kubick/image/upload/v1605154288/side-effects/kissclipart-diagram-clipart-diagram-client-amazon-elasticache-2e20865f5cfcf417_fjydbg.png)


    # sockets

    Ok, this isn't exactly earth shattering.  That's a lot of setup to basically do what live server does for us in vs code, albeit at a different port.  But this is big stuff.  We can actually make this server accessible to the outside world, on our computer, and serve web pages to the world, just like in the old days.  Or, we can deploy it to a free(ish) service like heroku and we can serve it from there.  More importantly, this server can be the backbone for all sorts of fun stuff, like storing and serving data.  Or, runnning a multibillion dollar enterprise that puts all the local bookstores out of business, or histing your own social media network.  But we'll get to that later.  Right now, what we want to do is add the web sockets.  First, we import the library, and pass our web server (the variable named http) in:

    ```
    const  io = require('socket.io')(http);

    ```

    Then, we register something that's a lot like an event listener, except it's a message listener.  Let's just listen for a connection to start:

    ```
    io.on('connection', function(socket){
        console.log('client connected:', socket);
    })
    ```

    Now, we just need to set up our client -- our web page at index.html -- as a socket.

    First we import the library from node_modules in the head like any other js library:

    ```
    <script src="/socket.io/socket.io.js"></script>
    ```

    Then in a script tag in the body we will send a message to the server-side io when a connection is established, ie when the page loads.

    ```
        <script>
            const socket = io.connect();
            socket.on('connect', () => {
                console.log('client connected')
            })
        </script>
    ```

    This might seem that interesting, but it's the core of what lies underneath every message app, every real0-time chat app, any two player game on the web.  It's actually really awesome.  From this, we can build out a set of messages that we can send back and forth between the server and between any web clioents that connect to the server.  To illustrate this, I'd like to build it out a bit more.

    # a simple game

    This game is going to start really simple but over a few sessions we'll build it out, eventually adding a database where people can upload their own images and sounds.  But today, it's just going to be a p5 sketch that let's all of us make music together.


    # serving the game

    I put together a p5 [sketch](https://github.com/socalledsound/simple-sound-circle-game) that has a ball in it, you can move it around and you can click it to make a sound play.  It also has the socket code we previously put in our index.html.

    We're going to serve this sketch from our server, and we're going to build on what we did with sockets.

    Download it and put it in the public folder of your server, the whole sketch.  You should see the sketch when you fire up the server again and visit localhost: 7000.  Nice!  Now we're serving a p5 sketch from our server.

    Now what we have to do is, wire up sockets.

    # sending messages with sockets

    Let's start on the client side, making our sketch ready to receive some data.  If you want to see the full code and compare as we go along, it's [here](https://github.com/socalledsound/sound-circle-server).

    First, in setup, I'll send a message back to the server with some data about my circle when the setup function runs, and I've made a new circle.


    ```
        const data = {
            x: myCircle.pos.x,
            y: myCircle.pos.y,
            size: myCircle.size,
            col: myCircle.col,
            clicked: myCircle.clicked,
        }

        socket.emit('start', data);

    ```

    I'm using the emit method of sockets, which takes a message name and some data.  Back in the server we'll receive that message and do some things with it.  We'll get to that in a bit but for now let's stay in the client.

    My circle is going to change over time in the draw loop, so I'll write a similar there that will send the updated info about my circle.

    ```
        const data = {
            x: myCircle.pos.x,
            y: myCircle.pos.y,
            size: myCircle.size,
            col: myCircle.col,
            clicked: myCircle.clicked,
        }

        socket.emit('update', data);

    ```


    # receiving messages

    Okay so now the client is sending some info out over its socket connection.  On the server side, I can get that message, store it, and then send it out to all connected clients.

    Let's go back to server.js

    First, I'll make an array to store the data from the clients:

    ```
    let circles = [];
    ```

    Then, I'm going to make myself a data type name Circle, to help with managing the data:

    ```
    class Circle {
        constructor(id, x, y, size, col, clicked, freq){
            this.id = id;
            this.x = x;
            this.y = y;
            this.size = size;
            this.col = col;
            this.clicked = clicked;

        }
    }
    ```

    It's sort of like a trimmed down version of the SoundCircle class back on the client, with only the data that I need to pass everywhere.

    Each Circle also has an id, which i can get from it's socket connection.

    Inside the function that runs when a connection starts, we'll set up two listeners that will wait for the messages we just created, and a third that will listen for a disconnection message.

    ```
    io.on('connection', function(socket){
        console.log('client connected, new player id is:' + socket.id);

        socket.on('start', (data) => {
            const circle = new Circle(socket.id, data.x, data.y, data.size, data.col, data.clicked, data.freq)
            // console.log(data);
            circles.push(circle);
        });

        socket.on('update', (data) => {
        circles.forEach((circle, i) => {
            if(circle => circle.id == socket.id){
                    circles[i] = data;
            };
            })
        });

        socket.on('disconnect', function() {
            console.log("Client has disconnected");
            console.log(circles);
            newCircles = circles.filter(circle => circle.id != socket.id);
            circles = newCircles;
            console.log(circles)
        });

    })


    ```

    When the server receives a 'start' message, it takes the data that comes with that message and creates a new Circle.  When it receives an update message, it finds the correct circle from our stored circle data (using the id) and updates that circle.  And when we receive a disconnect message, we delete that circle from our array of circles.


    # sending the data back to the clients

    Now what we have to do is send the data back to the clients; we want to draw all of the circles in all of the clients so everyone can see what's going on with all of the other circles.

    What I'll do is call setInterval and send a message periodically, which will contain the array of circles.  If anyone has joined, there will be circles.

    ```
    setInterval(heartbeat, 33);

    function heartbeat(){
        io.sockets.emit('heartbeat', circles)
    }

    ```

    So now, all we have to do is go back to the client and listen for that message.

    # listening for the heartbeat

    Back in sketch.js, in setup, I'll add an array in the global scope to recieve the other circles from other clients:

    ```
    let otherCircles = [];

    ```

    Then, I'll and a listener:

    ```
        socket.on('heartbeat', (data) => {

            otherCircles = [];

            data.forEach(item => {
                if(item.id != socket.id){
                    otherCircles.push(item);
                }
            })
        })

    ```

    When the client receives a 'hearbeat', it will take in the data and add all of the circles with ids that are different from the id of the local client.

    Then, in draw, I can iterate over that array and show all of those circles:

    ```
        otherCircles.forEach(circle => {
            displayCircle(circle);
        })

    ```

    And now I just need that displayCircle function.


    ```
    function displayCircle(circle){
        const { x, y, size, col, clicked} = circle;
        fill(col);
        stroke(220, 200, 220);
        const ellipseStroke = clicked ? 9 : 3;
        strokeWeight(ellipseStroke);
        ellipse(x, y, size);
    }
    ```

    # deploying to heroku

    I also set up messages to pass data back and forth from the clients in order to play sounds. I'm going to let you explore the code yourself and see if you can understand what's going on there so we can focus on a last interesting step, which is deploying this app to a service called heroku.

    Heroku is another one of those great services that's free for beginners and hobbyists. You can host apps like this one there, so that people who aren't at your local computer can connect to your app.

    It's very easy to set up.

    First you'll need an account, which you can get at [heroku.com]().

    Then, you'll need to install the [heroku command line tools](https://devcenter.heroku.com/articles/heroku-cli).

    Finally, just click 'new' to create a new app, and follow the instructions for uploading your app.  I recommend using git!

    To use git, you just need to set your heroku app as a remote for your git :

    ```
    heroku git:remote -a thawing-inlet-61413
    ```

    and then push it:

    ```
    git push heroku main
    ```

    I know this stuff is overwhelming the first time you do it, I'm here to help if you need me!

    Here's a nice [video](https://www.youtube.com/watch?v=MxfxiR8TVNU) that outlines the deployment process, you can follow along and deploy your own app.

    # assignment

    Ok, that was, admittedly, a lot.  Particularly for those of you who don't feel super comfortable in javascript.  But I want you to see if you can do this yourself!  See if you can use my code as a starting point, and deploy your own multiplayer experience to heroku.  If you're feeling a little lost, but want to dive in here and master this stuff, Daniel Shiffman has a great video on making [Agar.io](https://www.youtube.com/watch?v=JXuxYMGe4KI), and another video on making it [multiplayer](https://www.youtube.com/watch?v=ZjVyKXp9hec&t=17s).  Or, you can follow his tutorial on making a [collaborative drawing tool](https://thecodingtrain.com/Tutorials/12-websockets/).

    <!-- I've also made [a series of videos]() where I build this game and wire up sockets.  You can code along with me as I go. -->

    If you have something interesting to share, upload it to the gallery, or if you just don't...show us a preview of your final project.  See you next time!

-->
