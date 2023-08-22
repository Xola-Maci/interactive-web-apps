
//order 1
const root1 = document.querySelector('[data-key="order1"]');
const biscuits1 = root1.querySelector('.biscuits .count');
const donuts1 = root1.querySelector('.donuts .count');
const pancakes1 = root1.querySelector('.pancakes .count');
const status1 = root1.querySelector('.status dd');

biscuits1.innerText = root1.getAttribute('data-biscuits');
donuts1.innerText = root1.getAttribute('data-donuts');
pancakes1.innerText = root1.getAttribute('data-pancakes');
status1.innerText = root1.getAttribute('data-delivered') === 'true'? 'Delivered' : 'Pending';


//order 2
const root2 = document.querySelector('[data-key="order2"]');
const biscuits2 = root2.querySelector('.biscuits .count');
const donuts2 = root2.querySelector('.donuts .count');
const pancakes2 = root2.querySelector('.pancakes .count');
const status2 = root2.querySelector('.status dd')

biscuits2.innerText = root2.getAttribute('data-biscuits');
donuts2.innerText = root2.getAttribute('data-donuts');
pancakes2.innerText = root2.getAttribute('data-pancakes');
status2.innerText = root2.getAttribute('data-delivered') === 'true'? 'Delivered' : 'Pending';

//order 3
const root3 = document.querySelector('[data-key="order3"]');
const biscuits3 = root3.querySelector('.biscuits .count');
const donuts3 = root3.querySelector('.donuts .count');
const pancakes3 = root3.querySelector('.pancakes .count');
const status3 = root3.querySelector('.status dd');

biscuits3.innerText = root3.getAttribute('data-biscuits');
donuts3.innerText = root3.getAttribute('data-donuts');
pancakes3.innerText = root3.getAttribute('data-pancakes');
status3.innerText = root3.getAttribute('data-delivered') === 'true'? 'Delivered' : 'Pending';



/**biscuits1= root1.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending*/