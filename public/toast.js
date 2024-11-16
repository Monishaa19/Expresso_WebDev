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

// Show notifications one after another with sound
showToast('Welcome to Smart Travel!', 'info', 0); // First notification immediately
showToast('Check out our latest packages!', 'info', 3000); // Second notification after 3 seconds
showToast('Don’t miss our deals!', 'info', 6000); // Third notification after 6 seconds
