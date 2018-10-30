$(function(){ 

    //tab
    // $('.tab li:first-child').parent('li').addClass('active').siblings().removeClass('active');
    $('.tab li:first-child').addClass('active').siblings().removeClass('active');
    $('.tab-content > div:first-child').show().siblings().hide();

    $('.tab a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        target = $(this).attr('href');
        $('.tab-content > div').not(target).hide();
        $(target).fadeIn(600);
    });

    //page
    $('.side_classLink ul ul').hide();
    $('.side_classLink ul li:first-child ul').show();
    $('.side_classLink>ul>li>a').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).parents('li').siblings().children('ul').slideUp();
    });

    //menu
    $('.header').after('<div class="mask"></div>');
    $('.cms-menu').click(function () {
        $('.menu>ul').slideToggle();
        $('.mask').toggleClass('open');
        $('body').toggleClass('open');
        return false;
    });

    //search
    $('.fa-search').click(function(){ $('.search').toggleClass('open'); });


    //max-text
    $(".news-box .content-text").each(function () {
            var maxwidth = 69;
            if ($(this).text().length > maxwidth) {
                $(this).text($(this).text().substring(0, maxwidth));
                $(this).html($(this).html() +'…');
            }
    }); 

    //customjs : tab group clone in tab element than change element type
    i=1;
    $(".tab-content>div").each(function(){
        var $hi = $(".tab-content>div:nth-child(" + i + ")")
        $hi.prepend($(".tab-group li:nth-child(" + i + ")").clone() );
        $hi.find('li').replaceWith(function () {
            return $('<div/>',
                {
                    html: this.innerHTML
                }
            );
        });
        i++;
    });

    //website under construction
    // $('header').before('<div class="garybg">Under Construction</div>');
    // $('header').before('<div class="fix-animate animated">Under Construction</div>');
    // $('header').before('<div class="fix-box"><div>Under Construction</div><div class="btn">Close</div></div>');
   
    // $('a[href="#"]').click(function(){ $('.fix-box').addClass('open'); $('.garybg').addClass('open');  });
    // $('.fix-box .btn').click(function(){ $('.fix-box').removeClass('open'); $('.garybg').removeClass('open'); });

    //hover
    // if ($(window).innerWidth() < 999) {
    //     $('.header .menu>ul>li').hover(function () {
    //         $(this).children('ul').stop().slideDown();
    //     }, function () {
    //         $(this).children('ul').stop().slideUp();
    //     });
    // };
    $('.header .menu>ul>li a+ul').after('<div class="plus"></div>');
    $('.plus').click(function () {
        $(this).prev('ul').stop().slideToggle();
    });
   
    $('.about-box').parents('#content').addClass('about');

    //gotop
    $('body').after('<div class="gotop"><a class="fa fa-arrow-up"></a></div>')
    $('.gotop').click(function () {
        $('body,html').stop().animate({ scrollTop: 0 });
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.gotop').fadeIn("fast");
        } else {
            $('.gotop').stop().fadeOut("fast");
        }
    });

});
