// =


const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

console.log(one);
console.log(two);
console.log(three);



const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

console.log(prev);
console.log(next);

var index = 0;

if(index===0 ){
	two.style.display='none';
	three.style.display='none';
}else if(index===1){
	one.style.display='none'
	two.style.display='block';
	three.style.display='none';
}else if(index===2){
	one.style.display='none'
	two.style.display='none';
	three.style.display='block';
}else if(index>2){
	one.style.display='block'
	two.style.display='none';
	three.style.display='none';
	index= 0;
}else if (index<0){
	one.style.display='none'
	two.style.display='none';
	three.style.display='block';
	index= 2;
}

prev.addEventListener('click', function(){
	//console.log('Success');

	index -=1;

		if(index===0 ){
			one.style.display='block';
			two.style.display='none';
			three.style.display='none';
		}else if(index===1){
			one.style.display='none'
			two.style.display='block';
			three.style.display='none';
		}else if(index===2){
			one.style.display='none'
			two.style.display='none';
			three.style.display='block';
		}else if(index>2){
			one.style.display='block'
			two.style.display='none';
			three.style.display='none';
			index= 0;
		}else if (index<0){
			one.style.display='none'
			two.style.display='none';
			three.style.display='block';
			index= 2;
		}
		
	

})

next.addEventListener('click', function(){
	//console.log('More Winning')
	index +=1;

		if(index===0 ){
			one.style.display='block';
			two.style.display='none';
			three.style.display='none';
		}else if(index===1){
			one.style.display='none'
			two.style.display='block';
			three.style.display='none';
		}else if(index===2){
			one.style.display='none'
			two.style.display='none';
			three.style.display='block';
		}else if(index>2){
			one.style.display='block'
			two.style.display='none';
			three.style.display='none';
			index= 0;
		}else if (index<0){
			one.style.display='none'
			two.style.display='none';
			three.style.display='block';
			index= 2;
		}
		
})
