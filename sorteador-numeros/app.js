let listaDeNumGerados = [];
let numeroLimite = qtdNumGerar;

function sortear() {

    let qtdNumGerar = document.getElementById('quantidade').value;
    let qtdNumGerarDe = document.getElementById('de').value;
    let qtdNumGerarAte = document.getElementById('ate').value;
    let numeroGerado = 0;

    for (let i = 1; i <= qtdNumGerar; i++) {

        do {
            numeroGerado = parseInt(Math.random() * qtdNumGerarAte + 1);
        } while (listaDeNumGerados.includes(numeroGerado));

        listaDeNumGerados.push(numeroGerado);
    }

    limparInputs()
}

function limparInputs() {
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";

    listaDeNumGerados = [];
}