document.querySelector('[data-botao-adicionar]').addEventListener('click', function() {
    // Seleciona o elemento para o fade out
    var body = document.body;
  
    // Define o valor inicial da opacidade
    var opacidade = 1;
  
    // Cria uma função que será chamada repetidamente para animar o fade out
    var animacao = setInterval(function() {
      if (opacidade > 0) {
        // Reduz gradualmente a opacidade
        opacidade -= 0.1;
        body.style.opacity = opacidade;
      } else {
        // Quando a opacidade chegar a 0, interrompe a animação e redireciona para outra página
        clearInterval(animacao);
        window.location.href = "http://127.0.0.1:5500/pages/adicionar-produtos.html";
      }
    }, 300);
  });