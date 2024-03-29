class Usuario {

    constructor() {
        this.listaUsuarios = [];
        this.email="adm@gmail.com";
        this.senha="12345678";
    }

    cadastraUsuario() {
        if (this.validaSenha() && this.validaUsuario()) {
            let usuario = {
                nome: "",
                idade: "",
                email: "",
                senha: "",
                set nomeUsuario(Nome) {
                    this.nome = Nome;
                },
                set emailUsuario(Email) {
                    this.email = Email;
                },
                set senhaUsuario(Senha) {
                    this.senha = Senha;
                },
                set idadeUsuario(Idade) {
                    this.idade = Idade;
                },
                set senhaUsuario(Senha) {
                    this.senha = Senha;
                }
            };

            usuario.nomeUsuario = document.getElementById('Nome').value;
            usuario.idadeUsuario = document.getElementById('Idade').value;
            usuario.emailUsuario = document.getElementById('Email').value;
            usuario.senhaUsuario = document.getElementById('SenhaVerificar').value;

            alert("Bem vindo "+usuario.nome+" ao sistema");
            return usuario;
        } else {
            return null;
        }
    }

    insereUsuario() {
        let usuario = this.cadastraUsuario();
        if (usuario != null) {
            this.listaUsuarios.push(usuario);
            this.limparCampos();
            for (let usuario of this.listaUsuarios) {//retirar
                console.log(usuario);
            }
            setTimeout(() => { window.location.href = "../Textos/PaginaCaminho.html"; }, 1000);

        }
    }

    validaSenha() {
        var senha1 = document.getElementById('SenhaPrimeira');
        var senha2 = document.getElementById('SenhaVerificar');
        if (senha1.value == senha2.value) {
            return true;
        } else {
            alert("Senhas Diferentes");
            return false;
        }
    }
    validaUsuario() {
        var nome = document.getElementById('Nome');
        var idade = document.getElementById('Idade');
        var email = document.getElementById('Email');
        if (nome.value != "" && idade.value != "" && email.value != "") {
            return true;
        } else {
            alert("Algum dado está vazio");
            return false;
        }
    }

    limparCampos() {
        var nome = document.getElementById('Nome');
        var idade = document.getElementById('Idade');
        var email = document.getElementById('Email');
        var senha = document.getElementById('SenhaVerificar');
        var senha2 = document.getElementById('SenhaPrimeira');

        nome.value = "";
        idade.value = "";
        email.value = "";
        senha.value = "";
        senha2.value = "";
    }

    logarADM(){
        var email = document.getElementById('EmailLogin').value;
        var senha = document.getElementById('SenhaLogin').value;
        if(email==this.email && senha==this.senha){
            alert("Sucesso");
            setTimeout(() => { window.location.href = "../Textos/Logado.html"; }, 2000);
        }else{
            alert("Usuario Invalido");
        }
    }

}
var user = new Usuario();
