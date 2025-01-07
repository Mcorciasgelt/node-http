const { data } = require('./data')

const http = require("node:http")

const server = http.createServer((req, res) => {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.title}</title>
        </head>
        <body>
            <h1>${data.title}</h1>
            <h2>${data.subtitletitle}</h2>
            <p>${data.description}</p>
        </body>
        </html>
        `
    res.end(html)
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Escuchando en el servidor http://localhost:${PORT}/`);
    
})