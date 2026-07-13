
const abc = Symbol('key1')



const obj = {

    name  : 'Sohaib',
    age : 20 ,
    email : "abcd123@gmail.com",
    arr : [1,2,3],
    "fullname" : "Mian Sohaib",
    abc : "khan"


}

console.log(obj.email);
console.log(obj["email"]);


console.log(obj.abc);

console.log(typeof abc);

// console.log(obj);

obj.email = "khan@google.com"
// Object.freeze(obj);
obj.email = "khan@microsoft.com"
console.log(obj);

obj.geetring = function() {
    console.log("Hello world");
    
    
}

console.log(obj.geetring());

obj.geert2 = function(){

    console.log(`my name is ${this.fullname}`);
    
}
console.log(obj.geert2());


