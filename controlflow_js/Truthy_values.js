
// falsey Values
// 0 ,False , "" ,null , Undefine , -0 , Bigint 0n,NaN

// Truthy values 

// "0",true, " ","false",{},[], function

const obj = {}
if (Object.keys(obj).length === 0) {
    console.log("object is empty");
    
    
}

// nullish coalescing operator (??) null , undefined 

let val1;
val1 = undefined ?? 20
console.log(val1);

let val7;
val7 = null ?? 90
console.log(val7);


// terniary operator 
// condition ? ture : false

const iceprice = 40;
iceprice >= 30 ? console.log("Price greater then 30"): console.log("Price less then 30");
;
