const shoppingCart = [
    { name: 'Shoe', price: 1000 },
    { name: 'Shirt', price: 500 },
    { name: 'Pant', price: 500 },
    { name: 'Belt', price: 100 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense);