// Nenhum campo pode estar vazio
// Usuário só poderá conter letras e/ou números
// Usuário deverá ter entre 3 e 12 caracteres
// Senha precisa ter entre 6 e 12 caracteres

const form = document.querySelector('#form')
const msgError = form.querySelectorAll('.msg-erro')
const inputs = form.querySelectorAll('form input')
const inputName = form.querySelector('#input-name');
const inputLastName = form.querySelector('#input-last-name');
const inputCPF = form.querySelector('#input-cpf');
const inputUsuario = form.querySelector('#input-usuario');
const inputPassword = form.querySelector('#input-password');
const inputConfirmePassword = form.querySelector('#input-confirme-password');
const btnRegister = form.querySelector('#button-registrar')

form.addEventListener('submit', e => e.preventDefault());

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
      this.validaSenha();
   };
   validaUsuario(){
      if(this.usuario.length >= 3 && this.usuario.length <= 12 || !this.usuario.match(/^[a-zA-Z0-9]+$/g)){
         inputUsuario.classList.remove('invalid');
         msgError[3].innerHTML = ''
      } else{
         inputUsuario.classList.add('invalid');
         msgError[3].innerHTML = 'Usuário precisa conter entre 3 a 12 caractere.'
      }
      if(!this.usuario.match(/^[a-zA-Z0-9]+$/g)){
         inputUsuario.classList.add('invalid')
         msgError[3].innerHTML = 'Usuário precisa conter apenas letras e/ou números.'
      }
      return this.usuario.length >= 3 && this.usuario.length <= 12 && !this.usuario.match(/^[a-zA-Z0-9]+$/g);
   };
   
   validaSenha(){
      if(this.password.length >= 6 && this.password.length <= 12){
         inputPassword.classList.remove('invalid');
         msgError[4].innerHTML = ''
      } else{
         msgError[4].innerHTML = 'Senha precisa conter entre 6 a 12 caractere.'
         inputPassword.classList.add('invalid');
      }
      return this.password.length >= 6 && this.password.length <= 12
   };
   
   validConfirmSenha(){
      if(this.confirmPassword === this.password && this.confirmPassword !== ' '){
         inputConfirmePassword.classList.remove('invalid')
         msgError[5].innerHTML = ''
      }else{
         msgError[5].innerHTML = 'campos senha e confirme senha precisam ser iguais.'
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

btnRegister.addEventListener('click', function(){
   for (let input of inputs){
      if(!input.value){
         alert('Preencha todos os campos')
         return
      }
   }
   const formulario = new Valid(inputUsuario, inputPassword, inputConfirmePassword, inputCPF)

   formulario.validConfirmSenha();

   if(formulario.validCPF()){
      inputCPF.classList.remove('invalid')
      msgError[2].innerHTML = ''
   }else{
      msgError[2].innerHTML = 'CPF inválido.'
      inputCPF.classList.add('invalid')
   }

   if(formulario.validaUsuario() && formulario.validaSenha() && formulario.validConfirmSenha() && formulario.validCPF()) 
   alert('Conta Registrada com sucesso')
})
