// E-notation numbers 
let x = 5111.512e4
//  says 5111.512 * 10^4


const date = new Date('December 17, 1995 03:24:00');
const unix = Number(date); // 'Number' global object converts any number like into number
console.log(unix)


// 2. Calculate the number of workdays given a fixed budget
days = (budget, rateperhr) => console.log(parseInt(budget / (rateperhr*8)))
days(20000, 89)


// 3. Calculate the discounted rate for large projects
monthly = (hrrate, numdays, discount) => {
    extra_days = numdays % 30 
    months = (numdays - extra_days)/30
    total_cost = extra_days*hrrate*8 + (months*22)*(hrrate*8)*discount
    console.log(total_cost)
}
monthly(89, 230, 0.42)
