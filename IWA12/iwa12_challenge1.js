const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

//For book 1
const bookNum0 = document.querySelector('#book1')
const status0 = bookNum0.querySelector('.status');
const reserve0 = bookNum0.querySelector('.reserve ');
const checkout0 = bookNum0.querySelector('.checkout');
const checkin0 = bookNum0.querySelector('.checkin');

const statusCont0 = status0.textContent.trim();
const statusResult0 = STATUS_MAP[statusCont0]

status0.style.color = statusResult0.color

// Enable or disable buttons based on statusInfo0
reserve0.disabled = !statusResult0.canReserve;
checkout0.disabled = !statusResult0.canCheckout;
checkin0.disabled = !statusResult0.canCheckIn;

// Set button colors to black and grayscale
reserve0.style.color = 'black';
checkout0.style.color = 'black';
checkin0.style.color = 'black';

// for book 2
const bookNum1 = document.querySelector('#book2')
const status1 = bookNum1.querySelector('.status');
const reserve1 = bookNum1.querySelector('.reserve ');
const checkout1 = bookNum1.querySelector('.checkout');
const checkin1 = bookNum1.querySelector('.checkin');

const statusCont1 = status1.textContent.trim();
const statusResult1 = STATUS_MAP[statusCont1]

status0.style.color = statusResult1.color

// Enable or disable buttons based on statusInfo0
reserve1.disabled = !statusResult1.canReserve;
checkout1.disabled = !statusResult1.canCheckout;
checkin1.disabled = !statusResult1.canCheckIn;

// Set button colors to black and grayscale
reserve1.style.color = 'black';
checkout1.style.color = 'black';
checkin1.style.color = 'black';


// for book 3
const bookNum2 = document.querySelector('#book3')
const status2 = bookNum2.querySelector('.status');
const reserve2 = bookNum2.querySelector('.reserve ');
const checkout2 = bookNum2.querySelector('.checkout');
const checkin2 = bookNum2.querySelector('.checkin');

const statusCont2 = status2.textContent.trim();
const statusResult2 = STATUS_MAP[statusCont2]

status2.style.color = statusResult2.color

// Enable or disable buttons based on statusInfo0
reserve2.disabled = !statusResult2.canReserve;
checkout2.disabled = !statusResult2.canCheckout;
checkin2.disabled = !statusResult2.canCheckIn;

// Set button colors to black and grayscale
reserve2.style.color = 'black';
checkout2.style.color = 'black';
checkin2.style.color = 'black';

/*checkin0.color = none
status0.style.color = STATUS_MAP.color
reserve0 = (STATUS_MAP.status.canReserver) === 'true' ? 'enabled' : 'disabled'
checkout0 = (STATUS_MAP.status.canCheckout) === 'true'? 'enabled' : 'disabled'
checkin0 = (STATUS_MAP.status.canCheckIn) === 'true' ? 'enabled' : 'disabled'*/

/*checkin1.color = none
status1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'*/