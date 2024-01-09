document.addEventListener('DOMContentLoaded', function () {
    let countdownElement = document.getElementById('countdown');
    let startButton = document.getElementById('startButton');
    let countdownInterval;

    startButton.addEventListener('click', function () {
        startCountdown(5);
    });

    function startCountdown(durationInSeconds) {
        let endTime = new Data().getTime() + durationInSeconds * 1000;

        function updateCountdown() {
            let currentTime = new Date().getTime();
            let remainingTime = endTime - currentTime;

            if (remainingTime <=0) {
                clearInterval(countdownInterval);
                countdownElement.textContent = 'Countdown Complete!';
            }
            else {
                let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
                countdownElement.textContent = `${seconds} seconds remaining`;
            }
        }

        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }
});