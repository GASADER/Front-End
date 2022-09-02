const { count } = require("console");

//1.Pure Function
function addPure(a, b) {
  return a + b;
}
console.log('addPure:', addPure(1, 5));
//2.Avoid Side Effect Function
const b = 6;
function addSide(a) {
  return a + b;
}
console.log('addSide:', addSide(1));
//3.First Class Function
//3.1 Assigning a function to a var
const addsign = function(a, b) {
  return a + b;
}
console.log('addsign:', addsign(1, 7));
//3.2 Returning a function
function addReturn(a, b) {
  return function() {
    return a + b;
  }
}
const addTwoNumber = addReturn(1, 8);
console.log('addTwoNumber:', addTwoNumber());
//3.1 Accepting a function
function addNumber(a, b) {
  return a + b;
}
function addAccep(add, a, b) {
  return add(a, b);
}
console.log('addAccep:', addAccep(addNumber, 1, 9));

//4.Higher Order Function
//4.1 Returning a function
//4.2 Accepting a function
const persons = [
  { name: "John", age: 17 },
  { name: "Jane", age: 10 },
  { name: "Jim", age: 15 }
];

// 1.filter

//const kids = [];
//for (let i = 0; i < persons.length; i++) {
//const person = persons[i];
//if (person.age <= 15) {
//kids.push(person);
//  }
//}
const kids = persons.filter(person => person.age <= 15);
console.log('Kids: ', kids);

// 2.map

//const olderPerson = [];

//for (let i = 0; i < persons.length; i++) {
//  const person = persons[i];
//  olderPerson.push({
//    ...person,
//    age: person.age * 2
//  });
//}
const olderPerson = persons.map(person =>
({
  ...person,
  age: person.age * 2
}
));
console.log('olderPerson: ', olderPerson);

// 3.reduce

//let totalAge = 0;
//for (let i = 0; i < persons.length; i++) {
//  const person = persons[i];
//  totalAge += person.age;
//}
//console.log('totalAge: ', totalAge);
const totalAge = persons.reduce((age, parson) => age + parson.age, 0);
console.log('totalAge: ', totalAge);

//4.forEach

//for (let i = 0; i < persons.length; i++) {
//  const person = persons[i];
//  if (person.age > 15) continue
//  console.log(`Name ${person.name}, age ${person.age}`);
//}

persons.forEach(person => console.log(`Name ${person.name}, age ${person.age}`));

//5.find, findIndex

//let jane;
//for (let i = 0; i < persons.length; i++) {
//  const person = persons[i];
//  if (person.name === 'jane') {
//    jane = person;
//    break;
//  }
//}
//console.log('Jane = ', jane);

const jane = persons.find((person) => {
  return person.name === 'jane';
});
console.log('Jane = ', jane);

// 6.every, some

//let isKid = true;
//for (let i = 0; i < persons.length; i++) {
//  const person = persons[i];
//  if (person.age > 15) {
//    isKid = false;
//    break;
//  }
//}
//console.log('isKid = ', isKid);

const isKid = persons.every((person) => {
  return person.age <= 17;
});
console.log('isKid = ', isKid);