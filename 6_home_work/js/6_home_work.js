'use strict'

// Задача 1 на метод sort()
// Дан массив, необходимо отсортировать его по возрастанию длин вложенных массивов
let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];
function lenn (a, b) {
    if (a.length === b.length) return 0;
    if (a.length > b.length) return 1;
    return -1;
}
numbers.sort(lenn);
console.log(numbers);

// Задача 2 на методы sort() и Math.random()
// Необходимо случайным образом изменить порядок элементов в массиве.

let presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];

function pres (a, b) {
    if (a.length * Math.random(1, 100) === b.length * Math.random(1, 100)) return 0;
    if (a.length * Math.random(1, 100) > b.length * Math.random(1, 100)) return 1;
    return -1;
}
presents.sort(pres);
console.log(presents);


// Задача 4 на метод some()
// Дан массив температур. Необходимо выяснить, поднималась ли температура выше 500, вывести информацию об этом в консоль.

let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];
if (temperatures[0].some(x => x > 500)) console.log("Температура поднималась выше 500 в 1 приборе")
if (temperatures[1].some(x => x > 500)) console.log("Температура поднималась выше 500 во 2 приборе")
if (temperatures[2].some(x => x > 500)) console.log("Температура поднималась выше 500 в 3 приборе")
