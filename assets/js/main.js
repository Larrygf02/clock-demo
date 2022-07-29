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