var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();			//intialise the delta time

var keyboard = new Keyboard();
var player1 = new Player();

//GET GLOBAL VARIABLES

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var Cam_X = 0;
var Cam_Y = 0;
var Cam_ratio;

var GAMESTATE_SPLASH = 0;
var GAMESTATE_GAME = 1;
var GAMESTATE_ENDGAME = 2;
var GAMESTATE_WIN = 3;
var curGameState = GAMESTATE_SPLASH;

var fps = 0;
var fpsCount = 0;
var fpsTime = 0;


function getDeltaTime(){
	endFrameMillis = startFrameMillis;	
	startFrameMillis = Date.now();

	//this finds the time between the last animation request frame and the next one
	//this is so that 
	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;

	if (deltaTime > 1)
	{
		deltaTime = 1;
	}

	return deltaTime;
}


function run() {

	var deltaTime = getDeltaTime();

	context.fillStyle = "grey";
	context.fillRect(0,0, SCREEN_WIDTH, SCREEN_HEIGHT);



	switch(curGameState)
	{
		case GAMESTATE_SPLASH:
			runSplash(deltaTime);
			break;
		case GAMESTATE_GAME:
			runGame(deltaTime);
			
			break;
		case GAMESTATE_WIN:
			runWin(deltaTime);
			break;
		case GAMESTATE_ENDGAME:
			runEndGame(deltaTime);


	}

	

	fpsTime += deltaTime;
	fpsCount++;

	if (fpsTime >= 1){
		fpsTime -= 1;
		fps = fpsCount;
		fpsCount = 0;
	}

	context.fillStyle = "#f00";
	context.font="14px Arial";
	context.fillText("FPS: " + fps, 5, 60, 100);


}

function drawDebug()
{
	context.save();
	context.strokeRect(player1.x - player1.width/2, player1.y - player1.height/2, player1.width, player1.height);

	context.restore();
}

function runSplash(deltaTime)
{
	context.fillStyle = "black";
	context.font = "50px Arial";
	var textMeasure = context.measureText("Get The Code");
	context.fillText("Get The Code", SCREEN_WIDTH/2 - (textMeasure.width/2), SCREEN_HEIGHT/2 - 100);

	if (keyboard.isKeyDown(keyboard.KEY_ENTER)) 
	{
		curGameState = GAMESTATE_GAME;
	}

}

function runGame(deltaTime)
{
	player1.Update(deltaTime);

	player1.Draw(deltaTime);
	drawDebug();


}

function runWin(deltaTime)
{

}

function runEndGame(deltaTime)
{
	
}

//This function calls the 'run' function 60 times a second so that the game is running at 60 FPS, it requests the animation frame
//depending on whether the browser supports it or just manulaly sets it.
(function()
{
	var onEachFrame;
	if(window.requestAnimationFrame)
	{
		onEachFrame = function(cb)
		{
			var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
			_cb();
		};
	}

	else if(window.mozRequestAnimationFrame)
	{
		onEachFrame = function(cb)
		{
			var _cb = function() {cb(); window.mozRequestAnimationFrame(_cb); }
			_cb();
		};

	}

	else
	{
		onEachFrame = function(cb)
		{
			setInterval(cb, 1000/60);
		}
	}


	window.onEachFrame = onEachFrame;
}
)();
window.onEachFrame(run);