const pessoas = ['João', 'ana', 'carlos', 'beatriz'];

// ordenacao crescente
pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas);

// ordenacao decrescente
pessoas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(pessoas);