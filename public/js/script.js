function showToast(message, type = "info", delay = 0) {
  setTimeout(() => {
    // Play alert sound
    const audio = new Audio("../assets/livechat.mp3"); // Replace with your sound file path
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });

    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.cssText = `
            margin: 5px;
            padding: 10px;
            color: white;
            background-color: ${type === "error" ? "#f44336" : "#4CAF50"};
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            animation: fadeOut 3s forwards;
            position: fixed;
            top: 10px;
            left: 50%; 
            transform: translateX(-50%);
            z-index: 9999;
        `;

    // Ensure the container exists
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.style.cssText = `
                position: fixed;
                top: 10px;
                width: 100%;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                align-items: center;
                pointer-events: none;
            `;
      document.body.appendChild(container);
    }

    container.appendChild(toast);

    // Remove the toast after 3 seconds
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }, delay);
}

// Get user's location using Geolocation API
if (navigator.geolocation) {
  console.log("geolocation");
  navigator.geolocation.getCurrentPosition(function (position) {
    // Success callback - location obtained
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Received location:", latitude, longitude);

    getPlaceFromCoordinates(latitude, longitude, 5);
  });
} else {
  console.error("Geolocation is not supported by this browser.");
}



function getPlaceFromCoordinates(lat, lon,limit) {
console.log("hello weather api");
    APIkey='8599ead877ac2e0d95bf15c06d68fc42';
    const geocodeUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${APIkey}`;

    fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {

            console.log(data)
            const place = data[0].name;
            console.log('Place Name:', place);
            
            // callGeminiAPI(place);
            // Now that you have the place, call Gemini API
        })
        
        .catch(error => console.error('Error fetching place from coordinates:', error));

}

async function callGeminiAPI(place) {
    const API_KEY = "AIzaSyDNlcDPG9J6wAAukxFklXYRoFDLFObedfg"; // Replace with your API key

    // URL to interact with Google Gemini API
    const geminiAPIUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

    const prompt = `Tell me about the local cuisine, tourist attractions, hidden gems, and handicrafts/products famous around ${place}.`;

    try {
        const response = await fetch(geminiAPIUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`, // Ensure correct API key
            },
            body: JSON.stringify({
                prompt: prompt,
                temperature: 0.7,
                max_tokens: 150,
            }),
        });

        const data = await response.json();
        console.log('Gemini API Response:', data);

        // Show result as toast notification
        showToast(data.choices[0].text);
    } catch (error) {
        console.error('Error fetching data from Gemini API:', error);
        showToast("Failed to fetch information from Gemini API.", "error");
    }
}
