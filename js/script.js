function confirmJoin(){
	var answer = confrim("Are you ready to join the fan club?");
	if (answer == true) {
		alert("Welcome to the club!!!");
	}
	else{
		alert("We hope you join us soon!!");
	}

	var q1 = document.getElementById('submit-button');
	q1.addEventListener('click',confirmJoin)