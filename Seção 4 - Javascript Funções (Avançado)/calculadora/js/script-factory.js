function criaCalculadora() {
   return{
      display: document.querySelector('.display .calc'),  
      displayResult: document.querySelector('.display .result'),  
      historic: document.querySelector('.historic'),  

      inicia(){
         this.clickButtons();
         this.enter()
      },

      enter(){
         this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13 ){
               this.calculate();
            }
         });
      },

      clickButtons(){
         document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('number')) {
               this.showNumberInDisplay(el.innerText);
            }
            if (el.classList.contains('operation')){
               this.showNumberInDisplay(el.innerText);
            }
            if(el.classList.contains('clear')){
               this.clearDisplay();
            }
            if(el.classList.contains('del')){
               this.deleteOne();
            }
            if(el.classList.contains('igual')){
               this.calculate();
            }
         });
      },

      showNumberInDisplay(valor){
         this.display.innerText += valor;
      },

      clearDisplay(){
         this.display.innerText = '';
         this.historic.innerHTML = '';
         this.displayResult.innerHTML = 0;
      },

      deleteOne(){
         this.display.innerText = this.display.innerText.slice(0, -1);
      },

      criaP(){
         const p = document.createElement('p')
         return p
      },

      addInHistoric(lastAccount){
         const p = this.criaP();
         p.append(lastAccount);
         this.historic.appendChild(p)
      },

      calculate(){
         let conta = this.display.innerHTML;

         try {
            conta = eval(conta);

            if(!conta) return;
            this.addInHistoric(`${this.display.innerHTML} = ${conta}`);
            this.displayResult.innerHTML = `= ${conta}`;
            this.display.innerHTML = '';
         } catch(e){
            this.display.innerHTML = ''
            return;
         }
      }
   }
}
const calculadora = criaCalculadora();
calculadora.inicia();