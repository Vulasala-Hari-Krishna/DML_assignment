$(document).ready(function() {
    var csrfToken = $('script[src$="main.js"]').attr('data-csrf-token');
    $('#like').click(function() {
        $.ajax({
            url: '/like/',
            type: 'POST',
            data: {
                    csrfmiddlewaretoken: csrfToken
            },
            dataType: 'json',
            success: function(response) {
                $('#like-count').text(response.likes);
            },
            error: function(xhr, status, error) {
                alert('An error occurred: ' + error);
            }
        });
    });
    
    $('#dislike').click(function() {
        $.ajax({
            url: '/dislike/',
            type: 'POST',
            data: {
                    csrfmiddlewaretoken: csrfToken
            },
            dataType: 'json',
            success: function(response) {
                $('#dislike-count').text(response.dislikes);
            },
            error: function(xhr, status, error) {
                alert('An error occurred: ' + error);
            }
        });
    });
});
