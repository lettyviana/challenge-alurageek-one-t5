import { produtosServicos } from "../services/produto-servicos.js";
import validaForm from "../../formulario-produtos/validacao-formulario-adicionar-produtos.js";


async function adicionaProduto() {
    const urlImagem = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nomeProduto = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value.replace(".", ",");
    const descricao = document.querySelector("[data-descricao]").value;
    
    await produtosServicos.criaProduto(categoria, urlImagem, nomeProduto, preco, descricao);
}

const formularioAdicionarProduto = document.querySelector("[data-formulario-adicionar-produtos]");
formularioAdicionarProduto.addEventListener("submit", async evento => {
    evento.preventDefault();
    const formularioValidado = validaForm();
    if(formularioValidado) {
        await adicionaProduto();
        window.location.href="/challenge-alurageek-one-t5/pages/menu-administrador.html";
    }
});