
function clearData(){
	document.getElementById("form1").reset();
}
function confirmJoin(){
	var h = confirm("Are you sure you are ready to join the fan club?");
	if (h == true){
		alert("Welcome to the fan club");
	}
	else{
		alert("We hope that you will join us soon!!");
	}
}
document.getElementById("submit-button").addEventListener("click",confirmJoin());
document.getElementById("submit-button").addEventListener("click",clearData());