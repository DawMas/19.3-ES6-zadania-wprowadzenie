//const sayHello = () => alert('Hello world!');
//sayHello();

//zad 1
const first = 'Hello ';
const second = 'World';
console.log(`${first} ${second}`);

//zad 2
const multiply = (a = 1, b = 1) => console.log(a * b)
multiply(2, 5);
multiply(3);
multiply(5);

//zad 3
const average = (...args) => { let value = 0; args.forEach(arg => value = value + arg); console.log(value / args.length) };
average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4


//zad 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

//zad 5
const names = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = names;
console.log(`${firstname}`);
console.log(lastname);

