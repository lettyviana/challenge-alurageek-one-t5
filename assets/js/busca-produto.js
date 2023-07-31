import { produtosServicos } from "./crud/services/produto-servicos.js";

function buscaProdutos() {
    const containerInputPesquisa = document.querySelector("[data-container-pesquisa]")
    const inputPesquisa = document.querySelector("[data-input-pesquisa]");
    const listaResultados = document.querySelector(".lista-de-resultados");
  
    // Função para limpar a lista de resultados
    function limparListaResultados() {
      while (listaResultados.firstChild) {
        listaResultados.removeChild(listaResultados.firstChild);
      }
    }
  
    // Função para criar e adicionar um item de resultado na lista
    function adicionaResultado(produto) {
      const resultadoItem = document.createElement("li");
      const resultadoLink = document.createElement("a");
      resultadoLink.href = `../pages/pagina-produto.html?id=${produto.id}`;
      resultadoLink.textContent = produto.name;
      resultadoItem.appendChild(resultadoLink);
      listaResultados.appendChild(resultadoItem);
    }
  
    // Função para filtrar os produtos de acordo com o valor de pesquisa
    function filtraProdutos() {
      const valorPesquisa = inputPesquisa.value.trim().toLowerCase();
      limparListaResultados();
  
      if (!valorPesquisa) {
        return;
      }
  
      const listaApi = produtosServicos.listaProdutos();
      listaApi
        .then((produtos) => {
          const resultados = produtos.filter((produto) =>
            produto.name.toLowerCase().includes(valorPesquisa)
          );
  
          if (resultados.length > 0) {
            resultados.forEach(adicionaResultado);
          } else {
            const resultadoItem = document.createElement("li");
            resultadoItem.textContent = "Nenhum resultado encontrado";
            listaResultados.appendChild(resultadoItem);
          }
        })
        .catch((erro) => {
          console.error('Erro ao obter a lista de produtos: ', erro);
        });
    }
    
    function atualizaResultados() {
        filtraProdutos();
        if(inputPesquisa.value.trim() === "") {
            listaResultados.classList.remove("exibir-resultados");
        }else{
            listaResultados.classList.add("exibir-resultados");
        }
    }

    // Adicionar evento de clique ao botão de pesquisa
    const botaoPesquisa = document.querySelector('[data-botao-pesquisa]');
    botaoPesquisa.addEventListener("click", () => {
        inputPesquisa.classList.toggle("ativo");
        filtraProdutos();
        listaResultados.classList.add("exibir-resultados");
    });

    // Adicionar evento de escuta ao campo de pesquisa para atualizar os resultados enquanto o usuário digita
    inputPesquisa.addEventListener("input", () => {
        listaResultados.classList.add("exibir-resultados");
        atualizaResultados();
    });

    // Adicionar evento de escuta ao campo de pesquisa para ocultar a lista de resultados quando o campo estiver vazio
    inputPesquisa.addEventListener("change", () => {
        if(inputPesquisa.value.trim() === "") {
            listaResultados.classList.remove("mostrar-resultados");
        }
    })
  }
  
  buscaProdutos();