const readlineSync = require('readline-sync');

const calculateEmployeeBonus = () => {
    const salary = readlineSync.question('Введите вашу зарплату: ');  
    const performanceRating = readlineSync.question('Введите ваш рейтинг: ');
    if (performanceRating > 8) {
        return salary * 0.2;
    } else return salary * 0.1;
};

console.log(`Ваш Бонус: ${calculateEmployeeBonus()}`);