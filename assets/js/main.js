/*CLOCK */
const hour = document.getElementById('clock-hour')
const minutes = document.getElementById('clock-minutes')
const seconds = document.getElementById('clock-seconds')

const clock = () => {
    let date = new Date()
    let hh = date.getHours() * 30
    let mm = date.getMinutes() * 6
    let ss = date.getSeconds() * 6

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}

setInterval(clock,1000)

/* TEXT */
const textHour = document.getElementById('text-hour')
const text_minute = document.getElementById('text-minutes')
const text_ampm = document.getElementById('text-ampm')
const date_day = document.getElementById('date-day')
const date_month = document.getElementById('date-month')
const date_year = document.getElementById('date-year')

const clockText = () => {
    let date = new Date()

    let hh = date.getHours()
    let mm = date.getMinutes()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let ampm

    if (hh >= 12) {
        hh = hh - 12
        ampm = 'PM'
    }else {
        ampm = 'AM'
    }

    if (hh == 0) {
        hh = 12
    }
    
    if (hh < 10) {
        hh = `0${hh}`
    }

    textHour.innerHTML = `${hh}:`

    if (mm < 10) {
        mm = `0${mm}`
    }
    text_minute.innerHTML = `${mm}`
    text_ampm.innerHTML = ampm

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    date_day.innerHTML = day
    date_month.innerHTML = `${months[month]}`
    date_year.innerHTML = year
}

setInterval(clockText, 1000)

/* DARK / LIGHT TEME */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})