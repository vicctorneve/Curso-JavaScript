


// diaSemanaTexto = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

// diaSemanaTexto = diaSemanaTexto[diaSemana]

const data = new Date('2003-12-17');
const diaSemana = data.getDay();
const diaSemanaTexto =  getDayText(diaSemana);
0,
function getDayText (diaSemana) {
   let diaSemanaTexto;

   switch (diaSemana) {
   case 0: // caso diaSemana === 0
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
   case 1:
      diaSemanaTexto = 'Segunda';
      return diaSemanaTexto;
   case 2:
      diaSemanaTexto = 'Terça';
      return diaSemanaTexto;
   case 3:
      diaSemanaTexto = 'Quarta';
      return diaSemanaTexto;
   case 4:
      diaSemanaTexto = 'Quinta';
      return diaSemanaTexto;
   case 5:
      diaSemanaTexto = 'Sexta';
      return diaSemanaTexto;
   case 6:
      diaSemanaTexto = 'Sabado';
      return diaSemanaTexto;
   default:
      diaSemanaTexto = 'erro';
   }
}


console.log(diaSemana, diaSemanaTexto);

// switch (diaSemana) {
// case 0: // caso diaSemana === 0
//    diaSemanaTexto = 'Domingo';
//    break; //finaliza o bloco
// case 1:
//    diaSemanaTexto = 'Segunda';
//    break; //finaliza o bloco
// case 2:
//    diaSemanaTexto = 'Terça';
//    break; //finaliza o bloco
// case 3:
//    diaSemanaTexto = 'Quarta';
//    break; //finaliza o bloco
// case 4:
//    diaSemanaTexto = 'Quinta';
//    break; //finaliza o bloco
// case 5:
//    diaSemanaTexto = 'Sexta';
//    break; //finaliza o bloco
// case 6:
//    diaSemanaTexto = 'Sabado';
//    break; //finaliza o bloco
// default:
//    diaSemanaTexto = 'erro';
// }

