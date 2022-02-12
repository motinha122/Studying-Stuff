/*const btn = document.querySelector("#send");

btn.addEventListener("click",function(e){
    e.preventDefault();
    const name = document.querySelector("#input-text")
    const value = name.value;
    console.log(value);
});*/

//Desafio Troco 

function calcular_troco(valor_pago,valor_compra){

    let troco = valor_pago - valor_compra  //calcula o troco
    let cents = Math.round((troco % 1)*100) //calcular centavos
    let reais = Math.floor(troco)   //calcular reais   

    let notas = {   //Reais
        'tipo':reais,
        100:0,
        50:0,
        20:0,
        10:0,
        5:0,
        2:0,
        1:0,
    }
    let centavos = {    //centavos
        'tipo':cents,
        50:0,
        25:0,
        10:0,
        5:0,
        1:0
    }

    function calcular(obj){
        let prop //propriedade do obj
        let tipo = obj['tipo']
    for (prop != 'tipo' in obj){

        while(moeda != 0 && moeda >= valor_nota){
            moeda -= valor_nota
            tipo[valor_nota] +=1
        }
    }
    }
}

calcular_troco(100,53.65)
calcular_troco(50,10)

