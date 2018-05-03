// =

//Start it 

const beginIt = document.querySelector('#beginIt');

const begin = document.querySelector('#begin');

// Start with it not showing

begin.style.display='none'

beginIt.addEventListener('change', function(){
	if(beginIt.checked){
		begin.style.display='block'
	}else if(!beginIt.checked){
		begin.style.display='none'
	}


})

// First, Last name and email 

const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');

//Add Event Listener to on focus clear what is inside 

fname.addEventListener('focus', function(){
	if(fname.style.color='red'){
		fname.value =''
		fname.style.color='black'

	}
})

lname.addEventListener('focus', function(){
	if(lname.style.color='red'){
		lname.value =''
		lname.style.color='black'

	}else{
		console.log('success');
	}
})

email.addEventListener('focus', function(){
	if(email.style.color='red'){
		email.value =''
		email.style.color='black'

	}else{
		console.log('success');
	}
})

/*
console.log(fname);
console.log(lname);
console.log(email);

*/

//  Address Grab Elements


const address = document.querySelector('#address');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const zip = document.querySelector('#zip');

address.addEventListener('focus', function(){
	if(address.style.color='red'){
		address.value =''
		address.style.color='black'

	}else{
		console.log('success');
	}
});

city.addEventListener('focus', function(){
	if(city.style.color='red'){
		city.value =''
		city.style.color='black'

	}else{
		console.log('success');
	}
});

state.addEventListener('focus', function(){
	if(state.style.color='red'){
		state.value =''
		state.style.color='black'

	}else{
		console.log('success');
	}
});

zip.addEventListener('focus', function(){
	if(zip.style.color='red'){
		zip.value =''
		zip.style.color='black'

	}else{
		console.log('success');
	}
});

/*
console.log(address);
console.log(city);
console.log(state);
console.log(zip);
*/

//defaultCheckbox1 -4

const choices =document.querySelector('#choices');

const defaultCheckbox1 = document.querySelector('#defaultCheckbox1');
const defaultCheckbox2 = document.querySelector('#defaultCheckbox2');
const defaultCheckbox3 = document.querySelector('#defaultCheckbox3');
const defaultCheckbox4 = document.querySelector('#defaultCheckbox4');
const defaultCheckbox5 = document.querySelector('#defaultCheckbox5');
const defaultCheckbox6 = document.querySelector('#defaultCheckbox6');
const defaultCheckbox7 = document.querySelector('#defaultCheckbox7');
const defaultCheckbox8 = document.querySelector('#defaultCheckbox8');

console.log(defaultCheckbox5);

defaultCheckbox1.addEventListener('change', function(){

	if(defaultCheckbox1.checked){
		choices.style.color='black';
	}
});

defaultCheckbox2.addEventListener('change', function(){

	if(defaultCheckbox2.checked){
		choices.style.color='black';
	}
});

defaultCheckbox3.addEventListener('change', function(){

	if(defaultCheckbox3.checked){
		choices.style.color='black';
	}
});

defaultCheckbox4.addEventListener('change', function(){

	if(defaultCheckbox4.checked){
		choices.style.color='black';
	}
});



/*

console.log(defaultCheckbox1);
console.log(defaultCheckbox2);
console.log(defaultCheckbox3);
console.log(defaultCheckbox4);

*/



//radioWithGap4,5,6

const decisions =document.querySelector('#decisions');

const radioWithGap4 = document.querySelector('#radioWithGap4');
const radioWithGap5 = document.querySelector('#radioWithGap5');
const radioWithGap6 = document.querySelector('#radioWithGap6');


radioWithGap4.addEventListener('change', function(){

	if(radioWithGap4.checked){
		decisions.style.color='black';
	}
});

radioWithGap5.addEventListener('change', function(){

	if(radioWithGap5.checked){
		decisions.style.color='black';
	}
});

radioWithGap6.addEventListener('change', function(){

	if(radioWithGap6.checked){
		decisions.style.color='black';
	}
});








/*

console.log(radioWithGap4);
console.log(radioWithGap5);
console.log(radioWithGap6);


*/

//credit, cardNum, expiration, csv

const credit = document.querySelector('#credit');
const cardNum = document.querySelector('#cardNum');
const expiration = document.querySelector('#expiration');
const csv = document.querySelector('#csv');

let creditValue = document.querySelector('#credit').value;

credit.addEventListener('focus', function(){
	if(credit.style.color='red'){
		credit.value =''
		credit.style.color='black'

	}else{
		console.log('success');
	}
});

cardNum.addEventListener('focus', function(){
	if(cardNum.style.color='red'){
		cardNum.value =''
		cardNum.style.color='black'

	}else{
		console.log('success');
	}
});

expiration.addEventListener('focus', function(){
	if(expiration.style.color='red'){
		expiration.value =''
		expiration.style.color='black'

	}else{
		console.log('success');
	}
});

csv.addEventListener('focus', function(){
	if(csv.style.color='red'){
		csv.value =''
		csv.style.color='black'

	}else{
		console.log('success');
	}
});



/*

console.log(credit);
console.log(cardNum);
console.log(expiration);
console.log(csv);

*/


// platinum, gold, silver, bronze

const platinum = document.querySelector('#platinum');
const gold = document.querySelector('#gold');
const silver = document.querySelector('#silver');
const bronze = document.querySelector('#bronze');

const platinumClub = document.querySelector('#platinumClub');
const goldClub = document.querySelector('#goldClub');
const silverClub = document.querySelector('#silverClub');
const bronzeClub = document.querySelector('#bronzeClub');

platinumClub.style.display='none';
goldClub.style.display='none';
silverClub.style.display='none';
bronzeClub.style.display='none';


platinum.addEventListener('change', function(){

	if(platinum.checked){
		platinumClub.style.display='block'
		gold.disabled = true;
		silver.disabled = true;
		bronze.disabled = true;
	}else if(!platinum.checked){
		platinumClub.style.display='none'
		gold.disabled = false;
		silver.disabled = false;
		bronze.disabled = false;
	}

})

gold.addEventListener('change', function(){

	if(gold.checked){
		goldClub.style.display='block'
	}else if(!gold.checked){
		goldClub.style.display='none'
	}

})

silver.addEventListener('change', function(){

	if(silver.checked){
		silverClub.style.display='block'
	}else if(!silver.checked){
		silverClub.style.display='none'
	}

})

bronze.addEventListener('change', function(){

	if(bronze.checked){
		bronzeClub.style.display='block'
	}else if(!bronze.checked){
		bronzeClub.style.display='none'
	}

})

/*
console.log(platinum);
console.log(gold);
console.log(silver);
console.log(bronze);
*/


//materialFormContactMessageEx for message


const message = document.querySelector('#materialFormContactMessageEx');

//console.log(message);

//send is send button

const send = document.querySelector('#send');

console.log(send);

// Add Event listener to send

send.addEventListener('click',function(e){
	e.preventDefault();


	if(fname.value =='' ){
		fname.style.color='red';
		fname.value ='You must fill out this field';
	}else if(fname.value.length > 40){
		alert('You name is way to long');
		fname.style.color='red';
		fname.value ='Try again with a shorter name';
	}

	
	if(lname.value=='' ){
		lname.style.color='red';
		lname.value ='You must fill out this field';
	}else if(lname.value.length > 40){
		alert('You name is way to long');
		lname.style.color='red';
		lname.value ='Try again with a shorter name';
	}
	if(email.value=='' ){
		email.style.color='red';
		email.value ='You must fill out this field';
	}
	if(address.value=='' ){
		address.style.color='red';
		address.value ='You must fill out this field';
	}
	if(city.value=='' ){
		city.style.color='red';
		city.value ='You must fill out this field';
	}
	if(state.value=='' ){
		state.style.color='red';
		state.value ='You must fill out this field';
	}
	if(zip.value=='' ){
		zip.style.color='red';
		zip.value ='You must fill out this field';
	}else if(isNaN(zip.value)){
		alert('This must be a number')	
	}else if(zip.value.length>5){
		alert('Them are too many numbers')
	}

	if(credit.value=='' ){
		credit.style.color='red';
		credit.value ='You must fill out this field';
	}else if(credit.value.length<11 || credit.value.length>18){
		console.log(credit.value.length)
		alert('you need to have the correct amount of numbers')
	}
	if(cardNum.value=='' ){
		cardNum.style.color='red';
		cardNum.value ='You must fill out this field';
	}else if(isNaN(cardNum.value)){
		alert('This must be a number')
		}
	if(expiration.value=='' ){
		expiration.style.color='red';
		expiration.value ='You must fill out this field';
	}
	if(csv.value=='' ){
		csv.style.color='red';
		csv.value ='You must fill out this field';
	}else if(isNaN(csv.value)){
		alert('This must be a number')
		}

	if(message.value=='' ){
		message.style.color='red';
		message.value ='You must fill out this field';
	}

	
	ValidateEmail(email.value);

	if(!defaultCheckbox1.checked && !defaultCheckbox2.checked && !defaultCheckbox3.checked && !defaultCheckbox4.checked){
		choices.style.color='red';	
	}else if(defaultCheckbox1.checked || defaultCheckbox2.checked || defaultCheckbox3.checked || defaultCheckbox4.checked){
		
	}

	if(!radioWithGap4.checked && !radioWithGap5.checked && !radioWithGap6.checked){
		decisions.style.color='red';	
	}


})


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
  	
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}