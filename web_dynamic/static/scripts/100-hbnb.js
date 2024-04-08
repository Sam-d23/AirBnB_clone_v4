$(document).ready(function() {
    var checkedStates = {};
    var checkedCities = {};

    $('input[type="checkbox"]').change(function() {
        if ($(this).is(':checked')) {
            if ($(this).hasClass('state')) {
                checkedStates[$(this).data('id')] = $(this).data('name');
            } else if ($(this).hasClass('city')) {
                checkedCities[$(this).data('id')] = $(this).data('name');
            }
        } else {
            if ($(this).hasClass('state')) {
                delete checkedStates[$(this).data('id')];
            } else if ($(this).hasClass('city')) {
                delete checkedCities[$(this).data('id')];
            }
        }
        updateLocations();
    });

    $('#filter_button').click(function() {
        var amenities = [];
        // Collect checked amenities
        // Add selected states and cities to the filter
        var filter = {
            amenities: amenities,
            states: Object.keys(checkedStates),
            cities: Object.keys(checkedCities)
        };
        // Make a POST request to places_search with the list of checked amenities, states, and cities
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            contentType: 'application/json',
            data: JSON.stringify(filter),
            success: function(data) {
                // Handle the response data (update UI, etc.)
                console.log('Filtered places:', data);
            }
        });
    });

    function updateLocations() {
        // Update the h4 tag inside the div Locations with the list of States or Cities checked
        var locations = [];
        for (var stateId in checkedStates) {
            locations.push(checkedStates[stateId]);
        }
        for (var cityId in checkedCities) {
            locations.push(checkedCities[cityId]);
        }
        $('#locations').text(locations.join(', '));
    }
});
