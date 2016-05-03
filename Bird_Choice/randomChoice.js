function select()
{	



	setTimeout( function(){
	var first = document.getElementById("first").value;
	var second = document.getElementById("second").value;

	var select = Math.round(Math.random());


	if (first =="" || second == "")
	{
		document.getElementById("result").innerHTML = "You should: Put something in the boxes ;)";
		
	}

	else{
		if (select == 0){
		document.getElementById("result").innerHTML = "You should: "+first;
		}

		else if (select == 1 )
		{
			document.getElementById("result").innerHTML = "You should: "+second;
		}
	}

  }, 3500); 

	document.getElementById("result".innerHTML) = "Calculating your answer please wait...";
}