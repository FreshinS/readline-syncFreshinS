const readlineSync = require('readline-sync');

const calculateAverageGrade = () => {
    const grades = readlineSync.question('Введите ваши оценки: ');
    let gradesAll = 0;
    let temp = '';
    let count = 0;
    for (let i = 0; i < grades.length; i += 1) {
        if (grades[i] !== ' ') {
            temp += grades[i];
        }
        else {
            gradesAll += parseInt(temp);
            count += 1;
            temp = '';
        }
    }
    gradesAll += parseInt(temp);
    if (temp !== ''){
        count+=1;
    }
    temp = '';
    return gradesAll / count;
}

console.log(`Ваш средний балл: ${calculateAverageGrade()}`);