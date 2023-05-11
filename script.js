const trafficLight = document.getElementById('traffic-light');
const colors = ['red', 'yellow', 'green'];
let currentColor = 0;

function changeColor() {
    trafficLight.classList.replace(colors[currentColor], colors[(currentColor + 1) % colors.length]);
    currentColor = (currentColor + 1) % colors.length;
}

trafficLight.addEventListener('click', changeColor);
setInterval(changeColor, 10000);
