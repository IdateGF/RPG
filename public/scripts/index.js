var loginCadastro = document.querySelector('#login-cadastrar')
var modalCadastro = document.querySelector('#modal-cadastro')

loginCadastro.addEventListener("click", () => { openModal(modalCadastro) })


//-------------modal------------------
var modalBG = document.querySelectorAll('.modal-background')
modalBG.forEach(item => item.addEventListener("click", closeModal))

function openModal(modal) {
    modal.className += " is-active"
}
function closeModal() {
    let modal = document.querySelectorAll('.modal')
    modal.forEach(item => item.className = "modal")
}
//-------------modal------------------
const loggedIn = document.querySelectorAll(".logged-in")
const loggedOut = document.querySelectorAll(".logged-out")

const setupUI = (user) => {
    if (user) {
        loggedIn.forEach(item => item.style.display = "block")
        loggedOut.forEach(item => item.style.display = "none")

    } else {
        loggedIn.forEach(item => item.style.display = "none")
        loggedOut.forEach(item => item.style.display = "block")
    }
}