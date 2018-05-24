// ai1728 Gustaf Bergqvist
var numbers = [128, 256, 512, 1024, 2048];
let sumOfNumbers = numbers.reduce((previous, current) => current += previous);
let avgNumber = sumOfNumbers / numbers.length;
console.log(sumOfNumbers);
console.log(avgNumber);