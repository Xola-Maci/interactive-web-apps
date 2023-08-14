const nickname= "Timmy";
const firstname = "Timothy";
let user = firstname; //declared a variable to either firstname or nickname

if(user === firstname){ 
    //conditioned the variable to log the firstname is user is set to the firstname
    console.log(`Good Morning ${firstname}`);
}else if(user === nickname){ 
    //conditioned the variable to log the nickname is user is set to the nickname
    console.log(`Good Morning ${nickname}`);
}

if(user != firstname && user !=nickname){
    console.log(`Good Morning`);
}//conditioned the console to log only Goodmorning if neither nickname and firstname are set as user.

//console.log("Good Morning, ${nickname} || {firstname}!")