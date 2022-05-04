"use strict";


let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 0,
        img: "https://picsum.photos/id/345/300"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/988/300"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/300"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 0,
        img: "https://picsum.photos/id/162/300"
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: "https://picsum.photos/id/163/300"
    }
};

let y = 0

let cardsSection = document.querySelector(".cards-section");
for (let x of Object.values(goods)) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.innerText = x.title;

    let img = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", x.img);

    let price = document.createElement("p");
    price.innerText = x.price;

    

    let count = document.createElement("div");
    count.classList.add("card__count-info");
    if (x.count > 0) {
        count.innerHTML =
            `<button class="minus">-</button>
             <span>0</span>
             <button class="plus">+</button>`;
    } else {
        count.innerHTML = "<span>Товара нет в наличии</span>";
    }
    card.append(title, img, price, count);
    cardsSection.append(card);
}
// Задача 1 на обработку событий
// В файле index.js реализован вывод в html информации о товарах (как мы делали на 9м занятии).
// Необходимо добавить обработчики событий кнопкам (-) и (+):
// При каждом нажатии на (+) количество книг должно увеличиваться на 1. Выводимое в html значение не может быть больше значения свойства count);
// При каждом нажатии ни (-) количество книг должно уменьшаться на 1. Выводимое в html значение не может быть меньше 0.

// function countPlus () {
// for (let x of Object.values(goods)) {
    
//     if (y >= 0 && y <= x.count) {
//         let y = 0
//         y = y + 1
//             count.innerHTML =
//             `<button class="minus">-</button>
//              <span>${y}</span>
//              <button class="plus">+</button>`
//     } else remove
// }
// }


function countPlus (count) {
    for (let x of Object.values(goods))
    if (y >= 0 && y <= x.count)
    
    return function() {
    return count++; 
  };
}

let clicPlus = document.getElementsByClassName("plus")
clicPlus.addEventListener("click", countPlus)


// function countMinus () {
//     for (let x of Object.values(goods)) {
//         let y = 0
//             if (y >= 0 || y <= x.count) {
//             count.innerHTML =
//             `<button class="minus">-</button>
//              <span>${y=y+1}</span>
//              <button class="plus">+</button>`
//         } 
//     }
// }
// let clicMinus = document.getElementById("minus")
// clicMinus.addEventListener("click", countMinus)
