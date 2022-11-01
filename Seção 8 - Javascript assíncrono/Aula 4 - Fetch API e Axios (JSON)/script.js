// fetch('pessoas.json')
//    .then(resp => resp.json())
//    .then(json => carregaDadosInHtml(json))

axios('pessoas.json')
   .then(resposta => carregaDadosHtml(resposta.data))
 
function carregaDadosHtml(json){
   const table = document.querySelector('.table');
   let tr = document.createElement('tr');
   json.forEach(pessoa => {
      const values = Object.values(pessoa)
      tr = document.createElement('tr');
      for (let i = 0; i < 8; i++) {
         if(i === 2){
            const td = document.createElement('td');
            td.innerText = 'R$ ' + values[i]
            tr.appendChild(td);
         }else{
            const td = document.createElement('td');
            td.innerText = values[i]
            tr.appendChild(td);
         }
      }
      table.appendChild(tr);
   });
}