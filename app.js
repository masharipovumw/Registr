const Name = document.querySelector('#name')
const password = document.querySelector('#password')
const birthday = document.querySelector('#birthday')
const register = document.querySelector('#register')

const phoneCheck = document.querySelector('#phoneCheck')
const phone = document.querySelector('#phone')

const emailCheck = document.querySelector('#emailCheck')
const email = document.querySelector('#email')

enebledPhone()

register.onclick = () => {
    if (checkInput(Name) == false) {
        return
    }
    if (phoneCheck.checked == true && checkInput(phone) == false) {
        return
    }
    if (emailCheck.checked == true && checkInput(email) == false) {
        return
    }
    if (checkInput(password) == false) {
        return
    }
    if (checkInput(birthday) == false) {
        return
    }
    alert('tabriklaymiz registratsiyadan muvofaqiyatli o`tdingiz')
}

function checkInput(input) {
    let value = input.value
    if (value.length == 0) {
        input.classList.add('is-invalid')
        return false
    } else {
        input.classList.remove('is-invalid')
        return true
    }
}

phoneCheck.onchange = () => {
    if (phoneCheck.checked == true) {
        enebledPhone()
    }
}
emailCheck.onchange = () => {
    if (emailCheck.checked == true) {
        enebledEmail()
    }
}

function enebledPhone() {
    phoneCheck.checked = true
    emailCheck.checked = false

    phone.disabled = false
    email.disabled = true
}
function enebledEmail() {
    phoneCheck.checked = false
    emailCheck.checked = true

    email.disabled = false
    phone.disabled = true
}
