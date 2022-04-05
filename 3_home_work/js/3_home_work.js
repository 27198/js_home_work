'use strict'
let count = 153;

if (count % 10 === 1) {console.log(count + " товар");
} else if (4 < count%100 && count%100 < 21) {console.log(count + " товаров"); 
} else if (1 < count%10 && count%10 < 5) {console.log(count + " товара");
} else {console.log(count + " товаров")}
