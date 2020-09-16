$('.nav').load('../../../nav.html');
$('.footer').load('../../../footer.html');

function setDataAtual(){
    'use strict';
    let anoAtual = new Date();
    document.getElementById('anoAtual').textContent = anoAtual.getFullYear();
}
