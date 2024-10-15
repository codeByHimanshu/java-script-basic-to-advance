
// for loop
// for (let index = 0; index < 10; index++) {
//     if (index == 7) {
//         console.log('thala for a reason');

//     }
//     const element = index;
//     console.log(element);
// }

// for (let i = 1; i < 5; i++) {
//     for (let j = 0; j <= 10; j++) {
//      console.log(i + '*' + j ,':' + i*j);  
//     }
// }

// const arr = ['himanshu','aryan','abhishek']
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// for (let i = 1; i < 5; i++) {
//     if (i==2) {
//         console.log('table of two');
//         break ;  
//     }
//     for (let j = 0; j <= 10; j++) {
//      console.log(i + '*' + j ,':' + i*j);  
//     }
// }

// let myarr = ['himanshu','aryan','avi']
// let arr=0;
// while (arr < myarr.length) {
//     console.log(myarr[arr]);
//     arr++   
// }

// let num = 0;
// do{
//     console.log(num);
//     num++
// }
// while (num<=10) {
//     console.log('stop');
    
// }

// for of

// const a = [3,4,5,6,67]
// for (const i of a) {
//     console.log(i);
// }
// const b = ['aryan','himanshu','bhupendra jogi']
// for (const i of b) {
//     console.log(i);
// }

// maps

// const map = new Map()
// map.set('name0','himanshu')
// map.set('name1','aryan')
// map.set('name2','bhupendra jogi')
// map.set('name3','avi')
// // console.log(map);
// for (const [key,value] of map) {
//     console.log(key, ':',value);    
// }
 
// const c = ['AD','DG','DS','EU','OI']
// for (const key in c) {
//    console.log([key], ',',c[key]);
// }


// const d = ['AD','DG','DS','EU','OI']
// d.forEach( (val)=> {
// console.log(val);
// })

// const arr = [
//     {
//         code : 'java',
//         ide:'vs code'
//     },
//     {
//         code : 'python',
//         ide:'vs code'
//     },
//     {
//         code : 'java script',
//         ide:'vs code'
//     }
// ]
// arr.forEach( (item) => {
//     console.log(item.code);
    
// });

// *****************filter*************
const arr = [3,4,56,6,7,8,8,20]
//  const nums = arr.filter( (n)=> 
// //  {  return n>4}
//  n>4
// )
// console.log(nums);


// const newarr =[]
// arr.forEach( (n)=>{
//   if (n>4) {
//    newarr.push(n)
//   }
// })
// console.log(newarr);

const books = [
 
  {
    name:'RDsharma',type : 'physics',class:12,batch:2024
  },
  {
    name:'HM ',type : 'math',class:12,batch:2024
  },
  {
    name:'RDsharma',type : 'math',class:12,batch:2024
  },
  {
    name:'vidya',type : 'hindi',class:11,batch:2024
  },
  {
    name:'kavya',type : 'math',class:11,batch:2024
  },
] 

// const book = books.filter((n)=> n.class===11)
// console.log(book);
// const btype = books.filter((n)=> {
//   return n.type==='math'})
// console.log(btype);

// const bok = books.filter((n)=> n.class===12 && n.type==='math')
// console.log(bok);

// ************chaining***********

// const ar = [3,4,6,,7,8,9,9,87,7,6]

// const newar = ar.map( (n)=> n*10).map((n)=>n+1).filter((n)=> n>60) 
// console.log(newar);
