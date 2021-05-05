canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 100;
car1_height = 90;
car1_x = 10;
car1_y = 10;

car2_width = 100;
car2_height = 90;
car2_x = 10;
car2_y = 100;
background_image = "racing.jpeg";
car1 = "car1.png"
car2 = "car2.png"



function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2;
}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown );

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log("keyPressed");

    if (keyPressed == 38) {
        up();
        console.log("up")
    }

    if (keyPressed == 40) {
        down();
        console.log("down")
    }

    if (keyPressed == 39) {
        right();
        console.log("right")
    }

    if (keyPressed == 37) {
        left();
        console.log("left")
    }



    if (keyPressed == 87) {
        upW();
        console.log("wkey")
    }

    if (keyPressed == 65) {
        leftA();
        console.log("akey")
    }

    if (keyPressed == 83) {
        downS();
        console.log("skey")
    }

    if (keyPressed == 68) {
        rightD();
        console.log("dkey")
    }
}

function up(){

    if(car1_y >= 0){
        car1_y = car1_y -10;
        uploadBackground();
        uploadcar1();
    }
}

function down(){

    if(car1_y <=500){
        car1_y= car1_y +10;
        uploadBackground();
        uploadcar1();
    }
}

function left(){

    if(car1_x >=0){
        car1_x = car1_x -10;
        uploadBackground();
        uploadcar1();
    }
}

function right(){

    if(car1_x <=700){
        car1_x = car1_x +10;
        uploadBackground();
        uploadcar1();
    }
}


function upW(){

    if(car2_y >= 0){
        car2_y = car2_y -10;
        uploadBackground();
        uploadcar2();
    }
}

function downS(){

    if(car2_y <=500){
        car2_y = car2_y +10;
        uploadBackground();
        uploadcar2();
    }
}

function leftA(){

    if(car2_x >=0){
        car2_x = car2_x -10;
        uploadBackground();
        uploadcar2();
    }
}

function rightD(){

    if(car2_x <=700){
        car_x = car2_x +10;
        uploadBackground();
        uploadcar2();
    }
}