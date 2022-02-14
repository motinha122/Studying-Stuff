function calcular_troco(valor_pago, valor_compra) {

    let troco = valor_pago - valor_compra    //calcula o troco
    let cents = Math.round((troco % 1) * 100)  //calcular centavos
    let reais = Math.floor(troco)                     //calcular reais   

    let valor_notas = [100,50,20,10,5,2,1] //valor de cada nota
    let valor_centavos = [50,25,10,5,1]    //valor de cada centavo

    function calcular(obj) {

        let qtd_notas = [0,0,0,0,0,0,0] //quantidade de notas
        let qtd_centavos = [0,0,0,0,0] // quantidade de centavos

        moeda = (obj == valor_notas) ? reais : cents;
        array_qtd = (obj == valor_notas) ? qtd_notas : qtd_centavos;
        let indice =0;
        for (indice in obj) {
            while (moeda != 0 && moeda >= obj[indice]) {
                moeda -= obj[indice]
                array_qtd[indice] += 1
            }
        }
        obj == valor_notas ? console.log(valor_notas,qtd_notas) : console.log(valor_centavos,qtd_centavos);
    }
    calcular(valor_notas)
    calcular(valor_centavos)
}
calcular_troco(100, 73.67)
calcular_troco(50, 10)



/*const btn = document.querySelector("#send");

btn.addEventListener("click",function(e){
    e.preventDefault();
    const name = document.querySelector("#input-text")
    const value = name.value;
    console.log(value);
});*/

//Desafio Troco 
