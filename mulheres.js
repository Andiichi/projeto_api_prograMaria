const express = require('express') //aqui estou iniciando o express
const router = express.Router() //aqui estou config a primeira parte da rota

const conectaBancoDeDados = require('./bancoDeDados.js') //fazendo a ligação com o arquivo 'bancoDeDados'
conectaBancoDeDados() //chamando a função lá no arquivo 'bancoDeDados' que conecta ao mongoDB online
const Mulher = require('./mulherModel.js')

const app = express()//aqui estou iniciando o app
app.use(express.json())
const porta = 3333 //aqui estou criando a porta


//GET
async function mostraMulheres(request, response) {

    try {
        //aqui estou esperando a conexao para buscar todas as mulheres na lista de 'divas' com mongoose
        const mulheresVindasDoBancoDeDados = await Mulher.find()
        response.json(mulheresVindasDoBancoDeDados)

    } catch(erro) {
        console.log(erro)

    }

}

//POST
async function criaMulher(request, response){
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save() //salvando a nova mulher no banco de dados
        response.status(201).json(mulherCriada)

    }catch(erro){
        console.log(erro)
    }

}

//PATCH
async function corrigeMulher(request, response){
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if(request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }
    
        if(request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }
    
        if(request.body.imagem){
            mulherEncontrada = request.body.imagem
        }

        if(request.body.citacao){
            mulherEncontrada = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)

    }catch(erro){
        console.log(erro)
    }
 
}

//DELETE
async function deletaMulher(request,response){
    try{
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({messagem: 'Mulher deletada com sucesso!'})

    }catch(erro){
        console.log(erro)
    }

}

//PORTA
function mostraPorta(){
    console.log('Servidor criado e rodando na porta', porta)
}


app.use(router.get('/mulheres', mostraMulheres))//config a rota GET / mulheres
app.use(router.post('/mulheres', criaMulher)) //config rota POST / mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher))// config rota PATCH /mulheres
app.use(router.delete('/mulheres/:id', deletaMulher))// config rota DELETE /mulheres
app.listen(porta, mostraPorta)//servidor ouvindo a porta