$(document).ready(function() {
/* --------------------------------------------------------------------------- */
/*  Background Photos
/* --------------------------------------------------------------------------- */

    $(function() {
        cbpBGSlideshow.init();
    });

/* --------------------------------------------------------------------------- */
/*  Parallax
/* --------------------------------------------------------------------------- */

    // Declare parallax on layers
    jQuery('.parallax-layer').parallax({
        mouseport: jQuery("#parallax-section")
    });

/* --------------------------------------------------------------------------- */
/*  In-Field Labels
/* --------------------------------------------------------------------------- */

    $(function(){
        $(".flabel").inFieldLabels();
    });

/* --------------------------------------------------------------------------- */
/*  Countdown
/* --------------------------------------------------------------------------- */

    $('#countdown').artRowCountdown({
        'date': '2015-07-04 07:30:00',
        'separator': ' ',
        'stop': function () {
            alert('stop');
        }
    });

/* --------------------------------------------------------------------------- */
/*  Subscribe
/* --------------------------------------------------------------------------- */

    (function () {
        $('.subscribe_field button').click(function () {
            var $form = $(this).closest('.subscribe_field'),
                email = $form.find('#email').val(),
                successFunction = function() {
                    $form.addClass('good');
                },
                errorFunction = function() {
                    $form.addClass('error');
                };

            $.post('subscribe.php', {'email': email}, function (data) {
                if (data.success === true) {
                    successFunction();
                } else {
                    errorFunction();
                }
            }, 'json')
                .fail(function() { errorFunction(); });
        });
    })();

})




