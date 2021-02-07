```javascript
"use strict";

/*
Um município deseja saber a porcentagem de votos de três candidatos, além da
porcentagem de votos brancos e nulos. Monte um programa que receba como entrada o
número de votos de cada um dos três candidatos e também os votos nulos e brancos. Ao
final, o programa deve apresentar o total de votos e a porcentagem, em relação a todos
os eleitores que votaram, de votos de cada candidato, votos nulos e votos em branco.

Restrição: Os resultados devem ser apresentados com 2 casas decimais. A soma das
porcentagens deve ser igual a 100.00%. 
*/

let obj_entradas_saidas_1 = [

    //array => 0: nulos, 1: brancos, 2: candidato1, 3: candidato2, 4: candidato3
    {teste: 1, array_votos:['5','2','8','21','7'], total_votos: 43, array_percent: [11.63, 4.65, 18.6, 48.84, 16.28]},
    {teste: 2, array_votos:['2', '5', '0', '29', '6'], total_votos: 42, array_percent: [4.76, 11.9, 0.0, 69.05, 14.29]},

];

function testar_algoritmo(obj_entradas_saidas, minha_funcao){

    obj_entradas_saidas.forEach((obj, i) => {

        let objResultado = minha_funcao(obj.array_votos);

        let total_ehCorreto = objResultado.cTotal_votos === obj.total_votos;
        let percentual_ehCorreto = (function() {
    
            /* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
            O método every executa a função callback fornecida uma vez para cada elemento presente no array, até encontrar 
            algum elemento em que a função retorne um valor false (valor que se torna false quando convertido para boolean). 
            Se esse elemento é encontrado, o método every imediatamente retorna false
            */

            let result = objResultado.cArray_Percentual.every((item, index) => {
                return item ===  obj.array_percent[index];
            });

            return result;

        })();

        let resultado = (total_ehCorreto && percentual_ehCorreto) === true;

        if (resultado === true) {
            console.log(`Teste[${obj.teste}]:\t Passou! => |Total: ${objResultado.cTotal_votos}, Percentuais: ${objResultado.cArray_Percentual}| `);
        }else{
            console.log(`Teste[${obj.teste}]:\t F A L H O U => |Total: ${objResultado.cTotal_votos}, Percentuais: ${objResultado.cArray_Percentual}| `);
        }
    });
}

//array_strVotos => 0: nulos, 1: brancos, 2: candidato1, 3: candidato2, 4: candidato3
function computarVotos(array_strVotos){

    let total;
    
    //ATENÇÃO => no índice 0: percentual de votos Nulos, 1: percent. votos Brancos, 2: percent. Candidato1, 3: percent. Candidato2,
    //4: percent. Candidato3
    let array_percentual = [];  
    
    //seu algoritmo vai aqui




    //não alterar o objeto de retorno 
    return {cTotal_votos: total, cArray_Percentual: array_percentual};
}

testar_algoritmo(obj_entradas_saidas_1, computarVotos);

/*
Saída esperada:

Teste[1]:        Passou! => |Total: 43, Percentuais: 11.63,4.65,18.60,48.84,16.28| 
Teste[2]:        Passou! => |Total: 42, Percentuais: 4.76,11.90,0.00,69.05,14.29| 

*/
```
