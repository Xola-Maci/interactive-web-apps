const value = "3";
const sum = parseInt(value) + 4 + parseInt(value) //forced the string to change into a number
console.log(sum);

/* The initial code displayed 343 as the answer because
it recognised the value variable as a string which made it concatenate the 
number with the strings.
In other words JavaScript executed String Concatenating*/