const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');



console.log(one);
console.log(two);
console.log(three);

const radio1 = document.querySelector('#radio1');
const radio2 = document.querySelector('#radio2');
const radio3 = document.querySelector('#radio3');

// Options Selection

const radio4 = document.querySelector('#radio4');
const radio5 = document.querySelector('#radio5');
const radio6 = document.querySelector('#radio6');


const label1= document.querySelector('#label1');
const label2= document.querySelector('#label2');
const label3= document.querySelector('#label3');

//Option Selection

const label4= document.querySelector('#label4');
const label5= document.querySelector('#label5');
const label6= document.querySelector('#label6');



radio1.addEventListener('change', function(){

	if(radio1.checked){
		one.style.backgroundColor='#e3f2fd';
		label1.textContent='Selected';
		two.style.backgroundColor='';
		label2.textContent='Select Here';
		three.style.backgroundColor='';
		label3.textContent='Select Here';
	
	}
})

radio2.addEventListener('change', function(){

	if(radio2.checked){
		two.style.backgroundColor='#e3f2fd';
		label2.textContent='Selected'
		one.style.backgroundColor='';
		label1.textContent='Select Here';
		three.style.backgroundColor='';
		label3.textContent='Select Here';
	
	}
})

radio3.addEventListener('change', function(){

	if(radio3.checked){
		three.style.backgroundColor='#e3f2fd';
		label3.textContent='Selected'
		one.style.backgroundColor='';
		label1.textContent='Select Here';
		two.style.backgroundColor='';
		label2.textContent='Select Here';
	
	}
})



radio4.addEventListener('change', function(){

	if(radio4.checked){
		four.style.backgroundColor='#e3f2fd';
		label4.textContent='Selected'
		five.style.backgroundColor='';
		label5.textContent='Select Here';
		six.style.backgroundColor='';
		label6.textContent='Select Here';
	
	}
})


radio5.addEventListener('change', function(){

	if(radio5.checked){
		five.style.backgroundColor='#e3f2fd';
		label5.textContent='Selected'
		six.style.backgroundColor='';
		label6.textContent='Select Here';
		four.style.backgroundColor='';
		label4.textContent='Select Here';
	
	}
})

radio6.addEventListener('change', function(){

	if(radio6.checked){
		six.style.backgroundColor='#e3f2fd';
		label6.textContent='Selected'
		five.style.backgroundColor='';
		label5.textContent='Select Here';
		four.style.backgroundColor='';
		label4.textContent='Select Here';
	
	}
})







// Slider 

var slider = document.getElementById("myRange");

console.log(slider);

var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = '$ ' + this.value;
}

var slider2 = document.getElementById("myRange2");

console.log(slider);

var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
    output2.innerHTML =  this.value;
}

var slider3 = document.getElementById("myRange3");

console.log(slider);

var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider3.oninput = function() {
    output3.innerHTML =  this.value;
}

var slider4= document.getElementById("myRange4");

console.log(slider);

var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider4.oninput = function() {
    output4.innerHTML =  this.value;
}