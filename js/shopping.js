//__ =   ===  __  __  ` `  % %  __dirname  __filename

let input1 = document.querySelector('#input1');

console.log(input1);

let input2 = document.querySelector('#input2');

console.log(input2);

let submit = document.querySelector('#submit');

let list = document.querySelector('#list');

console.log(submit);

submit.addEventListener('click', function(e){
	if (input1.value =='' || input1.value ==''){
		e.preventDefault();
		alert('must fill out a form')
		
	}
	e.preventDefault();
	
	let value = ` ${input1.value} ${input2.value} `;
	console.log(value);
	let ul = document.createElement('ul');
	let li = document.createElement('li');
	let edit = document.createElement('button');
	edit.textContent = 'edit';
	edit.classList.add('btn-primary');
	edit.classList.add('btn');
	let del = document.createElement('button');
	del.textContent = 'delete';
	del.classList.add('btn-danger');
	del.classList.add('btn');
	li.innerHTML = value;
	li.classList.add('listName');
	ul.appendChild(li);
	li.appendChild(edit);
	li.appendChild(del);
	list.appendChild(ul);
	input1.value = '';
	input2.value = '';
	console.log(ul);


	edit.addEventListener('click', function(){
		edit.textContent ='Save';
		let input3 = document.createElement('input');
		input3.innerHTML = 'This is the same';
		ul.appendChild(input3);

	});

	del.addEventListener('click', function(e){
		console.log('It worked')
		console.log(e.target);
		let deleteMe = e.target.parentNode;
		ul.removeChild(deleteMe);
	})
})
