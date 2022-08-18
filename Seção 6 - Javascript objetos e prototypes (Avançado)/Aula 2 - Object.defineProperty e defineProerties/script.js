function Produto(produto, valor, estoque){
   this.produto = produto;
   this.valor = valor;

   // Object.defineProperty(this, 'estoque',{
   //    enumerable: true, //Mostra a chave
   //    value: estoque, // valor
   //    writable: false, // Pode ser alterado
   //    configurable: false // configuravel
   // })

   Object.defineProperties(this, {
      produto: {
         enumerable: true, //Mostra a chave
         value: produto, // valor
         writable: false, // Pode ser alterado
         configurable: false // configuravel
      },
      valor: {
         enumerable: true, //Mostra a chave
         value: valor, // valor
         writable: false, // Pode ser alterado
         configurable: false // configuravel
      },
      estoque: {
         enumerable: true, //Mostra a chave
         value: estoque, // valor
         writable: false, // Pode ser alterado
         configurable: false // configuravel
      }
   })
}

const produto1 = new Produto('Camisa', 50, 5)
produto1.estoque = 500000;
delete produto1.estoque
console.log(produto1)