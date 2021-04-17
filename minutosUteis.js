    //https://www.feriados.com.br/feriados-sao_paulo-sp.php
/*

    Feriados SÃO PAULO 2021
    01/01/2021 - Ano Novo                           0
    25/01/2021 - Aniversário da Cidade              1
    15/02/2021 - Carnaval                           2
    16/02/2021 - Carnaval                           3
    17/02/2021 - Carnaval                           4
    26/03/2021 - Antecipação Corpus Christi         5
    29/03/2021 - Antecipação Consc. Negra
    30/03/2021 - Antecipação Aniversário
    31/03/2021 - Antecipação Corpus Christi
    01/04/2021 - Antecipação Consc. Negra
    02/04/2021 - Sexta-Feira Santa
    02/04/2021 - Sexta-feira Santa
    21/04/2021 - Dia de Tiradentes
    01/05/2021 - Dia do Trabalho
    03/06/2021 - Corpus Christi
    09/07/2021 - Revolução Constitucionalista
    07/09/2021 - Independência do Brasil
    12/10/2021 - Nossa Senhora Aparecida
    15/10/2021 - Dia do Professor
    28/10/2021 - Dia do Servidor Público
    02/11/2021 - Dia de Finados
    02/11/2021 - Finados
    15/11/2021 - Proclamação da República
    25/12/2021 - Natal

    Total: 24 feriados nacionais e locais por ano

*/

/*
    Datas no formato mm/dd/aaaa

    Apenas um feriado é parcial, que a quarta-feira de cinzas, que termina 12h

*/

const tabela_feriados = [

    {
        nome: "Ano Novo",
        data: "01/01/2021",
        eh_feriado_parcial: false,
    },

    {
        nome: "Aniversário da Cidade",
        data: "01/25/2021",
        eh_feriado_parcial: false,
    },

    {
        nome: "Carnaval",
        data: "02/15/2021",
        eh_feriado_parcial: false,
    },

    {
        nome: "Carnaval",
        data: "02/16/2021",
        eh_feriado_parcial: false,
    },

    {
        nome: "Carnaval",
        data: "02/17/2021",
        eh_feriado_parcial: true,
    },

    {
        nome: "Antecipação Corpus Christi",
        data: "03/26/2021",
        eh_feriado_parcial: false,
    },

];

/*

    Entrada:
                        // 0  1   2   3   4   5     6   7   8   9
        array_feriados = [5, 10, 15, 20, 21, 22.5, 30, 35, 40, 45];
        data_hora_inicial = 12;
        data_hora_inicial = 23;


    flag_retorne_tipo_index:
        Se -1: item igual ou anterior
        Se  0: item exato
        Se  1: item igual ou posterior

    Pesquisa binária e linear (quando os indices pesquisados são menores do que um certo limite)

    Exemplos de entrdas (instancias)

    Caso 1, flag_retorne_tipo_index = -1. Procura um elemento no array que é menor do que o item
    
        //index   0
        array = [10], item = 5, flag_retorne_tipo_index = -1
            Como 5 < 10 ? Verdadeiro. Então o retorno é -1, pois não tem  um elemento do array que é menor do que 5

            Retorno = -1

        //index   0, 
        array = [10], item = 10, flag_retorne_tipo_index = -1
            Como 10 < 10 ? Falso. Retorno é 0, pois o elemento do array FOI ENCONTRADO.

            Retorno = 0

        //index   0
        array = [10], item = 12, flag_retorne_tipo_index = -1
            Como 12 < 10 ? Falso. Retorno é 0, pois o elemento do array é menor do que 12.

            Retorno = 0

    //------------------------------------------------------------------------

    Caso 2, flag_retorne_tipo_index = 0. Procura um elemento no array que é igual ao item

            //index   0
        array = [10], item = 5, flag_retorne_tipo_index = 0
            Como 5 = 10 ? Falso. Retorno é -1, pois não tem um elemento do array que é igual a 5
        
        Retorno = -1

        //index   0
        array = [10], item = 10, flag_retorne_tipo_index = 0
            Como 10 = 10 ? Verdadeiro. Retorno é 0, pois o elemento do array FOI ENCONTRADO

        Retorno = 0

        //index   0
        array = [10], item = 12, flag_retorne_tipo_index = 0
            Como 12 = 10 ? Falso. Retorno é -1, pois não tem um elemento do array que é igual a 12
        
        Retorno = -1

    Caso 3, flag_retorne_tipo_index = 1. Procura um elemento no array que é maior do que o item

        //index   0
        array = [10], item = 5, flag_retorne_tipo_index = 1
            Como 5 > 10 ? Falso. Retorno é 0, pois tem um elemento do array que é maior do que 5
        
        Retorno = 0

        //index   0
        array = [10], item = 10, flag_retorne_tipo_index = 1
            Como 10 > 10 ? Falso. Retorno é 0, pois o elemento do array FOI ENCONTRADO

        Retorno = 0

        //index   0
        array = [10], item = 12, flag_retorne_tipo_index = 1
            Como 12 > 10 ? Verdadeiro. Retorno é -1, pois não tem um elemento do array que é maior do que 12

        Retorno = -1

*/

function pesquisa_index(array, item, flag_retorne_tipo_index = 0) {

    const LIMITE_BUSCA_BINARIA = 10;

    let i_esquerda = 0;
    let i_direita = array.length - 1;

    let i_mediana = Math.trunc((i_esquerda + i_direita)/2);
    let index = -1  //-1: indice não encontrado
    let flag_pesquisa_linear = false;

    if (item == array[i_mediana]) {
        index = i_mediana;

    }else {

        //pesquisa binária
        while (i_esquerda <= i_direita){

            if (item < array[i_mediana]){

                // se itens a pesquisar são menores que o LIMITE_BUSCA_BINARIA, fazer uma busca linear
                if (i_direita - i_esquerda <= LIMITE_BUSCA_BINARIA){
                    flag_pesquisa_linear = true;
                    break;
                }
    
                i_direita = i_mediana - 1;

            }else if (item > array[i_mediana]){

                // se itens a pesquisar são menores que o LIMITE_BUSCA_BINARIA, fazer uma busca linear
                if (i_direita - i_esquerda <= LIMITE_BUSCA_BINARIA){
                    flag_pesquisa_linear = true;
                    break;
                }

                i_esquerda = i_mediana + 1;

            }else{
                // se encontrou o elemento, retorna o seu índice
                index = i_mediana;
                break;
            }
    
            i_mediana = Math.trunc((i_esquerda + i_direita)/2);
    
        }

        
        // Realiza pesquisa linear
        if (flag_pesquisa_linear == true) {

            // flag_retorne_tipo_index = 1. Procura o primeiro elemento que é menor do que item
            // e retorna o seu índice
            if (flag_retorne_tipo_index == 1){

                while (item > array[i_esquerda] ){
                    i_esquerda++;
                }

                if (i_esquerda <= i_direita){
                    index = i_esquerda;
                }
    
        
            } else if (flag_retorne_tipo_index == -1) {

                // flag_retorne_tipo_index = -1. Procura o primeiro elemento que é maior do que item
                // e retorna o seu índice
                while (item < array[i_direita] ){
                    i_direita--;
                }

                if (i_direita >= i_esquerda){
                    index = i_direita;
                }

            } else {

                // procura o elemento que é igual ao item e retorna o seu índice.
                while (item != array[i_esquerda] && i_esquerda <= i_direita){
                    i_esquerda++;
                }

                if (i_esquerda <= i_direita){
                    index = i_esquerda;
                }

            }
    
        }

    }

    return index;
   
}


/*
    Converte tabela de feriados em um array de minutos desde de 1970 até a data do feriado

    Retorna um array, onde o índice 0 é um array com os feriados que caem entre segunda e sexta, exceto a quarta de cinzas
    Já no índice 1, retorna-se um array com os feriados de quarta de cinzas.

*/
function converter_tab_datas_em_minutos(tab_feriados){
    
    let array_minutos_feriados = [];
    let array_feriado_carnaval_quarta = [];
    let temp_minutos = 0;
    let temp_data;
    let dia_semana = 0;

    const DIA_SEMANA_SAB = 6;
    const DIA_SEMANA_DOM = 0;

    const FATOR_MILESSEGUNDOS_PARA_MINUTOS = 1/(1*60*1000);

    /*

    {
        nome: "Ano Novo",
        data: "01/01/2021",
        eh_feriado_parcial: false,
    },

    */

    for (let i = 0; i < tab_feriados.length; i++){
        
        temp_data = new Date(tab_feriados[i].data);

        dia_semana = temp_data.getDay();

        // excluir feriados que caem no sábado e/ou no domingo, pois os seus minutos
        // já serão excluídos

        if (DIA_SEMANA_SAB != dia_semana && DIA_SEMANA_DOM != dia_semana) {

            temp_minutos = temp_data.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

            // Apenas feriados que caem entre segunda e sexta serão descontados
            if (tab_feriados[i].eh_feriado_parcial == false){
                array_minutos_feriados.push(temp_minutos);
            }else{
                array_feriado_carnaval_quarta.push(temp_minutos);
            }
    
        }

    }

    return [array_minutos_feriados, array_feriado_carnaval_quarta];

}

/*
    Usa: 
        função: converter_tab_datas_em_minutos, que retorna um array onde o indice 0 contém 
                outro array com os feriados de segunda até sexta. E o índice 1 contém outro array
                com feriados de quarta-feira de cinzas.

        função: pesquisa_index, que retorna um indice, indicando se um item pesquisado se encontra ou não no array
                Esta função usa os array's de converter_tab_datas_em_minutos.

    Entrada:
        data_hora_inicial: data e hora do tipo Date
        data_hota_final: data e hora do tipo Date
        Condição 1: data_hora_inicial é menor do que data_hota_final.
        Condição 2: data_hora_inicial pode ser dia útil, sábado, domingo e feriado
        Condição 3: data_hota_final pode ser apenas um dia útil  
    
    Saída:
        Calcula os minutos de feriados entre duas datas

*/
function descontar_minutos_feriados(data_hora_inicial, data_hota_final){

    // converter milessegundos para minutos
    const FATOR_MILESSEGUNDOS_PARA_MINUTOS = 1/(60*1000);

    // dia em minutos
    const DIA_EM_MINUTOS = 1*24*60;
    
    //1 dia em milessegundos
    const UM_DIA_EM_MILESSEGUNDOS = 24*60*60*1000;

    // converter data_hora em apenas data, com horas em 00:00:00
    let dia = data_hora_inicial.getDate();
    let mes = data_hora_inicial.getMonth()+1;
    let ano = data_hora_inicial.getFullYear();
    let data_inicial = new Date(`${mes}/${dia}/${ano} 00:00:00`);

    //retorna a hora de data_hora_inicial, mas em minutos
    let dif_data_inicial_minutos = (data_hora_inicial.getTime() - data_inicial.getTime())*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

    // converter data_hora em apenas data, com horas em 00:00:00
    dia = data_hora_final.getDate();
    mes = data_hora_final.getMonth()+1;
    ano = data_hora_final.getFullYear();
    let data_final = new Date(`${mes}/${dia}/${ano} 00:00:00`);
    
    //retorna a hora de data_hota_final, mas em minutos
    let dif_data_final_minutos = (data_hota_final.getTime() - data_final.getTime())*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

    // converter data inicial e final em minutos
    let data_inicial_minutos = data_inicial.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;
    let data_final_minutos = data_final.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

    //retorna array de feriados de que caem entre segunda e sexta
    let struct_feriados = converter_tab_datas_em_minutos(tabela_feriados);
    let array_feriados_seg_ate_sex = struct_feriados[0];
    let array_feriados_carnaval_quarta = struct_feriados[1];
    
    // pesquisa por feriados que caem entre segunda e sexta, exceto quarta de cinzas
    let index_feriado_seg_sex_inicial = pesquisa_index(array_feriados_seg_ate_sex, data_inicial_minutos, 1);
    let index_feriado_seg_sex_final = pesquisa_index(array_feriados_seg_ate_sex, data_final_minutos, -1);

    //minutos de feriados a descontar
    let minutos_a_descontar = 0;

    //index_feriado_seg_sex_inicial => procura um feriado em minutos, que é maior do que data_inicial_minutos, e retorna seu índice
    //index_feriado_seg_sex_final => procura um feriado em minutos, que é menor do que data_inicial_minutos, e retorna seu índice
    if (index_feriado_seg_sex_inicial != -1 && index_feriado_seg_sex_final != -1){

        // verifica se o chamado foi aberto em um feriado. Se sim, o tempo dele será abatido das horas a descontar.
        // Exemplo: chamado aberto em 15/02/2021 08:00 (seg de carnaval). Estas 08:00 horas serão descontadas, pois
        //no loop while eu somo um dia de feriado como 1440 minutos, ou seja, o dia de feriado iniciando em 00:00h
        if (array_feriados_seg_ate_sex[index_feriado_seg_sex_inicial] == data_inicial_minutos ){
            minutos_a_descontar = (-1)*dif_data_inicial_minutos;
        }

        //Se index_feriado_seg_sex_inicial for menor ou igual a index_feriado_seg_sex_final, entra-se no loop
        while (index_feriado_seg_sex_inicial <= index_feriado_seg_sex_final){

            minutos_a_descontar = minutos_a_descontar + DIA_EM_MINUTOS;
            index_feriado_seg_sex_inicial++;
        }
    
    }


    // pesquisa por feriados que caem na quarta de cinzas
    let index_feriado_qua_carnaval_inicial = pesquisa_index(array_feriados_carnaval_quarta, data_inicial_minutos, 1);
    let index_feriado_qua_carnaval_final = pesquisa_index(array_feriados_carnaval_quarta, data_final_minutos, -1);

    //index_feriado_seg_sex_inicial => procura um feriado em minutos, que é maior do que data_inicial_minutos, e retorna seu índice
    //index_feriado_seg_sex_final => procura um feriado em minutos, que é menor do que data_inicial_minutos, e retorna seu índice
    if (index_feriado_qua_carnaval_inicial != -1 && index_feriado_qua_carnaval_final != -1){

        // o feriado de quarta-feira de cinzas é parcial, contendo 12 horas
        while (index_feriado_qua_carnaval_inicial <= index_feriado_qua_carnaval_final){
            minutos_a_descontar = minutos_a_descontar + DIA_EM_MINUTOS/2;
            index_feriado_qua_carnaval_inicial++;
        }
    
    }

    //retorna os minutos de feriado a descontar
    return minutos_a_descontar;

}

/*
    Usa: 
        função: converter_tab_datas_em_minutos, que retorna um array onde o indice 0 contém 
                outro array com os feriados de segunda até sexta. E o índice 1 contém outro array
                com feriados de quarta-feira de cinzas.

        função: descontar_minutos_feriados, que calcula os minutos de feriados entre duas datas

    Entrada:
        data_hora_inicial: data e hora do tipo Date
        data_hota_final: data e hora do tipo Date
        Condição 1: data_hora_inicial é menor do que data_hota_final.
        Condição 2: data_hora_inicial pode ser dia útil, sábado, domingo e feriado
        Condição 3: data_hota_final pode ser apenas um dia útil  
    
    Saída:
        Calcula os minutos úteis entre duas datas, excluindo os sábados, domingos e feriados
*/

function diferenca_datas(data_hora_inicial, data_hora_final) {

    const DAY_SAB = 6;
    const DAY_DOM = 0;

    // converter milessegundos para minutos
    const FATOR_MILESSEGUNDOS_PARA_MINUTOS = 1/(60*1000);

    // converter milessegundos para dias
    const FATOR_MILESSEGUNDOS_PARA_DIAS = 1/(24*60*60*1000);

    const UM_DIA_EM_MILESSEGUNDOS = 24*60*60*1000;

    const UMA_SEMANA_EM_MINUTOS = 7*24*60;

    const UM_DIA_EM_MINUTOS = 24*60;

    // converter data_hora em apenas data, com horas em 00:00:00
    let dia = data_hora_inicial.getDate();
    let mes = data_hora_inicial.getMonth()+1;
    let ano = data_hora_inicial.getFullYear();
    let data_inicial = new Date(`${mes}/${dia}/${ano} 00:00:00`);

    //converte data_hora_inicial para minutos
    let data_hora_inicial_em_minutos = data_hora_inicial.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;
    
    // calcula diferença em milesegundos entre as datas inicial e final
    let dif_mile = data_hora_final.getTime() - data_hora_inicial.getTime();

    //converte dif_mile em minutos
    let dif_minutos = dif_mile*FATOR_MILESSEGUNDOS_PARA_MINUTOS;    

    // encontra o dia da semana da data_hora_inicial
    let day_data_inicial = data_hora_inicial.getDay();

    let minutos_primeiro_sab;   //guarda os minutos do primeiro sábado, após data_inicial
    let minutos_primeiro_dom;    //guarda os minutos do primeiro domingo, após data_inicial

    let next_data_domingo;  //data do primeiro domingo após data_inicial
    let next_data_sabado;   //data do primeiro sábado após data_inicial

    let minutos_de_sab_ate_prim_dia_util = 0;   //minutos de sábado até o primeiro dia útil
    let minutos_de_dom_ate_prim_dia_util = 0;   //minutos de domingo até o primeiro dia útil

    let next_dia_util;      //próximo dia útil

    // Encontra o primeiro sábado e domingo após a data inicial
    // Data inicial é sábado
    if (day_data_inicial == DAY_SAB){
        
        //acresenta +7 dias, para encontrar o primeiro sábado após a data inicial
        next_data_sabado = new Date(data_inicial.getTime() + 7*UM_DIA_EM_MILESSEGUNDOS);
        minutos_primeiro_sab = next_data_sabado.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

        //primeiro domingo após data_inicial
        next_data_domingo = new Date(next_data_sabado.getTime() + 1*UM_DIA_EM_MILESSEGUNDOS);
        minutos_primeiro_dom = next_data_domingo.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

        // o próximo dia útil
        next_dia_util = new Date(data_inicial.getTime() + 2*UM_DIA_EM_MILESSEGUNDOS);
        minutos_de_sab_ate_prim_dia_util = (next_dia_util.getTime() - data_hora_inicial.getTime())*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

    //Data inicial é domingo
    }else if (day_data_inicial == DAY_DOM) {

        //acresenta +7 dias, para encontrar o primeiro domingo após a data inicial
        next_data_domingo = new Date(data_inicial.getTime() + 7*UM_DIA_EM_MILESSEGUNDOS);
        minutos_primeiro_dom = next_data_domingo.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

        //primeiro sábado após data_inicial
        next_data_sabado = new Date(next_data_domingo.getTime() - 1*UM_DIA_EM_MILESSEGUNDOS);
        minutos_primeiro_sab = next_data_sabado.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

        // o próximo dia útil
        next_dia_util = new Date(data_inicial.getTime() + 1*UM_DIA_EM_MILESSEGUNDOS);
        minutos_de_dom_ate_prim_dia_util = (next_dia_util.getTime() - data_hora_inicial.getTime())*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

    // data inicial é dia de útil
    } else {

        //Se a data_inicial não for sábado/domingo
        //Retorna o próximo sábado após data_inicial
        next_data_sabado = new Date(data_inicial.getTime() + (DAY_SAB - data_inicial.getDay() )*UM_DIA_EM_MILESSEGUNDOS);
        minutos_primeiro_sab = next_data_sabado.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

        //Retorna o próximo domingo após data_inicial
        next_data_domingo = new Date(next_data_sabado.getTime() + 1*UM_DIA_EM_MILESSEGUNDOS);
        minutos_primeiro_dom = next_data_domingo.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

    }

    /*
    Série de sábados/domingos do tipo: 

        Cada dia da semana ocorre de 7 em 7 dias

        sabado.n = data_primeiro_sabado + (n-1)*7
        minutos_sabado.n = minutos_primeiro_sab + (n-1)*UMA_SEMANA_EM_MINUTOS
        Mas o minutos_sabado.n será sempre a data final, que sempre cairá em um dia útil

        minutos_sabado.n = data_hora_final

        data_hora_final = minutos_primeiro_sab + (n-1)*UMA_SEMANA_EM_MINUTOS
        data_hora_final - minutos_primeiro_sab = (n-1)*UMA_SEMANA_EM_MINUTOS
        n-1 = (data_hora_final - minutos_primeiro_sab)/UMA_SEMANA_EM_MINUTOS
        n = (data_hora_final - minutos_primeiro_sab)/UMA_SEMANA_EM_MINUTOS + 1

        onde n é o número de sábados ou domingos entre duas datas

    */

    //dif_data_final_next_sabado: data_hora_final - minutos_primeiro_sab
    let dif_data_final_next_sabado = data_hora_final.getTime() - next_data_sabado.getTime();
    let n_minutos_sab = 0;

    if (dif_data_final_next_sabado >= 0) {
        n_minutos_sab = FATOR_MILESSEGUNDOS_PARA_MINUTOS*dif_data_final_next_sabado/UMA_SEMANA_EM_MINUTOS + 1;
        n_minutos_sab = Math.trunc(n_minutos_sab);    
    }

    //Calcula os minutos de sábado entre duas datas
    let tempo_minutos_sab = n_minutos_sab*UM_DIA_EM_MINUTOS;

    //dif_data_final_next_domingo: data_hora_final - next_data_domingo
    let dif_data_final_next_domingo = data_hora_final.getTime() - next_data_domingo.getTime();
    let n_minutos_dom = 0;

    if (dif_data_final_next_domingo >= 0) {
        n_minutos_dom = FATOR_MILESSEGUNDOS_PARA_MINUTOS*dif_data_final_next_domingo/UMA_SEMANA_EM_MINUTOS + 1;
        n_minutos_dom = Math.trunc(n_minutos_dom);    
    }

    //Calcula os minutos de domingo entre duas datas
    let tempo_minutos_dom = n_minutos_dom*UM_DIA_EM_MINUTOS;

    //total de minutos de sábados e domingos entre duas datas
    let desconto_sab_e_dom_minutos = tempo_minutos_sab + tempo_minutos_dom + minutos_de_sab_ate_prim_dia_util + minutos_de_dom_ate_prim_dia_util;

    //dif_minutos: diferença em minutos entre duas datas
    //desconto_sab_e_dom_minutos: total de minutos de sábado e domingo
    let minutos_brutos = dif_minutos - desconto_sab_e_dom_minutos;

    //descontar minutos de feriados que ocorrem entre segunda e sexta
    let struct_feriados = converter_tab_datas_em_minutos(tabela_feriados);
    let array_feriados_seg_ate_sex = struct_feriados[0];            //exclui os feriados que caem sábado e domingo
    let array_feriados_carnaval_quarta = struct_feriados[1];        // feriados de quarta-feira de cinzas

    //retorna os minutos de feriados entre duas datas
    let minutos_feriados = descontar_minutos_feriados(data_hora_inicial, data_hora_final);

    //retorna os minutos liquidos, excluíndo sábados/domingos e feriados
    let minutos_liquidos = minutos_brutos - minutos_feriados;

    return minutos_liquidos;

}

//Datas com dias úteis apenas
let data_hora_inicial = new Date("01/06/2021 12:00"); // 
let data_hora_final = new Date("01/08/2021 13:30");   //

let minutos_uteis = diferenca_datas(data_hora_inicial, data_hora_final);
console.log("Janeiro - Minutos uteis-1: " + minutos_uteis);

//Datas sem feriado, apenas sábado e domingo como dias não úteis
data_hora_inicial = new Date("01/06/2021 12:00"); // 
data_hora_final = new Date("01/19/2021 13:30");   //

minutos_uteis = diferenca_datas(data_hora_inicial, data_hora_final);
console.log("Janeiro - Minutos uteis-2: " + minutos_uteis);

//Datas com feriado, sábado e domingo como dias não úteis
data_hora_inicial = new Date("01/20/2021 12:00"); // 
data_hora_final = new Date("01/26/2021 13:30");   //

minutos_uteis = diferenca_datas(data_hora_inicial, data_hora_final);
console.log("Janeiro - Um feriado na segunda - Minutos uteis-3: " + minutos_uteis);

//Datas com feriado, sábado e domingo como dias não úteis
data_hora_inicial = new Date("02/12/2021 12:00"); // 
data_hora_final = new Date("02/18/2021 13:30");   //

minutos_uteis = diferenca_datas(data_hora_inicial, data_hora_final);
console.log("Fevereiro - Sexta até quinta depois do carnaval - Minutos uteis-4: " + minutos_uteis);



/*

                     // 0  1   2   3   4   5     6   7   8   9   10
let array_feriados2 = [10, 45, 55, 65, 66, 67, 70, 71, 80, 85, 100];

let index;
let array_item = [12, 30, 45, 50, 66, 68, 71, 77, 80, 82, 100];
let array_tipo = [-1, 0, 1];

console.log(`Index: 0- 1- 2- 3- 4- 5- 6- 7- 8- 9- 10`);
console.log(`Array: ${array_feriados2}\n`);

for (let i = 0; i < array_tipo.length; i++){

    for (let j = 0; j < array_item.length; j++){
        index = pesquisa_index(array_feriados2, array_item[j], array_tipo[i]);
        console.log(`Item: ${array_item[j]}, tipo: ${array_tipo[i]} => Resultado: ${index}`);
    }

    console.log("\n");
}

    /* Saída:

    Index: 0- 1- 2- 3- 4- 5- 6- 7- 8- 9- 10
    Array: 10,45,55,65,66,67,70,71,80,85,100

    Item: 12, tipo: -1 => Resultado: 0
    Item: 30, tipo: -1 => Resultado: 0
    Item: 45, tipo: -1 => Resultado: 1
    Item: 50, tipo: -1 => Resultado: 1
    Item: 66, tipo: -1 => Resultado: 4
    Item: 68, tipo: -1 => Resultado: 5
    Item: 71, tipo: -1 => Resultado: 7
    Item: 77, tipo: -1 => Resultado: 7
    Item: 80, tipo: -1 => Resultado: 8
    Item: 82, tipo: -1 => Resultado: 8
    Item: 100, tipo: -1 => Resultado: 10


    Item: 12, tipo: 0 => Resultado: -1
    Item: 30, tipo: 0 => Resultado: -1
    Item: 45, tipo: 0 => Resultado: 1
    Item: 50, tipo: 0 => Resultado: -1
    Item: 66, tipo: 0 => Resultado: 4
    Item: 68, tipo: 0 => Resultado: -1
    Item: 71, tipo: 0 => Resultado: 7
    Item: 77, tipo: 0 => Resultado: -1
    Item: 80, tipo: 0 => Resultado: 8
    Item: 82, tipo: 0 => Resultado: -1
    Item: 100, tipo: 0 => Resultado: 10


    Item: 12, tipo: 1 => Resultado: 1
    Item: 30, tipo: 1 => Resultado: 1
    Item: 45, tipo: 1 => Resultado: 1
    Item: 50, tipo: 1 => Resultado: 2
    Item: 66, tipo: 1 => Resultado: 4
    Item: 68, tipo: 1 => Resultado: 6
    Item: 71, tipo: 1 => Resultado: 7
    Item: 77, tipo: 1 => Resultado: 8
    Item: 80, tipo: 1 => Resultado: 8
    Item: 82, tipo: 1 => Resultado: 9
    Item: 100, tipo: 1 => Resultado: 10

    */

*/
