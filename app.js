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

    exibirNumeros();
    let btnReiniciar = document.getElementById('btn-reiniciar');
    btnReiniciar.classList.replace('container__botao-desabilitado', 'container__botao');
    listaDeNumGerados = [];
}

function exibirNumeros() {
    let texto = document.getElementById('resultado');
    texto.innerHTML = 'Números sorteados: ' + listaDeNumGerados.join(', ');
}

function reiniciar() {
    limparInputs();
    limparnumeros();
}

function limparInputs() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function limparnumeros() {
    let texto = document.getElementById('resultado');
    texto.innerHTML = 'Números serão sorteados... insira os valores acima e clique em [Sortear]';
}