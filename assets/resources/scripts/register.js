let validaEmail = (valorChar) => {
    'use strict';
    if (!(valorChar > 47 && valorChar < 58) && !(valorChar > 96 && valorChar < 123) &&
        (valorChar !== 46) && (valorChar !== 64) && (valorChar !== 95))
        return true;
};

document.querySelector('#email').onkeypress = function validaCaracter(event) {
    'use strict';
    if (validaEmail(event.charCode)) {
        event.preventDefault();
        console.log('inpedido de digitar');
    }
};

let validacao = function () {
    'use strict';
    return false;
};

