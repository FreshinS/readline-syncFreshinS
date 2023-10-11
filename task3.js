const calculateDiscount = (price, discountPercentage) => {
    return price * (1 - (discountPercentage / 100));
};

const readlineSync = require('readline-sync');
const price = readlineSync.question('Введите цену товара: ');
const discountPercentage = readlineSync.question('Введите процент скидки: ');

console.log(`Итоговая цена равна равна: ${calculateDiscount(price, discountPercentage)}`);