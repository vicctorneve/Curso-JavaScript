exports.paginaInicial =(req, res)=>{
   res.send(`
   <form action="/" method="POST">
      Nome do cliente: <input type="text" name="nome">
      Sobrenome: <input type="text" name="sobrenome">
      <button>Enviar</button>
   </form>  
`)
}

exports.trataPost = (req, res) =>{
   console.log(req.body)
   res.send(`${req.body.nome} ${req.body.sobrenome}`)
}