// script.js

// Array para armazenar as respostas

const gabarito = ['C','E','A','B','D']
const respostas = JSON.parse(localStorage.getItem('respostas')) || [];
console.log(respostas)
console.log(respostas.length)
console.log(contarAcertos(respostas, gabarito))

// Evento de clique no botão "Próxima Pergunta"
const botaoProximaPergunta = document.getElementById("botao-proxima-pergunta");

//botaoProximaPergunta.addEventListener("click",capturarResposta);
if (botaoProximaPergunta) {
  botaoProximaPergunta.addEventListener("click", function () {
    capturarResposta(respostas);
    localStorage.setItem('respostas', JSON.stringify(respostas));
    window.location.href = `questao${respostas.length+1}.html`;
});
}


function capturarResposta(x){
    const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
    
    if (respostaSelecionada) {
        x.push(respostaSelecionada.value);
        console.log(respostas)
    } else {
        alert("Por favor, selecione uma resposta.");
    }
}


//botão pro final
const botaoFinal = document.getElementById("botao-final")
if (botaoFinal) {
  botaoFinal.addEventListener("click", function () {
    capturarResposta(respostas);
    localStorage.setItem('respostas', JSON.stringify(respostas));
    window.location.href = `final.html`;
  });
}



//esboço de comparador de respostas
function contarAcertos(respostas, gabarito) {
    // if (respostas.length !== gabarito.length) {
    //   throw new Error('Os vetores têm tamanhos diferentes.');
    // }
  
    let acertos = 0;
  
    for (let i = 0; i < respostas.length; i++) {
      if (respostas[i] === gabarito[i]) {
        acertos++;
      }
    }
  
    return acertos;
}


//final 
const finalEra = document.getElementById('finalera');
if (finalEra) {
  console.log('entrou no if final')
  finalEra.textContent = `Você acertou ${contarAcertos(respostas, gabarito)}`;
}
