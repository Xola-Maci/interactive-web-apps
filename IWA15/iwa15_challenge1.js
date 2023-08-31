const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

//const firstI = data.lists[0][1].length-1;
//const secondI = data.lists[1][1].length-1;
//const thirdI = data.lists[2][1].length-1;

const result = [];

const extractBiggest = () => {

    const firstItem = data.lists[0][1][data.lists[0][1].length-1];
    const secondItem = data.lists[1][1][data.lists[1][1].length-1];
    const thirdItem = data.lists[2][1][data.lists[2][1].length-1];

	if (firstItem >= secondItem && firstItem >= thirdItem) {

       const lastValue1= data.lists[0][1].pop() // will remove the last value of the first array
		return lastValue1

	}else if (secondItem >= firstItem && secondItem >= thirdItem) {

        const lastValue2 = data.lists[1][1].pop() // will remove the last value of the second array
		return lastValue2

	}else{

    const lastValue3=data.lists[2][1].pop() // will remove the last value of the third array
	return lastValue3
    }
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)