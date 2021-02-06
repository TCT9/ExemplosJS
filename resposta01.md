

```
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
```
