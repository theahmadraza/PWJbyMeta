// function getDistance(mph,h){
//     return mph * h
// }

// var mph = 60;
// var h = 2;


// var distance = getDistance(mph, h)
// console.log(distance)



// ///////////////////////////////////////////////////////////////////////




// function addTwoNums(a, b){
//     console.log(a + b)
// }

// function randomNum(){
//     return Math.floor((Math.random() * 10) + 1)
// }

// function specificNum(){
//     return 42
// }

// var useRandom = true
// var getNumber;

// if(useRandom){
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber(), getNumber())


// ///////////////////////////////////////////////////////////////////////



function addTwoNums(getNumber1, getNumber2){
    console.log(getNumber1() + getNumber2())
}

function randomNum(){
    return Math.floor((Math.random() * 10) + 1)
}

function specificNum(){
    return 42
}

var useRandom = true
var getNumber;

if(useRandom){
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(4, 5)
