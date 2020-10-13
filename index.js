buttom = document.querySelector('.menu-btn')
navMenu = document.querySelector('.nav-menu ul')
console.log('TLC: navMenu', navMenu)
console.log('TLC: buttom', buttom)

const showMenu = (e) => navMenu.classList.toggle('show')

buttom.addEventListener('click', showMenu)
