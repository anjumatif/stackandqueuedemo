console.log("Testing.................");

function sum(number1, number2) {
  const final = number1 + number2;
  return final;
}

const myFavNumber = 5;

const myNumberPlus2 = sum(myFavNumber, 2);
console.log(myNumberPlus2);

const anotherNumber = sum(-13, 13);
console.log(anotherNumber);

//Callback Queue

console.log("First");

setTimeout(function () {
  console.log("Timeout run");
}, 0);

console.log("End");

//Microtask queue

console.log("Start");

setTimeout(function () {
  console.log("Everynight in my dreams ......");
}, 0);

async function fetchData() {
  const res = await fetch("https://realapi.com");
  const data = await res.json();
  console.log(data);
}
console.log("End");
