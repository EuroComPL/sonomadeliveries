document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate a delivery status, replace this with your actual tracking logic
    const deliveryStatus = Math.random() < 0.5 ? 'Delivered' : 'In Transit';

    // Display the delivery status
    const deliveryStatusElement = document.getElementById('deliveryStatus');
    deliveryStatusElement.innerText = `Delivery Status: ${deliveryStatus}`;
    deliveryStatusElement.classList.remove('hidden');
});
