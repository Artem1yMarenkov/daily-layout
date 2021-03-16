let div = document.querySelector('.clock');

function clock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
    document.querySelector('.clock').innerHTML = "  " + hours + ":" + minutes + ":" + seconds;
    setTimeout("clock()", 1000);
}

div.innerHTML = clock();
