// pedidos de pizza
let pizzas = {
    sabor: "Palmito",
    preco: 33.90,
    bordaCatupiry: true
};

for (let key in pizzas){
    console.log(key);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for(let key in pizzasDoces) {
    console.log(pizzasDoces[key]);
}