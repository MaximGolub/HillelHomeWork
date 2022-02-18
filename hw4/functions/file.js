/*Сделать функция isPalindrom. Эта функция принимает в аргументах строку, проверяет является ли эта строка палиндромом и 
возвращает результат true/false. Пример что что такое палиндром 'level' это строка которая читается одинаково что с одной стороны что с другой.*/

function isPalindrom(userString) {
    let userStringRevers = "";

    for (let i = userString.length - 1; i >= 0; i--) {
        userStringRevers += userString[i].toLowerCase().trim();
    }

    return (userString === userStringRevers) ? true : false;
}

let userString = prompt("Введите строку").toLowerCase().split(' ').join('');

alert(isPalindrom(userString));

/* Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка */

function repeat(userString = "", n = 2) {
    let result = "";

    if (n <= 0) n = 2;

    for (let i = 0; i < n; i++) {
        result += userString + ",";
    }

    return result.substring(0, result.length - 1);
}

alert(repeat("str", 3));

/* Напишите функцию operation(a,b,sumCallback), в которой a и b — числовые переменные, а sumCallback — функция которая принимает 2 числовых 
аргумента summary(x, y). Внутри функции operation аргументы a и b нужно возвести в степень 2 и передать для дальнейшего выполнения 
в sumCallback и возвращать значение которое вернет этот коллбэк.*/

function summary(x, y) {
    return x + y;
}

function operation(a, b, sumCallback) {
    let x = a ** 2;
    let y = b ** 2;

    return sumCallback(x, y);
}

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");

alert(operation(a, b, summary));