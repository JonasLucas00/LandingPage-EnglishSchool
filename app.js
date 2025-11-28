const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path')
const homeRouter = require('./src/routers/homeRouter.js')
const emailController = require('./src/routers/emailRouter.js')
const PORT = process.env.PORT || 3000; // Railway sets the PORT environment variable

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/views'))
app.use(express.static(path.join(__dirname, './src/public')));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

app.use('/', homeRouter)
app.use('/send-email', emailController)

// app.listen(3000, () => {
//     console.log(`Servidor online http://${process.env.HOST}:${process.env.PORT}`)
// })

app.listen(PORT, () => { //Railway compatibility
    console.log(`Servidor online na porta ${PORT}`);
});