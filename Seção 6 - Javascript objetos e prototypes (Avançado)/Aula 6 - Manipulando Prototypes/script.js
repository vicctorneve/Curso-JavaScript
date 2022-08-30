// Object.prototype === __proto__
const objA = {
   keyA: 'A'
   // __proto__: Object.prototype
};

const objB = {
   keyB: 'B'
   // __proto__: objA
};
const objC = {
   keyC: 'C'
   // __proto__: objA
};
/* Sintaxe 
   setPrototypeOf(obj, prototype)
*/
Object.setPrototypeOf(objB, objA) //objB --> objA --> __Object.prototype
Object.setPrototypeOf(objC, objB) //objC --> objB --> objA --> __proto__

function Produto(nome, preco){
   this.nome = nome;
   this.preco = preco;
}


Produto.prototype.desconto = function(percentual) {
   this.preco = this.preco - (this.preco * ( percentual / 100 ))
}
Produto.prototype.aumento = function(percentual) {
   this.preco = this.preco + (this.preco * ( percentual / 100 ))
}

const p1 = new Produto('Camiseta', 60);
const p2 = {
   nome: 'Calça',
   preco: 120
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(20)
p1.desconto(10)
console.log(p1)

const p3 = Object.create(Produto.prototype,{
   nome: {
      writable: true,
      configurable: false,
      value: 'celular',
      enumerable: true
   },
   preco:{
      configurable: false,
      enumerable: true,
      value: 1200,
      writable: true
   }
})
console.log(p3)
console.log(p2)