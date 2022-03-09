"use strict";

function MyArray() {
  this.length = 0;
}

const myArrayProto = new MyArray();

myArrayProto.push = function (item) {
  this[this.length++] = item;
  return this.length;
};

myArrayProto.pop = function () {
  if (this.length === 0) {
    return;
  }
  const deleteEl = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;

  return deleteEl;
};

//

myArrayProto.shift = function () {
  const firstElem = this[0];

  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  delete this[this.length - 1];
  this.length--;

  return firstElem;
};

myArrayProto.unshift = function () {
  for (let i = this.length - 1 + arguments.length; i >= arguments.length; --i) {
    this[i] = this[i - arguments.length];
  }
  this.length = this.length + arguments.length;
  for (let i = 0; i < arguments.length; ++i) {
    this[i] = arguments[i];
  }

  return this.length;
};

myArrayProto.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

myArrayProto.map = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
};

//

function printSquare(item) {
  return item ** 2;
}

MyArray.prototype = myArrayProto;

const myArr1 = new MyArray(1, 3, 7);

console.log(myArr1);
myArr1.push(5);
console.log("meArr1 :>> ", myArr1);
myArr1.push(2);
console.log("meArr1 :>> ", myArr1);
myArr1.push(3);
console.log("meArr1 :>> ", myArr1);
myArr1.push(4);
console.log("meArr1 :>> ", myArr1);

// //
// console.log(myArr1.shift());

// console.log(myArr1);

// console.log("unshift");

// myArr1.unshift(22, 33, 44, 66);

// console.log(myArr1);
// console.log(myArr1.shift(1));
// console.log("myArr1 :>> ", myArr1);

// myArr1.unshift(55, 55);
// console.log("object :>> ", myArr1);

// myArr1.forEach(printSquare);

const myArr2 = myArr1.map(printSquare);

console.log(myArr2);
