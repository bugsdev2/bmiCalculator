const age = document.getElementById('age');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const foot = document.getElementById('foot');
const inches = document.getElementById('inches');

const centimetres = document.getElementById('centimetres');
const footInches = document.getElementById('footInches-container');

const button = document.querySelector('button');
const messageContainer = document.getElementById('message');
const toggle = document.getElementById('toggle');


if(toggle.checked){
	footInches.style.display = "block";
	centimetres.style.display = "none";
	document.getElementById('p_centi').style.opacity = 0.5;
	document.getElementById('p_foot').style.opacity = 1;
} else {
	centimetres.style.display = "block";
	footInches.style.display = "none";
	document.getElementById('p_foot').style.opacity = 0.5;
	document.getElementById('p_centi').style.opacity = 1;
}

toggle.addEventListener('change', toggleHeight)
function toggleHeight(){
	if(toggle.checked){
	footInches.style.display = "block";
	centimetres.style.display = "none";
	document.getElementById('p_centi').style.opacity = 0.5;
	document.getElementById('p_foot').style.opacity = 1;
	} else {
	centimetres.style.display = "block";
	footInches.style.display = "none";
	document.getElementById('p_foot').style.opacity = 0.5;
	document.getElementById('p_centi').style.opacity = 1;
	}
}

button.addEventListener('click', calculate);

function calculate(){
	if(toggle.checked){
		let totalInches = parseInt(foot.value*12) + parseInt(inches.value);
		let weightInPounds = parseInt(weight.value) * 2.204622621849;
		let result = (Math.round(weightInPounds / ((totalInches**2))*100)/100)*703;
		message.innerHTML = `Your BMI is ${result} <br> You are ${changeColor(result)}`;
		changeColor(result);
	} else {
		if(height.value != ''){
		if(weight.value != ''){
			let result = Math.round((weight.value / ((height.value/100)**2)*100))/100;
			message.innerHTML = `Your BMI is ${result} <br> You are ${changeColor(result)}`;
			changeColor(result);
			} else {
				message.textContent = 'Enter Weight'
			}
		} else {
			message.textContent = 'Enter Height'
		}
	}
}

function changeColor(result){
	if(result<18.5){
			message.style.color = "#FFC107";
			return 'Underweight';
		} else if(result>=18.5 && result<25){
			message.style.color="#198754";
			return 'Normal';
		} else if(result>=25 && result<30){
			message.style.color = "#FF8C00";
			return 'Overweight';
		} else {
			message.style.color = "#DC3545";
			return 'Obese'
		}
}
