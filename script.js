// Set the date we're counting down to (replace with your launch date)
const launchDate = new Date("January 31, 2024 12:30:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "We're live now!";
    }
}, 1000);
