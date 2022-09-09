// DOM MANIPULATION



// Get element by id
const main = document.getElementById("main-heading")
// get elemt by classname
const li = document.getElementsByClassName("list-items")
// get elemt by tagname
const list = document.getElementsByTagName("ul") 
// get elementss by queryaelector
const container = document.querySelector("div")
// get elements by queryselectorall
const all_list = document.querySelectorAll('li')


let title = document.querySelector('#main-heading')
title.style.color = "red"


li.id = "add"
// li.removeAttribute('id')

console.log(main.getAttribute('id'))