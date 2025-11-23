const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path')
const homeRouter = require('./src/routers/homeRouter.js')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/views'))

app.use('/', homeRouter)

app.listen(3000, () => {
    console.log(`Servidor online http://${process.env.HOST}:${process.env.PORT}`)
})