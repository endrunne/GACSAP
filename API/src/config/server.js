const port = 3000

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('./cors')
const csap = require('../CSAP/index.js')
const server = express()

server.use(bodyParser.urlencoded({ extended:true}))
server.use(bodyParser.json())
server.use(cors)

server.listen(port, _ => console.log(`Servidor no ar na porta ${port}`))

server.get("/api/classrooms/assignGroups", async(req, res) => {
    const csapPromiseResolved = await Promise.resolve(csap());        
    res.json(JSON.stringify(csapPromiseResolved));
})

module.exports = server
