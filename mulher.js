const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Andrezza Nogueira',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQHpY2C1YuGLTQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719492713021?e=1732147200&v=beta&t=NXIthKm2wYh2lw5Wa92LUzjtzWAITk4vAXs7GjdW4uA',
        minibio: 'Aluna do programaria'
    })
}


function mostraPorta(){
    console.log('Servidor criado e rodando na porta', porta)
}


app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)