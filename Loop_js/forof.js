//************For of loop does not work on objects******* */


// const arr = ['js','py','cpp']
// for (const element of arr) {
//     console.log(element);
    
// }

// const name = 'sohaib khan'
// for (const element of name) {
//     console.log(`Each character of name ${element}`);
    
    
// }

const map = new Map()
map.set('PK','PAKISTAN')
map.set('CA','CANADA')
map.set('USA','UNITED STATE OF AMERICA')
map.set('UK','UNITED KINGDOM')

console.log(map);


for (const [key,value] of map) {
    console.log(key,"->",value);
    
    
}

