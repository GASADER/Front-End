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