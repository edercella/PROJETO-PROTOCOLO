const express = require('express');
const routes = express.Router();

const protocoloController = require("../controller/protocolo.js");
const usuarioController = require("../controller/usuario.js");

//toda vez q o usuario acessar a rota (rota raiz), tem a funcao que recebe o req e res
//req simboliza a requisicao que esta sendo feita ao servidor 
//req contém os dados dessa requisicao, parametros, corpo, cabecalho, autenticacao, usuario, ip, etc.)
//res - resposta que vai ser dada a requisicao (resposta do servidor)


//insert protocolo
routes.post('/protocolo', protocoloController.insert);
//insert usuario
routes.post('/usuarios', usuarioController.insert);

//quando buscar, pode ser get
//select protocolo
routes.get('/protocolo', protocoloController.index);
//select usuario
routes.get('/usuarios', usuarioController.index);

//details protocolo
routes.get('/protocolo/:id', protocoloController.details);
//details usuario
routes.get('/usuarios/:id', usuarioController.details);

//update protocolo
routes.put('/protocolo/:id', protocoloController.update);
//update usuario
routes.put('/usuarios/:id', usuarioController.update);

//delete protocolo
routes.delete('/protocolo/:id', protocoloController.delete);
//delete usuario
routes.delete('/usuarios/:id', usuarioController.delete);



module.exports = routes;