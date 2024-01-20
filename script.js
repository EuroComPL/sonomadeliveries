var clickCount = 0;
var validCodes = ['1234', '5678', '9012']; // Add your valid codes here

document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    var trackingCode = document.getElementById('trackingCode').value;
    var deliveryStatus = document.getElementById('deliveryStatus');

    if (validCodes.includes(trackingCode)) {
        clickCount++;
        if (clickCount < 5) {
            deliveryStatus.textContent = 'Valid tracking code. Delivery status: In transit.';
        } else {
            deliveryStatus.textContent = 'Valid tracking code. Delivery status: Delivered.';
        }
        deliveryStatus.classList.remove('hidden');
    } else {
        deliveryStatus.textContent = 'Invalid tracking code.';
        deliveryStatus.classList.remove('hidden');
    }
});
