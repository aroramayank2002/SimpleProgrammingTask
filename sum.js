let startNumber = 1;
let endNumber = 5;

function sumToNumber(startNumber, endNumber){
  let sum = 0;
  for(let i = startNumber; i <= endNumber ; i++){
    sum += i;
  }
  return sum;
}

console.log(`Sum of numbers from ${startNumber} to ${endNumber} : ${sumToNumber(startNumber,endNumber)}`);
