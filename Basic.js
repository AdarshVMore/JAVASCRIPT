import {checkif100} from "./Codevolution.js"

add = (a , b) => {
    return a + b
}

sub = (a,b) => {
    return a - b
}
export {add , sub}

checkif100(60, 100)

// ============= Calculate remaining time

time = (min)=>{
    console.log(min - 20) 
}
time(40)

// ==============  Total time to cook

totaltime= (food , time) => {
    console.log(food*time)
}
totaltime(5,10)