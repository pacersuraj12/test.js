const name = "suraj ";
const value = 76;
console.log(name+value); // it is a not good way

// *************good way are***********

console.log(`name of student ${name} and value is ${value}`);

const gameName = new String(`suraj tomar`);
console.log(gameName[6]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));
// const newString = gameName.substring(0,4);
// console.log(newString);
const anotherString = gameName.slice(-7, 3);
// console.log(anotherString);

const OneString = "  pacersuarj  ";
console.log(OneString); 
console.log(OneString.trim()); // not space in result to use this function 

const url = "https://techgyaan.co.in/tech20%gyaan";
console.log(url.replace('20%','_'));

console.log(url.includes('suraj'));
console.log(gameName.split('_'));