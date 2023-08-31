const examply = [
    'Hello',
    'World',
    'Lorem',
    'Ipsum',
]

console.log(examply.length)

const array = ['a', 'x', 't',]
console.log(array)
console.log(array.length)

// adds to the array
array.push('b')
array.push('s')

console.log(array)
console.log(array.length)

//removes the last item in the array
array.pop()

console.log(array)
console.log(array.length)

//acts like pop, but for the first item 
array.shift()

console.log(array)
console.log(array.length)

//acts like push, but for first item
array.unshift('w')

console.log(array)
console.log(array.length)

//another example

const objArray = [
    {id: '212', name: 'Leletu', surname: 'Joni'},
    {id: '541', name: 'David', surname: 'James'},
]

console.log(objArray)
console.log(objArray.length)

objArray.push({id:'732', name:'Xola', surname:'Maci'})

console.log(objArray)
console.log(objArray.length)

// example with different items

const mixArray = [
    20, 
   'Amazing',
    false,
    {id: '212', name: 'Leletu', surname:'Joni'}
]

console.log(mixArray)
console.log(mixArray.length)

mixArray.push('true')
mixArray.shift()
mixArray.unshift('shes a baddie she knows she is a 10')

console.log(mixArray)
console.log(mixArray.length)

// Array inside an array

const board = [
    [null, 'x',null],
    ['x', null, 'o'],
    ['x', null, 'o']
]

// object example

const starting = [
    ['a', true]
    ['b', 1000]
    ['e','Hello World!']
]

const examp = Object.fromEntries(starting);
const examp1 = Object.keys(examp)
const examp2 = Object.values(examp)

console.log(examp1, examp2)

// DESTRUCTURING

