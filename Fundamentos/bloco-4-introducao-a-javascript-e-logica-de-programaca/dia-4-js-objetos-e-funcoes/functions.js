let name = 'Rods';
let name1 = 'Luiz'

function greet(param) {
  console.log('Hey ' + param);
}

greet(name);
greet(name1);

// -------------------
function sum(numero1, numero2) {
  return numero1 + numero2;
}

let result = sum(1, 2);

console.log(result);

// -------------------
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(35, 25));

// -------------------
function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(average(10, 20, 30));

// -------------------
function generateArray() {
  let array = [];

  for (let index = 1; index <= 100; index += 1 ) {
    array.push(index);
  }
  return array;
}

console.log(generateArray());