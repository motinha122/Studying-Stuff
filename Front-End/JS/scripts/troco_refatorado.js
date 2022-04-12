function calcular_troco(valor_pago,valor_compra){
    
    const troco = valor_pago - valor_compra    
    const centavos = Math.round((troco % 1) * 100) 
    const notas = Math.floor(troco)                       

    console.log(`Troco : ${troco.toFixed(2)} Reais`)
    console.log(` `)

    let cedulas = [
        {valor : 100, quantidade: 0},
        {valor : 50, quantidade: 0},
        {valor : 20, quantidade: 0},
        {valor : 10, quantidade: 0},
        {valor : 5, quantidade: 0},
        {valor : 2, quantidade: 0},
        {valor : 1, quantidade: 0},
    ]

    let moedas = [
        {valor : 50, quantidade: 0},
        {valor : 25, quantidade: 0},
        {valor : 10, quantidade: 0},
        {valor : 5, quantidade: 0},
        {valor : 1, quantidade: 0},
    ]

    function calcular_cedulas_moedas(tipoDinheiro,dinheiro){

        tipoDinheiro.forEach(tipoDinheiro => {
            while(dinheiro != 0 && dinheiro >= tipoDinheiro.valor){
                dinheiro -=tipoDinheiro.valor
                tipoDinheiro.quantidade +=1
            }
            console.log(`${tipoDinheiro.valor} : ${tipoDinheiro.quantidade}`)
        });   
    }
    
    calcular_cedulas_moedas(cedulas,notas)
    console.log(` `)
    calcular_cedulas_moedas(moedas,centavos)
}
calcular_troco(50,12.34)
