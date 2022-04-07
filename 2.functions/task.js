// Задание 1

function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
    if (arr[i] > max) {
      max = arr[i];
    }
    
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let num = (sum/arr.length).toFixed(2);
  let avg = Number(num);

return { min: min, max: max, avg: avg };
}

// Задание 2

function worker (arr) {
let sum = 0; 
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}

function makeWork(arrOfArr, func) {
let finalMax = -Infinity;
let currentValue = 0;
for (let i = 0; i < arrOfArr.length ; i++) {
  currentValue = func(arrOfArr[i]);
  if (finalMax < currentValue) {
    finalMax = currentValue;
  }
}
return finalMax;
}

let result = makeWork(arrOfArr, worker);
console.log ('Наибольшая сумма: ' + result);

// Задание 3

function worker2 (arr) {
let max = -Infinity; 
let min = Infinity;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
    max = arr[i];
  }
  
  if (arr[i] < min) {
    min = arr[i];
  }
}
return Math.abs(max - min);
}

let result2 = makeWork(arrOfArr, worker2);
console.log ('Наибольшая разность наибольшего и наименьшего: ' + result2);