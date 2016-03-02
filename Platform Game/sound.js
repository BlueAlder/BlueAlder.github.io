var normal_background = new Howl(
{
	urls: ["Music and Sounds/level happy.ogg"],
	loop: true,
	buffer: true,
	volume: 0.1
} );

var alternate_background = new Howl(
{
	urls: ["Music and Sounds/evil level.ogg"],
	loop: true,
	buffer: true,
	volume: 0.1
} );
//alternate_background.play();

var game_end = new Howl(
{
	urls: ["Music and Sounds/death music.ogg"],
	buffer: true,
	volume: 0.1
} );



var win_theme = new Howl(
{
	urls: ["Music and Sounds/win theme.ogg"],
	loop: false,
	buffer:true,
	volume: 0.1
} );


var jump_sfx = new Howl(
{
	urls: ["Music and Sounds/jump_11.wav"],
	buffer: true,
	volume: 0.5,
	onend: function(){
		is_jump_sfx_playing = false;
	}
});

var key_sfx = new Howl(
{
	urls: ["Picked Coin Echo 2.wav"],
	buffer: true,
	volume: 0.5,
	onend: function(){
		is_key_sfx_playing = false;
	}
});

var is_jump_sfx_playing = false;
var is_key_sfx_playing = false;