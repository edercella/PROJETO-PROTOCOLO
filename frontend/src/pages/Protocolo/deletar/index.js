import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import api from '../../../services/services';

class DeletarProtocolo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            protocolo: {},
            redirect: false
        };
    }

    async componentDidMount() {
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
                <fieldset>
                    <legend>Deletar Protocolo</legend>
                    <div className="protocolo-delete">
                        <label htmlFor="nome">Nome </label>
                        <h5>{this.state.protocolo.nome}</h5>
                        <p>Tem certeza que deseja deletar este registro?</p>

                        <button
                            onClick={this.handleClick}
                        >
                            Remover
                        </button>
                        <br/><br/>
                        <Link to={`/`}>Voltar</Link>
                    </div>
                </fieldset>
            );
        }
    }

    handleClick = event => {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3002/sistema/protocolo/${id}`, {
            method: "delete"
        })
        .then(data => {
            if (data.ok) {
                this.setState({ redirect: true });
            }
        })

        event.preventDefault();
    };
}

export default DeletarProtocolo;
