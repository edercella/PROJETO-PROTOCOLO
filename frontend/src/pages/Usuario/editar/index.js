import React, { Component } from "react";
import './update.css';
import { Redirect } from "react-router-dom";
import api from '../../../services/services';

class EditarUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: {
                nome: "",
                login: "",
                senha: ""
            },
            redirect: false,
        };
        
    }

    async componentDidMount () {
        const { id } = this.props.match.params;
    
        const response = await api.get(`/usuarios/${id}`);
    
        this.setState({ usuario: response.data });
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
                        <div className="usuario-update">
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
                        <div className="usuario-update">
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
                        <div className="usuario-update">
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
                            Atualizar
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
        const { id } = this.props.match.params;

        fetch(`http://localhost:3002/sistema/usuarios/${id}`, {
            method: "put",
            id: id,
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

export default EditarUsuario;
