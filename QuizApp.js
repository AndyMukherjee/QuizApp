$(document).ready(function(){

	var s = 0;

var correct = "Your Answere Is Correct";
var wrong =" Your Answere is incorrect . The Correct Answere is :";
var A1 ="Maternal Grand Uncle";
var A2 ="Clarabelle Cow";
var A3="Periwinkle";
var A4 ="Melody";
var A5 ="Step-brothers";
var A6 ="Inventer";
var A7 ="Isabella";
var A8 ="Arendelle";
var A9 ="Bear";
var A10 ="Eugene Fitzherbert";



//Question 1

$('#B2').click(function(){

var Z = $( "input[name='choice']:checked" );
console.log(Z.val());

	if (Z.val() == 'C')
		{$('.one').append(correct);
		s=s+1;}
	
	else {$('.one').append(wrong+A1)};


});//b2 function closes



$('#B1').click(function(){
	$('.one').hide();
	$('.two').show();
});//B1 function closes
//Q 2
$('#B2').click(function(){

var Z = $( "input[name='choice']:checked" );
console.log(Z.val());

	if (Z.val() == 'C')
		{$('.two').append(correct);
		s=s+1;}
	
	else {$('.two').append(wrong+A2)};

});
$('#B1').click(function(){
	$('.two').hide();
	$('.three').show();
});

//Q3

$('#B2').click(function(){

var Z = $( "input[name='choice']:checked" );
console.log(Z.val());

	if (Z.val() == 'C')
		{$('.three').append(correct);
		s=s+1;}
	
	else {$('.three').append(wrong+A3)};

});
$('#B1').click(function(){
	$('.three').hide();
	$('.four').show();
});

//Q4

$('#B2').click(function(){

var Z = $( "input[name='choice']:checked" );
console.log(Z.val());

	if (Z.val() == 'C')
		{$('.four').append(correct);
		s=s+1;}
	
	else {$('.four').append(wrong+A4)};

});
$('#B1').click(function(){
	$('.four').hide();
	$('.five').show();
});

//Q5

$('#B2').click(function(){

var Z = $( "input[name='choice']:checked" );
console.log(Z.val());

	if (Z.val() == 'C')
		{$('.five').append(correct);
		s=s+1;}
	
	else {$('.five').append(wrong+A5)};

});
$('#B1').click(function(){
	$('.five').hide();
	$('.six').show();
});

//Q6

$('#B2').click(function(){

var Z = $( "input[name='choice']:checked" );
console.log(Z.val());

	if (Z.val() == 'C')
		{$('.six').append(correct);
		s=s+1;}
	
	else {$('.six').append(wrong+A6)};

});
$('#B1').click(function(){
	$('.six').hide();
	$('.seven').show();
});

//Q7

$('#B2').click(function(){

var Z = $( "input[name='choice']:checked" );
console.log(Z.val());

	if (Z.val() == 'C')
		{$('.seven').append(correct);
		s=s+1;}
	
	else {$('.seven').append(wrong+A7)};

});
$('#B1').click(function(){
	$('.seven').hide();
	$('.eight').show();
});

//Q8
$('#B2').click(function(){

var Z = $( "input[name='choice']:checked" );
console.log(Z.val());

	if (Z.val() == 'C')
		{$('.one').append(correct);
		s=s+1;}
	
	else {$('.eight').append(wrong+A8)};

});
$('#B1').click(function(){
	$('.eight').hide();
	$('.nine').show();
});

//Q9
$('#B2').click(function(){

var Z = $( "input[name='choice']:checked" );
console.log(Z.val());

	if (Z.val() == 'C')
		{$('.nine').append(correct);
		s=s+1;}
	
	else {$('.nine').append(wrong+A9)};

});
$('#B1').click(function(){
	$('.nine').hide();
	$('.ten').show();
});

//Q10

$('#B2').click(function(){

var Z = $( "input[name='choice']:checked" );
console.log(Z.val());

	if (Z.val() == 'A')
		{$('.ten').append(correct);
		s=s+1;}
	
	else {$('.ten').append(wrong+A10)};

	

});
$('#B1').click(function(){
	$('.ten').append("Your score is"+s);
	
});



});// document ready function closes

