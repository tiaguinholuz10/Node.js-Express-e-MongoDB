const express = require('express')

const application = express()

application.use(express.static('public'))

application.get('/home.html', function(req, res){
    res.send('Pagina Home')
})

application.listen(3000, ()=> {
    console.log('Conectado no Servidor\n'+
                'Port: 3000')
})