const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for( const key in myObject){
    // console.log(` ${myObject[key]} =  ${key}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for(const key in programming){
    console.log(programming[key]);
}