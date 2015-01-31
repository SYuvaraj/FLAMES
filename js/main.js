$(document).ready(function(){

function compareNames(){

	var flamesData = ['F', 'L', 'A','M','E','S'];
	var count = 0;
	var predictValue;

	var yourName = document.getElementById('your-name').value;
	var yourNameCaps = yourName.toUpperCase();
	var name1 = new Array();
	for (var i=0; i < yourNameCaps.length; i++){
	     name1.push(yourNameCaps[i]);
	}


	var parterName = document.getElementById('parter-name').value;
	var parterNameCaps = parterName.toUpperCase();
	var name2 = new Array();
	for (var j=0; j< parterNameCaps.length; j++){
	     name2.push(parterNameCaps[j]);
	}

	$('.result').css("display","block");
	document.getElementById('partner').innerHTML = parterNameCaps;
		 
	for(var i=0;i<name1.length;i++){
		for(var j=0;j<name2.length;j++){
			if(name1[i]==name2[j]){
				name1[i]=null;
				name2[j]=null;	
			}
		}
	}
	
	
	for(var k=0;k<name1.length;k++){
		if(name1[k]!= null){
			count++;
			
		}
	}
	
	for(var l=0;l<name1.length;l++){
		if(name2[l]!= null){
			count++;	
		}
	}
	

    for( var n=0;n<count;n++){
    	var predictValue= flamesData[n%flamesData.length];		
			
	}	
	
	switch(predictValue){

		
		case 'F': 
		document.getElementById("result").innerHTML="FIRENDS";
		break;

		case 'L': 
		document.getElementById("result").innerHTML="Lovers";
		break;

		case 'A': 
		document.getElementById("result").innerHTML = "AFFAIR";
		break;

		case 'M': 
		document.getElementById("result").innerHTML="MARRIAGE";
		break;

		case 'E': 
		document.getElementById("result").innerHTML="ENEMY";
		break;

		case 'S': 
		document.getElementById("result").innerHTML="SISTER";
		break;

		default: alert('No Prediction');


	}
	event.preventDefault();

}

$("#submit").click(function () {
	compareNames();
});

});



