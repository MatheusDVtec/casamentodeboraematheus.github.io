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

// Update the countdown every 1 second
const x = setInterval(function() {
    const countDownDate = new Date("September 26, 2025 13:00:00").getTime();
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    // If the countdown is finished, write some text
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);