const mongoose = require('mongoose');

//carrego o modelo de dados
const Protocolo = mongoose.model('Func');


module.exports = {
    
    //cria a funcao de tela de insert
    //nela executa a funcao de insert no banco de dados
    //os dados sao passados no corpo da requisicao via post
    async insert (req, res) {
        const protocolos = await Protocolo.create(req.body);
 
        return res.json(protocolos);
    },

    async index (req, res) {
        //body - corpo da requisicao
        //params - id definido na rota e outras info
        //query - parametros get (pego o parametro page que esta no get, posso definir valor default)
        const { page } = req.query;

        //depois posso usar o paginate 
        //limite de 10 pagina e inicia na 1
        const protocolos = await Protocolo.paginate({}, { page, limit: 5 });

        return res.json(protocolos);
    },

    //cria a funcao de tela de detalhes
    async details (req, res) {
        //a requisicao traz os parametros informados, sendo buscado o id (GET)
        const protocolos = await Protocolo.findById(req.params.id);

        return res.json(protocolos);
    },

    //cria a funcao de tela de update
    //nela executa a funcao de update no banco de dados em um registro especifico
    //os dados sao passados no corpo da requisicao via PUT e o id via parametro
    //o new true nos diz para atualizar o registro e guardar o registro atualizado na constante
    async update (req, res) {
        const protocolos = await Protocolo.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(protocolos);
    },

    //cria a funcao de tela de delete
    //nela executa a funcao de delete no banco de dados
    //faço o delete com o DELETE
    //retorna somente a msg de 200 (sucesso)
    async delete (req, res) {
        await Protocolo.findByIdAndRemove(req.params.id);

        return res.send();
    },
};

