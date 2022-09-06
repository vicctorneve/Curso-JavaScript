// Nenhum campo pode estar vazio
// Usuário só poderá conter letras e/ou números
// Usuário deverá ter entre 3 e 12 caracteres
// Senha precisa ter entre 6 e 12 caracteres

const form = document.querySelector('#form')
const inputs = form.querySelectorAll('form input')
const inputName = form.querySelector('#input-name');
const inputLastName = form.querySelector('#input-last-name');
const inputCPF = form.querySelector('#input-cpf');
const inputUsuario = form.querySelector('#input-usuario');
const inputPassword = form.querySelector('#input-password');
const inputConfirmePassword = form.querySelector('#input-confirme-password');
const btnRegister = form.querySelector('#button-registrar')

form.addEventListener('submit', function(e){
   e.preventDefault()
})

class Valid{
   constructor(usuario, password, confirmPassword, cpf){
      this.usuario = usuario.value;
      this.password = password.value;
      this.confirmPassword = confirmPassword.value;
      this.cpf = cpf.value;
      Object.defineProperty(this, 'cpfLimpo', {
         configurable: false,
         enumerable: true,
         value: this.cpf.replace(/\D+/g, '')
      })
   };
   validaUsuario(){
      isValidOrInvalid(inputUsuario, 3, 12)
      return this.usuario.length >= 3 && this.usuario.length <= 12
   };
   
   validaSenha(){
      isValidOrInvalid(inputPassword, 6, 12)
      return this.password.length >= 6 && this.password.length <= 12
   };
   
   validConfirmSenha(){
      if(this.confirmPassword === this.password && this.confirmPassword !== ' '){
         inputConfirmePassword.classList.remove('invalid')
      }else{
         inputConfirmePassword.classList.add('invalid')
      }
      return this.confirmPassword === this.password && this.confirmPassword !== ''
   };

   validCPF(){
      if (this.cpfLimpo.length !== 11) return false
      if (this.isSequence()) return false
      const cpfParcial = this.cpfLimpo.slice(0,-2)
      const digit1 = Valid.createDigit(cpfParcial)
      const digit2 = Valid.createDigit(cpfParcial + digit1)
      const newCpf = cpfParcial + digit1 + digit2
      return newCpf === this.cpfLimpo
   };

   static createDigit(cpfParcial){
      const cpfArray = Array.from(cpfParcial);
      let regressive = cpfArray.length + 1;
      const total = cpfArray.reduce((ac, valor)=> {
        return ac += regressive-- * Number(valor)
      },0)
      const digit = 11 - (total % 11)
      return digit > 9 ? String(0) : String(digit);
   };
   
   isSequence(){
      return this.cpfLimpo[0].repeat(11) === this.cpfLimpo
   };

};

function isValidOrInvalid(input, minCarac, maxCarac){
   if(input.value.length >= minCarac && input.value.length <= maxCarac){
      input.classList.remove('invalid');
   }else{
      input.classList.add('invalid');
   }
}

btnRegister.addEventListener('click', function(){
   // for (let input of inputs){
   //    if(input.value === ''){
   //       alert('Preencha todos os campos')
   //       return
   //    }
   // }
   const formulario = new Valid(inputUsuario, inputPassword, inputConfirmePassword, inputCPF)
   if(formulario.validCPF()){
      inputCPF.classList.remove('invalid')
   }else{
      inputCPF.classList.add('invalid')
   }

   if(formulario.validaUsuario() && formulario.validaSenha() && formulario.validConfirmSenha() && formulario.validCPF()) 
   alert('Conta Registrada com sucesso')
})
// 081.917.415-71