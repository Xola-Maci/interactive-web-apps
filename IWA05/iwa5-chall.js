FREE_WARNING = "Free shipping only applies to single customer orders";
BANNED_WARNING = "Unfortunately we do not ship to your country of residence";
NONE_SELECTED = 0;


const customers = 1;
let location = 'NK';
let currency = 'R';
let shipping = null;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED ;
const itemTotal = shoes + toys + shirts + batteries + pens;

if (location === 'RSA') {
     shipping = 400  

}else if (location === 'NAM'){
	currency ='$';
	shipping = 600;
	}
	else { 
	currency ='$';
	shipping = 800 

	}



//const itemTotalCost = itemTotal+ shipping;

if (itemTotal >= 1000 && customers === 1) {
      if (location == 'RSA' || location == 'NAM'){
		shipping = 0;
	  }
	  
}

if (customers !== 1) { 
    console.log(FREE_WARNING) 
} 

if(location === 'NK'){
    console.log(BANNED_WARNING); 
}else{
	console.log('price:', currency, itemTotal+shipping)
}


    

 
