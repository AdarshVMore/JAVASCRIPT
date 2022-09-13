function sum(){
    let sun = 0
    for (let i in arguments){
        sun = sun + arguments[i]
    }
    console.log(sun)
}

sum(4,6,5,6,2,84,656,465,84651,4,1)


// =============== >    REST OPERATOR '...args'
const rest = (name, course, ...args) =>{
    let sum = 0
    for (let i in args){
        sum += args[i]
    }
    console.log(`hii i am ${name} studied ${course} with markes ${sum}`)
}

rest('adarsh', 'BTech', 90,68,88,75)



// =================== >     SPREAD OPERATOR
const spread = (name, course, ...args) =>{
    let sum = 0
    for (let i in args){
        sum += args[i]
    }
    console.log(`hii i am ${name} studied ${course} with markes ${sum}`)
}

var marks = [90,68,88,75]

rest('adarsh', 'BTech', ...marks , 220)

// concat any object or array spread opreator can be used
var obj1 = {name:'adarsh'}
var obj2 = {age:19}
var mainobj = {...obj1, ...obj2}
console.log(mainobj)