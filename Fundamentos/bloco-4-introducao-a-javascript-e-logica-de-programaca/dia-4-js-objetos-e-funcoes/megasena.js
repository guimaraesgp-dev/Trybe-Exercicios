//Realizando o jogo
let jogoAelida = [5, 25, 58, 35, 10, 28];
let jogoRods = [13, 15, 48, 25, 11, 18];
let jogoEllen = [15, 5, 28, 25, 10, 38];

//Jogo Loteria

function randomNumbers() {
  return Math.floor(Math.random() * 60) + 1;
}

function generateNumbers() {
  let sorteioLoteria = [];

  for (let index = 0; index < 6; index += 1) {
    sorteioLoteria.push(randomNumbers());
  }
  return sorteioLoteria;
}

// Comparando os jogos
let lotteryNumbers = generateNumbers();

function megaSenaChecker(sorteioLoteria, game) {
  let acertos = 0;
  for(let index = 0; index < sorteioLoteria.length; index += 1){
    for (let index2 = 0; index2 < game.length; index2 += 1){
      if (game[index2] === sorteioLoteria[index]) {
        acertos += 1;
      }
    }
  }
  return acertos;
}

console.log('Jogo Aélida: ' + jogoAelida);
console.log('Sorteio Loteria: ' + lotteryNumbers);
console.log('Acertos: ' + megaSenaChecker(lotteryNumbers, jogoAelida));
console.log('-----------');
console.log('Jogo Rods: ' + jogoRods);
console.log('Sorteio Loteria: ' + lotteryNumbers);
console.log('Acertos: ' + megaSenaChecker(lotteryNumbers, jogoRods));
console.log('-----------');
console.log('Jogo Ellen: ' + jogoEllen);
console.log('Sorteio Loteria: ' + lotteryNumbers);
console.log('Acertos: ' + megaSenaChecker(lotteryNumbers, jogoEllen));