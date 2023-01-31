const clock = document.getElementById('letters')

setInterval(digiClock, 1000)

function digiClock() {
    let d = new Date()
    let aMpM = "am"
    let hours = d.getHours()
    if (hours >= 12) {aMpM = "pm"}
        else aMpM = "am"
    
        if (hours < 10) {hours = "0" + hours}
        if (hours > 12) {hours = hours - 12}
    let minutes = d.getMinutes()
        if (minutes < 10) {minutes = "0" + minutes}
    let seconds = d.getSeconds()
        if (seconds < 10) {seconds = "0" + seconds}
    
    document.getElementById('letters').innerHTML =
        hours + ":" + minutes + ":" + seconds + aMpM
}