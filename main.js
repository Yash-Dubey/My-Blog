var canvas=new fabric.Canvas("My_canvas");
player_x=10;
player_y=10;

player1_width=30;
player1_hieght=30;

player_object="";
player1_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
            });
            canvas.add(player_object);
        
    });
}

function new_image(get_image){
	fabric.Image.fromURL(get_image, function(Img) {
        player1_image_object = Img;

	player1_image_object.scaleToWidth(player1_image_width);
	player1_image_object.scaleToHeight(player1_image_height);
	player1_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player1_image_object);

	});
}
