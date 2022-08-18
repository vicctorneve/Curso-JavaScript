function Produto(produto, valor, estoque){
   this.produto = produto;
   this.valor = valor;

   let estoquePrivado = estoque
   Object.defineProperty(this, 'estoque',{
      enumerable: true, //Mostra a chave
      configurable: false, // configuravel
      get: function(){
         return estoquePrivado;
      },
      set: function(valor){
         if (typeof valor !== 'number'){
            throw new TypeError('Value is NAN')
         } 
         estoquePrivado = valor;
      }
   })
}

const produto1 = new Produto('Camisa', 50, 5)
produto1.estoque = 20;
console.log(produto1)

for (let chaves in produto1){
   console.log(chaves,produto1[chaves])
}