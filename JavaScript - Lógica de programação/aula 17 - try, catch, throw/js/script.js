try  { // tenta executar o bloco de comando
   //caso ocorra algum erro, pula para o bloco  catch que trata o erro, caso contrario ignora o bloco catch
   console.log(naoExiste);
} catch(err) { // variavel err = armazena o erro
   //define o que fazer quando ocorrer um erro.
   console.log('naoExiste não foi definida');
}
console.log('continuando...')


