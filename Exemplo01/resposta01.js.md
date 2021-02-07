```javascript
/* 1) Crie um algoritmo que compare um valor com o número 10 e exiba uma mensagem */

const obj_entradas_saidas_1 = [
    {teste: 1, valor_usuario: 5, valor_referencia: 10, resultado: "Comparação: 5 é menor do que 10."},
    {teste: 2, valor_usuario: 10, valor_referencia: 10, resultado: "Comparação: 10 é igual a 10."},
    {teste: 3, valor_usuario: 12, valor_referencia: 10, resultado: "Comparação: 12 é maior do que 10."},
]

//função de teste de algoritmo
function testar_algoritmo(obj_entradas_saidas, minha_funcao){

    obj_entradas_saidas.forEach((obj, i) => {

        let comparacao = minha_funcao(obj.valor_usuario, obj.valor_referencia)
        let resultado = comparacao === obj.resultado;

        if (resultado === true) {
            console.log(`Teste[${obj.teste}]:\t Passou! => |${obj.resultado}| `);
        }else{
            console.log(`Teste[${obj.teste}]:\t F A L H O U => |${comparacao}|`);
        }
    });
}

//função a ser implementada para satisfazer os requisitos do eneunciado e de 'obj_entradas_saidas_1'
function compararCom(valor, referencia) {

    let resultado = "";
    
    if (valor < referencia){
        resultado  = `Comparação: ${valor} é menor do que ${referencia}.`

    }else if (valor > referencia){
        resultado  = `Comparação: ${valor} é maior do que ${referencia}.`

    }else{
        resultado  = `Comparação: ${valor} é igual a ${referencia}.`
    }

    return resultado;
}

//testando a função 'compararCom'
testar_algoritmo(obj_entradas_saidas_1, compararCom);

/* Resultados esperados

Teste[1]:        Passou! => |Comparação: 5 é menor do que 10.| 
Teste[2]:        Passou! => |Comparação: 10 é igual a 10.| 
Teste[3]:        Passou! => |Comparação: 12 é maior do que 10.|

*/
```
