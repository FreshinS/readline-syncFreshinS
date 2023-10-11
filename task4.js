const calculateRectangleProperties = (width, height) => {
    return {
        perimeter: parseInt(width) + parseInt(height),
        area: width * height
    };
};

const readlineSync = require('readline-sync');
const width = readlineSync.question('Введите ширину прямоугольника: ');
const height = readlineSync.question('Введите высоту прямоугольника: ');

console.log(`Периметр прямоугольника равен: ${calculateRectangleProperties(width, height).perimeter}`);
console.log(`Площадь прямоугольника равен: ${calculateRectangleProperties(width, height).area}`);