let counter = 5

function example(){
    console.log("Example", counter)
    counter = counter - 1
    if(counter === 0) return
    example();
}
example()