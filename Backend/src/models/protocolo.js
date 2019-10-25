//importa o mongoose
const mongoose = require('mongoose');

//importa o mongoose paginate (paginacao)
const mongoosePaginate = require('mongoose-paginate');

//vamos criar o schema (model) do banco de dados
const FuncSchema = new mongoose.Schema({
    //vamos passar qual campo quero salvar no banco de dados
    id_protocolo: {
        type: Number,
        required: true,
        min: 11111,
        max: 99999999999999,
        //unique: true
    },
    nome_aluno: {
        type: String,
        required: true,
        uppercase: true,
        minlength: [3],
        maxlength: 100
    },
    ra: {
        type: String,
        required: true,
        minlength: [3],
        maxlength: 6,
        //unique: true
    },
    tipo_doc: {
        type: String,
        required: true
    },
    data_sol: {
        type: Date,
        required: true
    },
    //data_reg: {
       // type: Date,
       // required: true
   // },
    //vai salvar a data e preencher automaticamente
    createAt: {
        type: Date,
        default: Date.now
    },
    /*id_usuario: {
        type: Number,
        required: true,
        min: 1,
        max: 99,
        unique: true
    }*/
});

//adiciona o plugin para permitir paginacao
FuncSchema.plugin(mongoosePaginate);

//registro o model na nossa aplicacao
mongoose.model('Func', FuncSchema);