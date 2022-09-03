export const checkif100 = (a,b) =>{
    if (a == 100 || b == 100){
        console.log("true1")
    }
    else if (a + b == 100){
        console.log("true2")
    }
    else{
        console.log("false")
    }
}
checkif100(60, 100)

const checkext = (str) => {
    str.slice(str.LastIndex('.'))
    let x = [str]
    for (let i = 0; i < x.length; i++){
        if (x[i] == '.'){
            console.log(x)
        }

    }
}
checkext("hii.hii")
 

function person (fname, lname){
    this.fname = fname
    this.lname = lname
}
person1 = new person('bruce', 'wayne')
person2 = new person('Tom', 'wayne')



person.prototype.fullname = function () {
    console.log(this.fname + ' ' + this.lname)
}

person1.fullname()
person2.fullname()

function greet() {
    return "hello"
}
greet()


// ==========================  PROMISE  ====================
const promise = new Promise((resolve, reject) => { 
    resolve()    // changes status from pending to 'fullfiled'
    reject()     // changes status from pending to 'reject'
})


// If promise is fullfiled
const promise = new Promise((reject, resolve) => {
    setTimeout(() => {
        resolve()
    }, 5000)
})

//If promise is Reject
const promis = new Promise((reject, resolve) => {
    setTimeout(() => {
        reject()
    }, 5000)
})

console.log('1')
setTimeout(() => {
    console.log("2")
}, 0)
console.log("3")