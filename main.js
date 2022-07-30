difference = 0
rightWristX = 0
leftWristX=0
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)
    canvas = createCanvas(550, 550)
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoaed)
    poseNet.on('pose',gotPoses)
}
function modelLoaed() {
    console.log("poseNet is initialized");
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results) 
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX)
    }
}
function draw() {
    background("white")
    document.getElementById("").innerHTML = "font size of the text will be = " + difference + " px ";
    fill("green")
    stroke("green")
    square(noseX,noseY,difference)
}