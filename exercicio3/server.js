const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) =>{
    
    const parseURL = url.parse(req.url).pathname
    

 /*   if(parseURL.includes('home.html')){
        res.write(fs.readFileSync('./home.html'))
    }
    else{
        res.write(fs.readFileSync('./index.html'))
    }
*/
    try {
        const html = fs.readFileSync('.' + parseURL)
        res.write(html)        
    } catch (error) {
        res.write(fs.readFileSync('./pagina404.html'))    
    }

    //console.log(parseURL.path)
    
    //res.write(html);
    res.end()
}).listen(3000)