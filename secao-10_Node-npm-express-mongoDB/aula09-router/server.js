const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
   res.send(`
      <form action="/" method="POST">
         Nome do cliente: <input type="text" name="nome">
         Sobrenome: <input type="text" name="sobrenome">
         <button>Enviar</button>
      </form>  
   `)
});

app.get('/test/:id_user?/:parametro?', (req, res) =>{
   // req.params = /profiles/3
   // req.query = /profile/?chave=valor1&chave2=valor2
   console.log(req.params)
   console.log(req.query)
   res.send(req.query.nome + ' ' + req.query.sobrenome)
})

app.post('/',  (req,res) =>{
   console.log(req.body)
   res.send(`seu nome é: ${req.body.nome} ${req.body.sobrenome}` )
})

app.listen(3000, ()=>{
   console.log('Acessar http://localhost:3000')
   console.log('Servidor executando na porta  3000')
})