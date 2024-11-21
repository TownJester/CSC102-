// track interval id
    var intervalId = 0;
// function will move image around page
function moveImage(){

    // make it so we cant click the start button another time
    document.getElementById("startButton").disabled = true;
    //make the stop button clickable
    document.getElementById("stopButton").disabled = false;
// create a nickname/shortcut variable that pounts to our HTML page
    var image = document.getElementById("memeImage")

    //this will help keep track of where the image was
    var oldX = 500;
    var oldY = 250;

    // keepiing track of the interval id will allow us to stop the image from moving
    intervalId = setInterval(
        function(){
            //set the x and y coordinates for the image
            var newX = 5; //moving the image by 5 pixles - can be a random number
            var newY = 5; //moving the image by 5 pixles - can be a random number

            //oldX += newX is the same thing as oldX = oldX + newX
            oldX += newX;
            oldY += newY;
            console.log("oldX = " + oldX)
            console.log("oldY = " + oldY)
            
            image.style.left = oldX + "px";
            image.style.top = oldY + "px";
        }, 1000); //1000 is 1000 milliseconds which equals 1 second
}

//this function will stop moving the image
function stopImage(){

    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    //call the built in Javascript function to clear out the interval
    clearInterval(intervalId);
}


// SOUND CODING
function addSound(){
    //create a new audio HTML element
    var soundEl = document.createElement("audio");
    //shortcut to the play button
    var btnPlay = document.getElementById("btnPlay");
    //shortcut to the pause button
    var btnPause = document.getElementById("btnPause");

    //set up the id="audioSound" on our audio element
    //equivalent to creating id in HTML
    soundEl.setAttribute("id", "audioSound");
    //set up the source
    // src = source = the file name
    soundEl.setAttribute("src", "Media/hawaii ambient sounds.m4a");
    //add the sound element to the HTML page
    document.body.appendChild(soundEl);

    //un-hide the pause and play buttons
    btnPause.hidden = false;
    btnPlay.hidden = false;
}

//set up function to play the sound
function playSound(){
    //set up the shortcut to the audio element that we created in the addsound function
    var audio = document.getElementById("audioSound")
    //start playin audio
    audio.play();
    //log to see that it works
    console.log("sound played");
}

//set up function to pause the playing of sound
function pauseSound(){
     //set up the shortcut to the audio element that we created in the addsound function
     var audio = document.getElementById("audioSound");
     //pause the sound playing
     audio.pause();
     console.log("Sound paused");
}