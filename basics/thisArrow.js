const user = {

    username: "yogesh",
    price: 500 ,
    welcomeMessage: function() {

      //this will refer to current context
     // console.log(`${this.username} , Welcome to Website`);
      
    }
}

user.welcomeMessage() //output- yogesh , Welcome to Website
user.username = "Shubham"
user.welcomeMessage() //output- Shubham , Welcome to Website

//this will not directly useful in function it gives output = undefined

// ++++++++ ARROW Function ++++++

const user2 = {

  username: "yogesh",
  price: 500 ,
  welcomeMessage: () => {

    //this will refer to current context
   // console.log(`${this.username} , Welcome to Website`);
    
  }
}


//1.

const addTwo = (num1,num2) => {

  return num1 + num2
}

//console.log(addTwo(5,9)); //gives 14


//2.
/*
 also we can write arrow function as Known as explicit return
*/
const add = (n1,n2) =>  {return n1 + n2};


//3.
/*
we donot use parenthesis here and also we donot write return here
also we can write arrow function as Known as Implicit return
*/
const addThree = (n1,n2,n3) =>  n1+n2+n3;
//console.log(addThree(10,20,30)); //gives 60


//4.
const add1 = (nu1,nu2) => (nu1 + nu2)

