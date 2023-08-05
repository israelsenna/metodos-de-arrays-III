// executa uma funcao callback, passada como argumento, para cada
// elemento do array, que resulta em apenas um valor de retorno.
// 1. acumulador - valor inicial (ou o valor do callback anterior)
// 2. valorAtual - o valor do elemento atual
// 3. index - o indice atual
// 4. array - o array completo

const array = [0, 1, 2, 3, 4];

array.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador + valorAtual;
}, 10);