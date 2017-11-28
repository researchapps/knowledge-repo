(function($) {
"use strict";
    $(document).ready(function() {

        helpMe.menuToggler();
        helpMe.adjustHeight();
        SyntaxHighlighter.config.clipboardSwf = '"{{ site.baseurl }}/{{ "assets/js/clipboard.swf" }}';
        SyntaxHighlighter.all();

        // Target your .container, .wrapper, .post, etc.
        $(".video_wrapper").fitVids();
  
        $('.main-nav a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    var helpMe = {
        menuToggler: function() {
            $('#menuToggler').on('click', function(e) {
                e.preventDefault();
                $('#wrapper').toggleClass('toggled');
            });
        },
        adjustHeight: function() {
           var height = $(window).height();
           console.log("hello!");
           $("#section_01").css('height', height + "px")
        }
    }

})(jQuery);
