const http = require('http')
const myName = require('./meuNome')

http.createServer(function ( req, res ) {
    res.writeHead( 200, { 'Content-Type': 'text/html' } )
    res.write('<h1>O seu nome \&#233; ' + myName.myName()+'<h1>')
   }).listen(3000)