// função tabuada
function tabuada() {
    // pega as variaveis
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
// verifica se o valor de num é igual a 0 
    if (num.value == ''){
        alert ('Digite um numero valido')
    } else {
        //   transforma num em Number
        let n = Number(num.value)
        let c = 1
        //  limpa a area de amostrar o texto
        tab.innerHTML = ''
        // faz o looping enquanto o c for menor ou igual a 10
        while (c <= 10){
            // acrescenta um elemento gerado pela variavel item com o .document.createElement 
            let item = document.createElement('option')
            // cria um texto a ser adicionado a cada looping de iteração
            item.text = `${n} x ${c} = ${n *c}`
            // adiciona um item com value com o valor de c 
            item.value = `tab ${c}`
            // adiciona o elemento filho na tela com o appendChild (item)
            tab.appendChild(item)
            // incrementa 1 a cada iteração
            c += 1
        }
    }
   vg
}