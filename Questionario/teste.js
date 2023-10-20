// script.js

// Array para armazenar as respostas
const respostas = [];
console.log(respostas)

// Função para capturar a resposta da pergunta e avançar para a próxima página
function capturarResposta(resposta) {
  respostas.push(resposta);
  // Redirecionar para a próxima página (substitua com a lógica de redirecionamento real)
  //window.location.href = "proxima_pergunta.html";
}

// Evento de clique no botão "Próxima Pergunta"
const botaoProximaPergunta = document.getElementById("botao-proxima-pergunta");


botaoProximaPergunta.addEventListener("click", () => {
    const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
    
    if (respostaSelecionada) {
      capturarResposta(respostaSelecionada.value);
      console.log(respostas)
    } else {
      alert("Por favor, selecione uma resposta.");
    }
});

