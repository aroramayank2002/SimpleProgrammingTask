let startNumber = 1;
let endNumber = 5;

function sumToNumber(startNumber, endNumber){
    if (startNumber === endNumber)
        return startNumber;
    else
    return startNumber + sumToNumber(startNumber+1, endNumber);

}

console.log(`Sum of numbers from ${startNumber} to ${endNumber} : ${sumToNumber(startNumber,endNumber)}`);
