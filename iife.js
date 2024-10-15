// immediately invoked function expression
// to invke imidiate and remove golobal polution 

(function Db(){
console.log('conected');
})();//this semicolon is compulsory

( (uname)=>{
console.log('conected ${uname}');
})("hitesh") 