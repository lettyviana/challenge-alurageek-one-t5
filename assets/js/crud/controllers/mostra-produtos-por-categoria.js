import { produtosServicos } from "../services/produto-servicos.js";

export default function criaCardProduto(imageUrl, name, price, alt, category, id) {
    const produto = document.createElement("div");
    
    produto.className = "produto";
    produto.innerHTML = `
    <div class="produto">
        <img class="produto__imagem" src="${imageUrl}" alt="${alt}"/>
        <h3 class="produto__nome">${name}</h3>
        <div class="produto__preco">R$ ${price}</div>
        <span class="produto__categoria">${category}</span>
        <a href="../challenge-alurageek-one-t5/pages/pagina-produto.html?categoria=${category}&id=${id}" class="produto__link" data-categoria="${category}" data-id="${id}">Ver produto</a>
    </div>
    `

    // Adiciona o evento de clique ao link "Ver produto"
    const linkVerProduto = produto.querySelector(".produto__link");
    linkVerProduto.addEventListener("click", redirecionaParaPaginaProduto);

    return produto;
}

async function exibeProdutosPorCategoria() {
    const listaApi = await produtosServicos.listaProdutos();

    const produtosPorCategoria = {
        starwars: [],
        consoles: [],
        diversos: [],
    };

    listaApi.forEach((produto) => {
        produtosPorCategoria[produto.category.toLowerCase()].push(produto);
    });

    Object.keys(produtosPorCategoria).forEach((categoria) => {
        const categoriaContainer = document.querySelector(`[data-categoria="${categoria}"]`);
        if (categoriaContainer) {
            produtosPorCategoria[categoria].forEach((produto) => {
                categoriaContainer.appendChild(
                    criaCardProduto(produto.imageUrl, produto.name, produto.price, produto.alt, produto.category, produto.id)
                );
            });
        }
    });
}

exibeProdutosPorCategoria();

function redirecionaParaPaginaProduto(event) {
    event.preventDefault();
  
    // Recupera o ID do produto do atributo "data-id" do link clicado
    const id = event.target.dataset.id;

    // Recupera a categoria do produto do atributo "data-categoria" do link clicado
    const category = event.target.dataset.categoria;
  
    // Redireciona o usuário para a página do produto com o ID específico
    const urlProduto = `../challenge-alurageek-one-t5/pages/pagina-produto.html?categoria=${category}&id=${id}`;
    window.location.href = urlProduto;
}
