const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

console.log(one);
console.log(two);
console.log(three);



const thumb1 = document.querySelector('#thumb1');
const thumb2 = document.querySelector('#thumb2');
const thumb3 = document.querySelector('#thumb3');

one.style.display='block';
			two.style.display='none';
			three.style.display='none';
		


thumb1.addEventListener('click', function(){
	//console.log('Success');
			one.style.display='block';
			two.style.display='none';
			three.style.display='none';
})

thumb2.addEventListener('click', function(){
	//console.log('More Winning')
	
			one.style.display='none';
			two.style.display='block';
			three.style.display='none';
		
})


thumb3.addEventListener('click', function(){
	//console.log('More Winning')
			one.style.display='none';
			two.style.display='none';
			three.style.display='block';

		
})
