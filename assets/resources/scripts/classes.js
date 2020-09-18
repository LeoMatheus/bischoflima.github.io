let factoryUsuario = (email, nome, senha, telefone, cep) => {
    'use strict';

    return {
        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone,
        cep: cep
    };

};


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

    gravar(usuario) {
        'use strict';
        if (confirm('Deseja mesmo salvar os dados? ')) {
            let id = this.getProximoId();
            localStorage.setItem('id_cadastro', id);
            localStorage.setItem(id, JSON.stringify(usuario));
        }
    }

    recuperarTodosRegistros() {
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
