
// const user = {
//     uname: ' himanshu',
//     age: '22',
//     message: function () {
//         console.log("${this.uname},welcome to website");
//         console.log(this);
        
//     }
// }
// user.message()
// user.uname = 'aryan'
// user.message()


// function fun() {
//     uname = 'himanshu'
//     console.log(this.uname);
// }
// fun()

// arrow function

// const fun = () => {
//     uname = 'himanshu'
//     console.log(this);
// }
// fun()

// explicit return
// const sum = (num1,num2) =>{
// return num1+num2
// }
// console.log(sum(38,39))

// implecit return
// const sum = (num1,num2) => 
// ( num1+num2)
// console.log(sum(38,39))

const add = (num1 ,num2 ) => ({uname :'himanshu'})
console.log(add(3,4));
