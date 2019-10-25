import React, { Component } from "react";
import './insert.css';
import { Redirect } from "react-router-dom";

class CriarProtocolo extends Component {
    constructor() {
        super();

        this.state = {
            protocolo: {
                id_protocolo: "",
                nome_aluno: "",
                ra: "",
                tipo_doc: "",
                data_sol: "",
                createAt: ""
            },
            redirect: false,
        };
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
                        <div className="protocolo-insert">
                            <label htmlFor="nome_aluno">Nome </label>
                            <br />
                            <input
                                type="text"
                                id="nome_aluno"
                                name="nome_aluno"
                                placeholder="nome_aluno"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.protocolo.nome_aluno}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="protocolo-insert">
                            <label htmlFor="ra">RA </label>
                            <br />
                            <input
                                type="text"
                                id="ra"
                                name="ra"
                                placeholder="ra"
                                minlength="3"
                                maxlength="6"
                                required
                                value={this.state.protocolo.ra}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="protocolo-insert">
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

                        <div className="protocolo-insert">
                            <label htmlFor="data_sol">Data de Solicitacao </label>
                            <br />
                            <input
                                type="date"
                                id="data_sol"
                                name="data_sol"
                                placeholder="data_sol"
                                required
                                value={this.state.protocolo.data_sol}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="protocolo-insert">
                            <label htmlFor="createAt">Data Registrada </label>
                            <br />
                            <input
                                type="date"
                                id="createAt"
                                name="createAt"
                                placeholder="createAt"
                                required
                                value={this.state.protocolo.createAt}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="protocolo-insert">
                            <label htmlFor="id_protocolo">Protocolo </label>
                            <br />
                            <input
                                type="number"
                                id="id_protocolo"
                                name="id_protocolo"
                                placeholder="id_protocolo"
                                required
                                value={this.state.protocolo.id_protocolo}
                                onChange={this.handleInputChange}
                            />
                        </div>



                        <button type="submit" className="btn btn-primary">
                            Inserir
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
        fetch("http://localhost:3002/sistema/Protocolo", {
            method: "post",
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

export default CriarProtocolo;
