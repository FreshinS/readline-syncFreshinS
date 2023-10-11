const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};

const readlineSync = require('readline-sync');
const celsius = readlineSync.question('Введите температуру в цельсиях: ');

console.log(`Температура в фаренгейтах равна: ${celsiusToFahrenheit(celsius)}`);