const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

/**
 * List of expenses
 */
const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
/**
 * The different type of tax that will help to determine the salary after it has been deducted.
 */
const tax = {
    '734': '3%',
    '234': '20%',
    '913': '12%',
    '415': '38%',
    '502': '42%',
}

/**
 * Rent amount for different apartments and houses
 */
const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal =parseFloat(tax['913']) / 100;
const startingAfterTax = salary * (1 - taxAsDecimal);
const type = `${size}-${lodging}`
const balance = (startingAfterTax - (expenses.transport) - (expenses.food) - rent[type]).toFixed(2) 
console.log(`R ${balance}`)