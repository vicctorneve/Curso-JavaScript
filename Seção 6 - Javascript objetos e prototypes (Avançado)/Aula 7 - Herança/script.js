function Produto(nome,preco){
   this.nome = nome;
   this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
   this.preco += quantia;
}

function Casaco(nome, preco, estoque){
   Produto.call(this, nome, preco);
   this.estoque = estoque;
}

Casaco.prototype = Object.create(Produto.prototype);
Casaco.prototype.constructor = Casaco;


Casaco.prototype.aumento = function(percentual){
   this.preco = this.preco + (this.preco * (percentual / 100))
}

const xxx = new Casaco('casaco xxx', 10, 10)
xxx.aumento(100)
console.log(xxx)



