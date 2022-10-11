// Написать программу, которая из массива users
// удалит имена длиной 5 и меньше символов
// Добавит их в массив shortNames
const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
const shortNames = [];

// Решение №1

users.forEach(
    name => {
        if(name.length <= 5) {
            shortNames.push(name);
        }
    }
    )
console.log(shortNames)

// Написать программу которая каждое число
// умножит на 3 и определит чётное оно или нет
// выводит в консоль число и чётное оно или нечётное
// пример: 6 is even
const numbers = [2, 23, 15, 16, 12, 8, 25, 5];

// Решение №2

numbers.forEach(
    num => {
        if(num % 2 === 0) {
        console.log(num * 3, 'четное')
    } else {
        console.log(num * 3, 'нечетное')
    }
}
)

// или с новой константой

const newNumbers = numbers.map(function(val){return val * 3})
console.log(newNumbers);

newNumbers.forEach(
    num => {
        if(num % 2 === 0) {
        console.log(num, 'четное')
    } else {
        console.log(num, 'нечетное')
    }
}
)

// Написать программу которая из данного объекта
// Выведет строку в консоль: 
// Hello Jack Smith. You are 34 years old. Your salary is 1500 eur.
const userProfile = {
    userName: 'Jack',
    userSurname: 'Smith',
    userAge: 34,
    userSalary: 1500
}

// Решение №3

console.log(`Hello ` + userProfile['userName'] + ` ` + userProfile['userSurname'] + `. You are ` + userProfile['userAge'] + ` years old. Your salary is ` + userProfile['userSalary'] + ` eur.` )

// Написать программу которая проверяет чётное число или нет
// Если число чётное то выводит в консоль число умноженое на два
// Если число нечётное то выводит в консоль число умноженое на три
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Решение №4

numbers2.forEach(
    num => {
        if(num % 2 === 0) {
            console.log(num * 2, 'evens x 2')
        } else{
            console.log(num * 3, 'odds x 3')
        }
    }
)

// people это массив элементами которого являются объекты
// написать программу которая проверит возраст каждого человека
// если младше 15 лет выводит is ИМЯ child
// если младше 18 и старше 14 то ИМЯ is teenager
// если 18 и старше то ИМЯ is adult
const people = [{userName: 'Jack', age: 18}, {userName: 'Mary', age: 20}, {userName: 'Bob', age: 12}, {userName: 'Gary', age: 40}, {userName: 'Sarah', age: 17}];

// Решение №5

people.forEach(
    person => { 
    if(person.age < 15){
    console.log(person.userName, 'is child')
    }
} 
)
people.forEach(
    person => { 
    if(person.age < 18 ) if(person.age > 14){
    console.log(person.userName, 'is teenager')
    }
}
)
people.forEach(
    person => { 
    if(person.age >= 18){
     console.log(person.userName, 'is adult')
     }
}
)
