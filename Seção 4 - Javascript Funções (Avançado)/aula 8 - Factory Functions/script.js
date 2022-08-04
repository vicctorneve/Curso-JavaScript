function criaPessoa (nome, sobrenome, altura, peso) {
   return {
      nome,
      sobrenome,
      get nomeCompleto(){
         return `${this.nome} ${this.sobrenome}`
      },

      //Setter
      set nomeCompleto(valor) {
         valor = valor.split(' ');
         this.nome = valor.shift()
         this.sobrenome = valor.join(' ')
      },

      fala(assunto){
         return `${this.nomeCompleto} está falando sobre ${assunto}`
      },

      altura,
      peso,

      // getter
      get imc(){
         const calcImc = this.peso / (this.altura ** 2)
         return calcImc.toFixed(2);
      }
      // this refere-se ao objeto que esta chamando ele
   };
}

const p1 = criaPessoa('vicctor', 'neves', 1.7, 50);
const p2 = criaPessoa('joao', 'souza', 1.75, 60) ;
const p3 = criaPessoa('pedro', 'lucas', 1.75, 60) ;
console.log(p1.imc);
p2.nomeCompleto = 'vicctor da silva neves';
