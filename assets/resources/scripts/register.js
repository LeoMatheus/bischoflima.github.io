/*VARIÁVEIS*/

let tagEmail = document.getElementById('email');
let tagNome = document.querySelector('#nome_usuario');
let tagSenha1 = document.querySelector('#senha1');
let tagSenha2 = document.querySelector('#senha2');
let tagTelefone = document.querySelector('#phone');
let tagCidade = document.querySelector('#cidade');


let btnSalvar = document.querySelector('#salvar');
let iconeSenha2 = document.getElementById('icone-senha2');

/** OBJETOS */

let bd = new BDUsuario();

/** FUNCOES */

let validaEmail = (valorChar) => {
    'use strict';
    if (!(valorChar > 47 && valorChar < 58) && !(valorChar > 96 && valorChar < 123) &&
        (valorChar !== 46) && (valorChar !== 64) && (valorChar !== 95))
        return true;
};

let validarSenhas = (validaSenha) => {
    'use strict';

    if (validaSenha(tagSenha1.value, tagSenha2.value)) {
        console.log('ira apresentar abaixo do input de senha "as senhas coincidem"');
        iconeSenha2.style.color = '#388e3c';
        tagSenha2.classList.remove('invalid');
        tagSenha2.classList.add('valid');

    } else {

        alert('As senhas não coincidem!!\nOu o valor é inválido.');
        iconeSenha2.style.color = '#ef5350';
        tagSenha2.classList.remove('valid');
        tagSenha2.classList.add('invalid');
    }
};

let focoCidade = (elemento) => {
    'use strict';

    let cidade = prompt('Qual o nome da sua cidade? ');

    btnSalvar.focus();

    let iconeLocalizacao = document.querySelector('.icone-localizacao');

    if (cidade !== '' && cidade !== undefined && cidade !== null) {
        elemento.value = cidade;

        iconeLocalizacao.classList.remove('blue-text');
        iconeLocalizacao.classList.remove('red-text');
        iconeLocalizacao.classList.add('green-text');

        elemento.classList.remove('invalid');
        elemento.classList.add('valid');
    } else {
        elemento.classList.remove('valid');
        elemento.classList.add('invalid');

        iconeLocalizacao.classList.remove('blue-text');
        iconeLocalizacao.classList.remove('green-text');
        iconeLocalizacao.classList.add('red-text');

    }

};

let validarCampos = () => {
    'use strict';

    let isValido = (valor) => {

        if (valor === null) {
            return false;
        }
        if (valor === undefined) {
            return false;
        }
        if (valor === '') {
            return false;
        }

        return true;
    };

    if (!isValido(tagEmail.value)) {
        return false;
    }
    if (!isValido(tagNome.value)) {
        return false;
    }
    if (!isValido(tagSenha2.value) && tagSenha2.value === tagSenha1.value) {
        return false;
    }
    if (!isValido(tagTelefone.value)) {
        return false;
    }
    if (!isValido(tagCidade.value)) {
        return false;
    }

    return true;
};

/** EVENTOS */

window.onload = () => {
    'use strict';

    document.getElementById('login').href = 'login.html';

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

    let confereSenhas = (senha1, senha2) => {
        if (senha1)
            if (senha2)
                if (senha1 === senha2)
                    return true;

        return false;

    };

    validarSenhas(confereSenhas);

};

document.querySelector('#formulario').onsubmit = function (event) {
    'use strict';

    if (validarCampos()) {
        let usuario = new Usuario(tagEmail.value, tagNome.value, tagSenha2.value,
            tagTelefone.value, tagCidade.value);

        let gravacao = bd.gravar(usuario);
            console.log(gravacao);
        if ( gravacao === true) {
            window.location.href = 'login.html';

        }

    } else {
        alert('ESTA FALTANDO ALGUM CAMPO\nOU A SENHA PODE ESTAR ERRADA.');

        event.preventDefault();
    }
    event.preventDefault();
};
