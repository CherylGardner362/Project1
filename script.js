jQuery(function($) {
	$('html').removeClass('nojs');
	$('html').addClass('hasjs');
});
function clearData(){
	document.getElementById("form1").reset();
}
document.getElementById("submit-button").addEventListener("click",clearData());