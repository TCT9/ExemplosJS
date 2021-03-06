## Exemplo 04 - Calcular raizes de equação de 2º grau (usando classes)


O objetivo desse exemplo é cálcular as raízes reais de uma equação do 2º grau, com duas casas decimais de aproximação, usando classes Javascript.

### Descrição das classes/funções.

1. ```Result```: Todo retorno de método/função/objeto é sempre do tipo ```Result```. Se houver um erro, a propriedade ```temErro``` deverá ser setada para ```true```. Já a propriedade ```mensagemErro``` deve conter uma descrição do erro ocorrido. O objeto ```objErro``` descreve o erro ocorrido com mais detalhes. A propriedade ```result``` contém um resultado válido, que pode ser um valor primitivo ou um objeto.
Notar também que os campos no construtor com uma igualdade são opcionais.
```javascript
        class Result {
            constructor(result, temErro = false, mensagemErro = "", objErro = null){
                this.result = result;
                this.temErro = temErro;
                this.mensagemErro = mensagemErro;
                this.objErro = objErro;
            }
        }
```

2. ```Raiz```: Esta classe contém as raízes da equação, se houver. Caso não exista raízes reais, a propriedade ```x1``` deve ser setada para ```null```. A propriedade ```numeroDeRaizes``` informa quantas raízes existem.
```javascript
        //Classe que contem a(s) raiz(es) da equação
        class Raiz {

            constructor (x1, x2 = null, numeroDeRaizes = null){
                this.x1 = x1;
                this.x2 = x2;
                this.numeroDeRaizes = numeroDeRaizes;    
            }
        }
```

3. ```Equacao2Grau```: Esta classe  contém um construtor que recebe os parâmetros ```A```, ```B``` e ```C``` (```y = A*x^2 + B*x + C```)e retorna um objeto do tipo ```Result```, cuja propriedade ```result``` contém a instância atual de ```Equacao2Grau```.  Seus métodos são:
        
      3.1) getDelta(): retorna um objeto ```Result```, cuja propriedade ```result``` contém 
           o valor de Delta da equação do 2º grau.
        
      3.2) gerRaiz(): retorna um objeto ```Result```, cuja propriedade ```result``` contém 
           o objeto ```Raiz```, que por sua vez tem as raízes da equação do 2º grau.

4. ```CompararSaida```: Esta classe contèm as propriedades que devem ser comparadas com a saída esperada (correta) do teste.

5. ```create_Equacao2Grau```:Esta função cria uma instância de ```Equacao2Grau``` e retorna o objeto ```CompararSaida```.

6.```SaidaEsperada```: Esta classe contém as propriedades de uma saída esperada(correta). Por exemplo:
       ```let objSaidaEsperada = new SaidaEsperada(1,-5,6, new CompararSaida(1,false,2,3,2)```
       Representa uma equação do tipo: 1*x^2 - 5*x + 6 (parâmetros: 1, -5, 6)
       Já a saída esperada(correta) ```new CompararSaida(1,false,2,3,2)```, representa: Delta = 1, temErro = false, numeroDeRaizes = 2, x1 = 3, x2 = 2
 

7. ```obj_entradas_saidas_1```: Este objeto contém os parâmetros de entrada para a função ```create_Equacao2Grau``` bem como a saída esperada, na forma do objeto ```SaidaEsperada```.  

As outras classes/funções (```console_log``` e ```testar_Algoritmo```) são necessárias para executar o teste.

Espera-se que o usuário implemente o algoritmo que encontre as raízes reais de uma equação do 2º grau, na classe ```Equacao2Grau``` e abaixo do comentário ```//seu código vem aqui```.

```javascript
"use strict";

/*
1.1) Construa um algoritmo para calcular as raízes reais de uma equação do 2º grau (A*x^2
+ B*x + C), sendo que os valores A, B e C são fornecidos pelo usuário.
Onde '^' é o operador de exponenciação.
    Fonte: Forbellone, 3ª edição, capítulo 3, adaptado.

Restriçoes: 
    1) O número deve ter duas casas decimais. 
    2) O valor de 'A' deve ser diferente de zero. Se 'A' for zero, 
    retornar a frase: 'Erro: Parêmtro 'A' não pode ser zero!'
    3) Se for não houver raízes reais, retornar a frase: 
    'Erro: Esta equação não tem raízes reais!'
    4) Todo retorno de método deve ser do tipo 'Result'.
*/

// imprime objetos que sobre-escrevem o método 'toString'
function console_log(...data) {

    let str_data = "";

    data.forEach(element => {
        if (typeof(element) == "object") {
            str_data = element.toString() + str_data;
        }else{
            str_data = element + str_data;
        }
    });

    console.log(str_data);
}


//Classe que contem as propriedades que serão comparadas
class CompararSaida {
    constructor(delta, temErro, numeroDeRaizes, x1, x2, mensagemErro = ""){
        this.delta = delta; this.temErro = temErro; this.numeroDeRaizes = numeroDeRaizes; 
        this.x1 = x1; this.x2 = x2; this.mensagemErro = mensagemErro;
    }

    //sobre-escreve o método 'toString'
    toString(){
        return `Delta: ${this.delta}, temErro: ${this.temErro}, numeroDeRaizes: ${this.numeroDeRaizes}, x1: ${this.x1}, x2: ${this.x2}, mensagemErro: ${this.mensagemErro}`;
    }
}

//Classe com as propriedades de saída esperadas
class SaidaEsperada {
    
    constructor(A, B, C, objCompararSaida){
        this.A = A; this.B = B; this.C = C; 
        this.objCompararSaida = objCompararSaida;        
    }
}

//Entrada e saída esperada
let obj_entradas_saidas_1 = [

    {teste: 1, objSaida: new SaidaEsperada(1,-5,6, new CompararSaida(1,false,2,3,2) )},
    {teste: 2, objSaida: new SaidaEsperada(1,-5, 7, new CompararSaida(-3, true, null, null, null, "Erro: Esta equação não tem raízes reais!") )},
    {teste: 3, objSaida: new SaidaEsperada(0,-5,6, new CompararSaida(null, true, null, null, null, "Erro: Parêmtro 'A' não pode ser zero!" )) },
    {teste: 4, objSaida: new SaidaEsperada(1,-4,4, new CompararSaida(0, false, 1, 2, 2))},

];

//função para testar algoritmo 
function testar_Algoritmo(obj_entradas_saidas, minha_funcao){

    obj_entradas_saidas.forEach((obj, i) => {

        //equ2Grau é do tipo 'CompararSaida'
        let equ2Grau = minha_funcao(obj.objSaida.A, obj.objSaida.B, obj.objSaida.C);

        let resultado;
        //bject.entries: retorna o par chave e valor do objeto
        for (let [key, value] of Object.entries(equ2Grau)) {
            
            //testa se o valor, de 'equ2Grau' é o mesmo de 'obj.objSaida.objCompararSaida[key]'
            //Notar que eles são o mesmo objeto CompararSaida
            resultado = value === obj.objSaida.objCompararSaida[key];
            if (resultado === false){
                break;  //se encontrar um resultado falso, para a execução do 'for'
            }
        }

        //'console_log' imprime o método 'toString'
        if (resultado === true) {
            console_log(`Teste[${obj.teste}]:\t Passou! => |${obj.objSaida.objCompararSaida}| `);
        }else{
            console_log(`Teste[${obj.teste}]:\t F A L H O U => |${equ2Grau}|`);
        }
    });
}

//Classe ObjErro que descreve detalhes do erro
class ObjErro {

    constructor(id, nome, local){
        this.id = id;
        this.nome = nome;
        this.local = local;
    }
}

//constante com os tipos de erros
const Tipos_de_Erro = {
    
    parametro_A_zero: new ObjErro(1, "Parâmetro  'A' inválido", "Equacao2Grau: constructor"),       
    deltaNegativo: new ObjErro(2, "Delta negativo", "Equacao2Grau: getRaiz")        
    
}

/*https://khalilstemmler.com/articles/enterprise-typescript-nodejs/handling-errors-result-class/
Não chega nem perto da fonte, mas fornece uma padronização simples para retorno de funções/métodos/objetos
Se 'temErro = true', 'result' poderá ser nulo e uma mensagem de erro('mensagemErro' pode ser passada).
Adicionalmente, pode criar um objeto do tipo 'ObjErro' que detlalha mais o erro que ocorreu.
*/
class Result {
    constructor(result, temErro = false, mensagemErro = "", objErro = null){
        this.result = result;
        this.temErro = temErro;
        this.mensagemErro = mensagemErro;
        this.objErro = objErro;
    }
}

//Classe que contem a(s) raiz(es) da equação
class Raiz {

    constructor (x1, x2 = null, numeroDeRaizes = null){
        this.x1 = x1;
        this.x2 = x2;
        this.numeroDeRaizes = numeroDeRaizes;    
    }
}

/*Classe que contem uma equação do 2º grau
Todo retorno de método é do tipo Result. Para testar se o método retornou um valor válido, 
use a propriedade 'temErro'. Já para usar o resultado do método use a propriedade 'result'.
    getDelta: retorna o valor de delta
    getRaiz: retorna a raiz da equação

*/
class Equacao2Grau {

    constructor(A, B, C){

        let resultado;  //nao excluir
        if (A === 0){
            resultado = new Result(null,true,"Erro: Parêmtro 'A' não pode ser zero!", Tipos_de_Erro.parametro_A_zero);
        }else{
            this._A = A; 
            this._B = B; 
            this._C = C;
            resultado = new Result(this);
        }

        return resultado;

    }

    //retorna o valor de delta
    getDelta() {
      
      let resultado;  //não excluir
      
      //seu código vem aqui
      
      return resultado;
    }

    //retorna a raiz real da equação, se houver 
    getRaiz() {
        let resultado; //não excluir 

      //seu código vem aqui

        return resultado;

    }
}

//instacia a classe Equacao2Grau
//Não alterar esta função
function create_Equacao2Grau(A, B, C){

    let resultado;
    let equ2Grau = new Equacao2Grau(A, B, C);   //equ2Grau é do tipo 'Result'

    if (!equ2Grau.temErro){        

        let delta = equ2Grau.result.getDelta();     //delta é do tipo 'Result'
        let raiz = equ2Grau.result.getRaiz();       //raiz é do tipo 'Result'

        resultado = new CompararSaida(delta.result, raiz.temErro, raiz.result.numeroDeRaizes, 
            raiz.result.x1, raiz.result.x2, raiz.mensagemErro);
                
    }else{
        resultado = new CompararSaida(null, equ2Grau.temErro, null, null, null, equ2Grau.mensagemErro);
        
    }
    
    return resultado;
}

//Testa o seu algoritmo, não alterar.
testar_Algoritmo(obj_entradas_saidas_1, create_Equacao2Grau);

/*
Saída esperada:

Teste[1]:        Passou! => |Delta: 1, temErro: false, numeroDeRaizes: 2, x1: 3, x2: 2, mensagemErro: | 
Teste[2]:        Passou! => |Delta: -3, temErro: true, numeroDeRaizes: null, x1: null, x2: null, mensagemErro: Erro: Esta equação não tem raízes reais!| 
Teste[3]:        Passou! => |Delta: null, temErro: true, numeroDeRaizes: null, x1: null, x2: null, mensagemErro: Erro: Parêmtro 'A' não pode ser zero!| 
*/
```
