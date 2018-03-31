$(document).ready(function() {

    // betere naam is mobileScreen, want daar kijkt deze naar
    var mq = window.matchMedia( "(max-width: 720px)" );

    $('.menu li').each(function(i) {
        var page = $(this).attr('data-link');
        appendHtml(page);
    });

    function appendHtml(page) {
        $.ajax({
            url: page + '.html',
            success: function (data) { 
                $('body').append(data);
                showItem(page);
            },
            dataType: 'html'
        });
    }

    function showItem(item) {
        $('.page').removeClass('show').addClass('hidden');
        if(window.location.hash) {
            var currentItem = window.location.hash.replace('#', '');
            $('.page.' + currentItem).removeClass('hidden').addClass('show');
            $('body').removeClass().addClass(currentItem + '-active');
        } else {
            $('.page.item0').removeClass('hidden').addClass('show');
            $('body').removeClass().addClass('item0-active');
        }
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    $('.scrolltop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    $(document).on('click', '.homebutton', function() {
        window.location.hash = '';
        showItem(window.location.hash);
    });   

    // $('.backbutton').click(function(e) {
    //     $('.wrapper').removeClass('hide gone');
    //     $('.cv').removeClass('show');
    //     $('.card').show();
    // });

    // $('.menubutton').click(function(e) {
    //     $('.page').addClass('hidden').removeClass('show');
    //     $(this).removeClass('active');
    // });

    // $('.item0 .link').click(function(e) {
    //     e.preventDefault();
    //     var link = $(this).attr('data-link'),
    //         elm = $(this);

    //     $(this).parent().addClass('hide');
    //     setTimeout(function() {
    //         $(elm).parent().addClass('gone');
    //     }, 500);
    //     $('.'+link).addClass('show');
    // });

    $('.menu .link').click(function(e) {
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
        $('.menu .link').removeClass('active');
        $(this).addClass('active');
        if(mq.matches) {
            $('.menu li').hide();
            $('.menu img').css('margin-bottom', '240px');
        }
    });
});