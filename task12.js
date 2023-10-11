const readlineSync = require('readline-sync');

const reverseString = (string) => {
    let newStr = '';
    for (let i = string.length - 1; i >= 0; i += -1) {
        newStr += string[i];
    }
    return newStr;
};

const reverseStringWithException = () => {
    const str = readlineSync.question('Введите строку: ');  
    const exception = readlineSync.question('Введите слово-исключение: ');
    let reversedException = reverseString(exception);
    let reversedStr = reverseString(str);
    let newStr = reversedStr.replace(reversedException, exception);
    return newStr;
};  

console.log(`Полученная строка: ${reverseStringWithException()}`);