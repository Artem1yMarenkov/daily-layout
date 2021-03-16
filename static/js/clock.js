let div = document.querySelector('.clock');

function clock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
    document.querySelector('.clock').innerHTML = hours + ":" + minutes + ":" + seconds;
}
clock();
setInterval(clock, 1000);
