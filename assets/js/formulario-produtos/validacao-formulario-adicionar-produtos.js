function verificaUrl() {
  const campoUrlImagem = document.querySelector("[data-url]");
  const urlInserida = campoUrlImagem.value;
  
  if(urlInserida === "") {
    printErrorMessage(campoUrlImagem, "Digite ou cole um URL.");
  }else{
    const formField = campoUrlImagem.parentElement;
    formField.className = "formulario__caixa foco";
  }
  campoUrlImagem.addEventListener('blur', () => verificaUrl());
}

function verificaCategoria() {
  const campoCategoria = document.querySelector("[data-categoria]");
  const categoriaInserida = campoCategoria.value;
  
  if(categoriaInserida === "") {
    printErrorMessage(campoCategoria, "Informe uma categoria.");
  }else{
    const formField = campoCategoria.parentElement;
    formField.className = "formulario__caixa foco";
  }
  campoCategoria.addEventListener('blur', () => verificaCategoria());
}

function verificaNomeDoProduto() {
  const campoNomeDoProduto = document.querySelector("[data-nome]");
  const nomeInserido = campoNomeDoProduto.value;
  
  if(nomeInserido === "") {
    printErrorMessage(campoNomeDoProduto, "Informe um nome para o produto.");
  }else{
    const formField = campoNomeDoProduto.parentElement;
    formField.className = "formulario__caixa foco";
  }
  campoNomeDoProduto.addEventListener('blur', () => verificaNomeDoProduto());
}

function verificaPrecoDoProduto() {
  const campoPreco = document.querySelector("[data-preco]");
  const precoInserido = campoPreco.value;
  
  if(precoInserido === "") {
    printErrorMessage(campoPreco, "Informe um preço para o produto.");
  }else{
    const formField = campoPreco.parentElement;
    formField.className = "formulario__caixa foco";
  }
  campoPreco.addEventListener('blur', () => verificaPrecoDoProduto());
}

function verificaDescricao() {
  const campoDescricao = document.querySelector("[data-descricao]");
  const descricaoInserida = campoDescricao.value;
  
  if(descricaoInserida === "") {
    printErrorMessage(campoDescricao, "Insira uma descrição.");
  }else{
    const formField = campoDescricao.parentElement;
    formField.className = "formulario__caixa foco";
  }
  campoDescricao.addEventListener('blur', () => verificaDescricao());
}

function printErrorMessage(field, message) {
  const formField = field.parentElement;
  const errorMessage = formField.querySelector("span");
  errorMessage.innerText = message;
  formField.className = "formulario__caixa foco erro";
}

const formulario = document.querySelector("[data-formulario-adicionar-produtos]");
export default function validaForm() {
    verificaUrl();
    verificaCategoria();
    verificaNomeDoProduto();
    verificaPrecoDoProduto();
    verificaDescricao();

    const formularioAdicionarProdutos = formulario.querySelectorAll(".formulario__caixa");
    const formularioValido = [...formularioAdicionarProdutos].every((field) => {
        return field.className === "formulario__caixa foco";
    });
    return formularioValido;
}

// quando o campo está em foco ou preenchido
const fields = document.querySelectorAll('[data-url], [data-alt], [data-categoria], [data-nome], [data-preco], [data-quantidade], [data-descricao]');
fields.forEach((field) => {
    field.addEventListener('focus', () => {
        field.parentNode.classList.add('foco');
    });

    field.addEventListener('blur', () => {
      if (!field.value) {
        field.parentNode.classList.remove('foco');
      }
    });
});