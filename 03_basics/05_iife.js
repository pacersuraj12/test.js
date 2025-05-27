// Immediately Invoked function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED `);
})();

((name) => {
    console.log(`DB CONNECTED 2nd ${name}`);
})('suraj')