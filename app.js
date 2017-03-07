var score = 0
var qNum = 0

/* {question: '',
choices: [],
answer: '',
class: ''
}*/

var content = [
{question: 'Before Steven freed her, Lapis Lazuli was trapped for thousands of years in a:',
choices: ['Tower', 'Book', 'Mirror', 'Cave'],
answer: 'Mirror',
class: 'lapis'
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
	return '<label class="q-num'+content[x].class+'">Question '+(x+1)+' of '+(content.length)+'</label>'+
		'<p class="question">'+content[x].question+'</p>'+
		'<div class="answers">'+
			'<input type="radio" name="q" id="a" value="'+content[x].choices[0]+'" required><label for="a">'+content[x].choices[0]+'</label><br>'+
			'<input type="radio" name="q" id="b" value="'+content[x].choices[1]+'" required><label for="b">'+content[x].choices[1]+'</label><br>'+
			'<input type="radio" name="q" id="c" value="'+content[x].choices[2]+'" required><label for="c">'+content[x].choices[2]+'</label><br>'+
			'<input type="radio" name="q" id="d" value="'+content[x].choices[3]+'" required><label for="d">'+content[x].choices[3]+'</label><br>'+
		'</div>'+
		'<button type="submit" class="submit '+content[x].class+'">Submit</button>'+
		'<p class="noanswer feedback hidden">You need to guess an answer first!</p>'+
		'<p class="correct feedback hidden">Correct!</p>'+
		'<p class="incorrect feedback hidden">Wrong! The correct answer is: '+content[x].answer+'</p>'+
		'<button type="button" class="next hidden '+content[x].class+'">Next</button>'
};


//Display first question
$('.title-page').on('click', 'button.start', function(event){
	event.preventDefault();
	$('.title-page').addClass('hidden');
	$('form#q1').html(renderHTML(content, qNum));
	$('body').removeClass().addClass(content[qNum].class+'-background');
	$('form').addClass(content[qNum].class);
	$('.qp-header').addClass(content[qNum].class);
	$('.status').addClass(content[qNum].class);
	$('.quiz-page').removeClass('hidden');
});

//Submit answer
$('.quiz-page').on('click', 'button.submit', function(event){
	event.preventDefault();
	if($('input[name=q]:checked').length<=0) {
		$('.noanswer').removeClass('hidden');
	}
	else
	{$('.submit').addClass('hidden');
		$('.noanswer').addClass('hidden');
		if (($('input[name=q]:checked', '#q1').val()) == content[qNum].answer) {
			score += 1;
			$('.correct').removeClass('hidden');
		}
		else {
			$('.incorrect').removeClass('hidden');
		}
		$('.next').removeClass('hidden');
		$('#current-score').html(score +'/'+content.length);
		qNum += 1;}
});

//Display next question or results
$('.quiz-page').on('click', 'button.next', function(event){
	event.preventDefault();
	if (qNum < content.length) {
		$('form#q1').html(renderHTML(content, qNum));
		$('body').removeClass().addClass(content[qNum].class+'-background');
		$('form').removeClass().addClass(content[qNum].class);
		$('.qp-header').removeClass(content[qNum-1].class).addClass(content[qNum].class);
		$('.status').removeClass(content[qNum-1].class).addClass(content[qNum].class);
	}
	else {
		$('.quiz-page').addClass('hidden');
		$('#final-score').html(score +' out of '+content.length);
		$('body').removeClass().addClass('result-page-background');
		$('.result-page').removeClass('hidden');
		$('.qp-header').removeClass(content[qNum-1].class);
		$('.status').removeClass(content[qNum-1].class);
		$('form').removeClass();
	}
});

//Restart
$('.result-page').on('click', 'button.restart', function(event) {
	event.preventDefault();
	score = 0;
	qNum = 0;
	$('.result-page').addClass('hidden');
	$('form#q1').html(renderHTML(content, qNum));
	$('#current-score').html(score +'/'+content.length);
	$('.quiz-page').removeClass('hidden');
	$('body').removeClass().addClass(content[qNum].class+'-background');
	$('form').addClass(content[qNum].class);
	$('.qp-header').addClass(content[qNum].class);
	$('.status').addClass(content[qNum].class);
	$('.quiz-page').removeClass('hidden');
});







