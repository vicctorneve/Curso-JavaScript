const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

const pessoas = [
   {nome: 'João'},
   {nome: 'Maria'},
   {nome: 'Eduardo'},
   {nome: 'Luiz'},
]

const json = JSON.stringify(pessoas, '',3)

async function lerArquivo(caminho){
   const dados = await ler(caminho)
   rederizaDados(dados)
}

function rederizaDados(dados){
   dados = JSON.parse(dados)

   dados.forEach(dado => console.log(dado.nome)
);
}

escreve(caminhoArquivo, json)
lerArquivo(caminhoArquivo)
