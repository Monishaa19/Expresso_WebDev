mapboxgl.accessToken = 'pk.eyJ1IjoicHJpeWFua2ExODE2IiwiYSI6ImNtM2cxY3FrbjAxdjEyanF6MmZsYmhiMjIifQ.JK4oNi5P7v4Q6XLAY6qXAg'; // Replace with your Mapbox API key
const GEMINI_API_KEY = 'AIzaSyCdPQ_ehleQRqvCQg7EOcYfgz0GW2mELSw'; // Replace with your Gemini API key

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [78.9629, 20.5937], // Initial center (India)
    zoom: 5
});

let fromCoords = null;
let toCoords = null;
let famousPlaces = [];

document.getElementById('get-suggestions').onclick = function() {
    const fromPlace = document.getElementById('from').value;
    const toPlace = document.getElementById('to').value;

    if (!fromPlace || !toPlace) {
        alert("Please enter both FROM and TO locations!");
        return;
    }

    // Fetch coordinates for FROM and TO
    fetchCoordinates(fromPlace, toPlace)
        .then(() => fetchFamousPlaces(fromCoords, toCoords))
        .catch(error => console.error("Error fetching data:", error));
};

function fetchCoordinates(fromPlace, toPlace) {
    return Promise.all([
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(fromPlace)}.json?access_token=${mapboxgl.accessToken}`),
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(toPlace)}.json?access_token=${mapboxgl.accessToken}`)
    ])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => {
        fromCoords = data[0].features[0].geometry.coordinates;
        toCoords = data[1].features[0].geometry.coordinates;

        addMarker(fromCoords, 'blue'); // FROM marker
        addMarker(toCoords, 'red');   // TO marker
        map.fitBounds([fromCoords, toCoords], { padding: 50 });
    });
}

function fetchFamousPlaces(fromCoords, toCoords) {
    const url = `https://api.gemini.com/v1/places?from=${fromCoords[1]},${fromCoords[0]}&to=${toCoords[1]},${toCoords[0]}&key=${GEMINI_API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            famousPlaces = data.places || [];
            updatePlacesList(famousPlaces);
            addFamousPlacesMarkers(famousPlaces);
        })
        .catch(error => console.error("Error fetching famous places:", error));
}

function addMarker(coords, color) {
    new mapboxgl.Marker({ color })
        .setLngLat(coords)
        .addTo(map);
}

function addFamousPlacesMarkers(places) {
    places.forEach(place => {
        new mapboxgl.Marker({ color: 'green' })
            .setLngLat([place.lng, place.lat])
            .addTo(map);
    });
}

function updatePlacesList(places) {
    const placesList = document.getElementById('places-list');
    placesList.innerHTML = '';

    places.forEach(place => {
        const li = document.createElement('li');
        li.textContent = place.name || 'Unknown Place';
        placesList.appendChild(li);
    });
}