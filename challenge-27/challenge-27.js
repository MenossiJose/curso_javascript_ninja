/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.
Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.
Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false
Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/
(function (wind, doc){
'use strict';

function DOM (elements){
  this.element = document.querySelectorAll(elements);;
};

DOM.prototype.on = function on (eventType, callback) {
  Array.prototype.forEach.call(this.element, function(element){
    element.addEventListener(eventType, callback, false);
  });
};

DOM.prototype.off = function off (eventType, callback) {
  Array.prototype.forEach.call(this.element, function(element){
    element.removeEventListener(eventType, callback, false);
  });
};

DOM.prototype.get = function get () {
  return this.element;
};

DOM.prototype.forEach = function forEach () {
	return Array.prototype.forEach.apply(this.element, arguments);
};

DOM.prototype.map = function map () {
	return Array.prototype.map.apply(this.element, arguments);
};

DOM.prototype.filter = function filter () {
	return Array.prototype.filter.apply(this.element, arguments);
};

DOM.prototype.reduce = function reduce () {
	return Array.prototype.reduce.apply(this.element, arguments);
};

DOM.prototype.reduceRight = function reduceRight () {
	return Array.prototype.reduceRight.apply(this.element, arguments);
};

DOM.prototype.every = function every () {
	return Array.prototype.every.apply(this.element, arguments);
};

DOM.prototype.some = function some () {
	return Array.prototype.some.apply(this.element, arguments);
};

//forEach, map, filter, reduce, reduceRight, every e some.

DOM.prototype.isArray = function isArray (parameter){
	return Object.prototype.toString.call(parameter) === '[object Array]';
}

DOM.prototype.isObject = function isObject (parameter){
	return Object.prototype.toString.call(parameter) === '[object Object]';
}

DOM.prototype.isFunction = function isFunction (parameter){
	return Object.prototype.toString.call(parameter) === '[object Function]';
}

DOM.prototype.isNumber = function isNumber(parameter){
	return Object.prototype.toString.call(parameter) === '[object Number]';
}

DOM.prototype.isString = function isString (parameter){
	return Object.prototype.toString.call(parameter) === '[object String]';
}

DOM.prototype.isBoolean = function isBoolean (parameter){
	return Object.prototype.toString.call(parameter) === '[object Boolean]';
}

DOM.prototype.isNull = function isNull (parameter){
	return Object.prototype.toString.call(parameter) === '[object Null]';
}

//isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull

var $a = new DOM('[data-js="link"]');

$a.forEach(function(item){
	console.log(item.firstChild);
})

var dataJS = $a.map(function(item){
	return item.getAttribute('data-js');
})

console.log('map',dataJS)
console.log(DOM.prototype.isArray([1,2,3]));
console.log(DOM.prototype.isObject({}));

})(window, document);