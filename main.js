function preload(){

}
function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(0, 0, 400, 300);
    video.hide();
}
function draw(){
    image(video, 0, 0, 400, 300);
}

function save_img(){
    save("Mustache funny image with mustace.png");
}