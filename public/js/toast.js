function showToast(message, type = 'info', delay = 0) {
   

    setTimeout(() => {
        // Play alert sound
        const audio = new Audio('../assets/livechat.mp3'); // Replace with your sound file path
        audio.play().catch((error) => {
            console.error('Audio playback failed:', error);
        });

        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            margin: 5px;
            padding: 10px;
            color: white;
            background-color: ${type === 'error' ? '#f44336' : '#4CAF50'};
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
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
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

// // Show notifications one after another with sound
// showToast('Welcome to Smart Travel!', 'info', 0); // First notification immediately
// showToast('Check out our latest packages!', 'info', 3000); // Second notification after 3 seconds
// showToast('Don’t miss our deals!', 'info', 6000); // Third notification after 6 seconds


async function fetchAndShowToasts() {
    try {
        console.log("hello")
      const response = await fetch('location.txt'); // Adjust path as needed
      const text = await response.text();

      console.log("testty=",response);
      // Parse JSON data from the file
      const results = JSON.parse(text);

      // Extract fields to display
      const cuisineDescription = results.cuisine.description;
      const popularDish = results.cuisine.popular_dishes[0];
      const firstAttraction = results.tourist_attractions.historical[0];
      const hiddenGem = results.hidden_gems.places[0];

      // Show the toasts with extracted data
     
      showToast('Namaskaragalu','success',0);
      showToast(cuisineDescription, 'info', 3000); // Immediately
      showToast(`Try this popular dish: ${popularDish}`, 'success', 6000); // After 3 seconds
      showToast(`Visit: ${firstAttraction}`, 'info', 9000); // After 6 seconds
      showToast(`Hidden gem: ${hiddenGem}`, 'warning', 12000); 
      showToast(`Visit Karnataka heritage festival exhibition on 24th November`, 'info', 15000); 
      // After 9 seconds
    } catch (error) {
      console.error('Error fetching or parsing results:', error);
      showToast('Failed to load data!', 'error', 0);
    }

  }

  fetchAndShowToasts();