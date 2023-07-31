import { produtosServicos } from "../services/produto-servicos.js"

export default function criaCard(imageUrl, name, price, alt, quantity, category, id) {
    const produto = document.createElement("div");
    
    produto.className = "produto";
    produto.innerHTML = `
    <div class="produto" data-id="${id}">
        <div class="container__imagem">
            <button type="button" class="apagar" data-botao-excluir></button>
            <a href="../pages/editar-produtos.html?id=${id}"><button type="button" class="editar" data-botao-editar></button></a>
            <img class="produto__imagem" src="${imageUrl}" alt="${alt}"/>
        </div>
        <h3 class="produto__nome">${name}</h3>
        <div class="produto__preco">R$ ${price}</div>
        <div class="produto__quantidade">#${quantity}</div>
        <span class="produto__categoria">${category}</span>
    </div>
    `
    return produto;
}

const produtos = document.querySelector("[data-produtos]");
async function listaProduto() {
    const listaApi = await produtosServicos.listaProdutos();
    listaApi.forEach(item => produtos.appendChild(criaCard(item.imageUrl, item.name, item.price, item.alt, item.quantity, item.category, item.id)));
}

listaProduto();