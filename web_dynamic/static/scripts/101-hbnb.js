$(document).ready(function() {
    $('#toggle_reviews').click(function() {
        if ($(this).text() === 'show') {
            // Fetch and display reviews
            $.ajax({
                type: 'GET',
                url: 'URL_TO_FETCH_REVIEWS_ENDPOINT',
                success: function(data) {
                    // Parse and display reviews
                    console.log('Reviews:', data);
                    // Change text to 'hide'
                    $('#toggle_reviews').text('hide');
                }
            });
        } else {
            // Remove reviews from the DOM
            $('.review').remove();
            // Change text to 'show'
            $('#toggle_reviews').text('show');
        }
    });
});
