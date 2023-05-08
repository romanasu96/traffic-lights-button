const trafficLight = document.getElementById('traffic-light');

function changeColor() {
    if (trafficLight.classList.contains('red')) {
        trafficLight.classList.replace('red', 'yellow');
    } else if (trafficLight.classList.contains('yellow')) {
        trafficLight.classList.replace('yellow', 'green');
    } else if (trafficLight.classList.contains('green')) {
        trafficLight.classList.replace('green', 'red');
    }
}

trafficLight.addEventListener('click', changeColor);

setInterval(changeColor, 10000);
