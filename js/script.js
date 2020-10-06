function confirmJoin() {
	var answer = prompt("Are you ready to join the fan club?");
	if (answer == true) {
		alert("Welcome to the club!!!");
	}
	else{
		alert("We hope you join us soon!!");
	}
}

document.getElementById("submit-button").addEventListener("click",confirmJoin());