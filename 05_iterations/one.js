// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element ==5) {
        // console.log("5 is the best number ")
    }
    // console.log(element);
}


//  do while loop

for (let i = 2; i<=10; i++) {
    // console.log(`outer loop value :${i}`);
    for (let j = 2; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i + "*" +j+'='+i*j);
    }
}

const myArray = ["flash", "batman", "superman"];
// console.log("length of array: ",myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);   
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`value of i is ${index}`);
    
// }


// continue

for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
    
}