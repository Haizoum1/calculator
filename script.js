function getHistory(){
	return document.getElementById("histor-value").innerText;
}

function printHistory(num){
	document.getElementById("histor-value").innerText=num;
}

 

function getOutPut(){
	return document.getElementById("output-value").innerText;
}

function printOutPut(num){
	document.getElementById("output-value").innerText= GetFormatNumber(num);
}


function GetFormatNumber(num){

	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("Operator");
for (var i =0;i<operator.length;i++){
operator[i].addEventListener("click", function() {
  	if(this.id=="clear"){
	printOutPut("");
	printHistory("");
	
	}
	else if(this.id=="backspace"){
		output = reverseNumberFormat(getOutPut()).toString();
		if(output){
		   output = output.substr(0,output.length-1);
		   printOutPut(output);	
		}
	}
	else {
		
		var output= getOutPut();
		var history=getHistory();
		var nm = history.charAt(history.length-1);;

		if(output=="" && history !="" && this.id!="="){
			history= history.substr(0,history.length-1);
			printHistory(history+this.id);
		}

		if(this.id=="=" && isNaN(nm) && output=="" ){

			var nh = history.substr(0,history.length-1)
		  	var result=eval(nh);
				printOutPut(result);
				printHistory("");
			}
		if(output!=""){
		  output= reverseNumberFormat(output);
		  history= history+output;
		  
		  
		  if(this.id=="="  && output!=""){
		  var result=eval(history);
			printOutPut(result);
			printHistory("");
			}
		

		   

		  else{
			history=history+this.id;
			printHistory(history);
			document.getElementById("output-value").innerText="";
				
			}
		  

		
		}	
	}
});
}

var number = document.getElementsByClassName("number");
for (var i =0;i<number.length;i++){
number[i].addEventListener("click", function() {
  var output = reverseNumberFormat(getOutPut());

	if(output!=NaN){
	output+=this.id;
	printOutPut(output);
	}
});
}