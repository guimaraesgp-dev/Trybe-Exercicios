let person = {
    firstName: 'Joana',
    lastName: 'Pereira',
    age: 43,
    canDrive: true,
    favoriteNumbers: [3, 4, 6],
};

//Dote notation (noção por ponto)
person.firstName = 'Maria';
person.city = 'São Paulo;'
person.child = {
    firstName: 'Andre',
    lastName: 'Pereira',
    age: 12,
}

//Bracked notation (notação por colchetes)
person['firstName'] = 'Solange';
person['user'] = ['user1', 'user2', 'user3'];

delete person.canDrive;

//console.log('Nome: ' + person['firstName']);

console.log(person);
//console.log(person['child']['age']);
//console.log(person.child.age]);
// console.log('Nome: ' + person.firstName);
// console.log('Idade: ' + person.age);
// console.log('Pode dirigir?: ' + person.canDrive);
// console.log('Números: ' + person.favoriteNumbers[0]);
// console.log('Números: ' + person.favoriteNumbers[1]);