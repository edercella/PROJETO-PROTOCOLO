import React, { Component } from 'react';
import api from '../../../services/services';
import { Link } from "react-router-dom";

export default class Protocolo extends Component {
    state = {
        protocolo: {
            id_protocolo: "",
            nome_aluno: "",
            ra: "",
            tipo_doc: "",
            data_sol: "",
            createAt: "",
            
        },
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/protocolo/${id}`);
        this.setState({ protocolo: response.data });
    }

    render() {
        const { protocolo } = this.state;

        return (
            <div className="protocolo-info" key={protocolo._id}>
                <p><strong>Número:</strong> {protocolo.id_protocolo} </p>
                <p><strong>Nome:</strong> {protocolo.nome_aluno} </p>
                <p><strong>RA:</strong> {protocolo.ra} </p>
                <p><strong>Tipo do Requerimento:</strong> {protocolo.tipo_doc} </p>
                <p><strong>Data solicitacao:</strong> {protocolo.data_sol} </p>
                <p><strong>Data Registrada:</strong> {protocolo.createAt} </p>
                
                <br />
                <Link to={`/protocolo`}> Voltar </Link> <br/>
               
            </div>
        );
    }
}