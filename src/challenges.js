// Desafio 1  CONFERIDO!!

function compareTrue(booleana1, booleana2) {
  if (booleana1 && booleana2) {
    return true;
  }
  return false;
}

// Desafio 2  CONFERIDO!!
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3 CONFERIDO!!
function splitSentence(stringrecebida) {
  let vetor = [];
  let palavra = '';
  for (let item of stringrecebida) {
    if (item === ' ') {
      vetor.push(palavra);
      palavra = '';
    } else {
      palavra += item;
    }
  }
  vetor.push(palavra);
  return vetor;
}

// Desafio 4 CONFERIDO!!
function concatName(vetordeNomes){
  let ultimoNome = vetordeNomes[vetordeNomes.length-1];
  let primeiroNome = vetordeNomes[0];
  return ultimoNome +', '+ primeiroNome;
}

// Desafio 5 CONFERIDO!!
function footballPoints(wins,ties) {
  return wins * 3 + ties;
}

// Desafio 6 CONFERIDO!!
function highestCount(vetor){
  let maior = vetor[0];
  for(let index in vetor){
   if(vetor[index] > maior){
    maior = vetor[index];
    } 
  }
  let contador = 0;
  for(let index in vetor){
    if(vetor[index] === maior){
      contador += 1;
    }
  }
return contador;
}

// Desafio 7  CONFERIDO!!
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);

  if(distanciaGato1 > distanciaGato2){
    return 'cat2';
  }else if(distanciaGato2 > distanciaGato1){
    return 'cat1'
  }else return ('os gatos trombam e o rato foge');
}


// Desafio 8 CONFERIDO!!
function fizzBuzz(vetor) {
  let resul = [];
  for (let index = 0; index < vetor.length; index += 1) {
    if (vetor[index] % 3 === 0 && vetor[index] % 5 === 0) {
      resul.push('fizzBuzz');
    } else if (vetor[index] % 5 === 0) {
      resul.push('buzz');
    } else if (vetor[index] % 3 === 0) {
      resul.push('fizz');
    } else {
      resul.push('bug!');
    }
  }
  return resul;
}



// Desafio 9  CONFERIDO!!

let charr = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};
function encode(palavra) {
  let palavraCodificada = '';
  let letraN = '';
  for (let letra of palavra) {
    letraN = letra;
    for (let cod in charr) {
      if (letra === cod) {
        letraN = charr[cod];
      }
    }
    palavraCodificada += letraN;
  }
  return palavraCodificada;
}
function decode(palavra) {
  let palavraDecodificada = '';
  let letraN = '';
  for (let letra of palavra) {
    letraN = letra;
    for (let cod in charr) {
      if (letra === charr[cod].toString()) {
        letraN = cod;
      }
    }
    palavraDecodificada += letraN;
  }
  return palavraDecodificada;
}
// Desafio 10  CONFERIDO!!
function techList(vetor, nome) {
  if (vetor.length === 0) {
    return 'Vazio!';
  }
  let vetorN = [];
  for (let item of vetor.sort()) {
    let do1 = { tech: item, name: nome };
    vetorN.push(do1);
  }
  return vetorN;
}
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
