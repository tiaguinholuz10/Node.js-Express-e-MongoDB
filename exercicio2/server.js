const http = require('http')
const fs = require('fs')

http.createServer((req, res) =>{
    
    res.writeHead( 200, { 'Content-Type': 'text/html' } )

    const html = fs.readFileSync('./index.html')
    

    

    res.write(html);
    res.end()
}).listen(3000)