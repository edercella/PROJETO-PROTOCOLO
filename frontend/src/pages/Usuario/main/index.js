import React, { Component } from 'react';
import { Link } from "react-router-dom";
import api from '../../../services/services';

export default class MainUsuario extends Component {
    state = {
        usuario: [],
        erro: null
    }

    async componentDidMount() {

        const response = await api.get(`/usuarios`);
        const { docs } = response.data;
        this.setState({ usuario: docs });

    }

    render() {
        const { usuario } = this.state;
        return usuario.map((usuario, index) => (

            <div key={usuario._id} className="usuario-info">
                <div className="card mb-4">
                    <h5 className="card-header">{usuario.nome}</h5>
                    <div className="card-body">
                        <div className="media">
                            <div className="media-body">
                                <p>{usuario.login}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <Link
                                to={`/usuarios/detalhesUsuario/${usuario._id}`}
                                className="btn btn-success mr-3"
                                role="button"
                            >
                                Detalhes
              </Link>
                            <Link
                                to={`/usuarios/deletarUsuario/${usuario._id}`}
                                className="btn btn-danger mr-3"
                                role="button"
                            >
                                Remover
              </Link>
                            <Link
                                to={`/usuarios/editarUsuario/${usuario._id}`}
                                className="btn btn-primary"
                                role="button"
                            >
                                Editar
              </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))
    };
}