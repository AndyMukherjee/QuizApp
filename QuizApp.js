$(document).ready(function(){

	var s = 0;

var correct = "Your Answere Is Correct";
var wrong =" Your Answere is incorrect . The Correct Answere is :";
var A1 =="Maternal Grand Uncle";
var A2 =="Clarabelle Cow";
var A3 =="Periwinkle";
var A4 =="Melody";
var A5 =="Step-brothers";
var A6 =="Inventer";
var A7 =="Isabella";
var A8 =="Arendelle";
var A9 =="Bear";
var A10 =="Eugene Fitzherbert";



$('.one').(function(){
var Z = document.getElementsByName("Choice");
$('#B2').click(function(){


	if (Z == C)
		{$('.one').append(correct);
		s=s+1;};
	
	else {$('.one').append(wrong+'A1')};

});//b2 function closes

$('#B1').click(function(){
	$(.'one').hide();
	$(.'two').show();
});//B1 function closes
}); //$one function closes


});// document ready function closes

