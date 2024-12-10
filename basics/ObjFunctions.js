//these 3 dots ... is known as sperad or rest operator
//it dis depending on the user when it called rest and when spread
function calculate(...num1){

    return num1
}

//this will give you array of following elements
console.log(calculate(20,30,40))

const user = {

    username: "Yogesh",
    price: 200
}

function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//output = username is Yogesh and price is 200
handleObject(user)

//we also directly object
handleObject({

    username: "Sam",
    price: 500

})
//outpput=username is Sam and price is 500


const myArr = [200,400,100,600]

function returnSecondValue(getArray){

    return getArray[1]  //2nd value return
}

console.log(returnSecondValue(myArr));

//also we can directly pass array also
console.log(returnSecondValue([200,400,100,600]));




