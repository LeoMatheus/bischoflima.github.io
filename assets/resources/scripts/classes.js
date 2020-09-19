class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }

}
class Usuario extends Pessoa {

    constructor(email, nome, senha, telefone, cep) {
        super(nome);
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.cep = cep;
    }

}

class BDUsuario {
    constructor() {
        'use strict';
        let id = localStorage.getItem('id_cadastro');

        if (id === null) {
            localStorage.setItem('id_cadastro', 0);
        }
    }

    getProximoId() {
        'use strict';
        return parseInt(localStorage.getItem('id_cadastro')) + 1;
    }

    jaExiste(usuario) {
        'use strict';

        let usuarios = this.recuperarTodosRegistros();

        for (let elemento of usuarios) {
            if (elemento.email === usuario.email)
                return true;
        }

        return false;
    }

    gravar(usuario) {
        'use strict';

        let confirmar = confirm('Deseja mesmo salvar os dados? ');

        if (confirmar === true && !this.jaExiste(usuario)) {
            let id = this.getProximoId();
            localStorage.setItem('id_cadastro', id);
            localStorage.setItem(id, JSON.stringify(usuario));
            return true;
        } else {
            alert('O usuário já existe!!');
            return false;
        }

    }

    recuperarTodosRegistros() {
        'use strict';

        let qtdRegistros = parseInt(localStorage.getItem('id_cadastro'));
        let usuarios = [];

        for (let i = 1; i <= qtdRegistros; i++) {
            if (localStorage.getItem(i) === null)
                continue;
            let usuario = JSON.parse(localStorage.getItem(i));
            usuario.id = i;
            usuarios.push(usuario);
        }
        return usuarios;
    }

    removerRegistro(idCadastro = undefined) {
        if (idCadastro) {
            localStorage.removeItem(`${idCadastro}`);
        }
    }

}
