const quadrinho2 = {
    collection: 'Sherlock Holmes',
    title: 'O cão dos Baskevilles'
}

const objetoAutor = {
    author: 'Rich Burlew',
    collection: 'Sherlock Holmes - return'
}

// console.log(DESTINO, ORIGEM)
// console.log(Object.assign(quadrinho2, objetoAutor));

const cloneDequadrinho2 = (Object.assign({}, quadrinho2, objetoAutor));

console.log(quadrinho2);
console.log(cloneDequadrinho2);