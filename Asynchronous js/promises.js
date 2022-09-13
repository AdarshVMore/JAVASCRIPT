// fetch("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0" , {
//     method: 'POST'
// })
//     // .then(res => console.log(res))
//     .then(data => console.log(data))
//     .catch(error => console.log("there is an error"))


// PROMISES 
// I. function prom returning new Promise() , 
// II. resolve and reject as a paramenter , 
// III. if true resolve("got") else reject("not there") , 
// IV. x(res) print res where res is "got" and y(err) where err is "not there",
// V. prom if true .then(x) .catch(y) 

function prom (condition) {
    return new Promise((resolve, reject) => {
    console.log("fetching data........")
    setTimeout(() => {
    let data = [4,5,2,6,7,2,6,8]
    if(condition){
        resolve(`heres ur data ${data} :)`)
    } else {   
        reject("system error , try again later :(")
    }
    }, 4000);
})}


let fullfiled = (result) => console.log(result)
let rejected = (error) => console.log(error)

prom(true).then(fullfiled).catch(rejected)