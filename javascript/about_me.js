let lastChecked = null; // Store the last checked radio

document.querySelectorAll('.accordion input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', function () {
        if (lastChecked === this) { // If the same radio is clicked again
            this.checked = false; // Uncheck it
            lastChecked = null; // Reset the last checked
        } else {
            lastChecked = this; // Store the new checked radio
        }
    });
});
