$(document).ready(function() {
    // Listen for click event on the filter button
    $('#filter_button').click(function() {
        // Create a list to store the IDs of checked amenities
        var amenities = [];
        // Loop through all checkboxes and add the IDs of checked amenities to the list
        $('input[type="checkbox"]').each(function() {
            if (this.checked) {
                amenities.push($(this).data('id'));
            }
        });
        // Make a POST request to places_search with the list of checked amenities
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: amenities }),
            success: function(data) {
                // Handle the response data (update UI, etc.)
                console.log('Filtered places:', data);
            }
        });
    });
});
