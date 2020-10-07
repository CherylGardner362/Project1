function confirmJoin(){
	var answer = confirm("Are you ready to join the fan club?");
	if (answer == true) {
		alert("Welcome to the club!!!");
	}
	else{
		alert("We hope you join us soon!!");
	}
}
	
function validationEvent() {
	var a = document.forms["form1"]["full_name"].value;
	var b = document.forms["form1"]["email"].value;
	var c = document.forms["form1"]["fav_team"].value;
	if (a == "" || b == "" || c == ""){
		alert("All of the Data Fields must be filled out")
	}
	else{
		confirmJoin();
	}
}

	var q1 = document.getElementById('submit-button');
	q1.addEventListener('click',validationEvent)
