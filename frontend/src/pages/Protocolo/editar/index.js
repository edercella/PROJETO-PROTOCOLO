import React, { Component } from "react";
import './update.css';
import { Redirect } from "react-router-dom";
import api from '../../../services/services';

class EditarProtocolo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            protocolo: {
                id_protocolo: "",
                nome_aluno: "",
                ra: "",
                tipo_doc: "",
                data_sol: "",
                createAt: "",
                
            },
            redirect: false,
        };
        
    }

    async componentDidMount () {
        const { id } = this.props.match.params;
    
        const response = await api.get(`/protocolo/${id}`);
    
        this.setState({ protocolo: response.data });
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/protocolo" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Inserir Protocolo</legend>
                        <div className="protocolo-update">
                            <label htmlFor="nome_aluno">Nome do Aluno </label>
                            <br />
                            <input
                                type="text"
                                id="nome_aluno"
                                name="nome_aluno"
                                placeholder="nome_aluno"
                                required
                                value={this.state.protocolo.nome_aluno}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="protocolo-update">
                            <label htmlFor="ra">Matrícula </label>
                            <br />
                            <input
                                type="number"
                                id="ra"
                                name="ra"
                                placeholder="ra"
                                min="333"
                                max="666666"
                                required
                                value={this.state.protocolo.ra}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="protocolo-update">
                        <label htmlFor="tipo_doc">Tipo de Requerimento </label>
                            <br />
                            <input
                                type="text"
                                id="tipo_doc"
                                name="tipo_doc"
                                placeholder="Tipo"
                                required
                                value={this.state.protocolo.tipo_doc}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="protocolo-update">
                        <label htmlFor="data_sol">Data de Solicitacao </label>
                            <br />
                            <input
                                type="date"
                                id="data_sol"
                                name="data_sol"
                                placeholder="data_sol"
                                
                                value={this.state.protocolo.data_sol}
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
            protocolo: { ...prevState.protocolo, [name]: value }
        }));
    };

    handleSubmit = event => {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3002/sistema/Protocolo/${id}`, {
            method: "put",
            id: id,
            body: JSON.stringify(this.state.protocolo),
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

export default EditarProtocolo;
