const horario = document.querySelector('.container h1');
const data = new Date();
const dayWeek = data.getDay();
const diaSemana = getSemanaText(dayWeek); // armazena a function
function getSemanaText(diaSemana) { // function dia da semana
   let week;
   
   switch (diaSemana) {
      case 0:
         week = 'Domingo';
         break;
      case 1:
         week = 'Segunda-feira'
         break;
      case 2:
         week = 'Terça-feira';
         break;
      case 3:
         week = 'Quarta-feira'
         break;
      case 4:
         week = 'Quinta-Feira';
         break;
      case 5:
         week = 'Sexta-feira'
         break;
      case 6:
         week = 'Sabado'
         break;
   }
   return week;
}

const datDoMes = data.getDate(); //data

const month = data.getMonth();
const diaDoMes =  getMonthText(month);
function getMonthText(month){ // function mês
   let monthText = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',  'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

   switch (month){
      case 0:
         monthText = monthText[0];
         break;
      case 1:
         monthText = monthText[1];
         break;
      case 2:
         monthText = monthText[2];
         break;
      case 3:
         monthText = monthText[3];
         break;
      case 4:
         monthText = monthText[4];
         break;
      case 5:
         monthText = monthText[5];
         break;
      case 6:
         monthText = monthText[6];
         break;
      case 7:
         monthText = monthText[7];
         break;
      case 8:
         monthText = monthText[8];
         break;
      case 9:
         monthText = monthText[9];
         break;
      case 10:
         monthText = monthText[10];
         break;
      case 11:
         monthText = monthText[11];
         break;
   }
   return monthText;
}

const year = data.getFullYear(); //ano
const hours = data.getHours();  //Horas
const minutes = data.getMinutes(); //Minutos

const horarioText = `${diaSemana}, ${datDoMes} de ${diaDoMes} de ${year} ${hours}:${minutes}`

horario.innerHTML = horarioText;
