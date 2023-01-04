const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PATCH   DELETE

app.get('/', (req, res) => {
   res.send(`
      <form action="/" method="POST">
         Nome do cliente: <input type="text" name="nome">
         <button>Enviar</button>
      </form>  
   `)
});

app.post('/',  (req,res) =>{
   res.send('Recebi o formulario')
})

app.get('/contato', (req, res) => {
   res.send('Contatos')
});

app.listen(3000, ()=>{
   console.log('Acessar http://localhost:3000')
   console.log('Servidor executando na porta  3000')
})