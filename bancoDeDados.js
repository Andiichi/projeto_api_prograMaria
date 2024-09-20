const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados(){

    try {
        console.log('Conexão com o banco de dados iniciou...')

        await mongoose.connect(process.env.MONGODB_URL)
    
        console.log('Conexão com o banco de dados feita com sucesso!')

    } catch(erro) {
        console.log('Não foi possível fazer conexão com o banco. Deu o seguinte erro: ' + erro)

    }
}

module.exports = conectaBancoDeDados