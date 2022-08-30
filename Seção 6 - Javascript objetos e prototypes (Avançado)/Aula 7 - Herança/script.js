function Produto(nome,preco){
   this.nome = nome;
   this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
   this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
   this.preco -= quantia;
}

function Casaco(nome, preco, estoque = 10){
   Produto.call(this, nome, preco);
   Object.defineProperty(this, 'estoque', {
      enumerable: true,
      configurable: false,
      get:function(){
         return estoque;
      },
      set: function(valor){
         if(typeof valor !== 'number') return;
         estoque = valor;
      }
   })
}

Casaco.prototype = Object.create(Produto.prototype);
Casaco.prototype.constructor = Casaco;

Casaco.prototype.aumento = function(percentual){
   this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca(nome, preco, material, estoque){
   Produto.call(this, nome, preco)
   this.material = material
   Object.defineProperty(this, 'estoque', {
      enumerable: true,
      configurable: false,
      get:function(){
         return estoque;
      },
      set: function(valor){
         if(typeof valor !== 'number') return;
         estoque = valor;
      }
   })
}

Caneca.prototype.desconto = function(percentual){
   this.preco = this.preco - (this.preco * (percentual / 100))
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const casacoCarti = new Casaco('Casaco playboy carti', 120);
const casacoTravis = new Casaco('Casaco Travis scott', 250);
const listCasacos = [];
listCasacos.push(casacoCarti, casacoTravis)
const produto = new Produto('generico', 111);
const caneca = new Caneca('xicara', 10, 'porcelana',5)
console.log(listCasacos);
