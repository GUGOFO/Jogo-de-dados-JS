const DisplayChutes = document.getElementById("chute");
const DisplayNumDados = document.getElementById("numDeDados");


function modificarChute(quantidade){
    let novoValor = Number(DisplayChutes.textContent) + quantidade;
    let numDeDados = Number(DisplayNumDados.textContent);

    if(novoValor >= 1 && novoValor <= 6*numDeDados){
        DisplayChutes.textContent = novoValor;
    }
}

function modificarDado(quantidade){
    let novoValor = Number(DisplayNumDados.textContent) + quantidade;
    let chute = Number(DisplayChutes.textContent);

    if(novoValor >= 1 && novoValor <= 6){
        if(chute > 6*novoValor) DisplayChutes.textContent = novoValor*6;
        DisplayNumDados.textContent = novoValor;
    }

} 