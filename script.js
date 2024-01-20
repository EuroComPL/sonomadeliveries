document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault();

 const trackingCode = "12345";

function validateTrackingCode(code) {
  if (code === trackingCode) {
    console.log("Tracking code is valid.");
  } else {
    console.log("Invalid tracking code.");
  }
}

validateTrackingCode("invalid_code"); // Output: Invalid tracking code.
validateTrackingCode(trackingCode); // Output: Tracking code is valid.

});
