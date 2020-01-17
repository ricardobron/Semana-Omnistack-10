const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const http = require('http')
const cors = require('cors')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect("mongodb+srv://omni10:omni10@cluster0-89ka9.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(cors()) //{origin: 'http://localhost:3000'}
app.use(express.json())
app.use(routes)

const PORT = 3333

server.listen(PORT, () => {
    console.log("LIGADO COM SUCESSO NA PORTA 3333")
})