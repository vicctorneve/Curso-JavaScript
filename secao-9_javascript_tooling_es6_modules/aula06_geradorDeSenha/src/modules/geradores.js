const caracter =  {
   letter: "abcdefghijklmnopqrstuvxwyz",
   symbols: '.,;:?!/*@#$%&()_-=[]{}``~'
};

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generatesLettersUpperCase = () => caracter.letter[rand(0,26)].toUpperCase()

const generatesLetterLowerCase = () => caracter.letter[rand(0,26)]

const generatesNumber = () => rand(0,9);
const generatesSymbols = () => caracter.symbols[rand(0, caracter.symbols.length)];

export default function generatesPassword(qtd, upperCase, lowerCase, numbers, symbols){
   const passwordArray = [];
   qtd = Number(qtd);

   for(let i = 0; i < qtd; i++) {
      if(upperCase){
         passwordArray.push(generatesLettersUpperCase());
      }
      if(lowerCase){
         passwordArray.push(generatesLetterLowerCase());
      }
      if(numbers){
         passwordArray.push(generatesNumber());
      }
      if(symbols){
         passwordArray.push(generatesSymbols());
      }
    }

    return passwordArray.join('').slice(0, qtd)
}


