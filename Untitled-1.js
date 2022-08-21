console.log("Ahmad")

// ////////Object Literals with Bracket Notations ////////////////

var house = {}

house["rooms"] = 4;
house["color"] = "Brown"
house["price"] = 1234

console.log(house)


/////////// It can evaluate Expression

var arrOfKeys = ["speed", "altitude", "color"]

var drone = {
    speed: 200,
    altitude: 300,
    color: "red"
}

for(var i = 0; i < arrOfKeys.length; i++){
    console.log(drone[arrOfKeys[i]])
}

// ////////////////// Array Are Objects ///////////

var fruits = []
fruits.push("Orange")
fruits.push("Mango")
fruits.push("Banana")
console.log(fruits)

fruits.pop()

console.log(fruits)


function arrBuilder(one, two, three){
    var arrFruits = []
    arrFruits.push(one)
    arrFruits.push(two)
    arrFruits.push(three)

    return arrFruits
}

var callArr = arrBuilder("Pineapple", "Apple", "Grapes")
console.log(callArr)