const http = require('http')

const server = http.createServer((req, res) => {

    const url = req.url

    if (url === '/' || url === '/index') {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>INDEX SAYFASINA HOS GELDINIZ</h2>')
    } else if (url === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>HAKKIMDA SAYFASINA HOS GELDINIZ</h2>')
    } else if (url === '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>ILETISIM SAYFASINA HOS GELDINIZ</h2>')
    }



    res.end();

});


const port = 5000;

server.listen(port, () => {
    console.log(`sunucu port ${port} de baslatıldı`)
})