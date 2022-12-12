const works = require('./works.json');
const allworks = require('./allworks.json');
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 5000

app.get('/', (req, res)=> {
    res.send("Server-Running")
})
app.get('/works', (req, res)=> {
    res.send(works)
})
app.get('/allworks', (req, res)=> {
    res.send(allworks)
})
app.listen(port)
