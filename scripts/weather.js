const COORDS = 'coords';

function saveCoords(coordsObject) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObject));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObject = {
        latitude,
        longitude
    }

    saveCoords(coordsObject);
}

function handleGeoError() {
    console.log("can't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        // getWeather
    }
}

function init() {
    loadCoords();
}

init();