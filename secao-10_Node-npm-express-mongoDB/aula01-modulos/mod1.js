const nome = "Vicctor";
const sobrenome = "Neves";

const falaNome = () =>{
   console.log(nome, sobrenome)
}

class Pessoa{
   #nome
   constructor(nome){
      this.#nome = nome;
   }

   setNome(nome){
      return this.#nome = nome;
   }

   getNome(){
      return this.#nome
   }

}

// Maneiras de exportar (Sintaxe CommonJS)

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// this.qualquerCoisa = "o que eu quiser exportar"
 

module.exports = {
   nome, sobrenome, falaNome, Pessoa
}


