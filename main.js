canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
player_object="";
block_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
             left:player_x,
             top:player_y
        });
        canvas.add(player_object);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(img){
        block_object=img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
             left:player_x,
             top:player_y
        });
        canvas.add(block_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == '80') {
        console.log("shift and p are pressed together");
        block_image_height=block_image_height+10;
        document.getElementById("current_height").innerHTML=block_image_height;
        block_image_width=block_image_width+10;
        document.getElementById("current_width").innerHTML=block_image_width;
    }

    if (e.shiftKey == true && keypressed == '77') {
        console.log("shift and m are pressed together");
        block_image_height=block_image_height-10;
        document.getElementById("current_height").innerHTML=block_image_height;
        block_image_width=block_image_width-10;
        document.getElementById("current_width").innerHTML=block_image_width;
    }

    if (keypressed == '37') {

        console.log("left");
        left();
    }

    if (keypressed == '38') {
        console.log("up");
        up();
    }

    if (keypressed == '39') {
        console.log("right");
        right();
    }

    if (keypressed == '40') {
        console.log("down");
        down();
    }

    if (keypressed == '87') {
        console.log("w");
        new_image("wall.jpg")
    }

    if (keypressed == '71') {
        console.log("g");
        new_image("ground.png")
    }

    if (keypressed == '76') {
        console.log("l");
        new_image("light_green.png")
    }

    if (keypressed == '84') {
        console.log("t");
        new_image("trunk.jpg")
    }

    if (keypressed == '82') {
        console.log("r");
        new_image("roof.jpg")
    }

    if (keypressed == '89') {
        console.log("y");
        new_image("yellow_wall.png")
    }
    
    if (keypressed == '68') {
        console.log("d");
        new_image("dark_green.png")
    }

    if (keypressed == '85') {
        console.log("u");
        new_image("unique.png")
    }

    if (keypressed == '67') {
        console.log("c");
        new_image("cloud.jpg")
    }
}