let currentDateTime = new Date();
let currentYear = currentDateTime.getFullYear();
let userName = prompt("Введите ваше имя?");
let userYear = prompt("Введите год вашего рождения?");
let userAge = currentYear - userYear;

if (userYear > currentYear) {
    alert(userName + ", Вы ввели неверный год, он больше текущего года");
}
else if (userYear <= 0) {
    alert(userName + ", Вы ввели неверный год, он меньше либо равен нулю");
}
else if (isNaN(userAge)) {
    alert(userName + ", Вы ввели неверный год, попробуйте еще раз");
}
else {
    // Берем остаток от деления 0 для расчета 10-20-30... лет
    // Берем остаток от деления от 5 до 20 для расчета возраста 5-20 лет
    // Берем остаток от деления от 5 до 9 для расчета возраста 25-29 лет
    if (userAge % 10 === 0 || userAge % 100 >= 5 && userAge % 100 <= 20 || userAge % 10 >= 5 && userAge % 10 <= 9) {
        confirm(userName + ", вам " + userAge + " лет?");
    }
    // Берем остаток от деления от 2 до 4 для расчета возраста 2-4 года
    else if (userAge % 10 >= 2 && userAge % 10 <= 4) {
        confirm(userName + ", вам " + userAge + " года?");
    }
    else {
        confirm(userName + ", вам " + userAge + " год?");
    }
}