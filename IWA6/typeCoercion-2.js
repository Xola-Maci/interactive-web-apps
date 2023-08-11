const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

if (hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00')) {
	const taxAsDecimal = tax / '100';
  const startingAfterTax = salary * '1' - taxAsDecimal;
 const balance = startingAfterTax - transport - food - rent;
}

 function balanceFix(x){
    return balance.parseInt(balance).toFixed(3)
 }

console.log(balance);