
//__ =   ===  __  __  ` `  % %  __dirname  __filename


const submitQuiz = document.getElementById('submitQuiz');

const answer1a= document.querySelector('#answer1a');

const answer2b= document.querySelector('#answer2b');

const answer3d= document.querySelector('#answer3d');

const answer4a= document.querySelector('#answer4a');

const answer5d= document.querySelector('#answer5d');

const answer6a= document.querySelector('#answer6a');

const answer7a= document.querySelector('#answer7a');

const answer8c= document.querySelector('#answer8c');

const answer9d= document.querySelector('#answer9d');

const answer10b= document.querySelector('#answer10b');







submitQuiz.addEventListener('click', function(e){
	e.preventDefault()

	let results = 0;

	if(answer1a.checked){
		results+= 1;
		
	} 
	if(answer2b.checked){
		results+=1;
	}

	if(answer3d.checked){
		results+=1;
	}

	if(answer4a.checked){
		results+=1;
	}

	if(answer5d.checked){
		results+=1;
	}

	if(answer6a.checked){
		results+=1;
	}

	if(answer7a.checked){
		results+=1;
	}

	if(answer8c.checked){
		results+=1;
	}

	if(answer9d.checked){
		results+=1;
	}

	if(answer10b.checked){
		results+=1;
	}





	console.log(results);

	const showResults = document.getElementById('showResults');

	showResults.innerHTML = ` You scored ${results} out of 10`;
	alert(`You scored ${results} out of 10`)
})