/*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
(function (DOM){
  'use strict';

  var $formCEP = new DOM('[data-js = "form-cep"]');
  var $inputCEP = new DOM('[data-js = "input-cep"]');
  var ajax = new XMLHttpRequest();
  var $logradouro = new DOM('[data-js = "logradouro"]');
  var $status = new DOM('[data-js = "status"]');
  var $cidade = new DOM('[data-js = "cidade"]');
  var $estado = new DOM('[data-js = "estado"]');
  var $bairro = new DOM('[data-js = "bairro"]');
  var $cep = new DOM('[data-js = "cep"]');
  $formCEP.on('submit', handleSubmitFormCEP);

  function handleSubmitFormCEP (event) {
    event.preventDefault();
    var url = getUrl();
    console.log('CEP', url);
    ajax.open('GET', url);
    ajax.send();
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  };

  function handleReadyStateChange (){
    if(isRequestOk){
      fillCEPFields();
      getMessage('ok');
    }
  };

  function getUrl () {
    var treatedCEP = $inputCEP.get()[0].value.replace(/\D/g, '').split('');
    treatedCEP.splice(5, 0, '-');
    var url = 'https://cdn.apicep.com/file/apicep/[cep].json'.replace('[cep]', treatedCEP.join(''))
    return url;
     
  };

  function isRequestOk () {
    return ajax.readyState === 4 && ajax.status === 200;
  };

  function fillCEPFields () {
    var data = parseData();
    if(!data)
      getMessage('error');
    $logradouro.get()[0].textContent = data.address;
    $cidade.get()[0].textContent = data.city;
    $estado.get()[0].textContent = data.state;
    $bairro.get()[0].textContent = data.district;
    $cep.get()[0].textContent = data.code;
  };

  function parseData () {
    var result;
    try{
      result = JSON.parse(ajax.responseText.toString());
    }
    catch(e){
      result = null;
    }
    return result;

  };

  function getMessage(type){
    var cep = $inputCEP.get()[0].value;
    var messages = {
      loading: 'Buscando informações para o CEP ' + cep + '...',
      ok: 'Endereço referente ao CEP ' + cep + ':',
      error: 'Não encontramos o endereço para o CEP ' + cep + '.' 
    };

    
    $status.get()[0].textContent = messages[type]

    
  }



})(window.DOM);