
// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);
 

//but when these are declared in the scope the let and const are donot work outside scope but that var c will also work outside the scope and that is the problem
if(true){

    let a = 10;
    const b = 20;
    var c = 30;
}
/*
console.log(a); //not get print
console.log(b); //not get print
console.log(c); //it will also print outside the scope
*/


//nested scope

//only fun two() can access all variables of one()
//but one() cant access vaiables of two() 
function one(){

    const username = "yogesh"

    function two(){

        const website = "google"
       // console.log(username)
    }

   // console.log(website) //not run gives error
    two()
}


// ++++++++++++++++++++++++++++=Imp++++++++++++++++++++++++

 /*
 In this 1st we can also firstly we can write code for access the function and then write declarationn of function
 and also we can write after declaration of function
 */
//console.log(addone(5))
function addone(num){

    return num + 1; //gives 6
}


//here we cannot able do that here we always have to access this function after declaration
const addTwo = function (num){

    return num + 2; //gives 7
}
//console.log(addTwo(6))
