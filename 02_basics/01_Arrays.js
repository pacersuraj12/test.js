//  Arrays 

const myArr = [0,1,2,3,4,5];

const myHeroes = ["shaktiman","naagraj"];
const myArr2 = new Array(1,2,3,4);
// console.log("old Arrays",myArr);

// methods of Arrays

// myArr.push(6);
// myArr.push(7); // adding values
//  myArr.pop(); // removing last value in the given Arrays 
//  myArr.unshift(8); // adding value at first in arrays
// myArr.shift(); // removing value at first in arrays

// console.log(myArr.includes(9)); // it use for finding values in array answer in form of true or false 
// console.log(myArr.indexOf(9)); //  it use for finding index  of  array answer in form of true or false 


// slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log("c", myArr);
console.log(myn2);