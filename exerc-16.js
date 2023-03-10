/*  Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

function operacoes (x, operacao, y) {
    switch (operacao){
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
        default:
            return 'Operação inválida'
    }
}

console.log(operacoes(1, '+', 2))
console.log(operacoes(1, '-', 2))
console.log(operacoes(1, '*', 2))
console.log(operacoes(1, '/', 2))
console.log(operacoes(1, '2', 2))