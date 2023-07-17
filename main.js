// FORM
const form = document.querySelector('.info__form')
const email = document.querySelector('.form__email')

// Submit
form.addEventListener('submit', function (e) {
    e.preventDefault()
    check()
})

// Check
function check() {
    const value = email.value.trim()
    const message = document.querySelector('.form__message')

    function success() {
        form.classList.add('valid')
    }

    if (/.+@.+\..+/.test(value)) {
        setTimeout(success, 400)
    } else if (value === '') {
        form.classList.add('invalid')
        message.innerHTML = 'Please provide an email'
    } else {
        form.classList.add('invalid')
        message.innerHTML = `"${value}" is not a valid email`
    }
}

// Clear
email.addEventListener('focus', function () {
    form.classList.remove('invalid')
    email.value = ''
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