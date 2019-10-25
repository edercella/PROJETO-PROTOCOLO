import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainProtocolo from './pages/Protocolo/main';
import DetalhesProtocolo from './pages/Protocolo/detalhes';
import CriarProtocolo from './pages/Protocolo/criar';
import DeletarProtocolo from './pages/Protocolo/deletar';
import EditarProtocolo from './pages/Protocolo/editar';

import MainUsuario from './pages/Usuario/main';
import DetalhesUsuario from './pages/Usuario/detalhes';
import CriarUsuario from './pages/Usuario/criar';
import DeletarUsuario from './pages/Usuario/deletar';
import EditarUsuario from './pages/Usuario/editar';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/Protocolo" component={MainProtocolo} />
            <Route path = "/detalhes/:id" component={DetalhesProtocolo} />
            <Route path = "/criar" component={CriarProtocolo} />
            <Route path = "/editar/:id" component={EditarProtocolo} />
            <Route path = "/deletar/:id" component={DeletarProtocolo} />         
        </Switch>
        <switch>
            <Route exact path = "/usuarios" component={MainUsuario} />
            <Route path = "/usuarios/detalhesUsuario/:id" component={DetalhesUsuario} />
            <Route path = "/usuarios/editarUsuario/:id" component={EditarUsuario} />
            <Route path = "/usuarios/deletarUsuario/:id" component={DeletarUsuario} />
            <Route path = "/usuarios/criarUsuario" component={CriarUsuario} />
        </switch>
    </BrowserRouter>
   
            
    
)

export default Routes;