document.addEventListener("DOMContentLoaded", carregarNomes);

function adicionarNome() {
    let nome = document.getElementById("nomeConvidado").value.trim();
    if (nome === "") {
        alert("Por favor, digite seu nome completo.");
        return;
    }

    let lista = document.getElementById("listaConvidados");

    let novoItem = document.createElement("li");
    novoItem.textContent = nome;
    lista.appendChild(novoItem);

    salvarNome(nome);

    document.getElementById("nomeConvidado").value = "";
}

function salvarNome(nome) {
    let convidados = JSON.parse(localStorage.getItem("convidados")) || [];
    convidados.push(nome);
    localStorage.setItem("convidados", JSON.stringify(convidados));
}

function carregarNomes() {
    let lista = document.getElementById("listaConvidados");
    let convidados = JSON.parse(localStorage.getItem("convidados")) || [];

    convidados.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}
