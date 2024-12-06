/*singleton
  object created by  using constructor
  object.create
*/

//object declarations

const MySym = Symbol("key1")
/*special case for symbol if we can make symbol as key then we to use like
  given below
*/
const jUser = {

   name:"Yogesh",
   [MySym]:"mykey1", //symbol
   age:22,
   location:"pune",
   email:"yogesh@gmail.com",
   isLoggedin:false,
   LastLoginDays:["Monday" , "Saturday"]

}

//console.log(jUser.name) //work but not a good practice
//console.log(jUser["email"]);

jUser.email = "yoyo@gmail.com" //we can change the value of obj directly

jUser.greeting = function(){

  console.log("good morning");
}


const obj1 ={1:"yoyo",2:93}
const obj2 ={1:"ror",2:95}
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const instauser = {

  name:"yogesh",
  lastname:"dapale",
  age:22,
  isLoggedin:false
}

const users = [
     {
      id:1,
      email:"yoyo@gamil.com",
      pass:"123abc"
     },

     {
      id:2,
      email:"yogesh@gamil.com",
      pass:"12365abc"

     }

]

users[1].email
// console.log(instauser);

// console.log(Object.keys(instauser));
// console.log(Object.values(instauser));
// console.log(Object.entries(instauser));


//it will give boolean result of property is present or not
//console.log(instauser.hasOwnProperty('isLoggedin'));


const course = {

  coursename:"java",
  price:5000,
  coursetime:"60 hrs"

}

//obeject destructuring //mainly used in react
const {coursename} = course;
console.log(coursename);



