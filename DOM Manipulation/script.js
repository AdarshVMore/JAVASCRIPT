// examin the document objecct
// console.dir(document)


// console.log(document.domain)
// console.log(document.URL)
// console.log(document.body)
// console.log(document.images)
// console.log(document.form)


// GET ELEMENT BY ID
// const header = document.getElementById('header')
// header.textContent ='hello';
// header.innerText ='hii';
// header.innerHTML = '<h3>Hello</h3>'
// header.style.color = 'red'

// GET ELEMET BY CLASSNAME
// const items = document.getElementsByClassName('list')
// console.log(items)
// items[1].textContent = 'new list'
// items[3].style.backgroundColor = 'yellow'


// GIVES ERROR
// items.style.backgroundColor = 'gray'

// let i;
// for (i=0; i<items.length; i++){
//     items[i].style.backgroundColor = 'red'
// }


// // GET ELEMENT BY TG NAME
// let lis = document.getElementsByTagName('li');

// let x;
// for (i=0; i<lis.length; i++){
//     lis[i].style.color = 'yellow'
// }

// QUERYSELECTOR
let input = document.querySelector('input')

input.value = 'search'
var submit = document.querySelector('input[value="submit"]');
submit.value = 'send'
// let val = input.value
// console.log(val)