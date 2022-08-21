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

// ////////////////// Array Are Objects