console.log("hello world");

//array

const marvel_heroes = ["thor" ,"ironman" , "spiderman"]
const dc_heroes = ["Superman" , "flash" , "batman"]

marvel_heroes.push(dc_heroes) //It will not merge both the array it will add inside marvel array
//console.log(marvel_heroes);

 // js array will treat all things as a data so here the another array also taken as a data

 let all_heroes = marvel_heroes.concat(dc_heroes);
 //console.log(marvel_heroes)


 // spread operator

 const all_new_heroes = [...marvel_heroes, ...dc_heroes]
 //console.log(all_new_heroes);

 //flat operator

 /*
   flat operator will make the one single if there is array in an array is present
 */

   const arr1 = [1,2,3,[5,6],8,9,[10,20,[30,40,50]]]
   const singleArray = arr1.flat(Infinity)
   console.log(singleArray); 

   // boolean values of give data is array or not
   console.log(Array.isArray("yogesh"))


   //it will change that string yogesh into array
   //console.log(Array.from("yogesh")) //[ 'y', 'o', 'g', 'e', 's', 'h' ]

let score1 = 100
let score2 = 200
let score3 = 300


//it will create array of above scores
//console.log(Array.of(score1,score2,score3));



