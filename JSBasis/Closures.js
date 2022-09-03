// function outer(){
//     const name = 'Outer';
//     function inner(){
//         console.log('Outer name:',name);
//     }
//     inner();
// }
// outer();

function outer(){
    const name = 'Outer';
    return function inner(){
        console.log('Outer name:',name);
    }
}
const innerFunction = outer();
innerFunction();

// Data privacy

// let counter = 0;
// function time(){
//     counter += 1;
//     console.log('Counter:',counter);
// }
// time();
// time();
// time();
// time();

function createTime(){
    let counter = 0;
    return function time(){
        counter += 1;
        console.log('Counter:',counter);
    }
}
const times = createTime();
times();
times();
times();
times();

// Stateful Function

// function addFive(a){
//     return a + 5;
// }

// function addTen(a){
//     return a + 10;
// }

function createAdd(a){
    return function(b){
        return a+ b;
    }
}
const addFive = createAdd(5)
const addTen = createAdd(10)

console.log('addFive:',addFive(10));
console.log('addTen:',addTen(10));