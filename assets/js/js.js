const ativaMenuButton = document.getElementById('ativaMenu')
const ativaImagem = document.querySelector('.menu__logo')
const menuLateral = document.querySelector('.menu_lateral')

ativaMenuButton.addEventListener('click', () => {
    menuLateral.classList.toggle("menu_lateral--ativo")
})

ativaImagem.addEventListener('click', () => {
    menuLateral.classList.toggle("menu_lateral--ativo")
})