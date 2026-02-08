const DisplayChutes = document.getElementById("chute");
const DisplayNumDados = document.getElementById("numDeDados");
const DisplayDados = document.getElementById("dados");

function modificarChute(quantidade){
    let novoValor = Number(DisplayChutes.textContent) + quantidade;
    let numDeDados = Number(DisplayNumDados.textContent);

    if(novoValor >= 1 && novoValor <= 6*numDeDados) DisplayChutes.textContent = novoValor;
    if(novoValor <= numDeDados) DisplayChutes.textContent = numDeDados;
}

function modificarDado(quantidade){
    let novoValor = Number(DisplayNumDados.textContent) + quantidade;
    let chute = Number(DisplayChutes.textContent);

    if(novoValor >= 1 && novoValor <= 6){
        if(chute > 6*novoValor) DisplayChutes.textContent = novoValor*6;
        if(chute < novoValor) DisplayChutes.textContent = novoValor;
        DisplayNumDados.textContent = novoValor;
        DisplayDados.innerHTML = " ";
        for(let i = 1; i <= novoValor; i++){
            console.log(i);
            let ladoAleatorio = Math.floor(Math.random() * 6) + 1;
            DisplayDados.innerHTML += `<img src="/imgs/dados/lado_${ladoAleatorio}.png" alt=" dado ne..." class="dado" id="dado${i}">`;
            console.log(DisplayDados.innerHTML);
        }
    }

} 