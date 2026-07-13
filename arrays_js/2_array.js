const arr1 = ["superman","spiderman" , "batman"];
const arr2 = ["khan" , "Falak" , "abcd"];

// arr1.push(arr2);

// console.log(arr1);

const arr3 =   arr1.concat(arr2);
console.log(arr3);

//Always use the below method in most of the cases

const arr4 = [...arr1,...arr2]
console.log(arr4);


const arr5 = [1,2,3,[12],4,6,7,[5,6,7,[1,1,2]]];
const arr6 =  arr5.flat(Infinity);
console.log(arr6);


const arr7 = ("MianSohaib");
console.log(Array.isArray(arr7));
console.log(Array.from(arr7));

const score1 = 1000;
const score2 = 2000;
const score3 = 3000;

console.log(Array.of(score1,score2,score3));


