$(document).ready(function () {
    var pc_game = false;

    $('#pc-game>.title').click(function () { 
        let height_content = ($('#pc-game>.content>a').height() + 31) * (Math.floor($('#pc-game>.content>a').length / 3) + 1);
        
        pc_game = !pc_game;

        $('#pc-game>.content').css({
            'transition' : 'height 0.7s',
            'height' : pc_game ? height_content : 0,
        });

        $('#pc-game>.title>i').css({
            'transition' : 'transform 0.7s',
            'transform' : pc_game ? 'rotate(180deg)' : 'rotate(0deg)',
        });
    });

    var mobile_game = false;

    $('#mobile-game>.title').click(function () { 
        let height_content = ($('#mobile-game>.content>a').height() + 31) * (Math.floor($('#mobile-game>.content>a').length / 3) + 1);
        
        mobile_game = !mobile_game;

        $('#mobile-game>.content').css({
            'transition' : 'height 0.7s',
            'height' : mobile_game ? height_content : 0,
        });

        $('#mobile-game>.title>i').css({
            'transition' : 'transform 0.7s',
            'transform' : mobile_game ? 'rotate(180deg)' : 'rotate(0deg)',
        });
    });

    var equipment = false;

    $('#equipment>.title').click(function () { 
        let height_content = ($('#equipment>.list>a').height() + 31) * $('#equipment>.list>a').length;

        equipment = !equipment;

        $('#equipment>.list').css({
            'transition' : 'height 0.7s',
            'height' : equipment ? height_content : 0,
        });

        $('#equipment>.title>i').css({
            'transition' : 'transform 0.7s',
            'transform' : equipment ? 'rotate(180deg)' : 'rotate(0deg)',
        });
    });

    var game = false;

    $('#game>.title').click(function () { 
        let height_content = ($('#game>.container>.list:first-child>.title').height() + 31) * $('#game>.container>.list>.title').length;
        game = !game;
        let pc_height_content = ($('#pc-game>.content>a').height() + 31) * (Math.floor($('#pc-game>.content>a').length / 3) + 1);
        if (pc_game)
            height_content += pc_height_content;

        if (!game)
        {
            $('#game>.container').css({
                'height' : height_content,
            });
        }

        setTimeout(() => {
            $('#game>.container').css({
                'transition' : 'height 0.7s',
                'height' : game ? height_content : '0',
            });
        }, 200);

        if (game)
        setTimeout(() => {
            $('#game>.container').css({
                'height' : 'auto',
            });
        }, 700);

        $('#game>.title>i').css({
            'transition' : 'transform 0.7s',
            'transform' : game ? 'rotate(180deg)' : 'rotate(0deg)',
        });
    });

    var menu = false;

    $('#btn-menu').click(function () { 
        menu = !menu;
        $('.menu-responsive').css({
            'transform' : 'translateX(' + (menu ? '0' : '-100') + '%)',
        });
    });

    // SLICK SLIDER

    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    let win_height = $('.slide').height();
    $('.item').css('height', win_height+"px");

    $(window).resize(function () { 
        let win_height = $('.slide').height();

        $('.item').css('height', win_height+"px");
    });
});