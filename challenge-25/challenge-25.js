/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D
2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories
Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/
(function (wind, doc) {
'use strict';

function on (element, event, callback){
	document.querySelector(element)
	.addEventListener(event, callback, false);
}

function off (element, event, callback){
	document.querySelector(element)
	.removeEventListener(event, callback, false);
}

on('[data-js="botao"]', 'click', function (event){

	alert('Clicou no botao')
});
off('[data-js="botao"]', 'click', function (event){

	alert('Clicou no botao')
});

on('[type="text"]', 'input', function (event){
	
	console.log(this.value);
});

})(window, document);