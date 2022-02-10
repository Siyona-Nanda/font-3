left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;


function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
    }
}

function modelLoaded() {
    console.log("posenet is working");

}

function draw() {
    background("limegreen");
    fill("yellow");
    stroke("red");
    textSize(difference);
    text("Siu", 50, 200);

}