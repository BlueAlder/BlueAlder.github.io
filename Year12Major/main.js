var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();			//intialise the delta time

var keyboard = new Keyboard();	//initialise keyboard and player
var player1 = new Player();

var wordList = "http://bluealder.github.io/test.txt";		//define location of list of words 
var Arr_word_list = []
populateWordList(wordList);									//convert this txt file to array

var wordToSpell;
var scrambledWord;

	



//GET GLOBAL VARIABLES

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var Cam_X = 0;		//intiate the camera for scrolling map
var Cam_Y = 0;
var Cam_ratio = 0.05;

var GAMESTATE_SPLASH = 0;				//create variables for gamestates so not confused
var GAMESTATE_GAME = 1;
var GAMESTATE_ENDGAME = 2;
var GAMESTATE_WIN = 3;
var curGameState = GAMESTATE_SPLASH;	//set initial game state

var mapWordLength;

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

function loadMap() 
{	
	mapWordLength = lengthOfWordInMap();
	loadCollisionMap(currentMap);		//loads collision map of the current map
	wordToSpell = selectWord(mapWordLength);			
	scrambledWord = scrambleWord(wordToSpell);
	definePlacements(mapWordLength);

}



function run() {

	var deltaTime = getDeltaTime();

	context.fillStyle = "red";
	context.fillRect(0,0, SCREEN_WIDTH, SCREEN_HEIGHT);


	context.save();
	context.globalAlpha = "0.5"
	context.drawImage(background, 0, 0);
	context.restore();




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

	context.fillStyle = "blue";
	context.font="14px Arial";
	context.fillText("FPS: " + fps, 5, 60);

	context.fillText("Current Word: " + wordToSpell, 5, 80, 200);

	context.fillText("Inventory: " + player1.inventory, 5, 100, 100);


}

function drawDebug(_cam_x, _cam_y)
{
	context.save();
	context.strokeRect(player1.x - player1.width/2 - _cam_x, player1.y - player1.height/2 - _cam_y, player1.width, player1.height);

	context.restore();

	context.save();
	
	context.fillStyle = "red";
	context.fillRect(player1.x - _cam_x, player1.y - _cam_y , 5, 5);

	var draw_cells = true;

	if (draw_cells){


	context.strokeStyle = 'red';
	context.fillRect(player1.x - _cam_x, player1.y - _cam_y, TILE, TILE);		//DRAW CELL
	context.strokeRect(player1.x - _cam_x - TILE, player1.y - _cam_y, TILE, TILE);		//DRAW CELL left
	context.strokeRect(player1.x - _cam_x + TILE, player1.y - _cam_y, TILE, TILE);		//DRAW CELL RIGHT
	context.strokeRect(player1.x - _cam_x, player1.y - _cam_y + TILE, TILE, TILE);		//DRAW CELL DOWN
	context.strokeRect(player1.x - _cam_x + TILE, player1.y + TILE - _cam_y, TILE, TILE);		//DRAW CELL DIAG RIGHT
	context.strokeRect(player1.x - _cam_x - TILE, player1.y - _cam_y + TILE, TILE, TILE);		//DRAW CELL

	}

	
	context.restore();

	var drawLetterCell = false;


	if (drawLetterCell)
	{
		for(var i = 0; i < letterCoords.length ; i++)
		{	
			context.fillStyle = "blue";
			context.fillRect(tileToPixel(letterCoords[i][1]) - _cam_x, tileToPixel(letterCoords[i][2]) - _cam_y, TILE, TILE);
		}
	}




}

function debug_draw_map(input_cells, _cam_x, _cam_y)
{


	var drawMapDebug = false
	if (drawMapDebug)
	{



	    context.save();


	    for (var layerIdx = 0; layerIdx < LAYER_COUNT; layerIdx++)
	    {

	        for(var y = 0; y < input_cells[layerIdx].length; y++)
	        {
	            for(var x = 0; x < input_cells[layerIdx][y].length; x++)
	            {
	                if(input_cells[layerIdx][y][x] !=  0)
	                {
	                	if (layerIdx == LAYER_PLATFORMS)
	                	{	
	                		context.strokeStyle = "green";
	                	}

	                	else if (layerIdx == LAYER_LETTERS)
	                	{
	                		context.strokeStyle = "yellow";
	                	}
	                    
	                    context.strokeRect(x * TILE- _cam_x, y * TILE - _cam_y, TILE, TILE);

	                }
	            }
	        }
	    }
	    
	    context.restore();
	}
}


function runSplash(deltaTime)
{
	context.fillStyle = "black";
	context.font = "50px Arial";
	var textMeasure = context.measureText("Get The Code");
	context.fillText("Get The Code", SCREEN_WIDTH/2 - (textMeasure.width/2), SCREEN_HEIGHT/2 - 100);

	context.fillText("Press [ENTER] to Begin", SCREEN_WIDTH/2 - 250, SCREEN_HEIGHT/2 + 200)

	if (keyboard.isKeyDown(keyboard.KEY_ENTER)) 
	{
		curGameState = GAMESTATE_GAME;
	}

}

function runGame(deltaTime)
{
	player1.Update(deltaTime);
	updateCamera();
	updateLevel();


	drawLevel(Cam_X, Cam_Y, scrambledWord);
	player1.Draw(deltaTime, Cam_X, Cam_Y);
	drawDebug(Cam_X, Cam_Y);
	debug_draw_map(cells, Cam_X, Cam_Y);




}

function runWin(deltaTime)
{

}

function runEndGame(deltaTime)
{
	
}

function updateCamera()
{
	var left_stop = 0;
	var top_stop = 0;
	var right_stop = TILE * MAP.tw - SCREEN_WIDTH;
	var bottom_stop = TILE * MAP.th - SCREEN_HEIGHT;

	var new_pos_x = player1.x - SCREEN_WIDTH/2;
	var new_pos_y = player1.y - SCREEN_HEIGHT/2;

	if (new_pos_x < left_stop)
	{
		new_pos_x = left_stop;
	}

	else if (new_pos_x > right_stop)
	{
		new_pos_x = right_stop;
	}



	if (new_pos_y < top_stop)
	{
		new_pos_y = top_stop;
	}

	else if (new_pos_y > bottom_stop)
	{
		new_pos_y = bottom_stop;
	}

	Cam_X = lerp(Cam_X, new_pos_x, Cam_ratio);
	Cam_Y = lerp(Cam_Y, new_pos_y, Cam_ratio);

	
}

function lerp(left_value, right_value, ratio)
{
	return left_value + ratio * ( right_value - left_value);
};

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

loadMap();