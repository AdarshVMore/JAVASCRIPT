// examin the document objecct
// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.body)
// console.log(document.images)
// console.log(document.form)




// ===================== > GET ELEMENT BY ID
const header = document.getElementById('header')
header.textContent ='hello';
header.innerText ='hii';
header.innerHTML = '<h3>Hello</h3>'
header.style.color = 'red'



// ===================== > GET ELEMET BY CLASSNAME
const items = document.getElementsByClassName('list')
console.log(items)
items[1].textContent = 'new list'
items[3].style.backgroundColor = 'yellow'




// GIVES ERROR
// items.style.backgroundColor = 'gray'

let i;
for (i=0; i<items.length; i++){
    items[i].style.backgroundColor = 'red'
}




// ===================== > GET ELEMENT BY TG NAME
let lis = document.getElementsByTagName('li');

let x;
for (i=0; i<lis.length; i++){
    lis[i].style.color = 'yellow'
}




// ===================== > QUERYSELECTOR
let input = document.querySelector('input')
input.value = 'search'
let submit = document.querySelector('input[type="submit"]');
submit.value = 'send'
let lastItem = document.querySelector('.list:last-child')
lastItem.style.color = 'blue'




// ===================== > QUERYSELECTORALL
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var j = 0; j < odd.length; j++) {
    odd[j].style.backgroundColor = 'gray'
    even[j].style.backgroundColor = 'white'
}




// ===================== > TRAVERSING THE DOM
var itemlist = document.querySelector('#items')

// parentnode
console.log(itemlist.parentNode)
itemlist.parentNode.style.backgroundColor = "green"

// ChildNode OR children 
//children is more prefered that childNode
console.log(itemlist.childNodes)
console.log(itemlist.children) 
console.log(itemlist.children[2])
itemlist.children[2].style.color = 'orange'

// firstChild, firstElementChild
// console.log(itemlist.firstChild)
// console.log(itemlist.firstElementChild)

// lastChild, lastElementChild
console.log(itemlist.lastChild)
console.log(itemlist.lastElementChild)

// nextSibling, nextElementSibling
console.log(itemlist.nextSibling)
console.log(itemlist.nextElementSibling)

// previousSibling, previousElementSibling
console.log(itemlist.previousSibling)
console.log(itemlist.previousElementSibling)
itemlist.previousElementSibling.style.color = 'red'

// createElements
var newdiv = document.createElement('div')
console.log(newdiv)
// Add class -> className
newdiv.className = 'hello'
newdiv.id = 'hii'
// Add attribute -> setAttribute
newdiv.setAttribute("title", 'title-div')







// EVENTLISTENERS
var button = document.getElementById('button').addEventListener('click', buttonClick)
var newbutton = document.getElementById('button').addEventListener('click', () => console.log("wassup"))
var output = document.getElementById('output')

function buttonClick(x){
    console.log('hii there')
    console.log(x) // x -> this is what u get when u click
    document.getElementById('items').style.backgroundColor = 'gray'
    console.log(x.target) //target -> gives u the element we clicked
    console.log(x.target.id) 
    console.log(x.target.className) 
    output.innerHTML = '<p>'+ x.target.id + '</p>'
}