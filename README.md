# ExemplosJS
Exemplos de uso de métodos e propriedades do Javascript ES6, usando NodeJS no Ubuntu.

  1.[Exemplo 02:](#exemplo-02)
  2. 
  

### Exemplo 01: é maior do que 10 ?
O objetivo é criar um algoritmo que compara um valor numérico com o número 10 e depois exiba uma mensagem. Porém, vamos criar primeiro um objeto que irá conter as propriedades ```valor_usuario ``` (valor digitado pelo usuário), ```valor_referencia``` (valor númerico 10) e ```resultado``` (que é o resultado esperado como correto).
```javascript
const obj_entradas_saidas_1 = [
  {valor_usuario: 5, valor_referencia: 10, resultado: "Comparação: 5 é menor do que 10."},
  {valor_usuario: 10, valor_referencia: 10, resultado: "Comparação: 10 é igual a 10."},
  {valor_usuario: 12, valor_referencia: 10, resultado: "Comparação: 12 é maior do que 10."},
]
```
Por sua vez, a função de teste será:
```javascript
function teste_compararCom(obj_entradas_saidas, minha_funcao){

    obj_entradas_saidas.forEach((obj, i) => {

        let comparacao = minha_funcao(obj.valor_usuario, obj.valor_referencia)
        let resultado = comparacao === obj.resultado;

        if (resultado === true) {
            console.log(`Teste[${i+1}]:\t Passou! => |${obj.resultado}| `);
        }else{
            console.log(`Teste[${i+1}]:\t F A L H O U => |${comparacao}|`);
        }
    });
}
```
A função de teste recebe como parâmetros um ```obj_entradas_saidas``` e ```minha_funcao``` e executa uma comparação do valor retornado por ```minha_funcao``` com o valor esperado, contido em ```obj_entradas_saidas.resultado```. 

O objetivo é criar uma função, com os parâmtros ```valor``` e ```referencia``` que retorne as strings esperadas, contidas em ```obj_entradas_saidas.resultado```, e que em todos os testes seja exibida a mensgem 'Passou!'. Abaixo segue um exemplo desse tipo de função:
```javascript
function compararCom(valor, referencia) {

}
```
Tópicos abordados neste ```Exemplo 01```:
  1. Estrutura de teste condicional (```if, else if, else```);
  2. Operadores relacionais (```<, >```);
  3.
[Resposta01](https://github.com/TCT9/ExemplosJS/blob/main/resposta01.md)

### Exemplo 02: 
