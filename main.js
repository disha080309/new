function preload(){

}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function gotPoses(results){
    if (results.length>0)   
    {
        console.log(results);
        console.log("nose X position "+results[0].pose.nose.x);
        console.log("Nose Y Position "+results[0].pose.nose.y);
        console.log("mouth X position "+results[0].pose.mouth.x);
        console.log("mouth Y Position "+results[0].pose.mouth.y); 
        console.log("left eye X position "+results[0].pose.left_eye.x);
        console.log("left eye Y Position "+results[0].pose.left_eye.y);
    
    } 
}
function modelLoaded(){
    console.log("model Has Loaded")
}
function draw(){
    image(video,0,0,300,300);
}
function take_snapshot(){
    save("my_filter_selfie.png");
}
