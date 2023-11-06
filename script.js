const age = document.getElementById('age');
const height = document.getElementById('height');
const weight = document.getElementById('weight');

const button = document.querySelector('button');
const messageContainer = document.getElementById('message');
button.addEventListener('click', calculate)

function calculate(){
	if(isNaN(age.value) == isNaN(height.value) == isNaN(weight.value) == true) message.textContent == "Recheck what you've typed";
	if(age.value != ''){
		if(height.value != ''){
			if(weight.value != ''){
				let result = Math.round(weight.value / ((height.value/100)**2));
				message.innerText = `Your BMI is ${result}`;
				if(result<18.5){
					message.style.color = "#FFC107";
				} else if(result>=18.5 && result<25){
					message.style.color="#198754";
				} else if(result>=25 && result<30){
					message.style.color = "#FF8C00";
				} else {
					message.style.color = "#DC3545";
				}
			} else {
				message.textContent = 'Enter Weight'
			}
		} else {
			message.textContent = 'Enter Height'
		}
	} else {
		message.textContent = 'Enter Age';
	}
	
}
