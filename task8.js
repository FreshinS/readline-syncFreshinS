const readlineSync = require('readline-sync');

const calculateBalance = () => {
    const income = readlineSync.question('Введите ваши доходы: ');
    const expenses = readlineSync.question('Введите ваши расходы: ');
    let incomeAll = 0;
    let expensesAll = 0;
    let temp = '';
    for (let i = 0; i < income.length; i += 1) {
        if (income[i] !== ' ') {
            temp += income[i];
        }
        else {
            incomeAll += parseInt(temp);
            temp = '';
        }
    }
    incomeAll += parseInt(temp);
    temp = '';
    for (let i = 0; i < expenses.length; i += 1) {
        if (expenses[i] !== ' ') {
            temp += expenses[i];
        }
        else {
            expensesAll += parseInt(temp);
            temp = '';
        }
    }
    expensesAll += parseInt(temp);
    return incomeAll - expensesAll;
};

console.log(`Ваш баланс: ${calculateBalance()}`);