// Função construtora sempre inicia com letra maiúscula
// Para utilizar o objeto date, é necessario utilizar a palavra new antes da função construtora
// const tresHoras = 60 * 60 * 3 * 1000;
// const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix - Milesimos de segundo
// const data = new Date(2003, 11, 17, 7); //ano, mês, data, hora, minutos,segundos, milesimos de segundo

const data = new Date('2003-12-17 07:05:59.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // em js 0-11
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('dia semana', data.getDay()) // 0 - Domingo, 6 - Sábado
console.log(Date.now());
console.log(data.toString());