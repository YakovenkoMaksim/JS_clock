const clock = document.querySelector('#clock')
const title = document.querySelector('#block-title')

function timeIsNow() {
    const d = new Date()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()

    title.innerHTML = 'Time in Kyiv'

    if (hours < 10){
        hours = `0${hours}`
    }
    if (minutes < 10){
        minutes = `0${minutes}`
    }
    if (seconds < 10){
        seconds = `0${seconds}`
    }
    if (22 < hours || hours < 6){
        document.querySelector('#wrapper').classList.add('dark')
    }
    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`
}

setInterval(timeIsNow, 1000)