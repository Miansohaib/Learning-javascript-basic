
const code = ['js','py','cpp','java','ruby']

// code.forEach((val , index , arr)=>{
//     console.log(val , index , arr);
    
// });

// function cd(item) {
//     console.log(item);
    
// }

// code.forEach(cd)

const myarr = [
    {
        languagename : "javascript",
        languagefilename : "js"
    },
    {
        languagename : "Java",
        languagefilename : "java"
    },
    {
        languagename : "C++",
        languagefilename : "cpp"
    }
] 

myarr.forEach((keys) => {
    console.log(keys.languagename);
    
});