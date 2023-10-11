const readlineSync = require('readline-sync');

const generateRandomEquation = () => {
    a = Math.floor((Math.random() * 100) + 1);
    b = Math.floor((Math.random() * 100) + 1);
    c = Math.floor((Math.random() * 100) + 1);
    return `${a}x+${b}=${c}`;
};

console.log(`Случайное уравнение: ${generateRandomEquation()}`);