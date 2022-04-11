
let singer = {
    name:'Milton',
    lastName: 'Nascimento',
    nikcname: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro',

    }
};

console.log('O cantos ' + singer.name + ' ' + singer.lastName + ' possui '  + singer.age + ' anos. ');

singer['fullName'] = singer.name + ' ' + singer.lastName;

console.table(singer);

console.log('o cantos ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);