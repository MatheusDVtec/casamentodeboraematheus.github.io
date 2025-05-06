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


//Confirmar presença:
const nomeInput = document.getElementById('nome');
const presencaRadios = document.getElementsByName('presenca');
const confirmarBtn = document.getElementById('confirmarBtn');

function validateForm() {
    const nomePreenchido = nomeInput.value.trim() !== '';
    const presencaSelecionada = Array.from(presencaRadios).some(radio => radio.checked);
    confirmarBtn.disabled = !(nomePreenchido && presencaSelecionada);
}

nomeInput.addEventListener('input', validateForm);
presencaRadios.forEach(radio => radio.addEventListener('change', validateForm));

nomeInput.addEventListener('input', toggleButtonState);
presencaRadios.forEach(radio => radio.addEventListener('change', toggleButtonState));

function toggleButtonState() {
    const nomePreenchido = nomeInput.value.trim() !== '';
    const presencaSelecionada = Array.from(presencaRadios).some(radio => radio.checked);
    confirmarBtn.disabled = !(nomePreenchido && presencaSelecionada);
}

function confirmarPresenca() {
    const confirmationIcon = document.getElementById('confirmationIcon');
    const errorIcon = document.getElementById('errorIcon');
    const errorNome = document.getElementById('errorNome');
    confirmationIcon.style.display = 'none';
    errorIcon.style.display = 'none';
    errorNome.style.display = 'none';

    const nome = document.getElementById('nome').value.trim();
    const presenca = document.querySelector('input[name="presenca"]:checked')?.value;
    const telefone = document.getElementById('telefone').value.trim();

    const urlParams = new URLSearchParams();
    urlParams.set('nome', nome);
    urlParams.set('presenca', presenca);
    urlParams.set('telefone', telefone);
    const queryString = urlParams.toString();

    console.log("telefone"    + telefone);

    console.log("Nome: " + nome);
    console.log("Presença: " + presenca);

    const url_begin = "https://docs.google.com/forms/d/e/1FAIpQLSf6Rhl_94NnlYTerb-JejR_J74-_yORj-hUnJvc3RVWm_nkWA/formResponse?usp=pp_url&entry.1651647229=" + urlParams.get('nome');
    const url_telefone = '&entry.1478986517=' + urlParams.get('telefone');
    const url_final = '&entry.1225333361=' + urlParams.get('presenca');


    try {
        fetch(url_begin + url_telefone + url_final, {
            method: 'GET',
        }).then(response => {
                if (response.status !== 200) {
                    console.log("Erro! Status code: " + response.status);
                    errorIcon.style.display = 'block';
                }
                return response.json();
            })
            .then(data => {
                console.log('Resposta do servidor:', data);
                confirmationIcon.style.display = 'block';
            })
            .catch(error => {
                if(error instanceof TypeError) {
                    console.log('Erro:', error);
                    confirmationIcon.style.display = 'block';
                }
                else {
                    errorIcon.style.display = 'block';
                }
            });
    } catch(error) {
        console.error('Erro:', error);
        errorIcon.style.display = 'block';
    }
}

//preencher
const nomesPessoasConvidadas = [
    "Lucas",
    "Leonardo",
    "Fellipe",
    "Marcio",
    "Márcio",

]