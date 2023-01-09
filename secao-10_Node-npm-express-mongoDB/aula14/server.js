require('dotenv').config()

const express = require('express');
const app = express();
const moongose = require('mongoose')

moongose.set("strictQuery", true)

moongose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      app.emit('pronto')
   })
   .catch(err => console.log(err))

const routes = require('./routes')
const path = require('path')
const { middlawareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src' , 'views'))
app.set('view engine', 'ejs')

// Nosso proprios middlawares
app.use(middlawareGlobal) 
app.use(routes) 
app.on('pronto', () => {
   app.listen(3000, ()=> {
      console.log('Acessar http://localhost:3000')
      console.log('Servidor executando na porta  3000')
   });
})