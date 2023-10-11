const calculateDistance = (x1, y1, x2, y2) => {
    return  Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
};

const readlineSync = require('readline-sync');
const x1 = readlineSync.question('Введите координату x первой точки: ');
const y1 = readlineSync.question('Введите координату y первой точки: ');
const x2 = readlineSync.question('Введите координату x второй точки: ');
const y2 = readlineSync.question('Введите координату y второй точки: ');

console.log(`Расстояние между точками равно: ${calculateDistance(x1, y1, x2, y2)}`);