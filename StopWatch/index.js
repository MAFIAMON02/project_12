let startstop = document.getElementById("start-stop");

let minuteid = document.getElementById("minute");
let secondid = document.getElementById("second");
let countid = document.getElementById("count");

let timer;
let count = 0;
let second = 0;
let minute = 0;


const resetbutton = () => {
    startstop.value = "Start";
    timer = false;
    minuteid.innerHTML = "00";
    secondid.innerHTML = "00";
    countid.innerHTML = "00";
}

function startTimer() {
    startstop.value = "Stop";
    timer = true;
    stopWatch();
}

function stopTimer() {
    startstop.value = "Start";
    timer = false;
}

const stopWatch = () => {

    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        let countString = count;
        let minuteString = minute;
        let secondString = second;

        if(count < 10)
        {
            countString = "0" + countString;
        }
        if(minute < 10)
        {
            minuteString = "0" + minuteString;
        }
        if(second < 10)
        {
            secondString = "0" + secondString;
        }

        countid.innerHTML = countString;
        minuteid.innerHTML = minuteString;
        secondid.innerHTML = secondString;
        setTimeout(stopWatch, 100);

    }
}

const altButton = () => {

    if (timer == true) {
        stopTimer();
    }
    else {
        startTimer();
    }

}