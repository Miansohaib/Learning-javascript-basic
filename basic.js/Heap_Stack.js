//Stack (Premitive data type)
let myemail = "sohaib12@gmail.com"
let secondemail = myemail;
secondemail = "Mian123@gmail.com"

console.log(myemail);
console.log(secondemail);
//Heap (Non premitive data type)

let user = {
    email : "abcd12@gmial.com",
     id : 123,
}

let user2 = user;
user2.email = "ppp@gmail.com"
console.log(user);

console.log(user2);
