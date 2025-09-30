// Script File
const equationDisplay = document.getElementById('equation');
const resultDisplay = document.getElementById('result');
let equation = '';

function appendChar(myChar){
	equation += myChar;
	equationDisplay.textContent = equation;
}

function calculateResult(){
	try{
		const result = eval(equation);
		resultDisplay.textContent = Math.round(result * 100) / 100;
	}
	catch(error){
		resultDisplay.textContent = 'Error';
	}
}

function clearDisplay(){
	equation = '';
	equationDisplay.textContent = '';
	resultDisplay.textContent = '0';
}