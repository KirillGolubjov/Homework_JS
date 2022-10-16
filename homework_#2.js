'use strict'

// Напишите функцию, которая для каждого имени в массиве
// выведет в консоль строку 
// Hello ИМЯ. Your name is ДЛИНА characters long!
const names = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary']; 

//ОТВЕТ №1

names.forEach(person => console.log(`Hello ${person}. Your name is ${person.length} characters long!`));

// напишите функцию которая примет объект в качестве аргумента
// Функция должна вернуть одну строку
// Your Honda Civic (is popular / is not popular). (It is not / it is) covered by warranty anymore!
// Вывод в скобках (is popular) зависит от свойства popular в объекте (т.е. если False то пишем что не популярная)
// Вывод в скобках (Is covered by warranty) зависит от свойства mileage (т.е. если больше или равно 100000 то нет гарантии)

//ОТВЕТ №2

const myCar = {
    make: 'Honda',
    model: 'Civic',
    popular: true,
    mileage: 100000
}

function carPopularity(car) {
    if (myCar.popular === true) {
        return `is popular`;
    } else
        return `is not popular`;
     
};
function carMileage(car) { 
    if (myCar.mileage < 100000) {
    return `It is covered`;
} else if (myCar.mileage >= 100000)
    return `It is not covered`;
}

const newCarPopularity = carPopularity(myCar.popular);
const newCarMileage = carMileage(myCar.mileage);
console.log(`Your Honda Civic ${newCarPopularity}. ${newCarMileage} by warranty anymore`)

// Напишите функцию которая принимает два числа в качестве аргумента
// Если число отрицательное, то приводит его к положительному (-10 => 10)
// И складывает их

//ОТВЕТ №3
       
        function toPositive(n, s) {
            if (s < 0 && n > 0) {
              return  n * 1 + s * -1
            } else if (s > 0 && n < 0) {
                return s * 1 + n * -1
            } else if (s < 0 && n < 0 ) {
                return s * -1 + n * -1
            } else if (s > 0 && n > 0) {
                return s + n
            }
        }
        console.log(toPositive(5, 5));       
        console.log(toPositive(-5, 5));       
        console.log(toPositive(5, -5));       
        console.log(toPositive(-5, -5));       

 // Напишите функцию, которая складывает только положительные числа
// если одно из чисел отрицательное, то выводит строку (одно из чисел негативное

//ОТВЕТ №4

function toPositive2(n, s) {
    if (s < 0 || n < 0) {
        return `odno iz chisel negativnoe`
    } else (s > 0 && n > 0) 
       return n + s
    
}

console.log(toPositive2(5, 5));
console.log(toPositive2(-5, 5));
console.log(toPositive2(5, -5));