
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

//Datas no formato mm/dd/aaaa
const tabela_feriados = [

    {
        nome: "Ano Novo",
        data: "01/01/2021",
        eh_feriado_parcial: false,
        feriado_em_minutos: 1440,
        hora_inicio: "00:00:00",
        hora_final: "23:59:59"
    },

    {
        nome: "Aniversário da Cidade",
        data: "01/25/2021",
        eh_feriado_parcial: false,
        feriado_em_minutos: 1440,
        hora_inicio: "00:00:00",
        hora_final: "23:59:59"
    },

    {
        nome: "Carnaval",
        data: "02/15/2021",
        eh_feriado_parcial: false,
        feriado_em_minutos: 1440,
        hora_inicio: "00:00:00",
        hora_final: "23:59:59"
    },

    {
        nome: "Carnaval",
        data: "02/16/2021",
        eh_feriado_parcial: false,
        feriado_em_minutos: 1440,
        hora_inicio: "00:00:00",
        hora_final: "23:59:59"
    },

    {
        nome: "Carnaval",
        data: "02/17/2021",
        eh_feriado_parcial: true,
        feriado_em_minutos: 720,
        hora_inicio: "00:00:00",
        hora_final: "11:59:59"      //pois 12:00 já não é mais feriado. E esse é o ÚNICO dia assim!
    },

    {
        nome: "Antecipação Corpus Christi",
        data: "03/26/2021",
        eh_feriado_parcial: false,
        feriado_em_minutos: 1440,
        hora_inicio: "00:00:00",
        hora_final: "23:59:59"
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

*/

function pesquisa_index(array, item, flag_retorne_tipo_index = 0) {

    const LIMITE_BUSCA_BINARIA = 10;

    let i_esquerda = 0;
    let i_direita = array.length - 1;

    let i_mediana = Math.trunc((i_esquerda + i_direita)/2);
    let index = -1  //-1: indice não encontrado
    let flag_pesquisa_linear = false;


    //if (item < array[i_esquerda] || item > array[i_direita]){
    //    index = -1;

    if (item == array[i_mediana]) {
        index = i_mediana;

    }else {

        while (i_esquerda <= i_direita){


            if (item < array[i_mediana]){

                if (i_direita - i_esquerda <= LIMITE_BUSCA_BINARIA){
                    flag_pesquisa_linear = true;
                    break;
                }
    
                i_direita = i_mediana - 1;

            }else if (item > array[i_mediana]){

                if (i_direita - i_esquerda <= LIMITE_BUSCA_BINARIA){
                    flag_pesquisa_linear = true;
                    break;
                }

                i_esquerda = i_mediana + 1;

            }else{
                index = i_mediana;
                break;
            }
    
            i_mediana = Math.trunc((i_esquerda + i_direita)/2);
    
        }

        
        if (flag_pesquisa_linear == true) {

            if (flag_retorne_tipo_index == 1){

                while (item > array[i_esquerda] ){
                    i_esquerda++;
                }
    
                index = i_esquerda;
        
            } else if (flag_retorne_tipo_index == -1) {
    
                while (item < array[i_direita] ){
                    i_direita--;
                }
    
                index = i_direita;
    
            } else {

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

    Converte tabela de feriados em um array de minutos desde de 1970 até d data do feriado

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
        feriado_em_minutos: 1440,
        hora_inicio: "00:00:00",
        hora_final: "23:59:59"
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

    const DAY_SAB = 6;
    const DAY_DOM = 0;

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
    let dif_data_inicial_minutos = (data_hora_inicial.getTime() - data_inicial.getTime())*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

    // converter data_hora em apenas data, com horas em 00:00:00
    dia = data_hora_final.getDate();
    mes = data_hora_final.getMonth()+1;
    ano = data_hora_final.getFullYear();
    let data_final = new Date(`${mes}/${dia}/${ano} 00:00:00`);
    let dif_data_final_minutos = (data_hota_final.getTime() - data_final.getTime())*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

    // converter data inicial e final em minutos
    let data_inicial_minutos = data_inicial.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;
    let data_final_minutos = data_final.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

    //retorna array de feriados de que caem entre segunda e sexta
    let struct_feriados = converter_tab_datas_em_minutos(tabela_feriados);
    let array_feriados_seg_ate_sex = struct_feriados[0];
    let array_feriados_carnaval_quarta = struct_feriados[1];
    
    // pesquisa por feriados que caem entre segunda e quarta, exceto quarta de cinzas
    let index_feriado_seg_sex_inicial = pesquisa_index(array_feriados_seg_ate_sex, data_inicial_minutos, 1);
    let index_feriado_seg_sex_final = pesquisa_index(array_feriados_seg_ate_sex, data_final_minutos, -1);

    let minutos_a_descontar = 0;

    if (index_feriado_seg_sex_inicial != -1 && index_feriado_seg_sex_final != -1){

        if (array_feriados_seg_ate_sex[index_feriado_seg_sex_inicial] == data_inicial_minutos ){
            minutos_a_descontar = (-1)*dif_data_inicial_minutos;
        }

        while (index_feriado_seg_sex_inicial <= index_feriado_seg_sex_final){

            minutos_a_descontar = minutos_a_descontar + DIA_EM_MINUTOS;
            index_feriado_seg_sex_inicial++;
        }
    
    }


    // pesquisa por feriados que caem na quarta de cinzas
    let index_feriado_qua_carnaval_inicial = pesquisa_index(array_feriados_carnaval_quarta, data_inicial_minutos, 1);
    let index_feriado_qua_carnaval_final = pesquisa_index(array_feriados_carnaval_quarta, data_final_minutos, -1);

    if (index_feriado_qua_carnaval_inicial != -1 && index_feriado_qua_carnaval_final != -1){

        while (index_feriado_qua_carnaval_inicial <= index_feriado_qua_carnaval_final){
            minutos_a_descontar = minutos_a_descontar + DIA_EM_MINUTOS/2;
            index_feriado_qua_carnaval_inicial++;
        }
    
    }

    return minutos_a_descontar;

}

//console.log(tabela_feriados);

/*

Fatos:
    1) As datas dos feriados são ordenadas por padrão.
    2) Sábado e domingo não são dias úteis

    Objetivo: determinnar quantos minutos úteis existem entre duas datas/horas

    Entrada, objetos Date: data_hora_inicial, data_hora_final
    Saída: minutos úteis (desconsiderando sábados, domingos e feriados)

    Condição: data_hora1

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

    let dia = data_hora_inicial.getDate();
    let mes = data_hora_inicial.getMonth()+1;
    let ano = data_hora_inicial.getFullYear();

    let data_inicial = new Date(`${mes}/${dia}/${ano} 00:00:00`);

    let data_hora_inicial_em_minutos = data_hora_inicial.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;
    let dif_mile = data_hora_final.getTime() - data_hora_inicial.getTime();
    let dif_minutos = dif_mile*FATOR_MILESSEGUNDOS_PARA_MINUTOS;    

    let day_data_inicial = data_hora_inicial.getDay();
    //let day_data_final = data_hora_final.getDay();

    let minutos_primeiro_sab;
    let minutos_primeiro_dom;

    let next_data_domingo;
    let next_data_sabado;

    let minutos_de_sab_ate_prim_dia_util = 0;
    let minutos_de_dom_ate_prim_dia_util = 0;

    let next_dia_util;

    // Encontra o primeiro sábado e domingo após a data inicial
    // Data inicial é sábado
    if (day_data_inicial == DAY_SAB){
        
        //acresenta +7 dias, para encontrar o primeiro sábado após a data inicial
        next_data_sabado = new Date(data_inicial.getTime() + 7*UM_DIA_EM_MILESSEGUNDOS);
        minutos_primeiro_sab = next_data_sabado.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

        next_data_domingo = new Date(next_data_sabado.getTime() + 1*UM_DIA_EM_MILESSEGUNDOS);
        minutos_primeiro_dom = next_data_domingo.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

        // o próximo dia útil
        next_dia_util = new Date(data_inicial.getTime() + 2*UM_DIA_EM_MILESSEGUNDOS);
        minutos_de_sab_ate_prim_dia_util = (next_dia_util.getTime() - data_hora_inicial.getTime())*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

    //Data inicial é domingo
    }else if (day_data_inicial == DAY_DOM) {

        next_data_domingo = new Date(data_inicial.getTime() + 7*UM_DIA_EM_MILESSEGUNDOS);
        minutos_primeiro_dom = next_data_domingo.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

        next_data_sabado = new Date(next_data_domingo.getTime() - 1*UM_DIA_EM_MILESSEGUNDOS);
        minutos_primeiro_sab = next_data_sabado.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

        next_dia_util = new Date(data_inicial.getTime() + 1*UM_DIA_EM_MILESSEGUNDOS);
        minutos_de_dom_ate_prim_dia_util = (next_dia_util.getTime() - data_hora_inicial.getTime())*FATOR_MILESSEGUNDOS_PARA_MINUTOS;


    // data inicial é dia de útil
    } else {

        next_data_sabado = new Date(data_inicial.getTime() + (DAY_SAB - data_inicial.getDay() )*UM_DIA_EM_MILESSEGUNDOS);
        minutos_primeiro_sab = next_data_sabado.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

        next_data_domingo = new Date(next_data_sabado.getTime() + 1*UM_DIA_EM_MILESSEGUNDOS);
        minutos_primeiro_dom = next_data_domingo.getTime()*FATOR_MILESSEGUNDOS_PARA_MINUTOS;

    }

    /*
        Série de sábados do tipo: 

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

    let dif_data_final_next_sabado = data_hora_final.getTime() - next_data_sabado.getTime();
    let n_minutos_sab = 0;

    if (dif_data_final_next_sabado >= 0) {
        n_minutos_sab = FATOR_MILESSEGUNDOS_PARA_MINUTOS*dif_data_final_next_sabado/UMA_SEMANA_EM_MINUTOS + 1;
        n_minutos_sab = Math.trunc(n_minutos_sab);    
    }

    let tempo_minutos_sab = n_minutos_sab*UM_DIA_EM_MINUTOS;

    let dif_data_final_next_domingo = data_hora_final.getTime() - next_data_domingo.getTime();
    let n_minutos_dom = 0;

    if (dif_data_final_next_domingo >= 0) {
        n_minutos_dom = FATOR_MILESSEGUNDOS_PARA_MINUTOS*dif_data_final_next_domingo/UMA_SEMANA_EM_MINUTOS + 1;
        n_minutos_dom = Math.trunc(n_minutos_dom);    
    }

    let tempo_minutos_dom = n_minutos_dom*UM_DIA_EM_MINUTOS;

    let desconto_sab_e_dom_minutos = tempo_minutos_sab + tempo_minutos_dom + minutos_de_sab_ate_prim_dia_util + minutos_de_dom_ate_prim_dia_util;

    let minutos_brutos = dif_minutos - desconto_sab_e_dom_minutos;

    //descontar minutos de feriados que ocorrem entre segunda e sexta
    let struct_feriados = converter_tab_datas_em_minutos(tabela_feriados);
    let array_feriados_seg_ate_sex = struct_feriados[0];
    let array_feriados_carnaval_quarta = struct_feriados[1];

    let minutos_feriados = descontar_minutos_feriados(data_hora_inicial, data_hora_final);

    let minutos_liquidos = minutos_brutos - minutos_feriados;

    return minutos_liquidos;

}

const FATOR_MILESSEGUNDOS_PARA_DIAS = 24*60*60*1000;



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
console.log("Janeiro - Sexta até quinta depois do carnaval - Minutos uteis-4: " + minutos_uteis);



/*

                   // 0  1   2   3   4   5     6   7   8   9   10                  15                  20
let array_feriados = [5, 10, 15, 20, 21, 22.5, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
    //              21                  25                       30                       35                       40
                    105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 
    //              41                  45                         50
                    205, 210, 215, 216, 217, 218.5, 220, 225, 230, 235, 250, 275];



                     // 0  1   2   3   4   5     6   7   8   9   10                  15                  20
let array_feriados2 = [10]

let index_feriado_inicial = pesquisa_index(array_feriados2, 9, 1);
let index_feriado_final = pesquisa_index(array_feriados2, 11, -1);

console.log("Index feriado inicial: " + index_feriado_inicial);
console.log("Index feriado final: " + index_feriado_final);

*/
