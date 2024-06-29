
var hourhead = document.getElementById("hourhead")
var minhead = document.getElementById("minhead")
var sechead = document.getElementById("sechead")
var milsechead = document.getElementById("milsechead")

var interval;

var msec = 0
var sec = 0
var min = 0
var hr = 0



function start(){
    msec++
    milsechead.innerHTML = msec

    if(msec === 100){
        sec++
        sechead.innerHTML = sec
        msec = 0
    }

    else if(sec > 59){
        min++
        minhead.innerHTML = min
        sec = 0
    }

    else if(min > 59){
        hr++
        hourhead.innerHTML = hr
        min = 0
    }
}


function startwatch(){
   interval = setInterval(start, 10)
}


function stopwatch(){
    clearInterval(interval)

}

function resetwatch(){
    clearInterval(interval)
    milsechead.innerHTML = "00"
    sechead.innerHTML = "00"
    minhead.innerHTML = "00"
    hourhead.innerHTML = "00"
    msec = 0
    sec = 0
    min = 0
    hr = 0
}
