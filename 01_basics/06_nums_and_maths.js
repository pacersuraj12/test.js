const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2 ));

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000000000000;
// console.log(hundreds.toLocaleString('en-In'));

// *********************************** maths *******************************************

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(1.7));
// console.log(Math.ceil(6.2));
// console.log(Math.floor(3.9));

// console.log("min val are ",Math.min(9,8,7,6,6,5,4));
// console.log("max val are ",Math.max(9,8,7,6,6,5,4));

// console.log(Math.random()*10+1);
// console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);