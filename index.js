/*   <3 FEITO SEM CHAT, GEMINI, IA OU QUALQUER COISA ASSIM <3

  Caso vc estaja aq para ver se o chat fez isso n se preocupe,
  O chat n faria um bagulho TÃO FEIO ASSIM kaskskakas
  Possivelmente tem 99 formais mais eficientes de se fazer isso
  Bom agora que estamos aqui posso falar um pouco as merdas q eu fiz kaslaksa

  1 - A minha maior burrice foi o metodo q eu vejo o resulado de dados, simplesmente vejo
      o source da imagem e analizo o index38 kskskkskak, nem preciso falar o quao propenso a bugs
      isso ai é, se mudar uma coisinha no http o codigo para de funcionar uruuuuu
  2 - A animação n foi feita por mim, porem gostaria de aprender a fazer, espero que um dia
      eu consiga fazer coisas bonitinhas usando CSS (linguagem de mentira)
  3 - Isso aqui n é uma merda (pelo menos acho que n kskkas) mas gostaria de falar q aprendi a fazer
      o .inerHTML, achei muito foda de usar ta? top d+ usarei mais vezes

  Se vc leu até aqui obrigado e n se mate ao ver o codigo, boa sorte ai ksjaksk
*/
 
const displayChutes = document.getElementById("chute");
const displayNumDados = document.getElementById("numDeDados");
const displayDados = document.getElementById("dados");
const displayResultado = document.getElementById("containerResultado");
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
    let distanciaParaDescer = 6 + (linhas * 10); 
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
        displayResultado.innerHTML = ""
        if(resultadoTotal == chute) displayResultado.innerHTML += `<div class="resultado" id="acertou">ACERTOU</div>`;
        else displayResultado.innerHTML += `<div class="resultado" id="errou">ERROU</div>`;
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