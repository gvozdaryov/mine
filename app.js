const express = require('express')
const app = express()
const serv = require('http').Server(app);


app.use(express.static(__dirname + '/client'))

app.get('/',function(req, res) {
    res.sendFile(__dirname + 'client/index.html')
    })


serv.listen(3000)
    console.log(`Server started on port ${3000}`)