/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.
- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
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
	return $visor.value += this.value;
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