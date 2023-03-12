function changeImage() {
    let displayImage = document.getElementById('image')
    if(displayImage.src.match('images/Neutral.png')){
        displayImage.src = 'images/Kind.png'
    } else {
        displayImage.src = 'images/Neutral.png'
    }
}

function playAudio(audioId){
    var audio = document.getElementById(audioId);
    audio.play();
}

function changeImage2() {
    let displayImage = document.getElementById('image2')
    if(displayImage.src.match('images/Neutral.png')){
        displayImage.src = 'images/Happy.png'
    } else {
        displayImage.src = 'images/Neutral.png'
    }
}


function changeImage3() {
    let displayImage = document.getElementById('image3')
    if(displayImage.src.match('images/Neutral.png')){
        displayImage.src = 'images/Unsure.png'
    } else {
        displayImage.src = 'images/Neutral.png'
    }
}

function changeImage4() {
    let displayImage = document.getElementById('image4')
    if(displayImage.src.match('images/Neutral.png')){
        displayImage.src = 'images/Suprised.png'
    } else {
        displayImage.src = 'images/Neutral.png'
    }
}

function changeImage5() {
    let displayImage = document.getElementById('image5')
    if(displayImage.src.match('images/Neutral.png')){
        displayImage.src = 'images/Sleepy.png'
    } else {
        displayImage.src = 'images/Neutral.png'
    }
}

function changeImage6() {
    let displayImage = document.getElementById('image6')
    if(displayImage.src.match('images/Neutral.png')){
        displayImage.src = 'images/Love.png'
    } else {
        displayImage.src = 'images/Neutral.png'
    }
}

function changeImage7() {
    let displayImage = document.getElementById('image7')
    if(displayImage.src.match('images/Neutral.png')){
        displayImage.src = 'images/Dead.png'
    } else {
        displayImage.src = 'images/Neutral.png'
    }
}

function changeImage8() {
    let displayImage = document.getElementById('image8')
    if(displayImage.src.match('images/Neutral.png')){
        displayImage.src = 'images/Isaac.png'
    } else {
        displayImage.src = 'images/Neutral.png'
    }
}

function changeImage9() {
    let displayImage = document.getElementById('image9')
    if(displayImage.src.match('images/Neutral.png')){
        displayImage.src = 'images/Yelling.png'
    } else {
        displayImage.src = 'images/Neutral.png'
    }
}

var mysong = new Audio();
mysong.src = 'audio/girl_scream-6465.mp3';

const playsong9 = () =>{
    mysong.play();
}

const pausesong9 = () =>{
    mysong.play();
}

function changebackground(color){
    document.querySelector('.buttons').style.backgroundColor = color;
}


/* One of the initial plans was to have sound effects as the mouse hovered over each character, however
since I couldn't figure that out, I just left it without sound. */