const posicao = document.querySelectorAll('section.tutorial > h1');



let posicaoAtualId = '';
window.addEventListener('scroll', () => {
    posicao.forEach(posicao => {
        const rect = posicao.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom < window.innerHeight) {
            posicaoAtualId = posicao.id;
        }
    })
    
    let menuLateral = document.querySelectorAll('aside.menu-lateral > div');
    menuLateral.forEach(selecionado => {
        if (selecionado.getAttribute('href').slice(1) === posicaoAtualId) {
            selecionado.classList.add('highlight');
        }   else {
            selecionado.classList.remove('highlight');
            
        }
    })


})

