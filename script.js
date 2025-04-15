document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada! O formulário do Google Forms está pronto.");
});

function copiarPixPorDiv(botao) {
    const divPai = botao.closest('.pix-opcao');
    const codigoPix = divPai.getAttribute('data-pix');
    navigator.clipboard.writeText(codigoPix).then(() => {
        alert("Código Pix copiado com sucesso!");
    });
}