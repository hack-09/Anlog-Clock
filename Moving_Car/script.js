var audio = document.createElement('audio');
audio.setAttribute('src','sound.mp3');
audio.loop=true;
audio.play();

document.addEventListener('DOMContentLoaded', function () {
    const runButton = document.getElementById('run');
    const stopButton = document.getElementById('stop');
    const track = document.querySelector('.track');
    const car = document.querySelector('.cars');
    const wheel1 = document.querySelector('.wheel1');

    let animationRunning = false;

    function startAnimation() {
        if (!animationRunning) {
            car.style.animationPlayState = 'running';
            track.style.animationPlayState = 'running';
            wheel1.style.animationPlayState = 'running';
            animationRunning = true;
        }
    }

    function stopAnimation() {
        if (animationRunning) {
            car.style.animationPlayState = 'paused';
            track.style.animationPlayState = 'paused';
            wheel1.style.animationPlayState = 'paused';
            animationRunning = false;
        }
    }

    runButton.addEventListener('click', startAnimation);
    stopButton.addEventListener('click', stopAnimation);
});
