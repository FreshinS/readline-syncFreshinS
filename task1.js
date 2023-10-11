const incomeTaxCalculator = (income) => {
    return income * 0.15;
};

const readlineSync = require('readline-sync');
const income = readlineSync.question('Введите ваш Доход: ');

console.log(`Подоходовый налог равен: ${incomeTaxCalculator(income)}`);