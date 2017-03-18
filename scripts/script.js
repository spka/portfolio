$(document).ready(function() {

    /*  Door tijdsgebrek is de site / JS verre van geoptimaliseerd, 
    het werkt, maar de code zeker niet op productie niveau.
    ------------------------------------------------- */

    var mq = window.matchMedia( "(max-width: 720px)" );

    if(window.location.hash) {
        $('.'+window.location.hash.replace('#', '')).removeClass('hidden').addClass('show');
        if(mq.matches) {        
            $('.menubutton').addClass('active');
        }
    } else {
        if(!mq.matches) {
            $('.item0').removeClass('hidden').addClass('show');
        }
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
        $('.block').each(function() {
            // console.log($(this).isOnScreen(0.5, 0.5));
            if ($(this).isOnScreen(0.5, 0.5) == false) {
                $(this).addClass('fadedout');
                $(this).removeClass('fadedin');
            } else {
                $(this).addClass('fadedin');
                $(this).removeClass('fadedout');
            }
        });
    });

    $(".scrolltop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    $('.backbutton').click(function(e) {
        $('.wrapper').removeClass('hide gone');
        $('.cv').removeClass('show');
        $('.card').show();
    });

    $('.menubutton').click(function(e) {
        $('.page').addClass('hidden');
        $(this).removeClass('active');
        if(mq.matches) {
            $('.menu li').show();
            $('.menu img').css('margin-bottom', '10px');
        }
    });


    $('.item0 .link').click(function(e) {
        e.preventDefault();
        var link = $(this).attr('data-link'),
            elm = $(this);

        $(this).parent().addClass('hide');
        setTimeout(function() {
            $(elm).parent().addClass('gone');
        }, 500);
        $('.'+link).addClass('show');
    });

    $('.menu .link, .hoofdlogo').click(function(e) {
        e.preventDefault();
        var link = $(this).attr('data-link');
        // console.log(link);
        $('.page').removeClass('show').addClass('hidden');
        $('.'+link).removeClass('hidden').addClass('show');
        $('body').removeClass().addClass(link+'-active');
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        window.location.hash = link;
        $('.menubutton').addClass('active');
        if(mq.matches) {
            $('.menu li').hide();
            $('.menu img').css('margin-bottom', '240px');
        }
    });
});