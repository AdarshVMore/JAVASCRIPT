// 1. Retrieve a card from a stack
x =(n) => {
    arr = [10, 2, 58, 6]
    console.log(arr[n])}
x(2)


// 2. Exchange a card in the stack

setItem = (position, replacement) => {
    arr = [10 , 20 , 30 , 60]
    console.log(arr.splice(position, 1, replacement))
    console.log(arr)
}
setItem(2, 20)

