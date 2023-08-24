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