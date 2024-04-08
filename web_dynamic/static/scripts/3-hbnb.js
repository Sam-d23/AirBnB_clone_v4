$(document).ready(function() {
    // Make a POST request to the places_search endpoint
    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function(data) {
            // Loop through the places and create article tags for each place
            $.each(data, function(index, place) {
                var article = $('<article></article>');
                // Add place information to the article tag (excluding the owner)
                article.html('<div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div></div>');
                article.append('<div class="information"><div class="max_guest">' + place.max_guest + ' Guest(s)</div><div class="number_rooms">' + place.number_rooms + ' Bedroom(s)</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom(s)</div></div>');
                article.append('<div class="description">' + place.description + '</div>');
                $('.places').append(article);
            });
        }
    });
});
