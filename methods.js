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

// *************reduce************

//  const a =  [2,4,6,7,8,8,9]
//  const na = a.reduce((acc,curVal) => acc+curVal,0)
//  console.log(na);
 

const shopingCart = [
    {
        itemname: 'jeans',
        price:2000,
        brand : "jara"
    },
    {
        itemname: 't-shirt',
        price:20000,
        brand : "jara"
    },
    {
        itemname: 'shirt',
        price:1000,
        brand : "jara"
    },
 {
        itemname: 'pants',
        price:1000,
        brand : "jara"
    }
]

// const newArr = shopingCart.reduce((acc,item) => acc +item.price,0)
// console.log(newArr);
