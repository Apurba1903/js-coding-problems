const phones = [
    { name: 'Samsung', camera: 12, storage: '32GB', price: 36000, color: 'Silver' },
    { name: 'Walton', camera: 10, storage: '32GB', price: 22000, color: 'Red' },
    { name: 'IPhone', camera: 10, storage: '32GB', price: 82000, color: 'Black' },
    { name: 'Xiomi', camera: 10, storage: '32GB', price: 14000, color: 'Orange' },
    { name: 'Oppo', camera: 10, storage: '32GB', price: 20000, color: 'Green' },
    { name: 'Nokia', camera: 10, storage: '32GB', price: 44000, color: 'Golden' },
    { name: 'HTC', camera: 10, storage: '32GB', price: 62000, color: 'Matte' }
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);