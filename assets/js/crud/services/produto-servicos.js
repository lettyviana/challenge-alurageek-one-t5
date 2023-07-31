// GET
async function listaProdutos() {
    const conexao = await fetch("https://64bbe3437b33a35a4446c7db.mockapi.io/produtos");
    const resposta = await conexao.json();
    return resposta;
}

async function buscaProdutoPorId(id) {
    try {
        const conexao = await fetch(`https://64bbe3437b33a35a4446c7db.mockapi.io/produtos/${id}`);
        const resposta = conexao.json();
        return resposta;
    }catch(erro) {
        throw new Error("Erro ao buscar o produto por ID");
    }
}

async function listaProdutosPorCategoria(categoria) {
    const listaApi = await listaProdutos();
    return listaApi.filter((produto) => produto.category.toLowerCase() === categoria.toLowerCase());
}

// async function buscaProduto(termoDeBusca) {
//     const conexao = await fetch (`https://64bbe3437b33a35a4446c7db.mockapi.io/produtos?q=${termoDeBusca}`);
//     const resposta = conexao.json();
//     return resposta;
// }

// POST
async function criaProduto(categoria, urlImagem, nomeProduto, preco, descricao) {
    const conexao = await fetch("https://64bbe3437b33a35a4446c7db.mockapi.io/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            category: categoria,
            imageUrl: urlImagem,
            name: nomeProduto,
            price: `${preco}`,
            description: descricao
        })
    });
    const resposta = await conexao.json();
    return resposta;
}

//PUT
async function editaProduto(id, produtoAtualizado) {
    try{
        const conexao = await fetch(`https://64bbe3437b33a35a4446c7db.mockapi.io/produtos/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(produtoAtualizado)
        });
        const resposta = await conexao.json();
        return resposta;
    }catch(erro) {
        return console.log(erro);
    }
    
}

// DELETE
async function excluiProduto(id) {
    try {
        const conexao = await fetch(`https://64bbe3437b33a35a4446c7db.mockapi.io/produtos/${id}`, {
            method: "DELETE",
        });
        const resposta = await conexao.json();
        return resposta;
    }catch(erro) {
        return console.log(erro);
    }
}

export const produtosServicos = {
    listaProdutos,
    criaProduto,
    editaProduto,
    excluiProduto,
    buscaProdutoPorId,
    listaProdutosPorCategoria,
    // buscaProduto
}