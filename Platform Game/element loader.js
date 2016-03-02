NProgress.start();

var fullHeart = document.createElement("img");
fullHeart.src = "Graphics and Animation/HUD/hud_heartFull.png";
NProgress.inc();

var emptyHeart = document.createElement("img");
emptyHeart.src = "Graphics and Animation/HUD/hud_heartEmpty.png";
NProgress.inc();

var fullKey = document.createElement("img");
fullKey.src = "Graphics and Animation/HUD/hud_keyYellow.png";
NProgress.inc();

var emptyKey = document.createElement("img");
emptyKey.src = "Graphics and Animation/HUD/hud_keyYellow_disabled.png";
NProgress.inc();

var forestBackground = document.createElement("img");
forestBackground.src = "Graphics and Animation/BackGround/forest.jpg";
NProgress.inc();

var greenBackground = document.createElement("img");
greenBackground.src = "Graphics and Animation/BackGround/clouds.jpg";
NProgress.inc();

var blueBackground = document.createElement("img");
blueBackground.src = "Graphics and Animation/BackGround/Fire.jpg";
NProgress.inc();




function drawHUD(){
	context.save();

	var previousAlpha = context.globalAlpha;
	context.globalAlpha = 1;

	for (var imageOffset = 0; imageOffset < chuck.lives; imageOffset++){
		context.drawImage(fullHeart, 5 + (fullHeart.width* imageOffset), 5);
	}

	for (var imageOffset = LIVES - 1 ; imageOffset > chuck.lives - 1; imageOffset--){
		context.drawImage(emptyHeart, 5 + (emptyHeart.width * imageOffset), 5 );
	}

	if (!chuck.hasKey){
		context.drawImage(emptyKey, SCREEN_WIDTH - emptyKey.width - 5, 5);
	}

	else if (chuck.hasKey){
		context.drawImage(fullKey, SCREEN_WIDTH - emptyKey.width - 5, 5);
	}

	context.restore();
	context.globalAlpha = previousAlpha;

}