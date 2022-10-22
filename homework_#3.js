// 1
// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for of найдите произведение элементов этого массива.
// Сделайте то же самое с помощью обычного цикла for
let result = 1;

for (num of nums) {
    result *= num;
}
console.log(result);

let result2 = 1;
for (let i = 0; i < nums.length; i++){
    result2 *= nums[i];
}

// 2
// // Для каждого элемента массива вывести строку типа: Riga is in Latvia
// // Использовать цикл for in
const countries = {
    UK: 'London',
    USA: 'New-York',
    Estonia: 'Tallinn',
    Finland: 'Helsinki',
    Germany: 'Berlin',
    Italy: 'Rome'
}

for(let i in countries) {
    console.log(countries[i]  + " is in " + i)
}

// // 3
// // Дано число 1000, делите его на 2 до тех пор, пока результат не будет меньше 5
// // Количество итераций (раз сколько делили) выведите в консоль
let val = 1000;

let iteration = 0;

while (val >= 5) { 
    val /= 2;
    console.log(val);
    iteration++;
}
console.log('Iterated ' + iteration + ' times')


// // 4
// // Для диапозона чисел от 0 до 999 в пустой массив нужно добавить строки
// // строка должна состоять из 4 символов одно из которых число диапозона
// // если 5 то строка 0005, если 500 то строка 0500
// // PS если понадобиться длина числа, метод length с числом не работает
// // String(число) конвертирует число в строку

let emptyArr = [];

for(let i = 0; i < 1000; i++){
     emptyArr.push(String(i).padStart(4, 0));   
}
console.log(emptyArr)

for (let i = 0; i < 1000; i++) {
    if(String(i).length === 1) {
        emptyArr.push('000' + i)
    } else if(String(i).length === 2) {
        emptyArr.push('00' + i)
} else if(String(i).length === 3) {
    emptyArr.push('0' + i);
}
}
console.log(emptyArr)

// // 5
// // Для задоного массива выводить в консоль число если оно чётное
// // Как только цикл дойдёт до 23 разорвать цикл
    const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];


    for (num of numbers) {
    if(num === 23) {
        break
    }
    if (num % 2 === 0) {
        console.log(num);
    }
}


// // 6
// // Для заданного массива написать цикл который выведет в консоль
// // Код html элемента одной строкой
// /*
// <ul>
//         <li><h1>Hello Jack Smith</h1></li>
//         <li><h1>Hello Bob Summers</h1></li>
//         <li><h1>Hello Sarah Gold</h1></li>
//         <li><h1>Hello Susan Vega</h1></li>
//         <li><h1>Hello Mary Roberts</h1></li>
// </ul>
// */
const people = [{name: 'Jack', surname: 'Smith'}, {name: 'Bob', surname: 'Summers'}, {name: 'Sarah', surname: 'Gold'}, {name: 'Susan', surname: 'Vega'}, {name: 'Mary', surname: 'Roberts'}];

for (item of Object.values(people)) {
    console.log(`<li><h1>Hello ${item.name} ${item.surname}</h1></li>`)
}
