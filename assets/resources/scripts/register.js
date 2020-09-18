let tagEmail = document.getElementById('email');
let tagNome = document.querySelector('#nome_usuario');
let tagSenha1 = document.querySelector('#senha1');
let tagSenha2 = document.querySelector('#senha2');
let tagTelefone = document.querySelector('#phone');
let cidade = document.querySelector('#cidade');
let btnSalvar = document.querySelector('#salvar');

let bd = new BDUsuario();

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
        console.log('impedido de digitar');
    }
};

tagSenha2.onblur = () => {
    'use strict';
    let validaSenha = (senha1, senha2) => {
        if (senha1)
            if (senha2)
                if (senha1 === senha2)
                    return true;
        return false;
    };

    if (validaSenha(tagSenha1.value, tagSenha2.value)) {
        console.log('ira apresentar abaixo do input de senha "as senhas coincidem"');
    } else {
        alert('As senhas não coincidem!!\nOu o valor é inválido.');
    }

};

let focoCidade = (elemento) => {
    'use strict';

    let cidade = prompt('Qual o nome da sua cidade? ');
    btnSalvar.focus();
    elemento.value = cidade.trim();
    console.log(elemento.value);
};

document.querySelector('#formulario').onsubmit = function (event) {
    'use strict';

    console.log(tagEmail.value, tagNome.value, tagSenha1.value, tagSenha2.value, tagTelefone.value);



    event.preventDefault();
};

