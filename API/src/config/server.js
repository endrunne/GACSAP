const port = 3000

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('./cors')
const example = require('../example/index.js')
const server = express()

server.use(bodyParser.urlencoded({ extended:true}))
server.use(bodyParser.json())
server.use(cors)

const ExecuteRoutine = 
    example().then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);});

server.listen(port, _ => console.log(`Servidor no ar na porta ${port}`))

module.exports = server
