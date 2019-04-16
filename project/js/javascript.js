'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let answer1 = prompt('Введите обязательную статью расходов в этом месяце');
let answer2 = prompt('Во сколько обойдется?');

let expenses = {
"answer1" : "answer2"
};

let appData = {
    budget: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: "",
    income: [],
    savings: false
};



alert(appData);