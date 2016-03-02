// JavaScript Document

var c1;

var getValue = function() {
	c1 =  document.getElementById('choice1').value;	
	document.getElementById('choice2').options[1].disabled=false;		
	document.getElementById('choice2').options[2].disabled=false;		
	document.getElementById('choice2').options[3].disabled=false;		
	document.getElementById('choice2').options[4].disabled=false;		
	document.getElementById('choice2').options[5].disabled=false;
	document.getElementById('choice2').options[6].disabled=false;		

	
		// for length conversion
	if (c1 === "metres" || c1 === "feet" || c1 === "miles") {
		document.getElementById('choice2').options[2].disabled=true;
		document.getElementById('choice2').options[4].disabled=true;
		document.getElementById('choice2').options[5].disabled=true;
	
	}
	
	else if (c1 === "celcius" || c1 === "kelvin" || c1 === "fahrenheit") {
		document.getElementById('choice2').options[1].disabled=true;	
		document.getElementById('choice2').options[3].disabled=true;
		document.getElementById('choice2').options[6].disabled=true;	
	
	}
	
}
