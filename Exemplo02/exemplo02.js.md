```javascript
"use strict";

/*

Escreva um programa para que sejam informados 10 (dez) números inteiros. O programa 
deve informar o menor e o maior valor informado.

  Restrição: ignorar um número não inteiro. E se todos os números não forem inteiros, 
  fazer 'maior' = undefined e 'menor' = undefined no corpo da função 'maior_menor'
  
  Observação: não precisa verificar se é um número, apenas se ele é inteiro ou não.

*/  

let obj_entradas_saidas_1 = [


    {dez_inteiros: [0, 4, 2, 6, 5, 3, 8, 1, 7, 9], menor: 0, maior: 9},
    {dez_inteiros: [0, 4, 2, 6, 3, 9, 8, 1, 7, 5], menor: 0, maior: 9},
    {dez_inteiros: [5, 8, 6, 7, 0, 1, 4, 3, 2, 9], menor: 0, maior: 9},
    {dez_inteiros: [5, 8, 6, 7, 9, 1, 4, 3, 2, 0], menor: 0, maior: 9},
    {dez_inteiros: [9, 8, 6, 7, 0, 1, 4, 3, 2, 5], menor: 0, maior: 9},
    {dez_inteiros: [9, 8, 6, 7, 5, 1, 4, 3, 2, 0], menor: 0, maior: 9},

    {dez_inteiros: [9, 8, 6, 7, 5, 9, 4, 3, 2, 1, 10], menor: 1, maior: 10},
    {dez_inteiros: [1, 8, 6, 7, 1, 9, 4, 3, 9, 2, 19], menor: 1, maior: 19},
    {dez_inteiros: [1, 8, 6, -7 , 1, 9, 4, 3, 9, 2, 19], menor: -7, maior: 19},
    {dez_inteiros: [1, 8, 6, -7 ,1 ,9 ,4 ,3 ,9 ,2 ,19], menor: -7, maior: 19},
    {dez_inteiros: [1, 8, 6, -7.5, 1, 9, 4, 3, 9, 2, 20.2], menor: 1, maior: 9},
    {dez_inteiros: [1.5, 8, 6, -7.5, 1 ,9 , 4, 3, 9, 2, 20.2], menor: 1, maior: 9},
    {dez_inteiros: [1.5, 8.8 , 6, -7.5, 1, 9, 4, 3, 9, 2, 20.2], menor: 1, maior: 9},
    {dez_inteiros: [1.5, 8.8, 6.2, -7.5, 1, 9, 4, 3, 9, 2, 20.2], menor: 1, maior: 9},

    {dez_inteiros: [1.5, 8.8, 6.2, -7.5, 1.0, 9.5, 4.5, 3.5, 9.5, 2.5, 20.2], menor: 1, maior: 1},
    {dez_inteiros: [1.5, 8.8, 6.2, -7.5, 1.02, 9.5, 4.5, 3.5, 9.5, 2.5, 20.2], menor: undefined, maior: undefined},

];

function testar_algoritmo(obj_entradas_saidas, minha_funcao){

    obj_entradas_saidas.forEach((obj, i) => {

        let objComparacao = minha_funcao(obj.dez_inteiros);

        let menor_ehCorreto = objComparacao.fmenor === obj.menor;
        let maior_ehCorreto = objComparacao.fmaior === obj.maior;

        let resultado = (menor_ehCorreto && maior_ehCorreto) === true;

        if (resultado === true) {
            console.log(`Teste[${i+1}]:\t Passou! => |menor: ${obj.menor}, maior: ${obj.maior}| `);
        }else{
            console.log(`Teste[${i+1}]:\t F A L H O U => |menor: ${objComparacao.fmenor}, maior: ${objComparacao.fmaior}|`);
        }
    });
}

function maior_menor(dez_numeros){

    let maior;      //não alterar o nome desta variável
    let menor;      //não alterar o nome desta variável

    let foiInicializado = false;

    for (let numero of dez_numeros){
        
        //implemente seu algoritmo aqui
        if ( Number.isInteger(numero) ){

            if (foiInicializado === false){
                menor = numero;
                maior = menor;
                foiInicializado = true;  

            }else if (numero < menor) {
                menor = numero;

            }else if (numero > maior) {
                maior = numero;
            }

        }

    }

    //não alterar o retorno 
    return {fmaior: maior, fmenor: menor};
}

testar_algoritmo (obj_entradas_saidas_1, maior_menor);

/*
Saída esperada:

Teste[1]:        Passou! => |menor: 0, maior: 9| 
Teste[2]:        Passou! => |menor: 0, maior: 9| 
Teste[3]:        Passou! => |menor: 0, maior: 9| 
Teste[4]:        Passou! => |menor: 0, maior: 9| 
Teste[5]:        Passou! => |menor: 0, maior: 9| 
Teste[6]:        Passou! => |menor: 0, maior: 9| 
Teste[7]:        Passou! => |menor: 1, maior: 10| 
Teste[8]:        Passou! => |menor: 1, maior: 19| 
Teste[9]:        Passou! => |menor: -7, maior: 19| 
Teste[10]:       Passou! => |menor: -7, maior: 19| 
Teste[11]:       Passou! => |menor: 1, maior: 9| 
Teste[12]:       Passou! => |menor: 1, maior: 9| 
Teste[13]:       Passou! => |menor: 1, maior: 9| 
Teste[14]:       Passou! => |menor: 1, maior: 9| 
Teste[15]:       Passou! => |menor: 1, maior: 1| 
Teste[16]:       Passou! => |menor: undefined, maior: undefined| 

*/

```
