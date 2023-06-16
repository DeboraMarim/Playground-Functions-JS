// Desafio 11
function generatePhoneNumber(array) {
  let verificador = [0,0,0,0,0,0,0,0,0,0];
  if( array.length != 11 ) {
    return 'Array com tamanho incorreto.'
  }else{
    for(let index = 0; index < 11; index +=1)
      if( array[index] <0 || array[index] > 9 ) 
        return 'não é possível gerar um número de telefone com esses valores';
      }
      for(let index = 0; index < 11; index +=1){
            let ponteiro = array[index];
            verificador[ponteiro]++;
          }
       for(let index = 0; index < 11; index +=1){
        if(verificador[index]>=3)
          return 'não é possível gerar um número de telefone com esses valores';
        }
       let numeroFormatado = ('('+array[0]+array[1]+') '+array[2]+array[3]+array[4]+array[5]+array[6]+'-'+array[7]+array[8]+array[9]+array[10]); 
       return numeroFormatado;

      }

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > (Math.abs(lineB - lineC))) {
    if (lineB < (lineA + lineC) && lineB > (Math.abs(lineA - lineC))) {
      if (lineC < (lineA + lineB) && lineC > (Math.abs(lineA - lineB))) {
        return true;
      }
      return false;
    }
    return false;
  }
  return false;
}


// Desafio 13
function hydrate(entrada) {
  let inf = /\d+/g;
  let vetor = entrada.match(inf);
  let x = 0;

  for (let i = 0; i < vetor.length; i += 1) {
    x += Number(vetor[i]);
  }

  return `${x} copo${x > 1 ? 's' : ''} de água`;
}


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
    