document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada! O formulário do Google Forms está pronto.");
});

function copiarPix() {
    const campoPix = document.getElementById("chavePix");
    campoPix.select();
    campoPix.setSelectionRange(0, 99999); // para mobile

    document.execCommand("copy");
    alert("Chave Pix copiada com sucesso!");
}