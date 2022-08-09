function Calculadora(){
   this.display = document.querySelector('.display .calc');
   this.displayResult = document.querySelector('.display .result');
   this.historic = document.querySelector('.historic');

   this.inicia = () => this.clickButton();

   this.clickButton = () =>{
      document.addEventListener('click', e => {
         const btn = e.target;
         if(btn.classList.contains('number')) this.showElement(btn.innerHTML);

         if(btn.classList.contains('operation')) this.showElement(btn.innerHTML)

         if(btn.classList.contains('clear')) this.clearDisplay()

         if(btn.classList.contains('del')) this.del()

         if(btn.classList.contains('igual')) this.calculate()
      })
   }

   this.showElement = valor =>{
      this.display.innerHTML += valor
      this.displayResult.innerHTML = '';
   };

   this.clearDisplay = () =>{
      this.display.innerHTML = '';
      this.displayResult.innerHTML = 0;
      this.historic.innerHTML = ''
   };

   this.del = () => this.display.innerText = this.display.innerText.slice(0,-1);

   this.createP = () =>{
      const p = document.createElement('p');
      return p
   };

   this.addInHistoric = lastAccount =>{
      const p = this.createP();
      p.append(lastAccount);
      this.historic.appendChild(p)
   };

   this.calculate = () =>{
      try{
         const conta = eval(this.display.innerHTML);
         if(typeof conta !== 'number'){
            return
         }
         this.addInHistoric(`${this.display.innerHTML} = ${conta}`)
         this.display.innerHTML = ''
         this.displayResult.innerHTML = ` = ${conta}`
      }catch {
         this.display.innerHTML = '';
         return;
      };
   };
}

const calculadora = new Calculadora();
calculadora.inicia()
