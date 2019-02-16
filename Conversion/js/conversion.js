// JavaScript Document
var c1;
var c2;
var amount;

//set values

var submit = function() {
	c1 = document.getElementById('choice1').value;	
	c2 = document.getElementById('choice2').value;	
	amount = parseFloat(document.getElementById('amount').value);
}

//check values to run which function

var check = function() {
	if (c1 === c2) {
		if (!amount){
			document.getElementById('result').innerHTML = "Nothing!";
		}
		else{	
			document.getElementById('result').innerHTML = amount +" "+ capitalizeFirstLetter(c1);
		}
	}	

	if (isNaN(amount))
	{
		document.getElementById('result').innerHTML = "Nothing!";
	}
	
	
	// length conversions
	
	else if (c1 === "metres" && c2 ==="feet") {
		metToFeet();
	}
	
	else if (c1 === "feet" && c2 === "metres") {
		feetToMet();	
	}
	
	else if (c1 === "miles" && c2 === "metres") {
		mileToMetre();
	}

	else if (c1 === "metres" && c2 === "miles") {
		metreToMile();
	}

	else if (c1 === "miles" && c2 === "feet") {
		mileToFeet();
	}

	else if (c1 === "feet" && c2 === "miles") {
		feetToMile();
	}
	// temperature conversions
	
	
	else if (c1 === "celcius" && c2 === "fahrenheit") {
		celToFah();
	}
	
	else if (c1 === "celcius" && c2 === "kelvin") {
		celToKel();
	}
	
	else if (c1 === "fahrenheit" && c2 === "celcius") {
		fahToCel();
	}
	
	else if (c1 === "fahrenheit" && c2 === "kelvin") {
		fahToKel();	
	}
	
	else if (c1 === "kelvin" && c2 === "celcius") {
		kelToCel();	
	}
	
	else if (c1 === "kelvin" && c2 === "fahrenheit") {
		kelToFah();	
	}
	else {
		if (!amount) {
			document.getElementById('result').innerHTML = "Nothing!";	
		}
	}
	
}


//convert functions


//length conversion functions
var metToFeet = function() {	
		document.getElementById('result').innerHTML = amount * 3.2808399+" Feet";	
}

var feetToMet = function() {
		document.getElementById('result').innerHTML = amount / 3.2808399+" Metres";
}

var mileToMetre = function() {
		document.getElementById('result').innerHTML = amount/0.00062137 + " Metres";
}

var metreToMile = function() {
		document.getElementById('result').innerHTML = amount * 0.00062137 + " Miles";
}

var mileToFeet = function() {
		document.getElementById('result').innerHTML = amount * 5280.0 + " Feet";
}

var feetToMile = function() {
		document.getElementById('result').innerHTML = amount / 5280.0 + " Miles";
}

//temperature conversions
var celToFah = function() {
		document.getElementById('result').innerHTML = (amount * 9/5) + 32 + " Fahrenheit";
}

var celToKel = function() {
		document.getElementById('result').innerHTML = amount + 273.15 + " Kelvin";	
}

var fahToCel = function() {
		document.getElementById('result').innerHTML = (5 *(amount - 32)) / 9 + " Celcius";	
}

var fahToKel = function() {
		document.getElementById('result').innerHTML = ((amount - 32 )/1.8)	+ 273.15 + " Kelvin";
}

var kelToCel = function() {
		document.getElementById('result').innerHTML =  amount - 273.15 + " Celcius";	
}

var kelToFah = function() {
		document.getElementById('result').innerHTML =  ((amount - 273.15)*1.8) - 32 + " Fahrenheit";	
}



function play() {
	var audio = document.getElementById('audio');
	audio.play();
}

function pause() {
	var audio = document.getElementById('audio');
	audio.stop();
}


function secretLink()
{
	window.open("MajorWork_Secret/index.html");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}