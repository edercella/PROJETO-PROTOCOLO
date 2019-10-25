//importa o mongoose
const mongoose = require('mongoose');

//importa o mongoose paginate (paginacao)
const mongoosePaginate = require('mongoose-paginate');

//vamos criar o schema (model) do banco de dados
const UserSchema = new mongoose.Schema({
    //vamos passar qual campo quero salvar no banco de dados
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlength: [3],
        maxlength: 100
    },
    login: {
        type: String,
        required: true,
        minlength: [3],
        maxlength: 100
    },
    senha: {
        type: String,
        required: true,
        minlength: [6],
        maxlength: 100
    },
    ativo: {
        type: Boolean,
        default: true,
        required: true,
    },
    /*array: [],
  ofString: [String],
  ofNumber: [Number],
  ofDates: [Date],
  ofBuffer: [Buffer],
  ofBoolean: [Boolean]*/
    usersArray: {
        type: [String]
    },
    //vai salvar a data e preencher automaticamente
    createAt: {
        type: Date,
        default: Date.now
    },
});

//adiciona o plugin para permitir paginacao
UserSchema.plugin(mongoosePaginate);

//registro o model na nossa aplicacao
mongoose.model('User', UserSchema);