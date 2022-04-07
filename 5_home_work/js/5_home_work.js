'use strict'
// function range (a,b, c=1) {
//     let arr = []
//     for (let elem of arr) {
//         if (elem >=b) break
//         element = a + c 
//         arr.push(elem)
//     }
//     return arr
// }
function range (a,b, c=1) {
    let arr = []
    if (a > b) a = b;
    if (c < 0) c = -c;
    for (let elem = a + c; elem < b; elem+=c) {
        arr.push(elem)
    }
    return arr
}
console.log(range(1, 20, 4));