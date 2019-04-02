const http = require('http')
const date = require('./myDateTime')
http.createServer(function ( req, res ) {
 res.writeHead( 200, { 'Content-Type': 'text/plain' } )
 res.end('Primeira API em Node.js!' +' Date atual '+ date.myDateTime())
}).listen(3000)
