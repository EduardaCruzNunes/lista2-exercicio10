var numero = 101;
var contador = 0;

if (numero % 2 == 0) {
    contador = numero;
    console.log(`Esses são valores pares de 1 até ${numero}:`);
    while (contador > 0) {
        console.log(contador);
        contador = contador - 2;
    }

} else if (numero % 2 == 1) {
    contador = numero - 1;
    console.log(`Esses são valores pares de 1 até ${numero}:`);
    while (contador > 0) {
        console.log(contador);
        contador = contador - 2;
    }

} else {
    console.log('Operção inválida, verifique e digite novamente!');
}
