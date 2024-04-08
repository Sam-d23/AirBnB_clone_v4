$(document).ready(function() {
    var amenities = [];

    $('input[type="checkbox"]').change(function() {
        var amenity_id = $(this).data('id');
        var amenity_name = $(this).data('name');

        if ($(this).is(':checked')) {
            amenities.push(amenity_id);
        } else {
            var index = amenities.indexOf(amenity_id);
            if (index !== -1) {
                amenities.splice(index, 1);
            }
        }

        $('div#amenities h4').text('Amenities: ' + amenities.join(', '));
    });
});
