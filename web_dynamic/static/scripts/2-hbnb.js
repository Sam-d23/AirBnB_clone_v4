$(document).ready(function() {
    // Make a GET request to the API status endpoint
    $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
        // Check if the status is "OK"
        if (data.status === 'OK') {
            // Add the "available" class to the div#api_status
            $('#api_status').addClass('available');
        } else {
            // Remove the "available" class from the div#api_status
            $('#api_status').removeClass('available');
        }
    });
});
