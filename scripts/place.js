function calculateWindChill(_temp, _windspeed) {
    return (13.12 + .6215 * _temp - 11.37 * Math.pow(_windspeed, .16) + .3965 * _temp * Math.pow(_windspeed, .16)).toFixed(2);
}

let temp = 10;
let windspeed = 18;
let windchill = "N/A";

if (temp <= 5 && windspeed > 17.8) {
    windchill = calculateWindChill(temp, windspeed).toString();
}

document.getElementById("windchill").textContent = windchill;