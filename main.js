const {upper} = require('./task2')//підтягує файл Ctrl+space - підтягує змінні
const{fib}=require('./task3')
const{minus}= require('./task4')
const{substraction}=require('./task5')
const{func}=require('./task6')



// 1. Реалізувати злиття масиву слів у стрічку. Допустим є написання функцій.
console.log('1. Реалізувати злиття масиву слів у стрічку. Допустим є написання функцій.');

let text = ['I', 'small', 'german', 'in', 'ukraine'];

text = text.join(' ');

console.log(text);

// 2. Написати функцію, яка першу літеру кожного слова речення переведе у верхній регістр
console.log('2. Написати функцію, яка першу літеру кожного слова речення переведе у верхній регістр')
let newText = 'me is small german in ukraine';



console.log(upper(newText));

// 3. Написати функцію, яка порахує перші n числа Фібоначі
console.log('3. Написати функцію, яка порахує перші n числа Фібоначі');



fib(8);

// 4. Написати функцію, яка видалить усі дублі із масиву стрічок
console.log('4. Написати функцію, яка видалить усі дублі із масиву стрічок');

let arr = ['Small', 'Small', 'Small', 'German', 'German', 'Lotock', 'Lotock'];



console.log(minus(arr));

// 5. Написати функцію, яка порахує різницю між датами у днях/тижнях/секундах.
console.log('5. Написати функцію, яка порахує різницю між датами у днях/тижнях/секундах.');

let first = new Date(2020, 11, 12);//month from 0
let second = new Date(2019, 11, 5);


substraction(first, second);

// 6. Написати реалізацію сортування злиттям масиву
console.log('6. Написати реалізацію сортування злиттям масиву');



console.log(func([1, 4, 8, 2, 4, 5, 7, 9, 435, 7, 68, 78, 45, 34, 23,2]));


