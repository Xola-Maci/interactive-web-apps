let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const  logCalc = () => { // removed = and placed it after function name to create an arrow function
    const isString = typeof calculated === 'numerical-string' // added === to check if true
    const calculatedAsNumber = isString ? calculated : parseInt(calculated) // changed parseNumber to parseInt to convert string to an integer
    calculated = calculatedAsNumber + 1 // removed === to = to show the value is being assigned to a variable
}

const  calcUser = () => { // removed = and placed it after function name to create an arrow function
  logCalc() // added () to show that the function is being called
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const  checkUser = () => { // removed = and placed it after function name to create an arrow function
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
