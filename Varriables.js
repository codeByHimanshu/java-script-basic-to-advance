// user can not re write the const varriable
const user_name = "himanshu singh"

let user_email = "hsaktu@gmail.com";      //can be re decleared
var user_password = "123456";         //can be re decleared
user_city = "lucknow";                   //can be re decleared

//  user_name = "arayn bhaskar"        //error trying to redeclear const varriable
user_email = "ak@gmail.com"           // re decleared

user_password = "65758"                 // re decleared
user_city = "kanpur"                    // re decleared

console.table([user_name, user_email, user_password, user_city])
// console.log(user_name);

/*  
prefer not to use var because eit has a problem with block scope na dfunctional scope
*/