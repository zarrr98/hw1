const express = require('express')

const app = express()
const routes = require('./api/routes/gis')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded( {extended : false}))
app.use(bodyParser.json())

app.use('/gis' , routes)
app.use((req, res , next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
    
})

app.use((error , req , res , next) => {
    res.status(error.status || 500)
    res.json({
        error :{
            message : error.message
        }
    })
})

module.exports = app