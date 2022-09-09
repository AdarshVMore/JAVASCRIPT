// MOuse over

const btn3 = document.querySelector('.box-3')
btn3.addEventListener("mouseover", () => {
    alert('i also love js')
})

const reveal = document.querySelector(".before-reveal")
const after_reveal = document.querySelector(".after-reveal")
reveal.addEventListener("click", () => {
    if(after_reveal.classList.contains('after-reveal')){
        after_reveal.classList.remove('after-reveal')
    }
    else {
        after_reveal.classList.add('after-reveal')
    }
})



// Event Probagation
// event traveling throught the doc.body

window.addEventListener("click",()=>console.log('window'), true)
document.addEventListener("click",()=>console.log('document'), true)
document.querySelector('.div1').addEventListener("click",(e)=>{
    // e.stopPropagation()
    console.log('div1')}, true)

document.querySelector('.div2').addEventListener("click",()=>console.log('div2'), true)
document.querySelector('.click').addEventListener("click",(e)=>console.log(e.target.innerText = 'clicked'), true)




// Event Delegation
// append single event listeners to a parent eleement that adds it to its present child
document.querySelector('ul').addEventListener('click', (e)=>{
    console.log(e.target.getAttribute('id') + ' is clicked')
    // const list = document.querySelectorAll('li')
    // for(let i = 0; i<list.length ; i++){
    //     list[i].style.backgroundColor = 'green'
    // }
    const target = e.target
    if(target.matches('li')){
        target.style.backgroundColor = 'green'
    }
})