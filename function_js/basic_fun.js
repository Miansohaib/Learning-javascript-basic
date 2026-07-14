function fullname() {
    console.log("S");
    console.log("o");
    console.log("h");
    console.log("a");
    console.log("i");
    console.log("b");
}

// fullname();

function addtwonum(number1 , number2) {
    const result = number1 + number2
    return result
}

// console.log(addtwonum(3,4));
 
function yourname(username) {
    if (!username) {
        console.log("Enter your Name");
        return
    }
    return (` your name is : ${username} `);
}

// console.log(yourname());


function clacualt(val1,val2,...num1){
    return num1;
    
}
console.log(clacualt(200,300,400,2000));

const name = {
    username1 : "Javascript",
    Price : 22

}
function name1(anyobject) {
    console.log(`Name of project is ${anyobject.username1} and price of couse is ${anyobject.Price}`);
}

name1({
    username1 : "Java",
    Price : 999
});


const cala  = [100 , 200 , 300]

function secvalue(getArray) {
    return getArray[2]
    
}
// console.log(secvalue(cala));
console.log(secvalue([100,200,4000]));