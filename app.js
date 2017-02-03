var score = 0
var qNum = 0

var question template = {question: '',
choices: [],
answer: '',
class: ''
}

var content = [
{question: 'Before Steven freed her, Lapis Lazuli was trapped for thousands of years in a:',
choices: ['Tower', 'Book', 'Mirror', 'Cave'],
answer: 'Mirror',
class: 'lapis-lazuli'
},
{question: 'What is Smoky Quartz’s weapon?',
choices: ['A yo-yo', 'A cannon', 'A war hammer', 'A sling-shot'],
answer: 'A yo-yo',
class: 'smoky-quartz'
},
{question: 'What do Peridot and Lapis refer to pieces of art as?',
choices: ['Shiny arcs', 'Clods', 'Gleep glops', 'Meep morps'],
answer: 'Meep morps',
class: 'peridot'
},
{question: 'What is Greg’s family name?',
choices: ['Maheswaran', 'DeMayo', 'Dewey', 'Miller'],
answer: 'DeMayo',
class: 'greg'
},
{question: 'What is the first type of sentient plant that Steven grows?',
choices: ['Bushes', 'Pumpkins', 'Watermelons', 'Daisies'],
answer: 'Watermelons',
class: 'steven'
},
{question: 'Garnet is:',
choices: ['a Crysal Gem', 'a fusion', 'stronger than you', 'All of the above'],
answer: 'All of the above',
class: 'garnet'
}]

function renderHTML(content, x){
	return '<label class="q-num'+content[x].class+'">Question x+1 of 5</label>'+
		'<p class="question">'+content[x].question+'</p>'+
		'<div class="answers">'+
			'<input type="radio" name="q" id="a" value="0"><label for="a">'+content[x].choices[0]+'</label><br>'+
			'<input type="radio" name="q" id="b" value="1"><label for="b">'+content[x].choices[1]+'</label><br>'+
			'<input type="radio" name="q" id="c" value="2"><label for="c">'+content[x].choices[2]+'</label><br>'+
			'<input type="radio" name="q" id="d" value="3"><label for="d">'+content[x].choices[3]+'</label><br>'+
		'</div>'+
		'<p class="correct feedback ">Correct!</p>'+
		'<p class="incorrect feedback ">Wrong! The correct answer is '+content[x].answer+'</p>'+
		'<button type="button" class="next">Next</button>'
};

//Display first question
$('.title-page').on('click', 'button.start', function(event){
	event.preventDefault();
	$('.title-page').addClass('hidden');

	$('.quiz-page').removeClass('hidden');
});







