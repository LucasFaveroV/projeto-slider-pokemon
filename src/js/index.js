/*
Objetivo 1 - Quando clicar na seta de avançar, mostrar o próximo cartão da lista.
    - Passo 1 - Pegar elemento HTML da seta de avançar.
    - Passo 2 - Dar um jeito de identificar o clique do usuário na seta avançar.
    - Passo 3 - Fazer aparecer o próximo cartão da lista.
    - Passo 4 - Buscar o cartão selecionado e esconder.


Objetivo 2 - Quando clicar na seta de voltar, temos que mostrar o cartão anterior da lista.
    - Passo 1 - Pegar elemento HTML da seta de voltar.
    - Passo 2 - Dar um jeito de identificar o clique do usuário na seta voltar.
    - Passo 3 - Fazer aparecer o cartão anterior da lista.
    - Passo 4 - Buscar o cartão selecionado e esconder.
*/
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

const cartoes = document.querySelectorAll('.cartao');

let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

}
function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function (){
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);

});

btnVoltar.addEventListener('click', function (){
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});