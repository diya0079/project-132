img="";
status="";

function preload() {
img=loadImage('dog_cat.jpg');
}

function setup() {
canvas=createCanvas(640,420);
canvas.center();
objectdetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:dectecting objects";

}
function modelLoaded() {
    console.log("model is loaded");
    status=true;
    objectdetector.detect(img,gotresult);
}

function gotresult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img,0,0,640,420);
    fill("#ff0000");
    text("dog",45,75);
    noFill();
    stroke("#ff0000");
    rect(30,60,450,350);

    fill("#ff0000");
    text("cat",320,120);
    noFill();
    stroke("#ff0000");
    rect(300,90,270,320);
}