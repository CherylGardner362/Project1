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
	if (a == "") {
		alert("Please enter your full name");
		return false;
	}
	var b = document.forms["form1"]["email"].value;
	if (b == "") {
		alert("Please enter your email address");
		return false;
	}
	var c = document.forms["form1"]["fav_team"].value;
	if (c == "") {
		alert("Please pick a team");
		return false;
	}
}

	var q1 = document.getElementById('submit-button');
	q1.addEventListener('click',confirmJoin)