price = (price, year) => {
    if (year < 3) console.log(price*0.8)
    else if(year > 3 && year < 10) console.log(price*0.7)
    else console.log(price*0.5)
}

price(1000, 5)
price(1000, 15)