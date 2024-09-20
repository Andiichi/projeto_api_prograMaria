const mongoose = require('mongoose')

async function conectaBancoDeDados(){

    try {
        console.log('Conexão com o banco de dados iniciou...')

        await mongoose.connect('mongodb+srv://andrezzandasilva:4zUp3GA5JnciDbEU@clustermulheres.kndyp.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMulheres')
    
        console.log('Conexão com o banco de dados feita com sucesso!')

    } catch(erro) {
        console.log('Não foi possível fazer conexão com o banco. Deu o seguinte erro: ' + erro)

    }
}

module.exports = conectaBancoDeDados