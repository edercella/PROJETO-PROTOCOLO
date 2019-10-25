import React, { Component } from 'react';
import { Link } from "react-router-dom";
import api from '../../../services/services';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            protocolo: [],
            erro: null
        };
    }

    async componentDidMount() {

        const response = await api.get(`/protocolo`);
        const { docs } = response.data;
        this.setState({ protocolo: docs });

    }
    render() {
        const { protocolo } = this.state;
        return protocolo.map((protocolo, index) => (

            <div className="protocolo-info">
                <div key={index} className="card mb-4">
                    <strong>{protocolo.nome_aluno}</strong>
                    <div className="card-body">
                        <div className="media">
                        <h5 className="card-header">{protocolo.ra}</h5>
                        </div>
                        
                        <div className="text-right">
                            <Link
                                to={`/detalhes/${protocolo._id}`}
                                className="btn btn-success mr-3"
                                role="button"
                            >
                                Detalhes
              </Link>
                            <Link
                                to={`/deletar/${protocolo._id}`}
                                className="btn btn-danger mr-3"
                                role="button"
                            >
                                Remover
              </Link>
                            <Link
                                to={`/editar/${protocolo._id}`}
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