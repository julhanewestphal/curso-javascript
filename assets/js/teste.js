// Meu primeiro arquivo em Javascript

// Comentários de uma linha com barras duplas

/* Comentários com mais de uma linha deverão usar 
uma barra e um asterisco para delimitar as linhas de
código que estarão comentadas.
*/

//Declaração de variáveis
var preco;
var desconto;

var preco_final = (preco-desconto);

//Declaração de CONSTANTE 
const TX_IR = 0.15; // taxa de 15% IR

var salario;
var salario_liq = 0;

salario_liq = (salario-TX_IR);

//Declaração de funções
function soma(a,b){
    return a+b; // 15

    //console.log(a+b);
}

//Chamada da function 
soma(10,5);
