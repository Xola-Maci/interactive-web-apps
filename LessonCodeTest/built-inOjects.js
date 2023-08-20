/*const first1 = {name: 'Xola'}
console.log(first.name)
first.name = 'Gladys'
console.log(first.name)

const symbol = symbol()
const obj = {
    [symbol]: 'Hello'
}

obj[symbol]

//example about composite types

const first2 = {
    name: 'Xola'
}

const second = first

second.name = 'Hello'*/

//Date
//Math
//document

// 1.Math
let test1 = 10+Math.PI
console.log(Math.floor(test1),Math.round(test1, Math.ceil(test1)))

const original =120;
const discount = 14;
const percentage = (original/100)*discount;
console.log(`BIG SALE! ${Math.round(percentage)}% OFF!`)

const original1 =123.15;
const discount1 = 14.23;
const percentage1 = (original1/100)*discount1;
console.log(`BIG SALE! ${percentage1.toFixed(2)}% OFF!`);

console.log(Math.max(90,50,100,60,10,20,-5,-15),
Math.min(90,50,100,60,10,20,-5,-15),
Math.random(), Math.round(Math.random()*100))

// 2.Date

const instant = new Date();
console.log(instant)
console.log(instant.getTime())

const instant2 = new Date('14 September 2023');
console.log(instant2)

const future = new Date('10 January 2025 15:15').getTime();
const current = new Date().getTime();
console.log(future-current)

console.log(future > current);
console.log(future < current);
console.log(`There are ${Math.ceil((future - current) / 1000 / 60 / 60 / 24)} days left`);

const curr = new Date().getFullYear();
console.log(curr);
console.log(curr-10);
console.log(new Date().getDate());
console.log(new Date().getMonth()+1);

const objs ={
    test:{
        hello:{
            xola: 'Greetings',
            zuzi: 'Yo!',
        }
    }
}

console.log(objs.test.hello.xola);
console.log(objs.test.hello.zuzi);
console.log(objs && objs.test && objs.test.hello && objs.test.hello.xola);

//Challenge 10

const currentYear = new Date().getFullYear();

const holidays = {
    // ... (your holiday data)
};

const christmas = 6;
const futureId = 9;

console.log(holidays[futureId]?.name || `ID ${futureId} not created yet`);

let copied = { ...holidays[christmas] }; // Create a copy of the object
copied.name = 'X-mas Day';
const correctDate = new Date(copied.date);
correctDate.setHours(0, 0, 0, 0);
const isEarlier = correctDate.getTime() < holidays[christmas].date.getTime();
console.log('New date is earlier:', isEarlier);
if (isEarlier) copied.date = correctDate;

console.log('ID change:', holidays[christmas].id !== copied.id);
console.log('Name change:', holidays[christmas].name !== copied.name);
console.log('Date change:', holidays[christmas].date.getTime() !== copied.date.getTime());

const timestamps = Object.values(holidays).map(holiday => holiday.date.getTime());
const firstHolidayTimestamp = Math.min(...timestamps);
const lastHolidayTimestamp = Math.max(...timestamps);

const firstHolidayDate = new Date(firstHolidayTimestamp);
const lastHolidayDate = new Date(lastHolidayTimestamp);

console.log(`${firstHolidayDate.getDate()}/${firstHolidayDate.getMonth()}/${currentYear}`);
console.log(`${lastHolidayDate.getDate()}/${lastHolidayDate.getMonth()}/${currentYear}`);

const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomIndex];
console.log(randomHoliday.date);

