$(document).ready(function() {
/* --------------------------------------------------------------------------- */
/*  Background Animation
/* --------------------------------------------------------------------------- */

    (function (){
    var a = 0;
    function bgmove(){
        ++a;
        var bgimg = document.getElementById('bg-animation-clouds');
        bgimg.style.backgroundPosition = a + "px 0px";
    };
    setInterval(bgmove, 30); /* "30" ms - Animation Speed */
    })();

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
        'date': '2014-06-30 10:00:00',
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


