import { produtosServicos } from "../services/produto-servicos.js";

export function criaPopupExclusao(id) {
    const produto = document.querySelector(`[data-id="${id}"]`)
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
        <p>Confirma a exclusão deste produto?</p>
        <button class="confirmar">Confirmar</button>
        <button class="cancelar">Cancelar</button>
    `;

    const confirmarBtn = popup.querySelector(".confirmar");
    const cancelarBtn = popup.querySelector(".cancelar");

    confirmarBtn.addEventListener("click", async () => {
        try {
            await produtosServicos.excluiProduto(id);
            const produto = document.querySelector(`[data-id="${id}"]`);
            produto.remove();
            popup.remove();
            window.location.reload();
        } catch (erro) {
            console.log(erro);
        }
    });

    cancelarBtn.addEventListener("click", () => {
        popup.remove();
    });

    produto.appendChild(popup);
}

document.addEventListener("click", (event) => {
    const botaoExcluir = event.target.closest("[data-botao-excluir]");
    if (botaoExcluir) {
        const id = botaoExcluir.closest("[data-id]").dataset.id;
        criaPopupExclusao(id);
    }
});