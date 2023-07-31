import { produtosServicos } from "../services/produto-servicos.js";

// Função para criar o card de produto similar
function criaCardProdutoSimilar(imageUrl, name, price, alt, id, category) {
    const produtoSimilar = document.createElement("div");

    produtoSimilar.className = "produto";
    produtoSimilar.innerHTML = `
    <img class="produto__imagem" src="${imageUrl}" alt="${alt}"/>
    <h3 class="produto__nome">${name}</h3>
    <div class="produto__preco">R$ ${price}</div>
    <span class="produto__categoria">${category}</span>
    <a href="../../pages/pagina-produto.html?categoria=${category}&id=${id}" class="produto__link" data-categoria="${category}" data-id="${id}">Ver produto</a>
    `
    return produtoSimilar;
}

// Função para exibir produtos similares
async function exibeProdutosSimilares() {
    const containerProdutosSimilares = document.querySelector("[data-produtos-similares]");
    containerProdutosSimilares.innerHTML = "";

    try {
        const urlParams = new URLSearchParams(window.location.search);
        const categoriaProdutoSelecionado = urlParams.get("categoria");

        if(!categoriaProdutoSelecionado) {
            console.error("Categoria deste produto não encontrada na URL.");
            return;
        }
        
        const produtosSimilares = await produtosServicos.listaProdutosPorCategoria(categoriaProdutoSelecionado);
        const idProdutoSelecionado = urlParams.get("id");

        // Filtrar produtos similares excluindo o produto selecionado
        const produtosFiltrados = produtosSimilares.filter((produto) => produto.id !== idProdutoSelecionado);

        produtosFiltrados.forEach((produto) => {
            containerProdutosSimilares.appendChild(criaCardProdutoSimilar(produto.imageUrl, produto.name, produto.price, produto.alt, produto.id, produto.category));
        });
    }catch(erro) {
        console.log("Erro ao exibir produtos similares: ", erro);
    }
}

exibeProdutosSimilares()