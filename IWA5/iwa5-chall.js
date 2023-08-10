FREE_WARNING = 'Free shipping only applies to single customer orders';
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence';
NONE_SELECTED = '0';
let location;

customers = '1';
location = 'RSA';
currency = null

if (location === 'RSA') {
     shipping = 400 && currency == 'R' 
}

if (location === 'NAM'){
shipping === 600 
}
else{ 
shipping === 800
}

let shoes = 300 * 1;
toys = 100 * 5;
shirts = 150 * NONE_SELECTED;
batteries = 35 * 2;
pens = 5 * NONE_SELECTED ;

shipping = null;
currency = '$';

if (shoes + batteries + pens + shirts > 1000 ) {
	if (location = NAM && customers < 2) {
			if (location = RSA){
		    shipping = 0 || calcShipping
		}
	}
}

if (shipping = 0 && customers !== 1) { 
    
    console.log(FREE_WARNING) 
}

if(location === 'NK'){
    console.log(BANNED_WARNIN)
}else{
    console.log('price:', currency, shoes + batteries + pens + shirts + shipping)
}
 
