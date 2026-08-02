        const display = document.getElementById("display");
        const startBtn = document.getElementById("start");
        const stopBtn = document.getElementById("stop");
        const resetBtn = document.getElementById("reset");
        const lapBtn = document.getElementById("lap");
        const laps = document.getElementById("laps");

        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let milliseconds = 0;

        let timer = null;
        let lapCount = 1;

        function updateDisplay() {

            let h = String(hours).padStart(2, "0");
            let m = String(minutes).padStart(2, "0");
            let s = String(seconds).padStart(2, "0");
            let ms = String(milliseconds).padStart(2, "0");

            display.innerHTML = h + ":" + m + ":" + s + ":" + ms;
        }

        function startWatch() {

            if (timer != null)
                return;

            timer = setInterval(function () {

                milliseconds++;

                if (milliseconds == 100) {
                    milliseconds = 0;
                    seconds++;
                }

                if (seconds == 60) {
                    seconds = 0;
                    minutes++;
                }

                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }

                updateDisplay();

            }, 10);

        }

        function stopWatch() {

            clearInterval(timer);
            timer = null;

        }

        function resetWatch() {

            clearInterval(timer);
            timer = null;

            hours = 0;
            minutes = 0;
            seconds = 0;
            milliseconds = 0;

            lapCount = 1;

            laps.innerHTML = "";

            updateDisplay();

        }

        function saveLap() {

            if (hours == 0 && minutes == 0 && seconds == 0 && milliseconds == 0)
                return;

            let lap = document.createElement("p");

            lap.innerHTML = "Lap " + lapCount + " : " + display.innerHTML;

            laps.appendChild(lap);

            lapCount++;

        }

        startBtn.addEventListener("click", startWatch);

        stopBtn.addEventListener("click", stopWatch);

        resetBtn.addEventListener("click", resetWatch);

        lapBtn.addEventListener("click", saveLap);

        updateDisplay();