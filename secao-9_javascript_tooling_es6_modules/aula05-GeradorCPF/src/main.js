import geraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function(){
   const gera = new geraCPF();
   const cpfGerado = document.querySelector('.cpf-gerado');
   cpfGerado.innerHTML = gera.geraNewCpf()
})();