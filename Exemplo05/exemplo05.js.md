### Exemplo 05 - Calcular como raízes complexas uma equação de 2º grau (usando classes)

O código é quase idêntico ao do Exemplo 04. São necessárias poucas alterações no código para imprimir raízes complexas.

```javascript


"use strict";

/*
1.1) Construa um algoritmo para calcular as raízes de uma equação do 2º grau (A*x^2
+ B*x + C), sendo que os valores A, B e C são fornecidos pelo usuário (pode
    ter raízes complexas). Onde '^' é o operador de exponenciação.
    Fonte: Forbellone, 3ª edição, capítulo 3, adaptado.

Restriçoes: 
    1) O número deve ter duas casas decimais. 
    2) O valor de 'A' deve ser diferente de zero. Se 'A' for zero, retornar a frase: 'Erro: Parêmtro 'A' não pode ser zero!'
    3) Todo retorno de método deve ser do tipo 'Result'.
    4) Imprimir as raizes complexas na forma de string, no formato 'a + b*j', onde 'a' e 'b' são números reais e 'j' é o operador complexo.
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
    {teste: 2, objSaida: new SaidaEsperada(1,-5, 7, new CompararSaida(-3, false, 2, '2.50 + 0.87*j', '2.50 - 0.87*j') )},
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

        let resultado;
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

        return new Result(this._B**2 - 4*this._A*this._C);
    }

    //retorna a raiz real da equação, se houver 
    getRaiz() {
        let resultado;  //não alterar
        
        //seu código vem aqui

        //não alterar
        resultado = new Result(new Raiz(x1,x2,numeroDeRaizes));

        return resultado;

    }
}

//instacia a classe Equacao2Grau
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


testar_Algoritmo(obj_entradas_saidas_1, create_Equacao2Grau);

/*
Saída esperada:

Teste[1]:        Passou! => |Delta: 1, temErro: false, numeroDeRaizes: 2, x1: 3, x2: 2, mensagemErro: | 
Teste[2]:        Passou! => |Delta: -3, temErro: false, numeroDeRaizes: 2, x1: 2.50 + 0.87*j, x2: 2.50 - 0.87*j, mensagemErro: | 
Teste[3]:        Passou! => |Delta: null, temErro: true, numeroDeRaizes: null, x1: null, x2: null, mensagemErro: Erro: Parêmtro 'A' não pode ser zero!| 
Teste[4]:        Passou! => |Delta: 0, temErro: false, numeroDeRaizes: 1, x1: 2, x2: 2, mensagemErro: | 

*/
```
