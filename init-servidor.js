const http = require('http')
const server = http.createServer((req, res)=> {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Estamos Online')
})
server.listen(3000, 'localhost', () => {
    console.log('Servidor rodando na porta http://localhost:3000q')
})