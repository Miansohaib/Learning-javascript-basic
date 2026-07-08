
const myarr = [1,2,3,4,5,6];
// console.log(myarr);

// myarr.push(7);
// console.log(myarr);

// myarr.pop();
// console.log(myarr);

const sec_arr = new Array("Sohaib",22,'abcd@gmail.com');
// console.log(sec_arr);
// sec_arr.unshift(3);
// console.log(sec_arr);
// sec_arr.shift();
// console.log(sec_arr);

// console.log(myarr.includes(10));
//console.log(myarr.indexOf(3));

const nym = myarr.join();
console.log(myarr);

console.log(nym);

//slice , splice

const myarr2 = [1,2,3,4,5,6,7,8,9];
const newarr2 = myarr2.slice(2,5);
console.log(newarr2);

const newarr3 = myarr2.splice(2,5);

console.log(newarr2);
console.log(newarr3);

console.log( "C"  , myarr2);
