import React, { Component } from "react";
import './insert.css';
import { Redirect } from "react-router-dom";

class CriarUsuario extends Component {
    constructor() {
        super();

        this.state = {
            usuario: {
                nome: "",
                login: "",
                senha: ""
            
            },
            redirect: false,
        };
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/usuarios" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Criar Usuário</legend>
                        <div className="usuario-insert">
                            <label htmlFor="nome">Nome </label>
                            <br />
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Nome"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.usuario.nome}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="login">Login </label>
                            <br />
                            <input
                                type="text"
                                id="login"
                                name="login"
                                placeholder="login"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.usuario.login}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="senha">Senha </label>
                            <br />
                            <input
                                type="text"
                                id="senha"
                                name="senha"
                                placeholder="senha"
                                minLength="6"
                                maxLength="100"
                                required
                                value={this.state.usuario.senha}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Cadastrar
                        </button>
                    </fieldset>
                </form>
            );
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            usuario: { ...prevState.usuario, [name]: value }
        }));
    };


    handleSubmit = event => {
        fetch("http://localhost:3001/sistema/usuarios", {
            method: "post",
            body: JSON.stringify(this.state.usuario),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                }
            })


        event.preventDefault();
    };
}

export default CriarUsuario;
