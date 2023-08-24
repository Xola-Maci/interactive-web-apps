let button = document.getElementById('changeBackground');

button.addEventListener('click', () => {
  document.body.style.backgroundColor = 'fuchsia';
});


// @ts-nocheck

/**
 * @typedef {"uppercase" | "lowercase"} format - The formt as supplied to the function
 * @typedef {"toUpperCase" | "toLowerCase"} nativeKeys - The matching key as used by JavaScript internally
 */
/**
 * Converts to lowerc ase or uppercase randomly
 * @param {string} text
 * @param {"uppercase" | "lowercase"}[format]
 * @returns {string}
 */

const changeCase = (text, format) => {
  /**
   * @type {Record<format | 'random', nativeKeys}
   */
  const formatMap ={
    random: Math.random() >= 0.5 ? 'toUpperCase' : 'toLowerCase',
    uppercase: 'toUpperCase',
    lowercase: 'toLowerCase',
  }

  const key = format || 'random';
  const method = formatMap [key];
  return text[method]()
}

console.log(changeCase('Xola', 'uppercase'))
console.log(changeCase('Hello', 'lowercase'))
console.log(changeCase('nomayini bozza lam', 'uppercase'))

// Operations

const valueA = 2 + 16
const valueB = 50 - 8 + 1
const valueC = valueB / 2
const value = valueA * valueC / 3

console.log(value) // 129
console.log((2 + 16) * ((50 - 8 + 1) / 2) / 3) // 129

// Functions

const fnA = () => { return 'Hello' }
const fnB = () => { return 'John Smith' }
const fnC = () => { return `your name is ${fnB()}` }
const fn = () => { return `${fnA()}, ${fnC()}` }

console.log(fn()) // Hello, your name is John Smith

const english = 'Hello'
const getAfrikaans = () => 'Goeiedag'
const getRandom = () => Math.floor(Math.random() * 100)
const random = getRandom ()

console.log(`${english}: ${random}`);
console.log(`${getAfrikaans ()}: ${getRandom()}`);
console.log(`Molo: ${random}`);

//Different methods for creating a function

// 1. Arrow function
const greet = () => console.log('Hello World')

// 2. Function declaration
function greet () { console.log("Hello World!") }

// 3. Function Expression
const greet = function () { console.log("Hello World!") }