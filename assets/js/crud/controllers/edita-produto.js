import { produtosServicos } from "../services/produto-servicos.js";
import validaFormularioEdicao from "../../formulario-produtos/validacao-formulario-editar-produtos.js"

async function editaProduto() {
    const parametroUrl = new URLSearchParams(window.location.search);
    const idProduto = parametroUrl.get("id");

    const urlImagem = document.querySelector("[data-url]").value;
    const altImagem = document.querySelector("[data-alt").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nomeProduto = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value.replace(".", ",");
    const quantidade = document.querySelector("[data-quantidade]").value;
    const descricao = document.querySelector("[data-descricao]").value;
    
    const produtoAtualizado = {
        category: categoria,
        imageUrl: urlImagem,
        alt: altImagem,
        name: nomeProduto,
        price: `${preco}`,
        quantity: quantidade,
        description: descricao
    }

    await produtosServicos.editaProduto(idProduto, produtoAtualizado);
}

const formularioEditarProdutos = document.querySelector("[data-formulario-editar-produtos]");
formularioEditarProdutos.addEventListener("submit", async evento => {
    evento.preventDefault();
    const formularioValidado = validaFormularioEdicao();
    if(formularioValidado) {
        await editaProduto();
        window.location.href="../challenge-alurageek-one-t5/pages/menu-administrador.html";
    }
})