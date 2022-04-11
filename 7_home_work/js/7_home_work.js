'use strict'
// Задача 1
// Написать функцию, которая принимает на вход три аргумента:
// obj - объект, например, items,
// from - число,
// to - число.
// Функция формирует и возвращает новый ОБЪЕКТ с объектами, значения свойств price которых лежат в диапазоне от значения from 
// до значения to, не включая to.

function zadacha_1(obj, from, to){
    let arr = []
    for (obj of arr) {
        if (obj.price >= from || obj.price < to)
        arr.push(obj)
    }
    return arr
}


// Написать функцию, которая принимает на вход три аргумента:
// obj - объект, например, items,
// itemTitle - строка, название товара, который хочет приобрести 
// пользователь,
// countToCart - число, количество товара, который хочет приобрести
//  пользователь.
// Функция должна найти товар с указанным в itemTitle названием и:
// если количество позволяет, то уменьшить значение свойства count 
// в переданном объекте на countToCart вернуть true,
// если количество не позволяет, то вывести информацию об этом 
// в консоль и вернуть false.

let item = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};
function zadacha_2 (obj, itemTitle, countToCart){
    let arr = []
    for (obj of arr) {
        if (itemTitle === item.titile) {
            if (countToCart >= count) false 
            if (countToCart < count) true
        }
        arr.push(obj)
    }
    return arr
}


// Задача 3
// Отсортировать массив books по значению свойства 
// title вложенных объектов

    let books = [
    {author: "Толстой", title: "Война и мир"},
    {author: "Пушкин", title: "Пир во время чумы"},
    {author: "Лермонтов", title: "Тамань"},
    {author: "Гончаров", title: "Обломов"},
    {author: "Лермонтов", title: "Герой нашего времени"},
    {author: "Пушкин", title: "Руслан и Людмила"},
    {author: "Лермонтов", title: "И скучно, и грустно"},
];
function SortArray(x, y){
    if (x.title < y.title) {return -1;}
    if (x.title > y.title) {return 1;}
    return 0;
}
let bks = books.sort(SortArray);
console.log(bks);