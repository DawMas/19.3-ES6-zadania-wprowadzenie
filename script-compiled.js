'use strict';

//const sayHello = () => alert('Hello world!');
//sayHello();

//zad 1
var first = 'Hello ';
var second = 'World';
console.log(first + ' ' + second);

//zad 2
var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
  return console.log('' + a * b);
};
multiply(2, 5);
multiply(3);
multiply(5);

//zad 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var value = 0;args.forEach(function (arg) {
    return value = value + arg;
  });console.log(value / args.length);
};
average(1); // 1
average(1, 3); // 2
average(1, 3, 6, 6); // 4


//zad 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

//zad 5
var names = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = names[2],
    lastname = names[4];

console.log('' + firstname);
console.log(lastname);
