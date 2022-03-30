'use strict'

let answ = 87;
if (0 <= answ && answ < 40) {console.log("попробуйте еще раз");
} else if (40 <= answ && answ <= 59) {console.log("удовлетворительно");
} else if (60 <= answ && answ <= 89) {console.log("хорошо");
} 
else (90 <= answ && answ <= 100) (console.log("отлично"));


let summ = 1280;
let code = 6113;
let price
switch (code) {
    case 4653:
        price=summ*0.7;
        break;
    case 5698:
    case 5111:
        price = summ*0.8;
        break;
    case 6922:
    case 6113:
    case 6099:
        price=summ*0.9;
        break;
        default: price = summ;
}
console.log(price)


let fary = parseInt(prompt('количество моющего средства'));
let plate = parseInt(prompt('количество тарелок'));
while (fary > 0 && plate > 0) {
    plate--;
    fary = fary-0.5;
    console.log('осталось тарелок' , plate);
    console.log ('осталось моющего средства' , fary);
}


while (true) {
    function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    }
    let comp = randomInteger(1, 9);
    let num = parseInt(prompt('угадайте число от 1 до 9'));
    if (num < comp) alert ("загаданное число меньше");
    if (num > comp) alert ("загаданное число больше");
    if (num === comp) alert ("Вы угадали");
    if (num === comp) break;
    if (num === 0) break;
}