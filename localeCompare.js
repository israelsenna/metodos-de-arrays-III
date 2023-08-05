// Retorna um numero que indica se a string de referencia vem antes, depois ou 
// eh igual a string comparada.

const letraA = 'a';
const letraC = 'c';

letraA.localeCompare(letraC);
// a vem antes de c
// resulta em um valor negativo

letraC.localeCompare(letraA);
// c vem depois de a
// resulta em um valor positivo

letraC.localeCompare(letraC);
// c eh igual a c
// o resultado eh zero