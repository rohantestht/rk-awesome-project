const http = require('http')
const server = http.createServer((req, res) => {
        console.log('New connection')
        res.end('Hello 1111 Sir')
})
const PORT =  process.env.PORT || 8080
server.listen(PORT, () => console.log('listening'))
