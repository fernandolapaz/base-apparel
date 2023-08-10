// FORM
const form = document.querySelector('.info__form')
const email = document.querySelector('.form__email')
const label = document.querySelector('.form__label')
const errorMessage = document.querySelector('.form__message')
const tyMessage = document.querySelector('.form__ty')

// Submit
form.addEventListener('submit', function (e) {
    e.preventDefault()
    check()
})

// Check
function check() {
    const value = email.value.trim()

    function success() {
        form.classList.add('valid')
        form.classList.remove('invalid')
        email.removeAttribute('aria-invalid')
        email.removeAttribute('aria-describedby')
        tyMessage.setAttribute('role', 'alert')
    }

    function error() {
        form.classList.add('invalid')
        email.focus()
        email.setAttribute('aria-invalid', 'true')
        email.setAttribute('aria-describedby', 'form__message')
        email.removeAttribute('placeholder')
        label.setAttribute('aria-hidden', 'true')
    }

    if (/.+@.+\..+/.test(value)) {
        setTimeout(success, 250)
    } else if (value === '') {
        errorMessage.innerText = 'Please provide an email'
        error()
    } else {
        errorMessage.innerText = `"${value}" is not a valid email`
        error()
    }
}

// Clear
email.addEventListener('keydown', function () {
    form.classList.remove('invalid')
    email.removeAttribute('aria-invalid')
    email.removeAttribute('aria-describedby')
})

// Typewriter animation
let i = 0
let placeholder = ""
const txt = "Email Address"
const speed = 125

function type() {
    if (i < txt.length) {
        placeholder += txt.charAt(i)
        email.setAttribute("placeholder", placeholder)
        i++
        setTimeout(type, speed)
    }
}

type()

// FOOTER
const attr = document.querySelector('.attr__btn')
const tooltip = document.querySelector('.attr__tooltip')

attr.addEventListener('click', function () {
    tooltip.classList.toggle('show')

    if (tooltip.classList.contains('show')) {
        this.setAttribute('aria-expanded', 'true')
    } else {
        this.setAttribute('aria-expanded', 'false')
    }
})

// Click outside
document.addEventListener('click', function (e) {
    if (!attr.contains(e.target)) {
        if (tooltip.classList.contains('show')) {
            tooltip.classList.remove('show')
            attr.setAttribute('aria-expanded', 'false')
        }
    }
})