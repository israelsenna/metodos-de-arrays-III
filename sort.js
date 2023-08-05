//Ordena os elementos do proprio array. 

// Exemplo de ordenacao padrao
// const array = [2, 4, 1, 20, 3, 43];
// console.log(array.sort()); // [ 1, 2, 20, 3, 4, 43 ]


// Exemplo de ordenacao com funcao callback
const array = [2, 4, 1, 20, 3, 43];
const exibir = array.sort((a, b) => {
    return a - b;
});
console.log(exibir); // [ 1, 2, 3, 4, 20, 43 ]