document.addEventListener("DOMContentLoaded", carregarNomes);

function adicionarNome() {
    let nome = document.getElementById("nomeConvidado").value.trim();
    if (nome === "") {
        alert("Por favor, digite seu nome completo.");
        return;
    }

    let lista = document.getElementById("listaConvidados");

    // Criar um novo item da lista
    let novoItem = document.createElement("li");
    novoItem.textContent = nome;

    // Criar botão de remover
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "❌";
    botaoRemover.classList.add("botao-remover");
    botaoRemover.onclick = function () {
        removerNome(novoItem, nome);
    };

    // Adiciona o botão ao item da lista
    novoItem.appendChild(botaoRemover);
    lista.appendChild(novoItem);

    // Salvar no localStorage
    salvarNome(nome);

    // Limpar o campo de entrada
    document.getElementById("nomeConvidado").value = "";
}

function salvarNome(nome) {
    let convidados = JSON.parse(localStorage.getItem("convidados")) || [];
    convidados.push(nome);
    localStorage.setItem("convidados", JSON.stringify(convidados));
}

function carregarNomes() {
    let lista = document.getElementById("listaConvidados");
    lista.innerHTML = ""; // Limpa a lista antes de carregar os nomes
    let convidados = JSON.parse(localStorage.getItem("convidados")) || [];

    convidados.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;

        // Criar botão de remover
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.classList.add("botao-remover");
        botaoRemover.onclick = function () {
            removerNome(item, nome);
        };

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

function removerNome(item, nome) {
    let convidados = JSON.parse(localStorage.getItem("convidados")) || [];
    convidados = convidados.filter(n => n !== nome); // Remove o nome da lista
    localStorage.setItem("convidados", JSON.stringify(convidados));

    item.remove(); // Remove visualmente o item da lista
}
