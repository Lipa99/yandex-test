const TIME_PREFIX = "Текущее время:"

function getTimeElement(){
    return document.getElementById('time')
}

function setTime(){
    const time = getTimeElement()
    time.innerHTML = new Date().toLocaleString()
    console.log()
}

setInterval(() => {
    setTime()
}, 1000);

