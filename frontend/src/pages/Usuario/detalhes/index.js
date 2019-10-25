import React, { Component } from 'react';
import api from '../../../services/services';
import { Link } from "react-router-dom";

export default class Usuario extends Component {
    state = {
        usuario: {
            nome: "",
            login: "",
            senha: ""
        },
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/usuarios/${id}`);

        this.setState({ usuario: response.data });
    }

    render() {
        const { usuario } = this.state;


        return (
            <div className="usuario-info">
                <h1> {usuario.nome} </h1>
                <h1> {usuario.login} </h1>
                <h1> {usuario.senha} </h1>
                
                
                <br />
                <Link to={`/usuarios`}> Voltar </Link> <br/>
                <Link to={`/usuarios/editarUsuario/${usuario._id}`}> Editar </Link> <br/>
                <Link to={`/usuarios/deletarUsuario/${usuario._id}`}> Deletar </Link> <br/>
            </div>
        );
    }
}