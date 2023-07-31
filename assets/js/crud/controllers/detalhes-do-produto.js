import { produtosServicos } from "../services/produto-servicos.js";

async function exibeDetalhesDoProduto() {
    const parametroUrl = new URLSearchParams(window.location.search);
    const id = parametroUrl.get("id");

    if(id) {
        try {
            const produto = await produtosServicos.buscaProdutoPorId(id);

            const containerProduto = document.querySelector("[data-container-produto]");
            containerProduto.innerHTML = `
            <div class="detalhes-do-produto" data-produto-id="${id}">
                <img src="${produto.imageUrl}" alt="${produto.alt}" class="imagem-do-produto"/>
                <div class="container__informacoes-do-produto">
                    <h3 class="informacoes-do-produto__nome">${produto.name}</h3>
                    <p class="informacoes-do-produto__preco">R$ ${produto.price}</p>
                    <p class="informacoes-do-produto__descricao">${produto.description}</p>
                    <span class="informacoes-do-produto__categoria">${produto.category}</span>
            </div>
            `;
        }catch(erro){
            console.error(erro);
        }
    }
}

exibeDetalhesDoProduto();