```javascript
/* 1) Crie um algoritmo que compare um valor com o número 10 e exiba uma mensagem */

const obj_entradas_saidas_1 = [
    {valor_usuario: 5, valor_referencia: 10, resultado: "Comparação: 5 é menor do que 10."},
    {valor_usuario: 10, valor_referencia: 10, resultado: "Comparação: 10 é igual a 10."},
    {valor_usuario: 12, valor_referencia: 10, resultado: "Comparação: 12 é maior do que 10."},
]

//função de teste de algoritmo
function testar_algoritmo(obj_entradas_saidas, minha_funcao){

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

//função a ser implementada para satisfazer os requisitos do eneunciado e de 'obj_entradas_saidas_1'
function compararCom(valor, referencia) {
  //implemente seu algoritmo aqui.
}

//testando a função 'compararCom'
testar_algoritmo(obj_entradas_saidas_1, compararCom);

/* Resultados esperados

Teste[1]:        Passou! => |Comparação: 5 é menor do que 10.| 
Teste[2]:        Passou! => |Comparação: 10 é igual a 10.| 
Teste[3]:        Passou! => |Comparação: 12 é maior do que 10.|

*/
```