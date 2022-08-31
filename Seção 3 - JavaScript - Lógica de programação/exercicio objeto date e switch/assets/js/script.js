// const horario = document.querySelector('.container h1');
// const data = new Date();

// function getSemanaText(diaSemana) { // function dia da semana
//    let diaSemanaTexto;
//    switch (diaSemana) {
//       case 0:
//          diaSemanaTexto = 'Domingo';
//          break;
//       case 1:
//          diaSemanaTexto = 'Segunda-feira'
//          break;
//       case 2:
//          diaSemanaTexto = 'Terça-feira';
//          break;
//       case 3:
//          diaSemanaTexto = 'Quarta-feira'
//          break;
//       case 4:
//          diaSemanaTexto = 'Quinta-Feira';
//          break;
//       case 5:
//          diaSemanaTexto = 'Sexta-feira'
//          break;
//       case 6:
//          diaSemanaTexto = 'Sabado'
//          break;
//    }
//    return diaSemanaTexto ;
// }
// function getMonthText(month){ // function mês
//    let monthText = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',  'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

//    switch (month){
//       case 0:
//          monthText = monthText[0];
//          break;
//       case 1:
//          monthText = monthText[1];
//          break;
//       case 2:
//          monthText = monthText[2];
//          break;
//       case 3:
//          monthText = monthText[3];
//          break;
//       case 4:
//          monthText = monthText[4];
//          break;
//       case 5:
//          monthText = monthText[5];
//          break;
//       case 6:
//          monthText = monthText[6];
//          break;
//       case 7:
//          monthText = monthText[7];
//          break;
//       case 8:
//          monthText = monthText[8];
//          break;
//       case 9:
//          monthText = monthText[9];
//          break;
//       case 10:
//          monthText = monthText[10];
//          break;
//       case 11:
//          monthText = monthText[11];
//          break;
//    }
//    return monthText;
// }
// function zeroAEsquerda(num) {
//    return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {

//    const dayWeek = data.getDay();
//    const diaSemana = getSemanaText(dayWeek); // armazena a function semana
//    const month = data.getMonth();
//    const mes =  getMonthText(month); // armazena a function mes
//    const dataDoMes = data.getDate(); //data
//    const year = data.getFullYear(); //ano
//    const hours = data.getHours();  //Horas
//    const minutes = data.getMinutes(); //Minutos
//    return (
//       `${diaSemana}, ${dataDoMes} de ${mes} de ${year} ` +
//       `${zeroAEsquerda(`${hours}`)}:${zeroAEsquerda(`${minutes}`)}`
//    )
// }

// const horarioText = criaData(data)

// horario.innerHTML = horarioText;


let data = new Date()
let texto = document.querySelector("h1")
let opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
texto.innerHTML = data.toLocaleString('pt-BR', opcoes) + "<br>";
