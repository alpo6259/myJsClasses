// "use strict";

// class RangeValidator {
//   constructor(from, to) {
//     this.from = from;
//     this.to = to;
//   }

//   // (from <= to)
//   set from(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("from must be number!");
//     }
//     if (value > this.to) {
//       throw new RangeError("impossible range, must be (from <= to)");
//     }
//     this._from = value;
//   }
//   get from() {
//     return this._from;
//   }

//   set to(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("from must be number!");
//     }
//     if (value < this.from) {
//       throw new RangeError("impossible range, must be (from <= to)");
//     }
//     this._to = value;
//   }
//   get to() {
//     return this._to;
//   }

//   validate(value) {
//     return value >= this.from && value <= this.to;
//   }

//   get range() {
//     return Array.from(new Set([this.from, this.to]));
//   }
// }

// // const rangeNumber = new RangeValidator(1, 5);
// const rangeNumber = new RangeValidator(10, 80);

// try {
//   // rangeNumber.to = -1;
//   // console.log("rangeNumber :>> ", rangeNumber);

//   // rangeNumber.from = 10;
//   // console.log("rangeNumber :>> ", rangeNumber);

//   console.log("rangeNumber :>> ", rangeNumber);

//   console.log(rangeNumber.from);
//   console.log(rangeNumber.to);
// } catch (err) {
//   if (err instanceof TypeError) {
//     console.log("TypeError :>> from must be number! ");
//   } else if (err instanceof RangeError) {
//     console.log("impossible range, must be (from <= to)");
//   }
// }

// console.log(rangeNumber.range);

// console.log("finish :>> ");

// *****************************************************************************

class MyArray {
  constructor() {
    this.length = 0;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const deleteEl = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return deleteEl;
  }
  shift() {
    const firstElem = this[0];

    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    delete this[this.length - 1];
    this.length--;

    return firstElem;
  }

  map(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i]));
    }
    return newArr;
  }
  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  unshift(...args) {
    for (let i = this.length - 1 + args.length; i >= args.length; i--) {
      this[i] = this[i - args.length];
    }
    this.length = this.length + args.length;

    for (let i = 0; i < args.length; i++) {
      this[i] = arguments[i];
    }

    return this.length;
  }

  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = arguments[i];
      // this.length = this.length + args.length;
      this.length++;
    }
    return this.length;
  }
}
//

const arr = new MyArray();

arr.unshift(44, 33, 55, 66);

arr.push(11, 222, 99, 77);

console.log(arr);

arr.pop();
arr.push(13);

arr.push(34);

arr.push(12, 45);

// arr.push(123, 234);

arr.shift();

// const arr2 = arr.map(printSquare);

console.log(arr);

// console.log(arr2);

// console.log(arr.forEach(printSquare));
