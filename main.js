video = "";
status1 = "";
function preload(){
    video = createVideo("video.mp4");
}
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video.hide();
}
function draw(){
    image(video,0,0,480,380);
}
function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status Image Detecting"
}
function modelLoaded(){
    console.log("modelLoaded");
    status1 = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
