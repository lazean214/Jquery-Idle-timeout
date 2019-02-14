$(document).ready(function () {

    var timeOut = 10000; //in miliseconds
    var idleState = false;
    var idleTimer = null;
    var countDownTimer = null;
    var url = "/logout";

    $('*').bind('mousemove click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick', function () {
        clearTimeout(idleTimer);
        clearInterval(countDownTimer);

        if (idleState == true) {
           // Do something here or do nothing
        }

        idleState = false;
        idleTimer = setTimeout(function () {

            /*
             *  IDLE = true
             *  Do Something here
             *
             */

            //Initiatte Count Down
            var timeleft = 10; //Set to 10 seconds timer
            countDownTimer = setInterval(function () {
                timeleft -= 1;
                $('#timer').html(timeleft);
                if (timeleft <= 0)
                    $(location).attr('href', url); // Redirect to URL
            }, 1000);

            idleState = true;
        }, timeOut);
    });
    $("body").trigger("mousemove");
});
