const quadrinho1 = {
    collection: 'Tio Patinhas',
    title: 'O tesouro dos dez avatares',
}

quadrinho1.author = 'Don Rosa';
quadrinho1.publishingCompany = 'Editora Abril';


// console.table(quadrinho1):

// OBJECT
// 1 - KEYS
console.log(Object.keys(quadrinho1).includes('author'));
// console.log(typeof Object.keys(quadrinho1));
// console.log(Array.isArray(Object.keys(quadrinho1)));

// 2 - Valeus
// console.log(Object.keys(quadrinho1));
// console.log(Object.keys(quadrinho1).includes('Don Rosa'));

// 3 - Entries
console.log(Object.entries(quadrinho1));