# Projects related to DOM

## projects link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
console.log("suraj")


const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    
  
  })
});



```
# solution 2
## projects 2
``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
e.preventDefault();

const height = parseInt(document.querySelector("#height").value)
const weight = parseInt(document.querySelector("#weight").value)
const results = document.querySelector('#results');

if( height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
} else if( weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML = `please give a valid weight ${weight}`;
} else {
 const bmi =  (weight / ((height * weight) / 10000)).toFixed(2);
//  show the result 
results.innerHTML =`<span>${bmi}</span>`;
}
});




```


## Project 3 solution code

``` javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

// let date = new Date();
// console.log(Date.toLocalTimeString());
setInterval(function () {
  let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
