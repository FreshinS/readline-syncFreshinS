const readlineSync = require('readline-sync');

const countWords = () => {
    const sentence = readlineSync.question('Введите предложение: ');
    let count = 1;
    if (sentence !== '') {
        for (let i = 1; i < sentence.length; i += 1) {
            if ((sentence[i] === ' ') && (sentence[i - 1] !== ' ')) {
                count += 1;
            } 
        }
    } else return 0;
    return count;
};

console.log(`Кол-во слов в предложении: ${countWords()}`);