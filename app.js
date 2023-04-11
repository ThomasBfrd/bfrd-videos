const hambuger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const moon = document.querySelector('#moon')
const body = document.querySelector('body')
const logoWhite = document.querySelectorAll('#logoWhite')
const logo = document.querySelectorAll('#logo')
const hLinks = document.querySelectorAll('#hLinks')

hambuger.addEventListener('click', () => {
    menu.classList.toggle("hidden")
    hambuger.classList.toggle("bg-white")
})

hLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle("hidden")
        hambuger.classList.toggle("bg-white")
    })
})



moon.addEventListener('click', () => {
    body.classList.toggle("dark")
    logoWhite.forEach(logo => {
        logo.classList.toggle("hidden")
})
    logo.forEach(logo => {
        logo.classList.toggle("hidden")
    })
    
})