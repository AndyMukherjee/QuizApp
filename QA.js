$document.ready(function(){

	var Q=[];
	var currentQ= 0;

	function Quiz(Question, Option1, Option2, Option3){
		this.quizQuestion= Question;
		this.quizOption1=<input type="radio" value="A" name="choice">Option1;
		this.quizOption2=<input type="radio" value="A" name="choice">Option2;
		this.quizOption3=<input type="radio" value="A" name="choice">Option3;

	}

function init(){

	var Q1 = new Quiz("Who Invented iPhone?", "Steve Jobs", "Bill Gates", "Graham Bell");
	var Q2 = new Quiz("Who discovered the theory of relativity?", "Sir Issac newton", "Albert Einstine","Hans Cristian Anderson");
	var Q3 = new Quiz("Who discovered Radium","Lord Rayleigh","Marie Curie","J.J Thompson");
	Q.push(Q1);
	Q.push(Q2);
	Q.push(Q3);

	document.getElementByClass('Question').innerHTML=Q[currentQ].quizQuestion;
	document.getElementByClass('Answere').innerHTML=Q[currentQ].quizOption1;
	document.getElementByClass('Answere').innerHTML=Q[currentQ].quizOption2;
	document.getElementByClass('Answere').innerHTML=Q[currentQ].quizOption3;


}

function next(){

	currentQ++;
	document.getElementByClass('Question').innerHTML=Q[currentQ].quizQuestion;
	document.getElementByClass('Answere').innerHTML=Q[currentQ].quizOption1;
	document.getElementByClass('Answere').innerHTML=Q[currentQ].quizOption2;
	document.getElementByClass('Answere').innerHTML=Q[currentQ].quizOption3;

}

init();

});