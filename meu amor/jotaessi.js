// Efeito fofo de corações ao passar o mouse
const coracoes = document.querySelectorAll('.coracao');

coracoes.forEach(coracao => {
    coracao.addEventListener('mouseover', () => {
        coracao.style.animation = 'coracaoAnimado 0.5s infinite alternate';
    });

    coracao.addEventListener('mouseout', () => {
        coracao.style.animation = '';
    });
});
