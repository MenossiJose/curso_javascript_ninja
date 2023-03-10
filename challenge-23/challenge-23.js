/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
(function (wind, doc) {
'use strict';

var $visor = doc.querySelector('[data-js="visor"]');
var $buttonsNumbers = doc.querySelectorAll('[data-js = "button-number"]');
var $buttonsOperators = doc.querySelectorAll('[data-js = "button-operator"]');
var $buttonCE = doc.querySelector('[data-id = "button-operator-clear"]');
var $buttonEqual = doc.querySelector('[data-id = "button-operator-equal"]');

Array.prototype.forEach.call($buttonsNumbers, 
	function (button) {
	button.addEventListener('click', handleClickNumber, false);
});

Array.prototype.forEach.call($buttonsOperators, 
	function (button) {
	button.addEventListener('click', handleClickOperator, false);
});

$buttonCE.addEventListener('click', function(){
	$visor.value = 0;
}, false);

$buttonEqual.addEventListener('click', handleClickEqual, false);

function handleClickNumber(event){
	if($visor.value[0]==='0'){
		$visor.value = this.value;
	}
	else
	$visor.value += this.value;
}

function handleClickOperator(event){
	$visor.value = removeLastItemIfItsAnOperator($visor.value);
	$visor.value += this.value;
}

function isLastItemOperator (number) {
	var operators = ['+', '-', '/', 'x'];
	var lastItem = $visor.value.split('').pop();
	return operators.some(function(item){
		return item === lastItem;
	});
}

function removeLastItemIfItsAnOperator(number){
	if(isLastItemOperator(number)){
		return number.slice(0, -1);;
	}
	return number;
}

function handleClickEqual () {
	$visor.value = removeLastItemIfItsAnOperator($visor.value);
	var allValues = $visor.value.match(/\d+[+x\/-]?/g);
  	$visor.value = allValues.reduce(function(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
		var operator = accumulated.split('').pop();
		var lastValue = actual;
		var lastOperator = isLastItemOperator(actual) ? actual.split('').pop() : '';
		switch(operator){
		case '+' :
			return Number(firstValue) + Number(lastValue);
		case '-' :
			return Number(firstValue) - Number(lastValue);
		case 'x' :
			return Number(firstValue) * Number(lastValue);
		case '/' :
			return Number(firstValue) / Number(lastValue);
		}

	});
	

};


})(window, document);