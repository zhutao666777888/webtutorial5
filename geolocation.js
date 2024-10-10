const x = document.getElementById('geolocation');
function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeolocation);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
   x.innerHTML = `Latitude: ${latitude} <br>Longitude: ${longitude}`;
}


