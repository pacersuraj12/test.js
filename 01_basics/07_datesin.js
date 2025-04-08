// dates

let myDates = new Date()
//  console.log(myDates.toString());
//  console.log(myDates.toLocaleString());
//  console.log(myDates.toDateString());
// console.log(myDates.getDate());
// console.log(myDates.getHours());
// console.log(myDates.getTimezoneOffset());

let myCreateDate = new Date(2025,3,8);
// console.log(myCreateDate.toDateString());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
weekday: "long"
})