function iceCream(flavor){
    this.flavor = flavor;
    this.meltIt = function(){
        console.log(`This ${flavor} is melted`)
    }
}

let kiwiIceCream = new iceCream("Kiwi");
let appleIceCream = new iceCream("Apple")

kiwiIceCream.meltIt()
appleIceCream.meltIt()

/////////////////////////////////////////////////////////////

let apple = new String("Apple")
console.log(apple)

let mango = "Mango"
console.log(mango)

console.log("plum" === "plum")

var a = "abcd"
console.log(a.match(/d/))