var clickCount = 0;
var validCodes = ['SONOMADELIVERYCODESYSTEMTEST', '', '']; // Add your valid codes here

document.getElementById("trackingForm").addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    var trackingCode = document.getElementById("trackingCode").value;
    var deliveryStatus = document.getElementById("deliveryStatus");

    if (validCodes.includes(trackingCode)) {
        clickCount++;
        if (clickCount < 5) {
            deliveryStatus.textContent = 'Delivery status: In transit.';
        } else {
            deliveryStatus.textContent = 'Delivery status: Delivered.';
        }
        deliveryStatus.classList.remove("hidden");
    } else {
        deliveryStatus.textContent = 'Invalid tracking code.';
        deliveryStatus.classList.remove("hidden");
    }
});
