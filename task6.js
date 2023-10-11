const calculateTime = (distance, speed) => {
    return {
        hours: Math.round(distance/speed),
        minutes: Math.round(distance%speed) / (speed / 60)
    }
};

const readlineSync = require('readline-sync');
const distance = readlineSync.question('Введите расстояние: ');
const speed = readlineSync.question('Введите скорость: ');

console.log(`Время в пути: ${calculateTime(distance, speed).hours}ч. ${calculateTime(distance, speed).minutes}м.`);