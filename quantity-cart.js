const shoppingCart = [
    { name: 'Shoe', price: 1000, quantity: 1 },
    { name: 'Shirt', price: 500, quantity: 3 },
    { name: 'Pant', price: 500, quantity: 2 },
    { name: 'Belt', price: 100, quantity: 1 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const totalPrice = product.price * product.quantity;
        sum = sum + totalPrice;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense);