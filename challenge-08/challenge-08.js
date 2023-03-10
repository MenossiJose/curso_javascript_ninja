/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum (x, y){
  return x + y;
};

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
var a = 2;
var b = 4;


console.log('A soma de ' + a + ' e ' + b + ' e igual a ' + sum(a, b));

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log('O nome da funcao que faz a some e ' + sum.name);

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName (){
  return 'Jose Antonio';
};

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log('A funcao ' + varShowName.name + ' retorna ' + varShowName());

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
function calculator (operacao){
  return function (x, y){
    switch (operacao){
    case '+' :
      console.log('Resultado da operacao: ' + x + operacao + y + ' = ' + (x + y));
      break;
      case '-' :
      console.log('Resultado da operacao: ' + x + operacao + y + ' = ' + (x - y));
      break;
      case '*' :
      console.log('Resultado da operacao: ' + x + operacao + y + ' = ' + (x * y));
      break;
      case '/' :
      console.log('Resultado da operacao: ' + x + operacao + y + ' = ' + (x / y));
      break;
      case '%' :
      console.log('Resultado da operacao: ' + x + operacao + y + ' = ' + (x % y));
      break;
    default :
      console.log('Operacao invalida')
    }

  }
}

calculator('+')(2, 3);

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
sum(2, 3);

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var subtraction = calculator('-');
var multiplication = calculator('*');
var division = calculator('/');
var mod = calculator('%');

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
subtraction(6, 7);
multiplication(5, 2);
division(2, 2);
mod(4, 4);