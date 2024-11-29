// const amigos = (a, b) => {
//     let ValueA = 0;
//     let ValueB = 0;
//     for (let i = 1; i < a; i++) {
//         if (a % i === 0)  ValueA += i;
        
//     }
//     for (let i = 1; i < b; i++) {
//         if (b % i === 0)  ValueB += i;
        
//     }
//     if (ValueA === b && ValueB === a) {
//         return true;
//     } else {
//         return false;
//     }
    
// }

// let a = 220;
// let b = 284;
// let sonamigos = amigos(a, b);
// console.log(sonamigos);


const amigos = (a, b) => {
    let ValueA = 0;
    let ValueB = 0;
    for (let i = 1; i < a; i++) {
        if (a % i === 0)  ValueA += i;
        
    }
    for (let i = 1; i < b; i++) {
        if (b % i === 0)  ValueB += i;
        
    }
    if (ValueA === b && ValueB === a) {
        return true;
    } else {
        return false;
    }
    
}

let a = 6;
let b = 28;
let sonamigos = amigos(a, b);
console.log(sonamigos);

