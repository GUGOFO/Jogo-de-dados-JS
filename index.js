const displayChutes = document.getElementById("chute");
const displayNumDados = document.getElementById("numDeDados");
const displayDados = document.getElementById("dados");
const copoInvertido = document.getElementById("copoInvertido");
const btnJogar = document.getElementById("jogar");

function modificarChute(quantidade){
    let novoValor = Number(displayChutes.textContent) + quantidade;
    let numDeDados = Number(displayNumDados.textContent);

    if(novoValor >= 1 && novoValor <= 6*numDeDados) displayChutes.textContent = novoValor;
    if(novoValor <= numDeDados) displayChutes.textContent = numDeDados;
}

function modificarDado(quantidade){
    let novoValor = Number(displayNumDados.textContent) + quantidade;
    let chute = Number(displayChutes.textContent);

    if(novoValor >= 1 && novoValor <= 6){
        if(chute > 6*novoValor) displayChutes.textContent = novoValor*6;
        if(chute < novoValor) displayChutes.textContent = novoValor;

        displayNumDados.textContent = novoValor;
        displayDados.innerHTML = " ";

        for(let i = 1; i <= novoValor; i++){
            let ladoAleatorio = Math.floor(Math.random() * 6) + 1;
            displayDados.innerHTML += `<img src="/imgs/dados/lado_${ladoAleatorio}.png" alt=" dado ne..." class="dado" id="dado${i}">`;
        }
    }
} 

function jogar(){
    const numDeDados = Number(displayNumDados.textContent);
    const chute = Number(displayChutes.textContent);
    let indexDoResultadoDoDado = 38;
    let resultadoTotal = 0;
    btnJogar.disabled = true;
    modificarBotoes(true);

    let linhas = Math.ceil(numDeDados / 2);
    let distanciaParaDescer = 7 + (linhas * 10); 
    copoInvertido.style.setProperty('--distancia', `${distanciaParaDescer}vh`);

    copoInvertido.classList.add("animar-copo");
    
    setTimeout(() => {
        modificarDado(0);
        
        for(let i = 1; i <= numDeDados; i++){
            const iezimoDado = document.getElementById(`dado${i}`);
            let resultadoDoDado = iezimoDado.src[indexDoResultadoDoDado];
            resultadoTotal += Number(resultadoDoDado);
        }
        
        console.log(resultadoTotal);
        if(resultadoTotal == chute) console.log("parabens");
        else console.log("troxaa errou");
    },500);
    
    setTimeout(() => {
        copoInvertido.classList.remove("animar-copo")
        btnJogar.disabled = false;
        modificarBotoes(false);
    }, 1000);
}

function modificarBotoes(modificar){
    for(let i = 0; i < 4; i++){
        const botao = document.getElementById(`botao${i}`);
        botao.disabled = modificar;
    }
}