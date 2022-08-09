// funções construtoras -> constroi objetos
// funções fabrica -> fabrica objetos
// Na função construtora é necessario usar new sempre que for criar 

function Pessoa (nome,sobrenome){
   this.nome = nome;
   this.sobrenome = sobrenome;

   this.metodo = () => {
      console.log(this.nome + ': sou um metodo')
   }
}

const p1 = new Pessoa('vicctor', 'neves')
const p2 = new Pessoa('joao', 'neves')
p1.metodo()