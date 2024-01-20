document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    var trackingCode = document.getElementById('trackingCode').value;
    var deliveryStatus = document.getElementById('deliveryStatus');

    if (trackingCode === '1234') {
        deliveryStatus.textContent = 'Valid tracking code. Delivery status: In transit.';
        deliveryStatus.classList.remove('hidden');
    } else {
        deliveryStatus.textContent = 'Invalid tracking code.';
        deliveryStatus.classList.remove('hidden');
    }
});
