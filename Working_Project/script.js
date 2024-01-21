@@ -1,5 +1,5 @@
var clickCount = 0;
var validCodes = ['1234', '5678', '9012']; // Add your valid codes here
var validCodes = ['SONOMADELIVERYCODESYSTEMTEST', '', '']; // Add your valid codes here

document.getElementById("trackingForm").addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
@@ -10,9 +10,9 @@ document.getElementById("trackingForm").addEventListener('submit', function(even
    if (validCodes.includes(trackingCode)) {
        clickCount++;
        if (clickCount < 5) {
            deliveryStatus.textContent = 'Valid tracking code. Delivery status: In transit.';
            deliveryStatus.textContent = 'Delivery status: In transit.';
        } else {
            deliveryStatus.textContent = 'Valid tracking code. Delivery status: Delivered.';
            deliveryStatus.textContent = 'Delivery status: Delivered.';
        }
        deliveryStatus.classList.remove("hidden");
    } else {
