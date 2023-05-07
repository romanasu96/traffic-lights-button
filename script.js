const trafficLight = document.getElementById('traffic-light');

trafficLight.addEventListener('click', function() {
    if (trafficLight.classList.contains('red')) {
        trafficLight.classList.replace('red', 'yellow');
    } else if (trafficLight.classList.contains('yellow')) {
        trafficLight.classList.replace('yellow', 'green');
    } else if (trafficLight.classList.contains('green')) {
        trafficLight.classList.replace('green', 'red');
    }
});
