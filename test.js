var dateClock = document.getElementById("currentDay");

function runClock() {
    $(dateClock).html(moment().format('MMMM Do YYYY, h:mm:ss a'));
} 
setInterval(runClock, 1000)

let time900= new Date();
time900.setHours(9);
console.log(time900);


// document.getElementsByClassName("9am").textContent(time900);


// let currentTime=moment().hour();
