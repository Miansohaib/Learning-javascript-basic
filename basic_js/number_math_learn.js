const mynumber = 200;
console.log(mynumber);

const newnumber = 12000;
console.log(newnumber.toString().length);

const sec_number = 12.44;
console.log(sec_number.toPrecision(3));

console.log(sec_number.toExponential(2));

const hunder = 100000;
console.log(hunder.toLocaleString(`en-IN`));

//********** Math ***********/

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(5.4));
console.log(Math.min(1 , 4, 5, 0.1));
console.log(Math.max( 1, 4, 10, 14));
console.log(Math.ceil(6.5));
console.log(Math.floor(6.5));

console.log(Math.random()*10 + 1 );
console.log(Math.floor(Math.random() *10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 10)) + min );










