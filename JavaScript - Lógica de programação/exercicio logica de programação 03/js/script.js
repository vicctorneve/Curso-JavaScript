let x = Math.round(Math.random() * (100 - 0) - 0);
function div(x){
   // verification if ${X} is a number
   if (typeof x !== 'number') return `${x} NaN`;
   // Conditions
   if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz'
   if (x % 3 === 0 ) return 'Fizz'
   if (x % 5 === 0) return 'Buzz'
   return x
}
console.log(div(x));