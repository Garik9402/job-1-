let colorObject = [{
    index: 0,

    name: 'blue',
    color: 'blue',
    price: '49'
}, {
    index: 1,
    name: 'red',
    color: 'red',
    price: '54'
}, {
    index: 2,
    name: 'green',
    color: 'green',
    price: '76'
}, ];

function initColors(c) {
    let colorsNode = document.getElementById('colors')
    let titleNode = document.getElementById('shell-title-top')
    let priceNode = document.getElementById('price')
    let button = document.querySelector('.shell__button')
    c.forEach(function(element) {
        let div = document.createElement('div')
        let p = document.createElement('p')
        div.classList.add('shell-avilable__items')
        p.classList.add('colors-name')
        div.style.background = element.color

        div.addEventListener('click', function() {
            titleNode.innerHTML = element.name
            titleNode.style.color = element.color
            priceNode.innerHTML = element.price
        })

        titleNode.append(p)
        colorsNode.append(div)


    })


}

initColors(colorObject)


let divNode = document.querySelectorAll('.shell-avilable__items')
divNode[0].classList.add('active2')
for (i = 0; i < divNode.length; i++) {
    divNode[i].addEventListener('click', function() {
        for (let d = 0; d < divNode.length; d++) {
            divNode[d].classList.remove('active2')
        }
        this.classList.add('active2')
    })
}

let burgerNode = document.querySelector('.burger')
let headerNode = document.querySelector('.header')

burgerNode.addEventListener('click', function() {
    burgerNode.classList.toggle('active')
    headerNode.classList.toggle('active')



})