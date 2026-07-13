

const tinder = {};
console.log(tinder);


tinder.name = "sohaib";
tinder.num = 123;

console.log(tinder);

const obj = {
    email : "abcd@google.com",
    username : {
            fullname : {
        firstname : "mian",
        Lastname : "Sohaib"
    }
    }

}
// console.log(obj.username.fullname.firstname);

const obj1 = {1 :"a",2 :"b"}
const obj2 = {3 :"a",4 :"b"}
const obj4 = {5 :"a",6 :"b"}

// const obj3 = {...obj1 , ...obj2,...obj4}
const obj3 = Object.assign({},obj1,obj2,obj4)

console.log(obj3);


const user = [
    {

    },
    {

    },
    {

    }
]
user[1].email;

console.log(tinder);

console.log(Object.keys(tinder));
console.log(Object.values(tinder));

console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('email'));
