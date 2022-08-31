let x = 0;
const verification = x => {
   if (typeof x !== 'number') console.log `NaN`;
}
const div3 = x => {if (x % 3 === 0) console.log('Fizz')}
const div5 = x => {if (x % 5 === 0) console.log('Buzz')}
const div5e3 = x => {if (x % 3 === 0 && x % 5 === 0) console.log
('FizzBuzz')}
const notDiv5e3 = x => {if (x % 3 !== 0 && x % 5 !== 0) console.log(x)}
function execute(){
   verification(x);
   div5e3(x) 
   div3(x);
   div5(x);
   notDiv5e3(x);
}
execute()