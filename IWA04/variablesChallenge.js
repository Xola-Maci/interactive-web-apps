const date = 2050;
let user ="parent";
let count = 0;
let names = user;

if (date) {
	console.log('January', 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	let month ='April' ;
	console.log(month, 'Family Day')
	console.log(month, 'Freedom Day')
	count = count + 4

	if (user = "student") {
		month = 'June'
		console.log(month, 'Youth Day')
		count = count + 1
	}

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	month = 'December';
	console.log(month, 'Day of Reconciliation')
	 count = count + 3;

	if (user = "parent") {
	  console.log(month, 'Christmas Day')
	  count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	count = count
}

user = names;
console.log('Your status is:', user)
console.log('The year is:', date)
console.log('The total holidays is:', count)