const displayTime = () => {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "am";

    // am unless 12 or greater, then changes to pm
    if (hours >= 12) {
        session = "pm";
    }

    // 12 hour format
    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const time = hours + ":" + minutes + ":" + seconds + " " + session;

    const calendarDate = date.toLocaleDateString();

    const clockContainer = document.getElementById("clock-face");
    clockContainer.innerHTML = time;

    const dateContainer = document.getElementById("calendar-date");
    dateContainer.innerHTML = calendarDate;
  
    
};

// Will display immediately and updates every second
displayTime();
setInterval(displayTime, 1000);