const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00; 
const minuteOfDay = 00;

// Only change below this line
 

if (
  hourOfDay != undefined && minuteOfDay != undefined &&
  hourOfDay === 00 && minuteOfDay === 00) {
 const taxAsDecimal = parseFloat(tax)/ 100; // converts tax into tax decimal value
 const startingAfterTax = salary * (1 - taxAsDecimal); // enclosed 1 - taxAsDecimal with () to fix the calculatio
 const balance = startingAfterTax - transport - food - rent;
 console.log('R', balance.toFixed(2));
}else{
  console.log('Balance can only be calculated at midnight.');
}


//console.log('R', balance.toFixed(2));