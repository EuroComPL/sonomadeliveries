document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate a delivery status, replace this with your actual tracking logic
    const deliveryStatus = Math.random() < 0.5 ? 'Delivered' : 'In Transit';

    // Display the delivery status
    const deliveryStatusElement = document.getElementById('deliveryStatus');
    deliveryStatusElement.innerText = `Delivery Status: ${deliveryStatus}`;
    deliveryStatusElement.classList.remove('hidden');
});
 const trackingCode = "your_tracking_code_here";

function validateTrackingCode(code) {
  if (code === trackingCode) {
    console.log("Tracking code is valid.");
  } else {
    console.log("Invalid tracking code.");
  }
}

validateTrackingCode("invalid_code"); // Output: Invalid tracking code.
validateTrackingCode(trackingCode); // Output: Tracking code is valid.
