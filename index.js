
function NuClick(num) {
  const display = document.getElementById('display');
  display.value += num; 
}
   const deleta = document.getElementById('btn_delet');
   const input = document.getElementById('display');
   deleta.addEventListener('click', function() {
      if(input.value.trim() === '' ){
        
      }else{
          input.value = input.value.slice(0, -1);
      }
   
 })
    const clear = document.getElementById('clear');
    const inputc = document.getElementById('display');
    clear.addEventListener('click',function(){
        inputc.value = '';
 })

 function Calcular() {
    const inputR = document.getElementById('display');
    const expressao = inputR.value; 

   
    const regex = /^(-?\d+(\.\d+)?)([+\-*\/%])(-?\d+(\.\d+)?)$/;
    const resultado = regex.exec(expressao);

    if (!resultado) {
        inputR.value = 'Erro';
        return;
    }

     const valorAM = parseFloat(resultado[1]);
     let operacao = resultado[3]; // pode ser x
     const valorAt = parseFloat(resultado[4]);
   
      // Corrigir x para *
     if (operacao === 'x') {
          operacao = '*';
   }

    let resultV;

    switch (operacao) {
        case '+':
            resultV = valorAM + valorAt;
            break;
        case '-':
            resultV = valorAM - valorAt;
            break;
        case '*':
            resultV = valorAM * valorAt;
            break;
        case '/':
            resultV = valorAt !== 0 ? valorAM / valorAt : 'Erro';
            break;
        case '%':
            resultV = valorAM % valorAt;
            break;
        default:
            resultV = 'Erro';
    }

    inputR.value = resultV;
}




